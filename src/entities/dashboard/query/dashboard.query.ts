import { useQuery } from '@tanstack/react-query';

import { getDashboardData } from '../api/dashboard.api';
import { dashboardKeys } from '../model/dashboard.keys';

export function useDashboard() {
  return useQuery({
    queryKey: dashboardKeys.all,

    queryFn: getDashboardData,
  });
}
