const { AppConstants } = require("../server.constants");

class ClientDistDownloadTask {
  /**
   * @type {ClientBundleService}
   */
  clientBundleService;
  /**
   * @type {GithubService}
   */
  githubService;
  /**
   * @type {LoggerService}
   */
  logger;

  constructor({ clientBundleService, loggerFactory, githubService }) {
    this.githubService = githubService;
    this.clientBundleService = clientBundleService;
    this.logger = loggerFactory("ClientDistDownloadTask");
  }

  async run() {
    const result = await this.clientBundleService.shouldUpdateWithReason(false, AppConstants.defaultClientMinimum);
    if (!result.shouldUpdate) {
      this.logger.log(`Client bundle update skipped. Reason: ${result.reason}`);
      return;
    }

    this.logger.log(`Client bundle update required. Reason for updating: ${result.reason}`);

    await this.githubService.getAuthenticated();
    this.logger.log(`Logged into Github successfully, checking client dist update`);

    await this.clientBundleService.downloadClientUpdate(AppConstants.defaultClientMinimum);
  }
}

module.exports = {
  ClientDistDownloadTask,
};