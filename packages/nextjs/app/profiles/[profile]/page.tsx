import Spacer from "@/components/layouts/spacer";

const ProfilePage = ({ params }: { params: { profile: string } }) => {
  const { profile } = params;
  console.log(profile);
  return (
    <>
      <section>
        <Spacer>
          <h1>User Profile</h1>
        </Spacer>
      </section>
    </>
  );
};

export default ProfilePage;
