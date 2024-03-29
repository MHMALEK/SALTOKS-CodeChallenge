const path = require('path');

const projectRoot = path.resolve(__dirname, '../../..');

/**
 * Paths to directories and files of the project.
 */
module.exports = {
   projectRoot,

   // Files
   entryPointSrc: path.resolve(projectRoot, 'src/app.js'),
   htmlTemplateSrc: path.resolve(projectRoot, 'src/template.html'),
   favIconSrc: path.resolve(projectRoot, 'src/assets/images/favicon.ico'),
   reportSrc: path.resolve(projectRoot, 'analyses/logs/logs.html'),
   swSrc: path.resolve(projectRoot, 'src/services/service-worker/main.js'),

   // Directories
   srcDir: path.resolve(projectRoot, 'src'),
   assetsDir: path.resolve(projectRoot, 'src/assets'),
   imagesDir: path.resolve(projectRoot, 'src/images'),
   distDir: path.resolve(projectRoot, 'dist'),
   componentsDir: path.resolve(projectRoot, 'src/components'),
   storeDir: path.resolve(projectRoot, 'src/store'),
   servicesDir: path.resolve(projectRoot, 'src/services'),
   utilsDir: path.resolve(projectRoot, 'src/utils'),
   nodeModulesDir: path.resolve(projectRoot, 'node_modules'),
};
