import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the satysfi-notebook-tweaks extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'satysfi-notebook-tweaks:plugin',
  description: 'A small tweaks for SATySFi Notebook environment.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension satysfi-notebook-tweaks is activated!');
  }
};

export default plugin;
