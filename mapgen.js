// mapgen.js - Procedural Map Generator for Polygonasion.io

// Map patterns
const MAP_PATTERNS = {
    CLASSIC: 'classic',
    CRISSCROSS: 'crisscross',
    HOLLOW_SQUARE: 'hollow_square',
    SLANTING_LINE: 'slanting_line'
};

// Current map pattern (can be changed daily)
let currentMapPattern = MAP_PATTERNS.CLASSIC;

// Map dimensions - Use the existing GameDefinitions system
const MAP_WIDTH = GameDefinitions.Constants.canvasWidth;
const MAP_HEIGHT = GameDefinitions.Constants.canvasHeight;

// Spawn area colors
const NEST_COLOR = 'rgba(64, 0, 167, 0.11)';
const CRASHER_SPAWN_COLOR = 'rgba(64, 0, 167, 0.11)';

// Initialize map system
function initMapSystem() {
    // Set map pattern based on day of week (for variety)
    setDailyMapPattern();
    
    // Generate the map
    generateMap();
}

// Set map pattern based on day of week
function setDailyMapPattern() {
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    switch (dayOfWeek % 4) {
        case 0:
            currentMapPattern = MAP_PATTERNS.CLASSIC;
            break;
        case 1:
            currentMapPattern = MAP_PATTERNS.CRISSCROSS;
            break;
        case 2:
            currentMapPattern = MAP_PATTERNS.HOLLOW_SQUARE;
            break;
        case 3:
            currentMapPattern = MAP_PATTERNS.SLANTING_LINE;
            break;
    }
    
    console.log(`Today's map rotation: ${currentMapPattern} on ${MAP_WIDTH}x${MAP_HEIGHT} map`);
}

// Generate map based on current pattern
function generateMap() {
    // Clear existing spawn areas
    nestSpawnAreas.length = 0;
    
    switch (currentMapPattern) {
        case MAP_PATTERNS.CLASSIC:
            generateClassicMap();
            break;  
        case MAP_PATTERNS.CRISSCROSS:
            generateCrisscrossMap();
            break;
        case MAP_PATTERNS.HOLLOW_SQUARE:
            generateHollowSquareMap();
            break;
        case MAP_PATTERNS.SLANTING_LINE:
            generateSlantingLineMap();
            break;
    }
    
    // Always generate the central crasher spawn area (using existing system)
    generateCrasherSpawnArea();
    
    // Mark static background as dirty to redraw
    staticBackgroundDirty = true;
}

// Classic Map Pattern - Scaled to current map size
function generateClassicMap() {
    const cornerSize = MAP_WIDTH * 0.23;  // Scale corner size to map
    
    // Top-left square
    nestSpawnAreas.push({
        x: 0, 
        y: 0, 
        width: cornerSize, 
        height: cornerSize, 
        color: NEST_COLOR
    });
    
    // Top-right square
    nestSpawnAreas.push({
        x: MAP_WIDTH - cornerSize, 
        y: 0, 
        width: cornerSize, 
        height: cornerSize, 
        color: NEST_COLOR
    });
    
    // Bottom-left square
    nestSpawnAreas.push({
        x: 0, 
        y: MAP_HEIGHT - cornerSize, 
        width: cornerSize, 
        height: cornerSize, 
        color: NEST_COLOR
    });
    
    // Bottom-right square
    nestSpawnAreas.push({
        x: MAP_WIDTH - cornerSize, 
        y: MAP_HEIGHT - cornerSize, 
        width: cornerSize, 
        height: cornerSize, 
        color: NEST_COLOR
    });
    
    // Add connecting rectangles for L-shape feel
    const connectorWidth = MAP_WIDTH * 0.07;
    nestSpawnAreas.push(
        // Top connector
        { x: cornerSize, y: 0, width: MAP_WIDTH - 2 * cornerSize, height: connectorWidth, color: NEST_COLOR },
        // Bottom connector
        { x: cornerSize, y: MAP_HEIGHT - connectorWidth, width: MAP_WIDTH - 2 * cornerSize, height: connectorWidth, color: NEST_COLOR },
        // Left connector
        { x: 0, y: cornerSize, width: connectorWidth, height: MAP_HEIGHT - 2 * cornerSize, color: NEST_COLOR },
        // Right connector
        { x: MAP_WIDTH - connectorWidth, y: cornerSize, width: connectorWidth, height: MAP_HEIGHT - 2 * cornerSize, color: NEST_COLOR }
    );
}

// Crisscross Map Pattern - Scaled to current map size
function generateCrisscrossMap() {
    const squareSize = MAP_WIDTH * 0.11;
    const crossLength = MAP_WIDTH * 0.7;
    
    // Create X pattern using squares along diagonals
    const steps = Math.floor(MAP_WIDTH / 1000); // Scale steps with map size
    
    // Top-left to bottom-right diagonal
    for (let i = 0; i < steps; i++) {
        const progress = i / (steps - 1);
        const x = (MAP_WIDTH - crossLength) / 2 + progress * crossLength - squareSize / 2;
        const y = (MAP_HEIGHT - crossLength) / 2 + progress * crossLength - squareSize / 2;
        
        nestSpawnAreas.push({
            x: x,
            y: y,
            width: squareSize,
            height: squareSize,
            color: NEST_COLOR
        });
    }
    
    // Top-right to bottom-left diagonal
    for (let i = 0; i < steps; i++) {
        const progress = i / (steps - 1);
        const x = (MAP_WIDTH + crossLength) / 2 - progress * crossLength - squareSize / 2;
        const y = (MAP_HEIGHT - crossLength) / 2 + progress * crossLength - squareSize / 2;
        
        nestSpawnAreas.push({
            x: x,
            y: y,
            width: squareSize,
            height: squareSize,
            color: NEST_COLOR
        });
    }
    
    // Add corner reinforcement squares
    const cornerSize = MAP_WIDTH * 0.16;
    nestSpawnAreas.push(
        // Top-left corner
        { x: 0, y: 0, width: cornerSize, height: cornerSize, color: NEST_COLOR },
        // Top-right corner
        { x: MAP_WIDTH - cornerSize, y: 0, width: cornerSize, height: cornerSize, color: NEST_COLOR },
        // Bottom-left corner
        { x: 0, y: MAP_HEIGHT - cornerSize, width: cornerSize, height: cornerSize, color: NEST_COLOR },
        // Bottom-right corner
        { x: MAP_WIDTH - cornerSize, y: MAP_HEIGHT - cornerSize, width: cornerSize, height: cornerSize, color: NEST_COLOR }
    );
}

//HOLLOW SQUARE Map Pattern - Scaled to current map size
function generateHollowSquareMap() {
    const outerSize = Math.min(canvas.width, canvas.height) * 0.7;
    const thickness = outerSize * 0.085;

    const outerX = (canvas.width - outerSize) / 2;
    const outerY = (canvas.height - outerSize) / 2;

    const color = 'rgba(64, 0, 167, 0.11)';

    // Top wall
    nestSpawnAreas.push({
        x: outerX,
        y: outerY,
        width: outerSize,
        height: thickness,
        color
    });

    // Bottom wall
    nestSpawnAreas.push({
        x: outerX,
        y: outerY + outerSize - thickness,
        width: outerSize,
        height: thickness,
        color
    });

    // Left wall
    nestSpawnAreas.push({
        x: outerX,
        y: outerY + thickness,
        width: thickness,
        height: outerSize - thickness * 2,
        color
    });

    // Right wall
    nestSpawnAreas.push({
        x: outerX + outerSize - thickness,
        y: outerY + thickness,
        width: thickness,
        height: outerSize - thickness * 2,
        color
    });
}

// Slanting Line Map Pattern - Scaled to current map size
function generateSlantingLineMap() {
    const squareSize = MAP_WIDTH * 0.09;
    const lineSpacing = MAP_WIDTH * 0.11;
    const squaresPerLine = Math.floor(MAP_WIDTH / 1500); // Scale with map size
    
    // Center line
    for (let i = 0; i < squaresPerLine; i++) {
        const offset = (i - (squaresPerLine - 1) / 2) * squareSize * 1.5;
        nestSpawnAreas.push({
            x: MAP_WIDTH / 2 - squareSize / 2 + offset,
            y: MAP_HEIGHT / 2 - squareSize / 2,
            width: squareSize,
            height: squareSize,
            color: NEST_COLOR
        });
    }
    
    // Top line (staggered)
    for (let i = 0; i < squaresPerLine; i++) {
        const offset = (i - (squaresPerLine - 1) / 2) * squareSize * 1.5;
        nestSpawnAreas.push({
            x: MAP_WIDTH / 2 - squareSize / 2 + offset + squareSize * 0.8,
            y: MAP_HEIGHT / 2 - squareSize / 2 - lineSpacing,
            width: squareSize,
            height: squareSize,
            color: NEST_COLOR
        });
    }
    
    // Bottom line (staggered)
    for (let i = 0; i < squaresPerLine; i++) {
        const offset = (i - (squaresPerLine - 1) / 2) * squareSize * 1.5;
        nestSpawnAreas.push({
            x: MAP_WIDTH / 2 - squareSize / 2 + offset - squareSize * 0.8,
            y: MAP_HEIGHT / 2 - squareSize / 2 + lineSpacing,
            width: squareSize,
            height: squareSize,
            color: NEST_COLOR
        });
    }
    
    // Corner safety zones
    const safetySize = MAP_WIDTH * 0.18;
    nestSpawnAreas.push(
        // Top-left safety
        { x: MAP_WIDTH * 0.05, y: MAP_HEIGHT * 0.05, width: safetySize, height: safetySize, color: NEST_COLOR },
        // Top-right safety  
        { x: MAP_WIDTH - safetySize - MAP_WIDTH * 0.05, y: MAP_HEIGHT * 0.05, width: safetySize, height: safetySize, color: 'rgba(139, 0, 139, 0.2)' },
        // Bottom-left safety
        { x: MAP_WIDTH * 0.05, y: MAP_HEIGHT - safetySize - MAP_HEIGHT * 0.05, width: safetySize, height: safetySize, color: 'rgba(139, 0, 139, 0.2)' },
        // Bottom-right safety
        { x: MAP_WIDTH - safetySize - MAP_WIDTH * 0.05, y: MAP_HEIGHT - safetySize - MAP_HEIGHT * 0.05, width: safetySize, height: safetySize, color: 'rgba(139, 0, 139, 0.2)' }
    );
}

// Generate central crasher spawn area - Use existing system
function generateCrasherSpawnArea() {
    // Let the existing game.js handle the crasher spawn area
    // This function is kept for consistency but doesn't modify the existing area
    console.log("Using existing crasher spawn area system");
}

// Enhanced drawing functions for map patterns
function drawNestSpawnAreasToOffscreen() {
    nestSpawnAreas.forEach(nest => {
        offscreenCtx.fillStyle = nest.color;
        offscreenCtx.fillRect(nest.x, nest.y, nest.width, nest.height);
        
        // Add subtle border to squares
        offscreenCtx.strokeStyle = 'rgba(100, 0, 100, 0.3)';
        offscreenCtx.lineWidth = 2;
        offscreenCtx.strokeRect(nest.x, nest.y, nest.width, nest.height);
    });
}

// Update the existing drawNestSpawnAreas function
function drawNestSpawnAreas() {
    ctx.save();
    ctx.translate(-view.x, -view.y);
    
    nestSpawnAreas.forEach(nest => {
        ctx.fillStyle = nest.color;
        ctx.fillRect(nest.x, nest.y, nest.width, nest.height);
        
        // Add subtle border to squares
        ctx.strokeStyle = 'rgba(100, 0, 100, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(nest.x, nest.y, nest.width, nest.height);
    });
    
    ctx.restore();
}

// Get current map pattern name for UI
function getCurrentMapPatternName() {
    switch (currentMapPattern) {
        case MAP_PATTERNS.CLASSIC: return 'Classic Fortress';
        case MAP_PATTERNS.CRISSCROSS: return 'Crisscross Assault';
        case MAP_PATTERNS.HOLLOW_SQUARE: return 'Hollow Square';
        case MAP_PATTERNS.SLANTING_LINE: return 'Slanting Lines';
        default: return 'Unknown';
    }
}

// EXPORT IN ITHER FILES
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MAP_PATTERNS,
        currentMapPattern,
        initMapSystem,
        generateMap,
        getCurrentMapPatternName
    };
}