export const valid = (e, register) => {
  switch (e.target.name) {
    case "name":
      if (register.name.trim().length <= 0) {
        return { error: "Name is required", check: false };
      } else {
        return { check: true, error: null };
      }

    case "email":
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (register.email.trim().length <= 0) {
        return { error: "Email is required", check: false };
      } else if (!re.test(String(register.email).toLowerCase())) {
        return { error: "Email is not valid", check: false };
      } else {
        return { check: true, error: null };
      }

    case "password":
      if (
        register.password.trim().length <= 0 ||
        register.password.trim().length < 4
      ) {
        return {
          error: "Password is required and must be at least 6 characters",
          check: false,
        };
      } else {
        return { check: true, error: null };
      }

    default:
      return "";
  }
};
