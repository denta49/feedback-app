import { getSession } from "@/lib/auth/session";

import { UserRole } from "../../types/user";

type Props = {
  allowedRoles: UserRole[];
};

export default async function requireRole({ allowedRoles }: Props) {
  const session = await getSession();

  if (!session) {
    return {
      user: null,
      isAuthorized: false,
      status: 401,
      error: "Brak dostępu. Zaloguj się.",
    };
  }

  if (!allowedRoles.includes(session.role)) {
    return {
      user: session,
      isAuthorized: false,
      status: 403,
      error: "Zabronione",
    };
  }

  if (allowedRoles.includes(session.role)) {
    return {
      user: session,
      isAuthorized: true,
      status: 200,
      error: null,
    };
  }
}
