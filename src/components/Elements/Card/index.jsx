const Card = (props) => {
    const { gambar, harga=0, nama } = props;
    return (
      <div className="border border-slate-300">
        <img src={gambar} alt="" />
        <h1 className='text-center mb-2'>{nama}</h1>
        <div className='text-center text-slate-500 mb-4'>Dari <span className='text-[#ee4d2d]'>{`Rp${harga}`}</span></div>
      </div>
    );
}

export default Card;