import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './app.scss';
import { IntlProvider } from 'react-intl';
import { ContentPreview } from 'box-ui-elements';

// Read only token used in the demo sites
const FOLDER_ID = '69083462919';
const FILE_ID = '545680293326';
const TOKEN = 'Es7LOQiu6VJPBapCcCnpVF4mYaooef8B';
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
        <div className='body'>
            <IntlProvider locale="en" textComponent={React.Fragment}>
                <ContentPreview
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
        </div>
    </div>
);

export default App;
