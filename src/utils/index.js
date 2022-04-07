import { AuthPageLayout } from "./AuthpageLayout";
import { PageLayout } from "./PageLayout";
import { PrivateRoute } from "./PrivateRoute";
import useMediaQuery from "./mediaQuery";
import { timeInHoursAndMinutes } from "./timeConversion";
import { useModalOperations } from "./modalOperations";
import { useLikeStatus } from "./likeStatus";

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export { AuthPageLayout, PageLayout, PrivateRoute, useMediaQuery, timeInHoursAndMinutes , useModalOperations, useLikeStatus, emailRegex, passwordRegex }