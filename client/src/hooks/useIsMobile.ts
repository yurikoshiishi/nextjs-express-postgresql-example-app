import {useMediaQuery} from '@material-ui/core';
import {CustomTheme} from '../theme';

export default function useIsMobile() {
  const isMobile = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down('xs')
  );

  return isMobile;
}
