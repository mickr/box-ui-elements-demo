import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './app.scss';
import { IntlProvider } from 'react-intl';
import { ContentExplorer } from 'box-ui-elements';

// Read only token used in the demo sites
const FOLDER_ID = '69083462919';
const FILE_ID = '415542803939';
const TOKEN = 'S8wjvjOL9GEK5VtXsQNVMOwSrx1g55oC';
const FEATURES = {
    activityFeed: {
        tasks: {
            createFromComment: true,
            createButton: true,
            feedbackUrl: 'http://example.org/',
            newApi: true,
            newCards: true,
        },
        appActivity: {
            enabled: false,
        },
    },
};
const PROPS = {};

const App = () => (
    <div className='app'>
        <Header />
        <div className='body'>
            <IntlProvider locale="en" textComponent={React.Fragment}>
                <ContentExplorer
                    contentSidebarProps={{
                        detailsSidebarProps: {
                            hasAccessStats: true,
                            hasClassification: true,
                            hasNotices: true,
                            hasProperties: true,
                            hasRetentionPolicy: true,
                            hasVersions: true,
                        },
                        features: FEATURES,
                        hasActivityFeed: true,
                        hasMetadata: true,
                        hasSkills: true,
                    }}
                    hasHeader={true}
                    features={FEATURES}
                    fileId={FILE_ID}
                    rootFolderId={FOLDER_ID}
                    token={TOKEN}
                    {...PROPS}
                />
            </IntlProvider>
            {/*<main className={className}>{children}</main>*/}
            <Nav />
        </div>
        <Footer />
    </div>
);

export default App;
