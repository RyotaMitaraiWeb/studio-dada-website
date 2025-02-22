export function openDialog(dialog: HTMLDialogElement) {
  dialog.showModal();

  const html = document.querySelector('html');
  if (html) {
    html.style.overflow = 'hidden';
  }

  history.pushState({ dialogOpen: true }, '');
}