const core = require('@actions/core');
const glob = require('@actions/glob');

const run = async () => {
  try {
    const patterns = core.getInput('patterns', { required: true });
    console.log(`Using pattern ${patterns}`);

    const globber = await glob.create(patterns);
    const files = await globber.glob();
    for (const file in files) {
        console.log(`Found ${file}`);
    }
    core.setOutput("files", files);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();