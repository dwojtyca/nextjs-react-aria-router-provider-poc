export async function wait(time = 3000) {
  const pr = new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
  await pr;
  return;
}
