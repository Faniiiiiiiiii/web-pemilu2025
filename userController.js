const loginUser = async (req, res) => {
    const { name, authCode } = req.body;

    try {
        const user = await User.findOne({ name, authCode });
        if (!user) {
            return res.status(401).json({ message: "Login gagal. Nama atau kode salah." });
        }

        // Jika login berhasil, simpan authCode ke localStorage (pada sisi klien)
        res.status(200).json({ 
            message: "Login berhasil!",
            authCode: authCode // Kirim authCode ke sisi klien
        });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server.", error });
    }
};
