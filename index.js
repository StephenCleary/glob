const core = require('@actions/core');
const glob = require('@actions/glob');

const run = async () => {
  try {
    const patterns = core.getInput('patterns', { required: true });
    console.log(`Hello ${patterns}!`);

    const globber = await glob.create(patterns);
    const files = await globber.glob();
    core.setOutput("files", files);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();