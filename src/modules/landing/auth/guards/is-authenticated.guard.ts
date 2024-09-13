import { RouteLocationNormalizedGeneric, NavigationGuardNext } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('Userid');
  localStorage.setItem('lastPath', to.path);
  console.log(to.path);

  if (!userId) {
    return next({
      name: 'login',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
