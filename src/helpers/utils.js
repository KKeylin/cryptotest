import { toast } from 'react-toastify';
import { get } from 'lodash';

export function ejectErrorMessage(errors) {
  const status = get(errors, 'response.status', 500);

  return get(errors, 'response.data.message', `Erros code #${status}`);
}

export function handleRequestError(errors) {
  handleNotification(ejectErrorMessage(errors), 'error');
}

/**
 *
 * @param {String} msg
 * @param {String} type  Type of notification
 */
export function handleNotification(msg, type = 'info') {
  const map = {
    info: 'info',
    success: 'success',
    dismiss: 'dismiss',
    error: 'error',
  };
  const action = map[type];

  if (!action) return;

  return toast[action](msg, {
    autoClose: 1500,
  });
}

export function criptoNormalizer(a) {
  return a / 100000000;
}
