import {HiOutlineSpeakerWave} from "react-icons/hi2";
import {useCallback, useEffect, useState} from "react";

export default function DuaModal ({duaModal}) {
    const [audio] = useState(new Audio())


    const onAudioPlayed = useCallback((src) => {
        audio.src = src;

        if(!audio.ended) {
            audio.play()
        } else {
            audio.pause()
        }

    }, [audio] )

    useEffect(() => {
        return () => {
            audio.pause()
            audio.remove()
        }
    }, [audio]);
    return <>
        <div>
            <h3 className="text-center font-semibold md:text-xl text-lg">Arabcha</h3>
            <p className='text-2xl inline'>{duaModal?.original}</p>
            <span className='inline-block ml-3.5'>
                <HiOutlineSpeakerWave
                    onClick={() => onAudioPlayed(duaModal?.audioSrc)}
                    className='text-2xl cursor-pointer'
                />
            </span>
        </div>
        <div className='my-3'>
            <h3 className="text-center font-semibold md:text-xl text-lg">{duaModal?.title}</h3>
            <p className='font-bold'>{duaModal?.content}</p>
        </div>

        <div className='mt-3'>
            <h3 className="text-center font-semibold md:text-xl text-lg">Ma'nosi</h3>
            <i>{duaModal?.definition}</i>
        </div>
        <div className='mt-4'>
            <i>Audio manba: Muslim.uz, Duolar manbasi: Aniq.uz</i>
        </div>

    </>
}