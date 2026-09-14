import paperclipSilver from '../assets/about/clips/paperclip-silver.png'
import binderClipRed from '../assets/about/clips/binder-clip-red.png'

// Decorative only — never intercept clicks on the tabs beneath them.
// Positioned near the very top of the stack, peeking out above/across the
// back tabs the way a paperclip or binder clip catches the top corner of a
// stack of paper — not scattered down into the folder body. Each clip is
// rendered as two halves of the same image: the top portion (handle/loop)
// sits behind the front folder's z-index, the bottom portion (jaws) sits in
// front of it, so it reads as physically gripping rather than floating on top.
const CLIPS = [
  { src: paperclipSilver, top: 20, left: '24%', width: 44, rotate: -12, splitAt: 40 },
  { src: binderClipRed, top: 22, left: '76%', width: 68, rotate: 9, splitAt: 42 },
]

function Clip({ src, top, left, width, rotate, splitAt }) {
  const shared = {
    position: 'absolute',
    top,
    left,
    width,
    height: 'auto',
    transform: `rotate(${rotate}deg)`,
    transformOrigin: 'center top',
  }
  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="folder-clip folder-clip--back"
        style={{ ...shared, clipPath: `inset(0 0 ${100 - splitAt}% 0)` }}
        draggable={false}
      />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="folder-clip folder-clip--front"
        style={{ ...shared, clipPath: `inset(${splitAt}% 0 0 0)` }}
        draggable={false}
      />
    </>
  )
}

export default function FolderClips() {
  return (
    <>
      {CLIPS.map((clip, index) => (
        <Clip key={index} {...clip} />
      ))}
    </>
  )
}
