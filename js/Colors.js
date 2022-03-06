const body = document.getElementById('body')
const container_colors = document.getElementById('container-colors')
const file_input = document.getElementById('file-input')
const image_upload = document.getElementById('image-upload')
const load = document.getElementById('load')

function returnColor(result) {
  const { sRGBHex } = result
  body.style.background = `${sRGBHex}`
  const rgb_par = `
  <div
    class="color_selector"
    style="background: ${sRGBHex}">
    <input
      class="copy"
      value="${sRGBHex}"
      type="text"
      id="${sRGBHex}"
      readonly
    />
    <i
      class="bi bi-clipboard-check-fill"
      onclick="copy('${sRGBHex}')">
    </i>
    </div>
  `
  container_colors.innerHTML += rgb_par
}

function copy(id) {
  const element = document.getElementById(`${id}`)
  element.select()
  document.execCommand("copy")
}

async function dropper()  {
  const eyeDropper = new window.EyeDropper()
  const result = await eyeDropper.open()
  returnColor(result)
}

function upload() {
  load.style.display = "none"
  const readerImage = new FileReader()
  readerImage.onload = () => {
    image_upload.setAttribute("src", readerImage.result)
  }
  readerImage.readAsDataURL(file_input.files[0])
}