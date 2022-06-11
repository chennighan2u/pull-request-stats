const VALID_EVENT_NAMES = ['pull_request', 'pull_request_target', 'schedule'];

const validateEnv = (github) => {
  const { eventName } = github.context;
  if (VALID_EVENT_NAMES.includes(eventName)) return;
  const validEvents = VALID_EVENT_NAMES.map((e) => `"${e}"`).join(', ');
  const error = `This action runs only in one of the following events: ${validEvents}. Change the property "on" of your workflow file from "${eventName}" to one of ${validEvents}.`;
  throw new Error(error);
};

module.exports = {
  validateEnv,
};
