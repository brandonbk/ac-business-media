const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const podcasts = require('@ac-business-media/refresh-theme/templates/website-section/podcasts');
const videos = require('@ac-business-media/refresh-theme/templates/website-section/videos');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: videos,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
