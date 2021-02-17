import Home from './component/home'
import Uploadpage from './component/Uploadpage'
import DragDrop from './imageUploader/DragDrop'
import Resultpage from './component/Resultpage'

export const pathname = {
    Uploadpage: '/upload',
    Home: '/home',
    DragDrop: '/drag',
    Resultpage: '/result'
};

export const pages = [
    { path: pathname.Uploadpage, component: Uploadpage},
    { path: pathname.Home, component: Home },
    { path: pathname.DragDrop, component: DragDrop},
    { path: pathname.Resultpage, component: Resultpage}
];
