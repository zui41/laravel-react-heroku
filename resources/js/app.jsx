import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 追加
import ThemeComponent from './Components/Theme/ThemeComponent';
import ThreadComponent from './Components/Thread/ThreadComponent';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Router>
                <Routes>
                    <Route path="/" element={<App {...props} />} />
                    <Route path="/group/:groupId" element={<ThemeComponent/>} />
                    <Route path="/theme/:thmeId" element={<ThreadComponent/>} />
                </Routes>
            </Router>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
