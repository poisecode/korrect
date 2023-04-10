import { Route } from "react-router-dom";
// import { PrivateRoute } from "./utils";
// import { Sandbox } from "./utils/form";
import { Home } from "./app/home";
// import Profile from "./app/accounts/Profile";
// import { Sample } from "./app/Sample";
// import { Auth } from "./app/auth";
// import { Onboarding } from "./app/Onboarding";
// import { SignIn } from "./app/auth";
// import { ForgotPassword, ResetPassword } from "./app/auth";
// import { Feedback } from "./app/feedback";
// import { PublicFeedback } from "./app/PublicFeedback";
// import PublicBoard from "./app/PublicFeedback/PublicBoard";
// import PublicPostDetails from "./app/PublicFeedback/PublicPostDetails";
// import AcceptInvite from "./app/auth/AcceptInvite";
// import DefaultSettings from "./app/settings/DefaultSettings";
import FeedbackStageContainer from "./app/feedbackStage";

const routes = [
  {
    path: "/",
    name: "Home",
    type: Route,
    component: Home,
  },

  {
    path: "/feedback-stage",
    name: "Feedback stage",
    type: Route,
    component: FeedbackStageContainer,
  },
  //   {
  //     path: "/workspace",
  //     name: "Home",
  //     type: Route,
  //     component: Home,
  //   },
  //   {
  //     path: "/workspace/accept-invite",
  //     name: "Accept Invite",
  //     type: Route,
  //     component: AcceptInvite,
  //   },
  //   {
  //     path: "/workspace/settings",
  //     name: "Settings",
  //     type: Route,
  //     component: DefaultSettings,
  //   },
  //   {
  //     path: "/profile",
  //     name: "Profile",
  //     type: PrivateRoute,
  //     component: Profile,
  //   },
  //   {
  //     path: "/sample",
  //     name: "Sample",
  //     type: Route,
  //     component: Sample,
  //   },
  //   {
  //     path: "/signup",
  //     name: "Auth",
  //     type: Route,
  //     component: Auth,
  //   },
  //   {
  //     path: "/forgot-password",
  //     name: "Forgot Password",
  //     type: Route,
  //     component: ForgotPassword,
  //   },
  //   {
  //     path: "/reset-password",
  //     name: "Reset Password",
  //     type: Route,
  //     component: ResetPassword,
  //   },
  //   {
  //     path: "/login",
  //     name: "SignIn",
  //     type: Route,
  //     component: SignIn,
  //   },
  //   {
  //     path: "/workspace/onboarding",
  //     name: "Onboarding",
  //     type: Route,
  //     component: Onboarding,
  //   },
  //   {
  //     path: "/workspace/feedback",
  //     name: "Feedback",
  //     type: Route,
  //     component: Feedback,
  //   },
  //   {
  //     path: "/public",
  //     name: "Public Feedback",
  //     type: Route,
  //     component: PublicBoard,
  //   },
  //   {
  //     path: "/boards/:boardId",
  //     name: "Public Posts",
  //     type: Route,
  //     component: PublicFeedback,
  //   },
  //   {
  //     path: "/boards/:boardId/post/:postId",
  //     name: "Public Post",
  //     type: Route,
  //     component: PublicPostDetails,
  //   },
  //   {
  //     path: "/sandbox",
  //     name: "Sandbox",
  //     type: Route,
  //     component: Sandbox,
  //   },
];
export default routes;
