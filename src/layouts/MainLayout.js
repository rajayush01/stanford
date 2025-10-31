import { jsx as _jsx } from "react/jsx-runtime";
const MainLayout = ({ children }) => {
    return _jsx("main", { className: "mx-auto p-4 h-screen w-full flex flex-col items-center justify-center", children: children });
};
export default MainLayout;
