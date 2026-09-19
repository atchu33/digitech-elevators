import { execSync } from 'child_process';
import ghpages from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('Building for GitHub Pages (/digitech-elevators/)...');
process.env.DEPLOY_TARGET = 'gh-pages';

try {
  execSync('npx vite build --base=/digitech-elevators/ && node scripts/generate-routes.js', {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, DEPLOY_TARGET: 'gh-pages' }
  });

  console.log('Publishing dist to gh-pages branch...');
  ghpages.publish(distDir, {
    branch: 'gh-pages',
    repo: 'https://github.com/atchu33/digitech-elevators.git',
    message: 'Deploy compiled production build to gh-pages',
    dotfiles: true
  }, (err) => {
    if (err) {
      console.error('Error deploying to gh-pages:', err);
      process.exit(1);
    }
    console.log('Successfully deployed compiled build to gh-pages branch!');
  });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
