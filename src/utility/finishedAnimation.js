

export async function finishedAnimationn (primaryArray, sleep, animationSpeed, setDisableOptions) {
    for (let i = 0; i < primaryArray.length; i++) {
        let array_bar = document.getElementById(i).style
        array_bar.backgroundColor = 'green'
        await sleep(animationSpeed)
      }
      setDisableOptions(false);
}