import fs from 'fs';
import path from 'path';

// Library
import generateSVG from '../lib/generate-svg';

it('Should namespace class', async () => {
    const output = fs.readFileSync(path.resolve(__dirname, 'output/svg/css-namespace.svg'), 'utf-8').trim();
    const svg = await generateSVG([
        path.resolve(__dirname, 'input/svg/css-namespace.svg')
    ], {
        output: {
            svgo: false
        },
        sprite: {
            generate: {
                symbol: true
            }
        }
    });

    expect(svg).toBe(output);
});

it('Should namespace multiple classes', async () => {
    const output = fs.readFileSync(path.resolve(__dirname, 'output/svg/css-namespace-multiple-classes.svg'), 'utf-8').trim();
    const svg = await generateSVG([
        path.resolve(__dirname, 'input/svg/css-namespace-multiple-classes.svg')
    ], {
        output: {
            svgo: false
        },
        sprite: {
            generate: {
                symbol: true
            }
        }
    });

    expect(svg).toBe(output);
});

it('Should namespace multiple files', async () => {
    const output = fs.readFileSync(path.resolve(__dirname, 'output/svg/css-namespace-multiple-files.svg'), 'utf-8').trim();
    const svg = await generateSVG([
        path.resolve(__dirname, 'input/svg/css-namespace-multiple-files-1.svg'),
        path.resolve(__dirname, 'input/svg/css-namespace-multiple-files-2.svg')
    ], {
        output: {
            svgo: false
        },
        sprite: {
            generate: {
                symbol: true
            }
        }
    });

    expect(svg).toBe(output);
});
