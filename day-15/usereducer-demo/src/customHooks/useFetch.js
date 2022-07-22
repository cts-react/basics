
import { useState, useEffect } from "react";

const useFetch = (url) => {
    let response = null;
    fetch(url)
        .then((res) => response = res.json())
        .then((error) => response = error);
    console.log(response);
    return response;
};

export default useFetch;