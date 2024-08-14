import Layout from "./layout/layout";
import { ChoosePsycotherapistButton } from "@/features/choose-psycotherapist";
import { Profile } from "./profile/profile";
import { GoBackButton } from "./go-back-button/go-back-button";
import { SignIn } from "./sign-in/sign-in";

interface Props {
  variant: HeaderVariants;
}

export function Header({ variant }: Props) {
  return (
    <Layout
      variant={variant}
      slots={{
        signin: <SignIn />,
        profile: <Profile />,
        goBack: <GoBackButton />,
        choosePsychotherapist: <ChoosePsycotherapistButton />,
      }}
    />
  );
}
