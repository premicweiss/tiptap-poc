import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralEditor from "./pages/GeneralEditor";
import EditorList from "./pages/EditorList";
import styled from "@emotion/styled";
import { FC } from "react";

const App: FC<{ className?: string }> = ({ className }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GeneralEditor />,
    },
    {
      path: "/editor-list",
      element: <EditorList />,
    },
  ]);
  return (
    <div className={className}>
      <RouterProvider router={router} />
    </div>
  );
};

export default styled(App)``;
