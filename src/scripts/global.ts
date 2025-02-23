window.addEventListener('popstate', (e) => {
  const dialog = document.querySelector('dialog[open]') as HTMLDialogElement | null;
  if (dialog) {
    dialog.close();
  }
});