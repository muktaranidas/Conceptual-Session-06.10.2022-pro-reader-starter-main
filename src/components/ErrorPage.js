import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {
  const ErrorResponse = useRouteError();
  console.log(ErrorResponse);
  return (
    <>
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {ErrorResponse && (
          <div>
            <p className="text-red-500">
              {ErrorResponse.statusText || ErrorResponse.message}
            </p>
            <p>{ErrorResponse.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
