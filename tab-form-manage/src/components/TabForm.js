import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    cricket: false,
    badminton: false,
    volleyball: false,
    setting: "",
  });

  const [errors, setError] = useState({
    name: null,
    age: null,
    email: null,
  });

  const submitFormData = () => {
    setError({
      name: null,
      age: null,
      email: null,
    });
    if (values?.name.length < 3) {
      setError({
        ...errors,
        name: "Name should be atleast of 3 character.",
      });
      return;
    }
    if (values?.age < 18) {
      setError({
        ...errors,
        age: "Age should be minimum of 18.",
      });
      return;
    }
    console.log(values);
  };

  const handleChange = (value, key) => {
    console.log(typeof key);
    const val = key;
    setValues({
      ...values,
      [key]: value,
    });
    console.log(key);
  };

  const tabs = [
    {
      name: "Profile",
      component: (
        <Profile
          values={values}
          handleChange={handleChange}
          setValues={setValues}
          errors={errors}
        />
      ),
      isActive: activeTab === "Profile",
    },
    {
      name: "Interest",
      component: <Interest values={values} handleChange={handleChange} />,
      isActive: activeTab === "Interest",
    },
    {
      name: "Settings",
      component: (
        <Settings
          values={values}
          submitFormData={submitFormData}
          handleChange={handleChange}
          setValues={setValues}
        />
      ),
      isActive: activeTab === "Settings",
    },
  ];

  return (
    <div className="tab-container">
      <div className="heading-container">
        {tabs.map((item) => (
          <>
            <h6 className="heading" onClick={() => setActiveTab(item?.name)}>
              {item?.name}
            </h6>
          </>
        ))}
      </div>
      {tabs.map((item) => (
        <>{item?.isActive && item?.component}</>
      ))}
    </div>
  );
};
