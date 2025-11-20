// 3D Snake Game with Three.js

let scene, camera, renderer;
let snake = [];
let food;
let score = 0;
let playerName = "";
let direction = "right";
let nextDirection = "right";
let gameInterval;
let gameRunning = false;
const gridSize = 20;
const boardSize = 40; // 40x40 grid - larger play area
const stepTime = 120; // ms - slightly faster

// Helper Functions (defined first)
function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    const viewSize = 25;
    camera.left = -viewSize * aspect;
    camera.right = viewSize * aspect;
    camera.top = viewSize;
    camera.bottom = -viewSize;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function onKeyDown(event) {
    const key = event.keyCode;
    if (key == 37 && direction != "right") nextDirection = "left";
    else if (key == 38 && direction != "down") nextDirection = "up";
    else if (key == 39 && direction != "left") nextDirection = "right";
    else if (key == 40 && direction != "up") nextDirection = "down";
}

function changeDirection(newDir) {
    if (newDir === "left" && direction !== "right") nextDirection = "left";
    else if (newDir === "up" && direction !== "down") nextDirection = "up";
    else if (newDir === "right" && direction !== "left") nextDirection = "right";
    else if (newDir === "down" && direction !== "up") nextDirection = "down";
}

// Touch/Swipe Support
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    const minSwipeDistance = 30;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) changeDirection("right");
            else changeDirection("left");
        }
    } else {
        // Vertical swipe
        if (Math.abs(deltaY) > minSwipeDistance) {
            if (deltaY > 0) changeDirection("down");
            else changeDirection("up");
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function gameOver() {
    gameRunning = false;
    clearInterval(gameInterval);
    alert("Game Over! Score: " + score);
    
    // Submit score
    document.querySelector('.hidden-score-wrapper .player_name').value = playerName; 
    document.querySelector('.hidden-score-wrapper .player_score').value = score;
    document.getElementById("game-score").submit();
    
    // Show menu again
    document.querySelector('.form-wrapper').style.display = 'block';
    document.querySelector('.game-info-wrapper').classList.remove('visible');
}

// Initialize Game
function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a); // Dark background as fallback
    
    // Camera - Orthographic for full-screen top-down view
    const aspect = window.innerWidth / window.innerHeight;
    const viewSize = 25; // Adjust this to zoom in/out
    camera = new THREE.OrthographicCamera(
        -viewSize * aspect, viewSize * aspect,
        viewSize, -viewSize,
        0.1, 1000
    );
    camera.position.set(0, 0, 50); // Directly above, looking down
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Background - load async, with error handling
    const loader = new THREE.TextureLoader();
    loader.load(
        'img/background.jpg',
        function(texture) {
            scene.background = texture;
            console.log("Background loaded successfully");
        },
        undefined,
        function(error) {
            console.warn("Background image failed to load (CORS issue on file://), using solid color instead");
        }
    );

    // Board Boundary (Visual)
    const geometry = new THREE.BoxGeometry(boardSize + 1, boardSize + 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const board = new THREE.Mesh(geometry, material);
    board.position.z = -0.5;
    scene.add(board);

    // Event Listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('keydown', onKeyDown, false);
    
    // Touch Event Listeners for swipe gestures
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    
    // Mobile Control Buttons
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const dir = this.getAttribute('data-direction');
            changeDirection(dir);
        });
    });

    // Start Button - optional name, auto-start on page load
    document.getElementById('player-name-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.querySelector('.first_name');
        playerName = nameInput.value.trim() || "Player";
        startGame();
    });
    
    // Auto-start game after init (skip name form)
    setTimeout(() => {
        playerName = "Player";
        document.querySelector('.form-wrapper').style.display = 'none';
        startGame();
    }, 100);
}

function startGame() {
    // UI Updates
    document.querySelector('.form-wrapper').style.display = 'none';
    document.querySelector('.game-info-wrapper').classList.add('visible');
    document.querySelector('.pname-name').textContent = playerName;
    document.querySelector('.pscore-score').textContent = '0';

    // Reset Game State
    score = 0;
    direction = "right";
    nextDirection = "right";
    gameRunning = true;

    // Clear existing snake/food
    snake.forEach(part => scene.remove(part.mesh));
    snake = [];
    if (food) scene.remove(food.mesh);

    // Create Snake Head
    createSnakePart(0, 0);

    // Create Food
    spawnFood();

    // Game Loop
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, stepTime);
}

function createSnakePart(x, y) {
    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, emissive: 0x003300 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    snake.push({ x: x, y: y, mesh: mesh });
}

function spawnFood() {
    let validPosition = false;
    let x, y;
    while (!validPosition) {
        x = Math.floor(Math.random() * boardSize) - boardSize / 2;
        y = Math.floor(Math.random() * boardSize) - boardSize / 2;
        // Adjust to integer coordinates centered
        x = Math.round(x);
        y = Math.round(y);
        
        validPosition = true;
        for (let part of snake) {
            if (part.x === x && part.y === y) {
                validPosition = false;
                break;
            }
        }
    }

    if (food) scene.remove(food.mesh);
    
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000, emissive: 0x550000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, 0);
    scene.add(mesh);
    food = { x: x, y: y, mesh: mesh };
}

function gameLoop() {
    if (!gameRunning) return;

    direction = nextDirection;

    let head = snake[0];
    let newX = head.x;
    let newY = head.y;

    if (direction === "right") newX += 1;
    if (direction === "left") newX -= 1;
    if (direction === "up") newY += 1;
    if (direction === "down") newY -= 1;

    // Collision with Walls (Boundary is roughly -10 to 10)
    const limit = boardSize / 2;
    if (newX >= limit || newX <= -limit || newY >= limit || newY <= -limit) {
        gameOver();
        return;
    }

    // Collision with Self
    for (let part of snake) {
        if (part.x === newX && part.y === newY) {
            gameOver();
            return;
        }
    }

    // Add new head mesh
    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, emissive: 0x003300 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(newX, newY, 0);
    scene.add(mesh);
    
    const newHead = { x: newX, y: newY, mesh: mesh };
    snake.unshift(newHead); // Add to front

    // Check Food
    if (Math.abs(newX - food.x) < 0.1 && Math.abs(newY - food.y) < 0.1) {
        score += 100;
        document.querySelector('.pscore-score').textContent = score;
        spawnFood();
    } else {
        // Remove tail
        const tail = snake.pop();
        scene.remove(tail.mesh);
        tail.mesh.geometry.dispose();
        tail.mesh.material.dispose();
    }
}

// Start
window.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE === 'undefined') {
        alert("Error: Three.js library not loaded. Please check your internet connection or file paths.");
        return;
    }
    try {
        init();
        animate();
        console.log("Game initialized successfully");
    } catch (error) {
        console.error("Initialization error:", error);
        alert("An error occurred while initializing the game: " + error.message);
    }
});
