function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;
  if (!unityInstance.logo) {
    unityInstance.logo = document.querySelector(".progressText");
    //unityInstance.logo.className = "logo " + unityInstance.Module.splashScreenStyle;
    //unityInstance.container.appendChild(unityInstance.logo);
  }
  if (!unityInstance.progress) {
    unityInstance.progress = document.querySelector(".progress-bar");
    // unityInstance.progress.className = "progress " + unityInstance.Module.splashScreenStyle;
    // unityInstance.progress.empty = document.createElement("div");
    // unityInstance.progress.empty.className = "empty";
    // unityInstance.progress.appendChild(unityInstance.progress.empty);
    // unityInstance.progress.full = document.createElement("div");
    // unityInstance.progress.full.className = "full";
    // unityInstance.progress.appendChild(unityInstance.progress.full);
    // unityInstance.container.appendChild(unityInstance.progress);
  }
  //unityInstance.progress.full.style.width = (100 * progress) + "%";
  console.log(progress);
  unityInstance.progress.style.width = (100 * progress) + "%";
  if (progress == 1) {
    unityInstance.logo.style.display = "none";
    unityInstance.progress.style.display = "none";
  }
}