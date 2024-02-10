// app.js
import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store'; // Redux storeのインポート
import ThemeComponent from './Components/Theme/ThemeComponent';
import ThreadComponent from './Components/Thread/ThreadComponent';
import Welcome from './Pages/Welcome';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}> {/* ReduxのProviderでアプリケーションをラップ */}
                <Router>
                    <Routes>
                        <Route path="/" element={<App {...props} />} />
                        <Route path="/group" element={<Welcome />} />
                        <Route path="/group/:groupId" element={<ThemeComponent />} />
                        <Route path="/theme/:thmeId" element={<ThreadComponent />} />
                    </Routes>
                </Router>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});