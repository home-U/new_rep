function loadScript(path) {
    const script = document.createElement('script');
    script.src = path;
    document.head.appendChild(script);
}

const autoloader = {
    scripts: {},
    load(scriptName) {
        if (!this.scripts[scriptName]) {
            const scriptPath = `./scripts/${scriptName}.js`;
            loadScript(scriptPath);
            this.scripts[scriptName] = true;
        }
    },
};

export default autoloader;

import autoloader from './autoloader.js';

const autoload = {
    scripts: {},
    load(scriptName) {
        const scriptPath = `./scripts/${scriptName}.js`;

        if (!this.scripts[scriptName] && !this.hasLoadedSubdirectory(scriptPath)) {
            loadScript(scriptPath);
            this.scripts[scriptName] = true;
        }
    },
    hasLoadedSubdirectory(scriptPath) {
        const subdirectoryPath = scriptPath.split('/').slice(0, -1).join('/');

        if (this.scripts[subdirectoryPath]) {
            return true;
        }

        console.log(subdirectoryPath);
        // const subdirectoryScripts = fs.readdirSync(subdirectoryPath);
        // subdirectoryScripts.forEach((scriptName) => {
        //     this.load(scriptName);
        // });

        return true;
    },
};

autoload.load('my-script');