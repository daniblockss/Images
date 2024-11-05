document.addEventListener('DOMContentLoaded', () => {
			            const innerGrid = document.getElementById('inner-grid');
			            const elementPicker = document.getElementById('elementPicker');
			            const clearButton = document.getElementById('clearButton');
			            const miniMapButton = document.getElementById('miniMapButton');
			            const pauseButton = document.getElementById('pauseButton');
			            const texttempo = document.getElementById('texttempo');
			            const gridSize = 25; // Tamanho da grade
			            const pixels = [];
			            const elements = {
    vazio: { type: 'vazio', backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAACAIAAAD5Z+niAAAAFElEQVR42mP8z8AARABBAA0zWf3qAAAAAElFTkSuQmCC')" },
    terra: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/download.png')" },
    grama: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/image.png')" },
    areia: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Sand_%2528texture%2529_JE5_BE3.png')" },
    agua: { type: 'liquido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/images%20(4).png')" },
    lava: { type: 'liquido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/images.jpeg')" },
    gelo: { type: 'liquido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Ice_%2528texture%2529_JE2_BE6.png')" },
    pedregulho: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Cobblestone_%2528texture%2529_JE5_BE3.png')" },
    musgoso: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Mossy_Cobblestone_%2528texture%2529_JE4_BE3.png')" },
    pedra: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Stone_%2528texture%2529_JE5_BE3.png')" },
    obsidiana: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Obsidian_%2528texture%2529_JE3_BE2.png')" },
    semente: { type: 'semente', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Oak_Sapling_%2528texture%2529_JE5_BE3.png')" },
    madeira: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Oak_Log_%2528texture%2529_JE4_BE2%20(1).png')" },
    folha: { type: 'folha', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/folha.png')" },
    folha2: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/folha%20vermelha%20.png')" },
    madeira2: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/madeira%20vermelha%20.jpg')" },
    magma: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/download%20(9).jpeg')" },
    fire: { type: 'queimada', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/ad795b97c92ec7bde5502f08ab8fce9d8595180e/fire-item.gif')" },
    fire2: { type: 'queimada', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/4e4db0f2ab104647810017eee32e6422730e4dca/InShot_20241031_223821004-ezgif.com-gif-maker.gif')" },
    queimada2: { color: 'aqua', type: 'queimada' },
    queimada: { color: "orange", type: 'queimada' },
    end_stone: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/End_Stone_(texture)_JE3_BE2.png')" },
    cacto: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Cactus_%2528side_texture%2529_JE4_BE2.png')" },
    jukebox: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Jukebox_%2528side_texture%2529_JE2_BE2.png')" },
    gramaneve: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/images%20(3).png')" },
    neve: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Snow_%2528texture%2529_JE2_BE2.png')" },
    tnt: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/TNT_%2528side_texture%2529_JE3_BE2.png')" },
    tnt2: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/3027ec8ac9c6768ace7e2e2a1aa0648f818ce22b/InShot_20241031_203033521-ezgif.com-video-to-gif-converter.gif')" },
    lamp_off: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Off_Redstone_Lamp_%2528texture%2529_JE3_BE2.png')" },
    lamp_on: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/On_Redstone_Lamp_%2528texture%2529_JE3_BE2.png')" },
    vaca: { type: 'vivo', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/refs/heads/main/cow%20.png')" },
    redstone_block: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Block_of_Redstone_%2528texture%2529_JE2_BE2.png')" },
    sheep: { type: 'vivo', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/sheep.png')" },
    chicken: { type: 'vivo', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/chicken.png')" },
    pig: { type: 'vivo', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/pig.png')" },
    redstone_ore: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Redstone_Ore_%2528texture%2529_JE4_BE3.png')" },
    portal: { type: 'portal', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/841666uly00b1.gif')" },
    diamond_ore: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Diamond_Ore_%2528texture%2529_JE5_BE5.png')" },
    gold_ore: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Gold_Ore_%2528texture%2529_JE7_BE4.png')" },
    iron_ore: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Iron_Ore_%2528texture%2529_JE6_BE4.png')" },
    emerald_ore: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Emerald_Ore_%2528texture%2529_JE4_BE3.png')" },
    coal_ore: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Coal_Ore_%2528texture%2529_JE5_BE4.png')" },
    bedrock: { type: 'inquebravel', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Bedrock_%2528texture%2529_JE2_BE2.png')" },
    plank: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Oak_Planks_%2528texture%2529_JE6_BE3.png')" },
    piston: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Piston_%2528side_texture%2529_JE2_BE2.png')" },
    pistonC: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Piston%20parte%20de%20cima%202.png')" },
    pistonB: { type: 'redstone', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/parte%20de%20baixo%202.png')" },
    viidro: { type: 'solido', backgroundImage: "url('https://raw.githubusercontent.com/daniblockss/Images/main/Glass_%2528texture%2529_JE4_BE2.png')" }
};


                                    let isDrawing = false;
			            let isPaused = false;
			            let animationId;

			            // Criar grid 25x25
			            for (let y = 0; y < gridSize; y++) {
			                for (let x = 0; x < gridSize; x++) {
			                    const pixel = document.createElement('div');
			                    pixel.classList.add('pixel');
			                    pixel.dataset.x = x;
			                    pixel.dataset.y = y;
			                    pixel.dataset.type = 'vazio';
			                    pixel.style.backgroundImage = "url('')";
			                    pixel.style.backgroundColor = 'transparent';

			                    // Eventos do mouse
			                    pixel.addEventListener('mousedown', (e) => {
			                        e.preventDefault(); // Prevenir comportamento padrão do mouse
			                        isDrawing = true;
			                        setElement(pixel); // Colocar o elemento no clique
			                    });
			                    pixel.addEventListener('mousemove', (e) => {
			                        if (isDrawing) {
			                            setElement(pixel); // Permitir desenhar ao arrastar
			                        }
			                    });
			                    pixel.addEventListener('mouseup', () => isDrawing = false); // Interromper desenho

			                    // Eventos de toque
			                    pixel.addEventListener('touchstart', (e) => {
			                        e.preventDefault(); // Prevenir comportamento padrão do toque
			                        isDrawing = true;
			                        setElement(pixel); // Colocar o elemento no toque
			                    });
			                    pixel.addEventListener('touchmove', (e) => {
			                        e.preventDefault(); // Prevenir comportamento padrão do toque
			                        const touch = e.touches[0];
			                        const target = document.elementFromPoint(touch.clientX, touch.clientY);
			                        if (target && target.classList.contains('pixel')) {
			                            setElement(target); // Permitir desenhar ao arrastar
			                        }
			                    });
			                    pixel.addEventListener('touchend', () => isDrawing = false); // Interromper desenho

			                    innerGrid.appendChild(pixel);
			                    pixels.push(pixel);
			                }
			            }

			            document.addEventListener('mouseup', () => isDrawing = false); // Parar de desenhar ao soltar o mouse
			            document.addEventListener('touchend', () => isDrawing = false); // Parar de desenhar ao soltar o toque

			            // Botão de limpar
			            clearButton.addEventListener('click', () => {
			                pixels.forEach(pixel => {
			                    pixel.dataset.type = 'vazio';
			                    pixel.style.backgroundColor = 'transparent';
			                    pixel.style.backgroundImage = "url('')";
			                });
			            });
			            // Função para gerar mini mapa
			            miniMapButton.addEventListener('click', generateMiniMap);

			            function swapPixels(pixelA, pixelB) {
			                const tempType = pixelA.dataset.type;
			                const tempColor = pixelA.style.backgroundImage;

			                pixelA.dataset.type = pixelB.dataset.type;
			                pixelA.style.backgroundImage = pixelB.style.backgroundImage;
			                pixelA.style.backgroundColor = pixelB.style.backgroundColor;

			                pixelB.dataset.type = tempType;
			                pixelB.style.backgroundImage = tempColor;
			                pixelB.style.backgroundColor = tempColor;
			            }

			            // Verifica crescimento de sementes
			    function checkSeedGrowth(pixel, x, y) {
			        const surroundingPixels = [
			            pixels[(y + 1) * gridSize + x],
			            pixels[(y - 1) * gridSize + x],
			            pixels[y * gridSize + (x + 1)],
			            pixels[y * gridSize + (x - 1)]
			        ];

			        // Se houver água ao redor, cresce árvore
			        if (surroundingPixels.some(p => p && p.dataset.type === 'agua')) {
			            setTimeout(() => {
			                growTree(pixel, x, y);
			            }, 1500); // Espera 1.5 segundos para crescer
			        }
			    }

			    function growTree(pixel, x, y) {
			                pixel.dataset.type = 'madeira';
			                pixel.style.backgroundImage = elements['madeira'].backgroundImage;

			                const treeHeight = Math.floor(Math.random() * 3) + 2;
			                for (let i = 1; i <= treeHeight; i++) {
			                    const treePixel = pixels[(y - i) * gridSize + x];
			                    if (treePixel && treePixel.dataset.type === 'vazio') {
			                        treePixel.dataset.type = 'madeira';
			                        treePixel.style.backgroundImage = elements['madeira'].backgroundImage;

			                        const leafPositions = [
			                            [x, y - i - 1],
			                            [x - 1, y - i],
			                            [x + 1, y - i],
			                            [x, y - i + 1]
			                        ];

			                        leafPositions.forEach(pos => {
			                            const leafX = pos[0];
			                            const leafY = pos[1];
			                            if (leafX >= 0 && leafX < gridSize && leafY >= 0 && leafY < gridSize) {
			                                const leafPixel = pixels[leafY * gridSize + leafX];
			                                if (leafPixel.dataset.type === 'vazio') {
			                                    leafPixel.dataset.type = 'folha';
			                                    leafPixel.style.backgroundImage = elements['folha'].backgroundImage;
			                                }
			                            }
			                        });
			                    }
			                }
			            }
			// Verifica crescimento de sementes
			    function checkSeedGrowth2(pixel, x, y) {
			        const surroundingPixels = [
			            pixels[(y + 1) * gridSize + x],
			            pixels[(y - 1) * gridSize + x],
			            pixels[y * gridSize + (x + 1)],
			            pixels[y * gridSize + (x - 1)]
			        ];

			        // Se houver água ao redor, cresce árvore
			        if (surroundingPixels.some(p => p && p.dataset.type === 'lava')) {
			            setTimeout(() => {
			                growTree2(pixel, x, y);
			            }, 1500); // Espera 1.5 segundos para crescer
			        }
			    }

			    function growTree2(pixel, x, y) {
			                pixel.dataset.type = 'madeira2';
			                pixel.style.backgroundImage = elements['madeira2'].backgroundImage;

			                const treeHeight = Math.floor(Math.random() * 3) + 2;
			                for (let i = 1; i <= treeHeight; i++) {
			                    const treePixel = pixels[(y - i) * gridSize + x];
			                    if (treePixel && treePixel.dataset.type === 'vazio') {
			                        treePixel.dataset.type = 'madeira2';
			                        treePixel.style.backgroundImage = elements['madeira2'].backgroundImage;

			                        const leafPositions = [
			                            [x, y - i - 1],
			                            [x - 1, y - i],
			                            [x + 1, y - i],
			                            [x, y - i + 1]
			                        ];

			                        leafPositions.forEach(pos => {
			                            const leafX = pos[0];
			                            const leafY = pos[1];
			                            if (leafX >= 0 && leafX < gridSize && leafY >= 0 && leafY < gridSize) {
			                                const leafPixel = pixels[leafY * gridSize + leafX];
			                                if (leafPixel.dataset.type === 'vazio') {
			                                    leafPixel.dataset.type = 'folha2';
			                                    leafPixel.style.backgroundImage = elements['folha2'].backgroundImage;
			                                }
			                            }
			                        });
			                    }
			                }
			           }

			           // Verifica se madeira ou folhas devem queimar
			function checkBurn(pixel) {
			    const x = parseInt(pixel.dataset.x);
			    const y = parseInt(pixel.dataset.y);

			    // Verifica se os índices não ultrapassam os limites do grid
			    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

			    const surroundingPixels = [
			        getPixel(x, y + 1),
			        getPixel(x, y - 1),
			        getPixel(x + 1, y),
			        getPixel(x - 1, y)
			    ];

			    // Se houver lava ao redor, queima madeira ou folha
			    if (surroundingPixels.some(p => p && p.dataset.type === 'lava')) {
			        setTimeout(() => {
			            pixel.dataset.type = 'queimada';
			            pixel.style.backgroundColor = elements['queimada'].color;
			            pixel.style.backgroundImage = "url('')";
			            // Queima a folha/madeira rapidamente e apaga após 200ms
			            setTimeout(() => {
			                pixel.dataset.type = 'vazio';
			                pixel.style.backgroundColor = '';
							pixel.style.backgroundImage = "url('')";
			            }, 200);
			        }, 100); // Delay de 100ms para iniciar a queima
			    }
			}
			function checkBurn2(pixel) {
			    const x = parseInt(pixel.dataset.x);
			    const y = parseInt(pixel.dataset.y);

			    // Verifica se os índices não ultrapassam os limites do grid
			    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

			    const surroundingPixels = [
			        getPixel(x, y + 1),
			        getPixel(x, y - 1),
			        getPixel(x + 1, y),
			        getPixel(x - 1, y)
			    ];

			    // Se houver lava ao redor, queima madeira ou folha
			    if (surroundingPixels.some(p => p && p.dataset.type === 'agua')) {
			        setTimeout(() => {
			            pixel.dataset.type = 'queimada2';
			            pixel.style.backgroundColor = elements['queimada2'].color;
			            pixel.style.backgroundImage = "url('')";
			            // Queima a folha/madeira rapidamente e apaga após 200ms
			            setTimeout(() => {
			                pixel.dataset.type = 'vazio';
			                pixel.style.backgroundColor = '';
							pixel.style.backgroundImage = "url('')";
			            }, 200);
			        }, 100); // Delay de 100ms para iniciar a queima
			    }
			}
// Função que será chamada para mover o pixel
function iniciarMovimento(pixel) {
    const type = pixel.dataset.type; // Obtém o tipo do pixel

    // Verifica se o tipo do pixel é um dos tipos permitidos
    if (type === 'vaca' || type === 'sheep' || type === 'pig' || type === 'chicken') {
        setTimeout(() => {
            vivo(pixel);
        }, Math.random() * 1500 + 300);
    }
}

function vivo(pixel) {
    // Verifica se o pixel ainda existe e não é vazio
    if (!pixel || !pixel.dataset || pixel.dataset.type === 'vazio') return;

    // Verifica se o tipo do pixel é um dos tipos permitidos
    const type = pixel.dataset.type;
    if (type !== 'vaca' && type !== 'sheep' && type !== 'pig' && type !== 'chicken') {
        return; // Sai da função se o tipo não for permitido
    }

    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);
    const gridSize = Math.sqrt(pixels.length);

    // Função auxiliar para pegar o pixel em coordenadas (x, y) e verificar se está dentro do grid
    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

    // Define uma direção aleatória (1 para direita, -1 para esquerda)
    const direction = Math.random() < 0.5 ? 1 : -1;

    // Obter o pixel à frente, acima, abaixo e acima do próximo pixel à frente
    const frontPixel = getPixel(x + direction, y);
    const abovePixel = getPixel(x, y - 1);
    const belowPixel = getPixel(x, y + 1);
    const aboveFrontPixel = getPixel(x + direction, y - 1);

    // Verifica se o pixel à frente, acima ou abaixo é do tipo 'lava'
    if ((frontPixel && frontPixel.dataset.type === 'lava') ||
        (abovePixel && abovePixel.dataset.type === 'lava') ||
        (belowPixel && belowPixel.dataset.type === 'lava')) {

        // Remove o pixel que está em movimento
        pixel.dataset.type = 'vazio'; // O pixel atual se torna vazio
        pixel.style.backgroundImage = elements['vazio'].backgroundImage; // Reseta a imagem do pixel atual
        return; // Sai da função
    }

    // Movimento aleatório com salto
    if (frontPixel && frontPixel.dataset.type === 'vazio') {
        // Se move para a direita
        if (direction === 1) {
            frontPixel.dataset.type = pixel.dataset.type;
            frontPixel.style.backgroundImage = pixel.style.backgroundImage; // Mantém a imagem normal
            frontPixel.style.transform = ''; // Remove a transformação
        } else { // Se move para a esquerda
            frontPixel.dataset.type = pixel.dataset.type;
            frontPixel.style.backgroundImage = pixel.style.backgroundImage; // Mantém a imagem normal
            frontPixel.style.transform = 'scaleX(-1)'; // Inverte a imagem horizontalmente
        }

        pixel.dataset.type = 'vazio';
        pixel.style.backgroundImage = elements['vazio'].backgroundImage;
    } else if (frontPixel && frontPixel.dataset.type !== 'vazio' && aboveFrontPixel && aboveFrontPixel.dataset.type === 'vazio') {
        // Se tiver obstáculo à frente e espaço acima, "pula" o obstáculo
        aboveFrontPixel.dataset.type = pixel.dataset.type;
        aboveFrontPixel.style.backgroundImage = pixel.style.backgroundImage;

        pixel.dataset.type = 'vazio';
        pixel.style.backgroundImage = elements['vazio'].backgroundImage;
    } else if (typeof SimulateGravity === 'function') {
        // Aplica a gravidade se não puder andar ou pular
        SimulateGravity(pixel);
    }
}

// Inicia o movimento apenas para pixels válidos na grid
const movingPixels = document.querySelectorAll('.moving-pixel'); // Certifique-se de que os pixels tenham a classe 'moving-pixel'
movingPixels.forEach(pixel => {
    iniciarMovimento(pixel); // Inicia o movimento para cada pixel
});
function ice(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);

    // Verifica se os índices não ultrapassam os limites do grid
    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

    // Impede o processo se o pixel já foi transformado em queimada ou derrevid
    if (pixel.dataset.type === 'vazio' || pixel.dataset.type === 'agua') {
        return;
    }

    const surroundingPixels = [
        getPixel(x, y + 1),
        getPixel(x, y - 1),
        getPixel(x + 1, y),
        getPixel(x - 1, y)
    ];

    // Se houver lava ao redor, queima madeira ou folha apenas uma vez
    if (surroundingPixels.some(p => p && p.dataset.type === 'vazio')) {
        // Verifica se já existe um processo de queima em andamento
        if (!pixel.dataset.burning) {
            pixel.dataset.burning = true; // Marca que está queimando para evitar repetição
            setTimeout(() => {
                pixel.dataset.type = 'vazio';
                pixel.style.backgroundColor = elements['vazio'].color;
				pixel.style.backgroundImage = "url('')";
                // Queima a folha/madeira rapidamente e apaga após 200ms
                setTimeout(() => {
                    pixel.dataset.type = 'agua';
                    pixel.style.backgroundImage = elements['agua'].backgroundImage;
                }, 0);
            }, 6500); // Delay de 6000ms para iniciar a queima
        }
    }
}
function magma(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);

    // Verifica se os índices não ultrapassam os limites do grid
    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

    const surroundingPixels = [
        getPixel(x + 1, y),
        getPixel(x - 1, y)
    ];

    // Se houver um pixel vazio ao redor, espera 1 segundo e transforma o bloco em magma
    if (surroundingPixels.some(p => p && p.dataset.type === 'lava')) {
        setTimeout(() => {
            pixel.dataset.type = 'pedra';
            pixel.style.backgroundImage = elements['pedra'].backgroundImage;
        }, 200); // Delay de 1 segundo antes de virar magma
    }
}
function lamp(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);

    // Função para pegar o pixel adjacente, verificando se está dentro dos limites
    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

    // Pixels ao redor para verificar
    const surroundingPixels = [
        getPixel(x + 1, y),
        getPixel(x - 1, y),
        getPixel(x, y + 1),
        getPixel(x, y - 1)
    ];

    // Se houver um bloco de redstone_block adjacente, ativa a lâmpada; senão, desativa
    if (surroundingPixels.some(p => p && p.dataset.type === 'redstone_block')) {
     setTimeout(() => {
        pixel.style.backgroundImage = elements['lamp_on'].backgroundImage;
     }, 50);
    } else {
        pixel.style.backgroundImage = elements['lamp_off'].backgroundImage;
    }
}

function piston(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);
    const gridSize = Math.sqrt(pixels.length); // Calcula o tamanho do grid

    // Função para pegar o pixel adjacente, verificando se está dentro dos limites
    const getPixel = (x, y) => {
        return (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;
    };

    // Pixels ao redor para verificar
    const surroundingPixels = [
        getPixel(x + 1, y),
        getPixel(x - 1, y),
        getPixel(x, y + 1)
    ];

    // Verifica se algum pixel adjacente é um 'redstone_block'
    const isActivated = surroundingPixels.some(p => p && p.dataset.type === 'redstone_block');

    if (isActivated) {
        // Ativar o pistão
        pixel.style.backgroundImage = elements['pistonB'].backgroundImage;

        // Verifica se o pistonC já existe; se não, cria
        if (!pixel.dataset.pistonCId) {
            const pistonC = document.createElement('div');
            pistonC.className = 'pixel pistonC';
            pistonC.dataset.type = 'pistonC'; // Define o tipo do elemento como sólido
            pistonC.style.width = '10px';
            pistonC.style.height = '10px';
            pistonC.style.backgroundImage = elements['pistonC'].backgroundImage;
            pistonC.style.position = 'absolute';
            pistonC.style.left = `${pixel.offsetLeft}px`;
            pistonC.style.top = `${pixel.offsetTop - pixel.offsetHeight}px`; // Posiciona acima do pistão
            pixel.parentElement.appendChild(pistonC);

            // Armazena o ID de pistonC para remoção posterior
            pixel.dataset.pistonCId = pistonC.id = `pistonC-${x}-${y}`;
        }
    } else {
        // Desativar o pistão imediatamente
        pixel.style.backgroundImage = elements['piston'].backgroundImage;

        // Remove o pixel 'pistonC' se ele existir
        if (pixel.dataset.pistonCId) {
            const pistonC = document.getElementById(pixel.dataset.pistonCId);
            if (pistonC) pistonC.remove();
            delete pixel.dataset.pistonCId;
        }
    }
}

function tnt(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);
    const gridSize = Math.sqrt(pixels.length);

    const getPixel = (x, y) => (y >= 0 && y < gridSize && x >= 0 && x < gridSize) ? pixels[y * gridSize + x] : null;

    const surroundingPixels = [
        getPixel(x + 1, y),
        getPixel(x - 1, y),
        getPixel(x, y + 1),
        getPixel(x, y - 1)
    ];

    // Função para mudar pixels em um raio específico para 'vazio'
    const removeArea = (cx, cy, radius) => {
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
                // Verifica a distância em linha reta (manhattan)
                if (Math.abs(dx) + Math.abs(dy) <= radius) {
                    const pixelToRemove = getPixel(cx + dx, cy + dy);
                    if (pixelToRemove) {
                        pixelToRemove.dataset.type = 'vazio'; // Define como 'vazio'
                        pixelToRemove.style.backgroundImage = elements['vazio'].backgroundImage; // Atualiza a imagem visual
                    }
                }
            }
        }
    };

    // Verifica se há redstone_block ou lava ao redor
    const hasObstacles = surroundingPixels.some(p => p && (p.dataset.type === 'redstone_block' || p.dataset.type === 'lava'));

    if (hasObstacles) {

        setTimeout(() => {
            pixel.style.backgroundImage = elements['tnt2'].backgroundImage; // Muda para tnt2
        }, 50);

        setTimeout(() => {
            pixel.dataset.type = 'vazio'; // Altera o tipo para vazio
            pixel.style.backgroundImage = elements['vazio'].backgroundImage; // Remove a TNT visualmente

            // Remove pixels em um raio de 3 camadas ao redor da TNT
            removeArea(x, y, 3); // Altere para 4 se preferir 4 camadas
        }, 3550); // Tempo antes da remoção da TNT e da explosão
    }
    
    if (surroundingPixels.some(p => p && p.dataset.type === 'lava')) {
        setTimeout(() => {
            const firePixel = getPixel(x, y - 1); // Obtém o pixel acima da TNT
            if (firePixel && firePixel.dataset.type === 'vazio') { // Verifica se o pixel acima está vazio
                firePixel.dataset.type = 'fire'; // Define o tipo como fogo
                firePixel.style.backgroundImage = elements['fire'].backgroundImage; // Define a imagem do fogo

                setTimeout(() => {
                    firePixel.dataset.type = 'vazio'; // Altera o tipo para vazio
                    firePixel.style.backgroundImage = elements['vazio'].backgroundImage; // Remove o fogo visualmente
                }, 2000);
            }
        }, 3000); // Aguarda 3 segundos para adicionar fogo
    }
}
function saveGrid() {
    const gridData = [];
    for (let i = 0; i < pixels.length; i++) {
        gridData.push(pixels[i].dataset.type || ''); // Salva o tipo do pixel
    }
    localStorage.setItem('gridData', JSON.stringify(gridData)); // Salva a
}

function loadGrid() {
    const gridData = JSON.parse(localStorage.getItem('gridData'));
    if (gridData) {
        for (let i = 0; i < pixels.length; i++) {
            const pixelType = gridData[i];
            pixels[i].dataset.type = pixelType; // Define o tipo do pixel
            if (pixelType) {
                pixels[i].style.backgroundImage = elements[pixelType].backgroundImage; // Restaura a imagem de fundo
            } else {
                pixels[i].style.backgroundImage = ''; // Limpa a imagem de fundo se não houver tipo
            }
        }
    }
}

const saveButton = document.createElement('button');
saveButton.textContent = 'Salvar Terreno';
saveButton.style.height = '30px'; // Define a altura do botão
saveButton.onclick = saveGrid;
document.body.appendChild(saveButton);

const loadButton = document.createElement('button');
loadButton.textContent = 'Carregar Terreno';
loadButton.style.height = '30px'; // Define a altura do botão
loadButton.onclick = loadGrid;
document.body.appendChild(loadButton);

// Cria o contêiner para os pixels
const pixelContainer = document.createElement('div');
pixelContainer.id = 'pixelContainer';
document.body.appendChild(pixelContainer);

// Estilos para os pixels e o contêiner
const style = document.createElement('style');
style.innerHTML = `
    #pixelContainer {
        display: grid;
        grid-template-columns: repeat(5, 20px); /* 5 colunas de 20px */
        gap: 2px; /* Espaçamento entre os pixels */
    }
    .pixel {
        width: 10px;
        height: 10px;
        display: inline-block;
        background-size: cover;
    }
`;
document.head.appendChild(style);

// Função para mostrar todos os pixels um a um
function displayPixels() {
    pixelContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar os novos pixels

    const keys = Object.keys(elements); // Obtém as chaves dos elementos
    let index = 0; // Índice para percorrer os elementos

    // Função para exibir o próximo pixel
    function showNextPixel() {
        if (index < keys.length) {
            const pixelDiv = document.createElement('div');
            pixelDiv.className = 'pixel';
            pixelDiv.style.backgroundImage = elements[keys[index]].backgroundImage;
            pixelDiv.style.backgroundColor = elements[keys[index]].color;
            pixelContainer.appendChild(pixelDiv);
            index++;
            // Chama a função após 0.1s para exibir o próximo pixel
            setTimeout(showNextPixel, 100); // Velocidade de exibição de 0.1 segundo por pixel
        } else {
            // Todos os pixels foram mostrados, agora removemos após 1s
            setTimeout(() => {
                pixelContainer.innerHTML = ''; // Remove os pixels
            }, 1000); // Espera 1 segundo
        }
    }

    // Chama a função para iniciar a exibição dos pixels
    showNextPixel();
}

// Chama a função automaticamente para iniciar sem botão
displayPixels();

			            function generateMiniMap() {
    clearButton.click(); // Limpa o grid antes de gerar o mini mapa

    let currentHeight = Math.floor(Math.random() * (8 - 2 + 1)) + 2; // Altura inicial da montanha
    let ascending = true; // Controla se a montanha está subindo ou descendo
    let flatTop = false; // Controla quando criar a linha reta no topo
    let flatLength = 0; // Controla o comprimento da parte reta
    const flatWidth = 3; // Largura da parte plana no topo

    let totalTrees = 0; // Contador para o total de árvores geradas
    const maxTotalTrees = 6; // Limite total de árvores no mapa

    // Contadores para os minérios
    const maxTotalOres = Math.floor(Math.random() * 6); // Limite total de minérios por tipo
    let totalDiamonds = 0;
    let totalEmeralds = 0;
    let totalGolds = 0;
    let totalIrons = 0;
    let totalCoals = 0;
    let totalRedstones = 0;

    // Conjunto para armazenar as posições dos minérios
    const orePositions = new Set();

    // Função para verificar se a posição está livre para colocar um minério
    function isPositionAvailable(x, y) {
        const adjacentPositions = [
            `${x},${y}`, // Posição atual
            `${x-1},${y}`, // Esquerda
            `${x+1},${y}`, // Direita
            `${x},${y-1}`, // Cima
            `${x},${y+1}`, // Abaixo
        ];
        return !adjacentPositions.some(pos => orePositions.has(pos));
    }

    // Função para determinar minério com base em chance
    function getRandomOre() {
        const chance = Math.random();
        if (chance < 0.02 && totalDiamonds < maxTotalOres) { // 2% de chance para diamante
            totalDiamonds++;
            return 'diamond_ore';
        } else if (chance < 0.02 && totalRedstones < maxTotalOres) { // Carvão
            totalRedstones++;
            return 'redstone_ore';
        } else if (chance < 0.10 && totalCoals < maxTotalOres) { // Carvão
            totalCoals++;
            return 'coal_ore';
        } else if (chance < 0.04 && totalEmeralds < maxTotalOres) { // 2% adicional para esmeralda
            totalEmeralds++;
            return 'emerald_ore';
        } else if (chance < 0.09 && totalGolds < maxTotalOres) { // 5% para ouro
            totalGolds++;
            return 'gold_ore';
        } else if (chance < 0.19 && totalIrons < maxTotalOres) { // 10% para ferro
            totalIrons++;
            return 'iron_ore';
        }
        return null; // Nenhum minério
    }

    // Criar terreno com montanhas no formato de escadinha
    for (let x = 0; x < gridSize; x++) {
        // Criar base de pedra
        for (let y = gridSize - 1; y >= gridSize - 5; y--) {
            const pixel = pixels[y * gridSize + x];
            pixel.dataset.type = 'pedra';
            pixel.style.backgroundImage = elements['pedra'].backgroundImage;

            // Tentar adicionar minério se o pixel for pedra na camada base
            const oreType = getRandomOre();
            if (oreType && isPositionAvailable(x, y)) {
                pixel.dataset.type = oreType;
                pixel.style.backgroundImage = elements[oreType].backgroundImage;
                orePositions.add(`${x},${y}`); // Adiciona a posição ao conjunto
            }
        }

        // Criar montanha de terra com pedra no interior
        for (let y = gridSize - 6; y >= gridSize - (6 + currentHeight); y--) {
            const pixel = pixels[y * gridSize + x];

            // Se for nas camadas mais baixas da montanha, adiciona pedra
            if (y >= gridSize - (6 + currentHeight - 3)) {
                pixel.dataset.type = 'pedra';
                pixel.style.backgroundImage = elements['pedra'].backgroundImage;

                // Tentar adicionar minério se o pixel for pedra
                const oreType = getRandomOre();
                if (oreType && isPositionAvailable(x, y)) {
                    pixel.dataset.type = oreType;
                    pixel.style.backgroundImage = elements[oreType].backgroundImage;
                    orePositions.add(`${x},${y}`); // Adiciona a posição ao conjunto
                }
            } else {
                // Acima da camada de pedra, adiciona terra
                pixel.dataset.type = 'terra';
                pixel.style.backgroundImage = elements['terra'].backgroundImage;
            }
        }

        // Colocar grama no topo da montanha
        if (currentHeight > 0) {
            for (let w = -Math.floor(flatWidth / 2); w <= Math.floor(flatWidth / 2); w++) {
                const topPixel = pixels[(gridSize - (6 + currentHeight)) * gridSize + (x + w)];
                if (topPixel) {
                    topPixel.dataset.type = 'grama';
                    topPixel.style.backgroundImage = elements['grama'].backgroundImage;
                }
            }
        }

        // Lógica para criar uma linha reta no topo (flat top)
        if (flatTop) {
            flatLength++;
            if (flatLength >= 5) {
                flatTop = false; // Depois de 5 blocos retos, volta a subir ou descer
                ascending = Math.random() < 0.5; // Decide aleatoriamente se vai subir ou descer
            }
        } else {
            // Lógica para subir ou descer a montanha em escadinha
            if (ascending) {
                currentHeight++; // Aumenta a altura da montanha
                if (Math.random() < 0.3) flatTop = true; // Chance de criar uma linha reta
                if (currentHeight >= 10) ascending = false; // Se atingir o pico, começa a descer
            } else {
                currentHeight--; // Diminui a altura da montanha
                if (Math.random() < 0.3) flatTop = true; // Chance de criar uma linha reta
                if (currentHeight <= 3) ascending = true; // Quando atinge a base, volta a subir
            }
        }

        // Adicionar árvores em locais aleatórios, mas não exceder o limite total
        if (totalTrees < maxTotalTrees) {
            // Tenta adicionar uma árvore
            const treeAdded = addTreeIfPossible(x, gridSize - (6 + currentHeight), totalTrees);
            totalTrees += treeAdded; // Atualiza o contador total de árvores
        }
        for (let x = 0; x < gridSize; x++) {
        const bedrockPixel = pixels[(gridSize - 1) * gridSize + x];
        bedrockPixel.dataset.type = 'bedrock';
        bedrockPixel.style.backgroundImage = elements['bedrock'].backgroundImage; // Adicione a imagem da bedrock
        }
    }
}
			function addTreeIfPossible(x, y, totalTrees) {
			    // Verifica se a posição está livre e se não há árvores adjacentes
			    if (pixels[y * gridSize + x].dataset.type === 'vazio' && totalTrees < 6) {
			        // Verifica se as posições adjacentes não têm árvores
			        const adjacentPositions = [
			            [x - 1, y],
			            [x + 1, y],
			            [x, y - 1],
			            [x, y + 1]
			        ];

			        const hasAdjacentTree = adjacentPositions.some(pos => {
			            const adjX = pos[0];
			            const adjY = pos[1];
			            return (adjX >= 0 && adjX < gridSize && adjY >= 0 && adjY < gridSize) &&
			                   (pixels[adjY * gridSize + adjX].dataset.type === 'madeira' ||
			                    pixels[adjY * gridSize + adjX].dataset.type === 'folha');
			        });

			        if (!hasAdjacentTree) {
			            // Adiciona a árvore
			            spawnTree(x, y);
			            return 1; // Retorna que uma árvore foi adicionada
			        }
			    }
			    return 0; // Nenhuma árvore foi adicionada
			}

			function spawnTree(x, y) {
			    const pixel = pixels[y * gridSize + x];
			    if (pixel && pixel.dataset.type === 'vazio') { // Verifica se o pixel está vazio
			        pixel.dataset.type = 'madeira';
			        pixel.style.backgroundImage = elements['madeira'].backgroundImage;

			        const treeHeight = Math.floor(Math.random() * 3) + 2; // Altura da árvore entre 2 e 4
			        for (let i = 1; i <= treeHeight; i++) {
			            const treePixel = pixels[(y - i) * gridSize + x];
			            if (treePixel && treePixel.dataset.type === 'vazio') {
			                treePixel.dataset.type = 'madeira';
			                treePixel.style.backgroundImage = elements['madeira'].backgroundImage;

			                const leafPositions = [
			                    [x, y - i - 1],
			                    [x - 1, y - i],
			                    [x + 1, y - i],
			                    [x, y - i + 1]
			                ];

			                leafPositions.forEach(pos => {
			                    const leafX = pos[0];
			                    const leafY = pos[1];
			                    if (leafX >= 0 && leafX < gridSize && leafY >= 0 && leafY < gridSize) {
			                        const leafPixel = pixels[leafY * gridSize + leafX];
			                        if (leafPixel.dataset.type === 'vazio') {
			                            leafPixel.dataset.type = 'folha';
			                            leafPixel.style.backgroundImage = elements['folha'].backgroundImage;
			                        }
			                    }
			                });
			            }
			        }
			    }
			}

			            // Função para definir o elemento escolhido no pixel
			            function setElement(pixel) {
			                const selectedElement = elementPicker.value; // Elemento escolhido no picker
			                pixel.dataset.type = selectedElement;
			                pixel.style.backgroundImage = elements[selectedElement].backgroundImage;
			                pixel.style.backgroundColor = 'transparent';
			            }
			            // Função de atualização contínua
			function update() {
    for (let i = 0; i < pixels.length; i++) {
        const pixel = pixels[i];
        const type = pixel.dataset.type;

        // Verifica se o bloco tem gravidade
        const hasGravity = ['terra', 'areia', 'grama', 'semente', 'tnt', 'neve', 'fire', 'fire2', 'vaca', 'sheep', 'pig', 'chicken'].includes(type);

        // Processa a física do pixel com base em seu tipo
        if (hasGravity) {
            simulateGravity(pixel);
        } else if (['agua', 'lava'].includes(type)) {
            simulateLiquid(pixel);
        } else if (['madeira2', 'folha2'].includes(type)) {
            checkBurn2(pixel); // Verifica se deve queimar
        } else if (['madeira', 'folha', 'plank'].includes(type)) {
            checkBurn(pixel); // Verifica se deve queimar
        } else if (type === 'gelo') {
            ice(pixel);
        }

        if (type === 'agua') {
            magma(pixel); // Verifica se deve queimar
        } if (type === 'lamp_off') {
            lamp(pixel);
        } if (type === 'tnt') {
            tnt(pixel);
        } if (type === 'vaca', 'sheep', 'pig', 'chicken') {
           setTimeout(() => {
            vivo(pixel);
           }, Math.random() * 1500 + 300);
        } if (type === 'piston') {
piston(pixel);
        }
    }

    // Requisição de animação para o próximo quadro
    animationId = requestAnimationFrame(update);
}

			update(); // Iniciar atualização

			// Adicionar funcionalidade de pausa
			pauseButton.addEventListener('click', () => {
			    isPaused = !isPaused;
			    if (isPaused) {
			        cancelAnimationFrame(animationId);
			        pauseButton.textContent = "▶️";
			        texttempo.textContent = "Tempo Parado";
			    } else {
			        animationId = requestAnimationFrame(update);
			        pauseButton.textContent = "⏸️";
			        texttempo.textContent = "Tempo Normal";
			    }
			});

			// Função para verificar se as coordenadas estão dentro do grid (dependendo de como a sua grid é feita)
			function dentroDoGrid(x, y) {
			    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
			}            // Função de simulação de gravidade
            function simulateGravity(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);

    setTimeout(() => {
        if (y < gridSize - 1) {
            const belowPixel = pixels[(y + 1) * gridSize + x];
            const abovePixel = y > 0 ? pixels[(y - 1) * gridSize + x] : null;

            // Transformações para a grama dependendo do bloco acima
            if (abovePixel && pixel.dataset.type === 'grama') {
                if (abovePixel.dataset.type !== 'vazio' && abovePixel.dataset.type !== 'neve') {
                    pixel.dataset.type = 'terra';
                    pixel.style.backgroundImage = elements['terra'].backgroundImage;
                } else if (abovePixel.dataset.type === 'neve') {
                    pixel.style.backgroundImage = elements['gramaneve'].backgroundImage;
                }
            }

            // Transformação de terra em grama se houver ar acima
            if (abovePixel && pixel.dataset.type === 'terra' && abovePixel.dataset.type === 'vazio') {
                pixel.dataset.type = 'grama';
                pixel.style.backgroundImage = elements['grama'].backgroundImage;
            }

            // Aplica a aparência de grama ao gramaneve quando há grama ou terra acima
            if (abovePixel && pixel.style.backgroundImage === elements['gramaneve'].backgroundImage && 
                (abovePixel.dataset.type === 'grama' || abovePixel.dataset.type === 'terra')) {
                pixel.style.backgroundImage = elements['grama'].backgroundImage;
            }

            // Lógica de gravidade para blocos que podem cair
            if (belowPixel && (belowPixel.dataset.type === 'vazio' || elements[belowPixel.dataset.type].type === 'liquido')) {
                swapPixelsWithBackground(pixel, belowPixel);
            }

            // Remover blocos sobrepostos como semente e fogo
            const typesToRemove = ['semente', 'fire', 'fire2'];
            if (typesToRemove.includes(pixel.dataset.type) && typesToRemove.includes(belowPixel.dataset.type)) {
                pixel.dataset.type = 'vazio';
                pixel.style.backgroundImage = elements['vazio'].backgroundImage;
            }
        }
    }, 0); // Delay de 0ms para simulação de gravidade
}
// Função para trocar os pixels e garantir que o background-image siga o pixel
function swapPixelsWithBackground(pixel1, pixel2) {
    // Troca os tipos
    const tempType = pixel1.dataset.type;
    pixel1.dataset.type = pixel2.dataset.type;
    pixel2.dataset.type = tempType;

    // Troca os background-images
    const tempBackground = pixel1.style.backgroundImage;
    pixel1.style.backgroundImage = pixel2.style.backgroundImage;
    pixel2.style.backgroundImage = tempBackground;
}
function simulateLiquid(pixel) {
    const x = parseInt(pixel.dataset.x);
    const y = parseInt(pixel.dataset.y);

    setTimeout(() => {
        if (y < gridSize - 1) {
            const belowPixel = pixels[(y + 1) * gridSize + x]; // Pixel abaixo

            // Interações entre lava e água (movimento para baixo)
            if ((pixel.dataset.type === 'lava' || pixel.dataset.type === 'derrevid') && belowPixel.dataset.type === 'agua') {
                belowPixel.dataset.type = 'pedregulho';
                belowPixel.style.backgroundImage = elements['pedregulho'].backgroundImage; // Define a imagem da pedra

                // Se o tipo do pixel for lava, ele vira vazio
                if (pixel.dataset.type === 'lava') {
                    pixel.dataset.type = 'vazio';
                    pixel.style.backgroundImage = elements['vazio'].backgroundImage; // Define a imagem do vazio
                } 
                if (pixel.dataset.type === 'derrevid') {
                    pixel.dataset.type = 'viidro';
                    pixel.style.backgroundImage = elements['viidro'].backgroundImage; // Define a imagem do vidro
                }

            } else if (pixel.dataset.type === 'agua' && belowPixel.dataset.type === 'lava') {
                pixel.dataset.type = 'vazio';
                pixel.style.backgroundImage = elements['vazio'].backgroundImage; // Define a imagem do vazio
                belowPixel.dataset.type = 'obsidiana';
                belowPixel.style.backgroundImage = elements['obsidiana'].backgroundImage; // Define a imagem da obsidiana

            } else {
                // Movimento de líquidos para baixo ou para os lados
                if (belowPixel.dataset.type === 'vazio') {
                    swapPixelsWithBackground(pixel, belowPixel); // Usando a função de troca correta
                } else {
                    const randomDirection = Math.random() < 0.5 ? -1 : 1;
                    const newX = x + randomDirection;
                    if (newX >= 0 && newX < gridSize) {
                        const sidePixel = pixels[y * gridSize + newX];
                        if (sidePixel.dataset.type === 'vazio') {
                            swapPixelsWithBackground(pixel, sidePixel); // Usando a função de troca correta
                        }
                    }
                }
            }
        }

        // Verifica se a semente deve crescer
        if (pixel.dataset.type === 'semente') {
            checkSeedGrowth(pixel, x, y);
            checkSeedGrowth2(pixel, x, y);
        }
    }, 0); // Delay de 100ms para simulação de líquidos
}

});