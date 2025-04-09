<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag and Drop Exercise</title>
    <style>
        .container {
            display: flex;
            gap: 20px;
            margin: 20px;
        }
    
        
        .drop-zone {
            width: 200px;
            min-height: 300px;
            border: 2px dashed #ccc;
            padding: 10px;
            background-color: #f9f9f9;
        }
        
        .text-block {
            padding: 10px;
            margin: 5px 0;
            background-color: #e0e0e0;
            cursor: move;
        }
        
        .text-block.dragging {
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="left-zone" class="drop-zone">
            <div class="text-block" draggable="true">Text 1</div>
            <div class="text-block" draggable="true">Text 2</div>
            <div class="text-block" draggable="true">Text 3</div>
        </div>
        
        <div id="right-zone" class="drop-zone"></div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const textBlocks = document.querySelectorAll('.text-block');
            const dropZones = document.querySelectorAll('.drop-zone');
            
            // Add event listeners for draggable elements
            textBlocks.forEach(block => {
                block.addEventListener('dragstart', handleDragStart);
                block.addEventListener('dragend', handleDragEnd);
            });
            
            // Add event listeners for drop zones
            dropZones.forEach(zone => {
                zone.addEventListener('dragover', handleDragOver);
                zone.addEventListener('dragenter', handleDragEnter);
                zone.addEventListener('dragleave', handleDragLeave);
                zone.addEventListener('drop', handleDrop);
            });
            
            function handleDragStart(e) {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.textContent);
                e.dataTransfer.effectAllowed = 'move';
            }
            
            function handleDragEnd(e) {
                e.target.classList.remove('dragging');
            }
            
            function handleDragOver(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            }
            
            function handleDragEnter(e) {
                e.preventDefault();
                if (e.target.classList.contains('drop-zone')) {
                    e.target.style.backgroundColor = '#e6e6e6';
                }
            }
            
            function handleDragLeave(e) {
                if (e.target.classList.contains('drop-zone')) {
                    e.target.style.backgroundColor = '#f9f9f9';
                }
            }
            
            function handleDrop(e) {
                e.preventDefault();
                e.target.style.backgroundColor = '#f9f9f9';
                
                const data = e.dataTransfer.getData('text/plain');
                const draggingBlock = document.querySelector('.text-block.dragging');
                
                if (draggingBlock) {
                    // If element exists, just move it
                    e.target.appendChild(draggingBlock);
                } else {
                    // If dragging from another source (not implemented here)
                    const newBlock = document.createElement('div');
                    newBlock.className = 'text-block';
                    newBlock.setAttribute('draggable', 'true');
                    newBlock.textContent = data;
                    
                    newBlock.addEventListener('dragstart', handleDragStart);
                    newBlock.addEventListener('dragend', handleDragEnd);
                    
                    e.target.appendChild(newBlock);
                }
            }
        });
    </script>
</body>
</html>
