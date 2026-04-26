// ── QUIZ BANK (Pre-authored — v1.0, 10/04/2026) ──────────────────────
const QUIZ_BANK_MAP = {
    "cold": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 55t, THA đang dùng enalapril, bị nghẹt mũi do cảm. DS nên tránh tư vấn thuốc nào?",
            "opts": [
                "NaCl 0.9% xịt mũi",
                "Pseudoephedrine uống",
                "Paracetamol 500 mg"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine là sympathomimetic toàn thân, gây co mạch → tăng huyết áp. CCĐ ở BN THA. NaCl 0.9% tại chỗ an toàn cho mọi đối tượng.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 30t, mang thai 3 tháng đầu, nghẹt mũi nặng. Thuốc thông mũi nào an toàn hơn?",
            "opts": [
                "Pseudoephedrine uống",
                "Xylometazoline xịt mũi",
                "NaCl 0.9% nhỏ mũi"
            ],
            "ans": 2,
            "exp": "Thai phụ 3 tháng đầu nên tránh sympathomimetic (cả uống lẫn xịt). NaCl 0.9% là lựa chọn an toàn từ đầu thai kỳ. Xylometazoline xịt chỉ được cân nhắc sau tam cá nguyệt thứ nhất.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 68t, tăng sinh lành tính tuyến tiền liệt, cảm sốt kèm sổ mũi. Nhóm thuốc nào cần tránh?",
            "opts": [
                "Paracetamol",
                "Kháng histamine thế hệ 1",
                "Vitamin C"
            ],
            "ans": 1,
            "exp": "Kháng histamine thế hệ 1 (chlorphenamine, diphenhydramine) có tác dụng anticholinergic → nguy cơ bí tiểu ở BN tăng sinh tuyến tiền liệt. Paracetamol và vitamin C an toàn.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng xylometazoline xịt mũi liên tục 10 ngày cho cảm, nay thấy nghẹt mũi nặng hơn. Nguyên nhân là gì?",
            "opts": [
                "Rhinitis medicamentosa (rebound)",
                "Viêm xoang cấp bội nhiễm",
                "Dị ứng với xylometazoline"
            ],
            "ans": 0,
            "exp": "Dùng thuốc co mạch tại chỗ >5–7 ngày liên tục gây mất nhạy cảm thụ thể alpha-adrenergic → giãn mạch phản hồi (rhinitis medicamentosa). Cần ngừng thuốc và chuyển sang NaCl 0.9%.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm cần tỉnh táo ban ngày vì phải lái xe. Kháng histamine nào phù hợp hơn?",
            "opts": [
                "Chlorphenamine",
                "Loratadine",
                "Diphenhydramine"
            ],
            "ans": 1,
            "exp": "Loratadine (thế hệ 2) ít gây buồn ngủ, phù hợp cho người cần tỉnh táo. Chlorphenamine và diphenhydramine (thế hệ 1) gây an thần mạnh, CCĐ khi lái xe.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 40t bị cảm, đã uống 2 gói thuốc cảm tổng hợp (mỗi gói chứa 500 mg paracetamol). Muốn uống thêm paracetamol riêng. DS xử trí thế nào?",
            "opts": [
                "Cho thêm paracetamol 500 mg vì chưa đủ liều",
                "Từ chối, đã đủ 1 g — chờ ≥4 h mới uống tiếp",
                "Đổi sang ibuprofen thay vì paracetamol"
            ],
            "ans": 1,
            "exp": "BN đã uống 1 g paracetamol từ thuốc cảm tổng hợp. Liều tiếp theo phải cách ≥4 h. Nguy cơ quá liều paracetamol khi dùng chung nhiều sản phẩm chứa paracetamol là rất phổ biến.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN glaucoma góc đóng bị cảm cúm, DS có thể tư vấn chlorphenamine (kháng histamine thế hệ 1) để giảm sổ mũi.",
            "ans": false,
            "exp": "Kháng histamine thế hệ 1 có tác dụng anticholinergic → tăng nhãn áp. CCĐ ở BN glaucoma góc đóng. Nên dùng kháng histamine thế hệ 2 hoặc NaCl 0.9%.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng MAOI (phenelzine) bị cảm nghẹt mũi. DS cần lưu ý tương tác với thuốc nào?",
            "opts": [
                "Paracetamol",
                "Pseudoephedrine",
                "NaCl 0.9%"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine + MAOI → nguy cơ cơn tăng huyết áp nghiêm trọng (hypertensive crisis). Phải tránh tuyệt đối. Xịt mũi tại chỗ cũng cần thận trọng vì có thể hấp thu toàn thân.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 45t, ĐTĐ type 2, bị cảm sốt. Khi tư vấn thuốc cảm dạng siro, DS cần lưu ý gì?",
            "opts": [
                "Chọn dạng không đường (sugar-free)",
                "Không dùng siro vì ĐTĐ CCĐ tuyệt đối với mọi siro",
                "Tăng liều insulin gấp đôi trước khi uống siro"
            ],
            "ans": 0,
            "exp": "BN ĐTĐ nên ưu tiên dạng sugar-free. Ngoài ra, nhiễm trùng cấp tính làm tăng nhu cầu insulin → cần theo dõi đường huyết thường xuyên hơn, không phải tăng liều tùy tiện.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc co mạch xịt mũi (oxymetazoline, xylometazoline) an toàn hơn dạng uống (pseudoephedrine) vì ít tác dụng toàn thân.",
            "ans": true,
            "exp": "Xịt mũi tại chỗ ít hấp thu toàn thân hơn dạng uống → ít ảnh hưởng huyết áp, nhịp tim. Có thể cân nhắc cho BN tim mạch, ĐTĐ, cường giáp (sau tam cá nguyệt 1 ở thai phụ). Tuy nhiên vẫn cần giới hạn ≤5–7 ngày.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm có triệu chứng: sổ mũi nước, hắt hơi, nghẹt mũi. DS nên tư vấn phối hợp tối thiểu nào?",
            "opts": [
                "Paracetamol + kháng histamine + thuốc co mạch",
                "Kháng sinh + paracetamol + vitamin C",
                "Chỉ cần paracetamol đơn thuần là đủ"
            ],
            "ans": 2,
            "exp": "Cảm cúm do virus tự khỏi trong 7–10 ngày. Paracetamol đơn thuần giảm sốt, đau đầu là đủ. Kháng sinh không có vai trò. Nên phối hợp theo triệu chứng cụ thể, tránh thuốc cảm tổng hợp chứa nhiều thành phần không cần thiết.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Vitamin C liều cao (≥1 g/ngày) có bằng chứng mạnh giúp rút ngắn đáng kể thời gian cảm cúm ở người bình thường.",
            "ans": false,
            "exp": "Cochrane review (Hemilä & Chalker, 2013) cho thấy vitamin C dùng thường xuyên chỉ giảm nhẹ thời gian cảm (8% ở người lớn). Uống sau khi đã bị cảm không rút ngắn thời gian bệnh.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 28t, cho con bú, bị cảm nghẹt mũi. Thuốc nào cần tránh?",
            "opts": [
                "Paracetamol 500 mg",
                "Pseudoephedrine 60 mg",
                "NaCl 0.9% xịt mũi"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine có thể giảm tiết sữa (ức chế prolactin gián tiếp). Nên tránh ở phụ nữ cho con bú. Paracetamol và NaCl 0.9% an toàn.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 3 tuổi bị cảm, nghẹt mũi, sốt nhẹ. DS nên tư vấn gì?",
            "opts": [
                "Pseudoephedrine siro + paracetamol",
                "NaCl 0.9% nhỏ mũi + paracetamol",
                "Xylometazoline xịt mũi + ibuprofen"
            ],
            "ans": 1,
            "exp": "Trẻ <6 tuổi: tránh thuốc co mạch (cả uống lẫn xịt) vì nguy cơ tác dụng phụ cao, bằng chứng hiệu quả kém. NaCl 0.9% nhỏ mũi an toàn từ sơ sinh. Paracetamol giảm sốt, đau.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ipratropium bromide xịt mũi giúp giảm chảy nước mũi (rhinorrhoea) trong cảm cúm nhưng không cải thiện nghẹt mũi.",
            "ans": true,
            "exp": "Cochrane review (AlBalawi et al., 2013) cho thấy ipratropium xịt mũi giảm rhinorrhoea có ý nghĩa thống kê nhưng không cải thiện nghẹt mũi. Cơ chế: kháng cholinergic tại chỗ giảm tiết dịch mũi.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 60t, suy gan mạn (Child-Pugh C), bị cảm sốt 38.5°C. Thuốc hạ sốt nào CCĐ?",
            "opts": [
                "Ibuprofen 400 mg",
                "Paracetamol 500 mg",
                "Cả hai đều CCĐ"
            ],
            "ans": 1,
            "exp": "Paracetamol CCĐ ở suy gan nặng vì chuyển hóa qua gan tạo chất chuyển hóa độc (NAPQI). Ibuprofen cần thận trọng (nguy cơ chảy máu tiêu hóa) nhưng không CCĐ tuyệt đối ở suy gan.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm đang dùng warfarin. DS cần cảnh báo tương tác nếu BN muốn dùng thuốc nào?",
            "opts": [
                "Paracetamol liều thấp ngắn ngày",
                "Ibuprofen",
                "NaCl 0.9% xịt mũi"
            ],
            "ans": 1,
            "exp": "NSAID (ibuprofen) ức chế COX-1 → giảm tổng hợp thromboxane + kích ứng niêm mạc dạ dày → tăng nguy cơ chảy máu khi dùng chung warfarin. Paracetamol liều thấp, ngắn ngày an toàn hơn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Phenylephrine uống 10 mg có bằng chứng mạnh giúp thông mũi hiệu quả hơn giả dược trong cảm cúm.",
            "ans": false,
            "exp": "Nhiều systematic review (Hatton 2007, Meltzer 2015) kết luận phenylephrine uống liều OTC không có đủ bằng chứng hiệu quả vượt trội giả dược. FDA Mỹ đã xem xét lại tính hiệu quả của phenylephrine uống.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm hỏi mua kẽm (zinc) để rút ngắn thời gian bệnh. DS tư vấn thế nào?",
            "opts": [
                "Kẽm ≥75 mg/ngày (muối acetate) có thể giảm 1–3 ngày",
                "Kẽm đã được khuyến cáo dùng thường quy trong cảm",
                "Kẽm không có bất kỳ bằng chứng nào"
            ],
            "ans": 0,
            "exp": "Systematic review (Hemilä, 2011): kẽm ≥75 mg/ngày (muối acetate) giảm ~42% thời gian cảm (1–3 ngày). Tuy nhiên chất lượng bằng chứng thấp–trung bình, chưa đủ để khuyến cáo thường quy.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen phế quản bị cảm, ho khan. Thuốc ức chế ho nào cần thận trọng?",
            "opts": [
                "Mật ong pha nước ấm",
                "Dextromethorphan",
                "Simple linctus (demulcent)"
            ],
            "ans": 1,
            "exp": "Dextromethorphan là dẫn xuất opioid, lý thuyết có thể gây ức chế hô hấp ở BN hen. Cần thận trọng. Demulcent và mật ong an toàn hơn cho nhóm BN này.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc cảm tổng hợp (multi-ingredient) chứa 3–4 hoạt chất là lựa chọn ưu tiên hàng đầu vì tiện lợi cho BN.",
            "ans": false,
            "exp": "Đa số BN không cần tất cả hoạt chất trong thuốc cảm tổng hợp. Cách tiếp cận hợp lý: chọn thuốc đơn thành phần phù hợp triệu chứng cụ thể, tránh dùng thuốc thừa và tác dụng phụ không cần thiết.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm, nghẹt mũi 2 bên, muốn dùng thuốc nhỏ mũi. Tư thế nhỏ mũi đúng là gì?",
            "opts": [
                "Ngửa đầu ra sau, hướng lên trần nhà",
                "Cúi đầu xuống, mặt hướng về phía sàn",
                "Nằm nghiêng, nhỏ bên thấp trước"
            ],
            "ans": 1,
            "exp": "Tư thế đúng: cúi đầu xuống, mặt hướng sàn nhà. Ngửa đầu ra sau là SAI vì thuốc sẽ chảy xuống họng → nuốt vào → tăng hấp thu toàn thân, giảm hiệu quả tại chỗ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Echinacea đã được chứng minh rõ ràng có hiệu quả ngăn ngừa và điều trị cảm cúm qua Cochrane review.",
            "ans": false,
            "exp": "Cochrane review (Karsch-Völk et al., 2014): không có đủ bằng chứng chất lượng cao để khẳng định echinacea ngăn ngừa hoặc điều trị cảm cúm. Kết quả các nghiên cứu không nhất quán.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 50t, cường giáp, bị cảm nghẹt mũi. Nhóm thuốc nào cần tránh?",
            "opts": [
                "Paracetamol",
                "Sympathomimetic uống (pseudoephedrine)",
                "Nước muối sinh lý"
            ],
            "ans": 1,
            "exp": "Sympathomimetic kích thích thụ thể adrenergic → tăng nhịp tim, huyết áp. Ở BN cường giáp (đã tăng catecholamine nội sinh), nguy cơ tim mạch tăng cao. Cần tránh dạng uống.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm dùng chlorphenamine buổi tối để dễ ngủ. Tác dụng phụ thường gặp nhất ngoài buồn ngủ là gì?",
            "opts": [
                "Tiêu chảy",
                "Khô miệng",
                "Phát ban da"
            ],
            "ans": 1,
            "exp": "Chlorphenamine (kháng histamine thế hệ 1) có tác dụng anticholinergic mạnh. Tác dụng phụ thường gặp: khô miệng, táo bón, bí tiểu, nhìn mờ. Tiêu chảy không phải tác dụng phụ đặc trưng.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Oxymetazoline và xylometazoline xịt mũi cần dùng thường xuyên hơn ephedrine vì tác dụng ngắn hơn.",
            "ans": false,
            "exp": "Ngược lại: oxymetazoline và xylometazoline có tác dụng kéo dài hơn ephedrine → chỉ cần dùng 2–3 lần/ngày, trong khi ephedrine cần đến 4 lần/ngày.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi mua thuốc cảm cho con 4 tuổi. Sản phẩm nào DS nên từ chối?",
            "opts": [
                "Paracetamol siro (120 mg/5 mL)",
                "Pseudoephedrine siro trẻ em",
                "NaCl 0.9% nhỏ mũi"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine không khuyến cáo cho trẻ <6 tuổi (một số sản phẩm giới hạn <12 tuổi). MHRA khuyến cáo hạn chế thuốc cảm ho OTC ở trẻ nhỏ do thiếu bằng chứng hiệu quả và nguy cơ tác dụng phụ.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm, hắt hơi nhiều nhưng không nghẹt mũi. Triệu chứng này gợi ý phân biệt với bệnh nào và cần dùng nhóm thuốc nào?",
            "opts": [
                "Viêm xoang — cần kháng sinh",
                "Viêm mũi dị ứng — kháng histamine hiệu quả hơn co mạch",
                "Viêm phổi — cần chuyển viện ngay"
            ],
            "ans": 1,
            "exp": "Hắt hơi nhiều (paroxysmal) + không nghẹt mũi nặng → gợi ý viêm mũi dị ứng hơn cảm cúm. Kháng histamine hiệu quả cho hắt hơi, ngứa mũi. Thuốc co mạch chủ yếu giảm nghẹt mũi.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol và ibuprofen có thể xen kẽ (alternating) ở trẻ em bị sốt do cảm nếu một thuốc đơn lẻ không đủ kiểm soát sốt.",
            "ans": true,
            "exp": "Cochrane review (Wong et al., 2013) cho thấy xen kẽ paracetamol và ibuprofen hiệu quả hơn đơn trị trong kiểm soát sốt ở trẻ. Có thể dùng đơn trị trước, nếu không đáp ứng thì xen kẽ.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm, muốn dùng thuốc co mạch xịt mũi nhưng lo tác dụng phụ. Thời gian tối đa khuyến cáo là bao lâu?",
            "opts": [
                "3 ngày",
                "5–7 ngày",
                "14 ngày"
            ],
            "ans": 1,
            "exp": "Thuốc co mạch xịt mũi (xylometazoline, oxymetazoline) không nên dùng >5–7 ngày liên tục để tránh rhinitis medicamentosa (nghẹt mũi phản hồi do mất nhạy cảm thụ thể alpha).",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mật ong có bằng chứng từ Cochrane review cho thấy hiệu quả hơn giả dược trong giảm ho cấp ở trẻ em.",
            "ans": true,
            "exp": "Cochrane review (Oduwole et al., 2018) gồm 6 thử nghiệm trên 899 trẻ: mật ong có thể hiệu quả hơn giả dược hoặc không điều trị trong giảm tần suất và thời gian ho (chất lượng bằng chứng trung bình–thấp). Lưu ý: CCĐ trẻ <1 tuổi.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cảm cúm hỏi: \"Uống kháng sinh sớm có giúp khỏi nhanh hơn không?\". DS trả lời đúng là gì?",
            "opts": [
                "Đúng, kháng sinh rút ngắn 1–2 ngày",
                "Không, cảm cúm do virus — kháng sinh không có tác dụng",
                "Tùy, nếu đờm xanh thì cần kháng sinh"
            ],
            "ans": 1,
            "exp": "Cảm cúm >90% do virus (rhinovirus, coronavirus...). Kháng sinh chỉ tác dụng trên vi khuẩn. Đờm xanh-vàng không nhất thiết là nhiễm khuẩn — đa số vẫn là virus.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acrivastine (kháng histamine thế hệ 2) dùng 3 lần/ngày có thể kiểm soát triệu chứng tốt hơn loratadine 1 lần/ngày ở BN có triệu chứng breakthrough.",
            "ans": true,
            "exp": "BN dùng loratadine hoặc cetirizine 1 lần/ngày mà vẫn còn triệu chứng breakthrough có thể đổi sang acrivastine (dùng 3 lần/ngày) để phân bổ tác dụng đều hơn trong ngày.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cảm cúm 5 ngày, nay xuất hiện khó thở và thở khò khè. DS nên xử trí thế nào?",
            "opts": [
                "Thêm dextromethorphan giảm ho",
                "Chuyển cấp cứu / gọi 115 ngay",
                "Đổi sang kháng sinh amoxicillin"
            ],
            "ans": 1,
            "exp": "Khó thở + thở khò khè = Red Flag nghiêm trọng → nghi viêm phổi, hen cấp, hoặc biến chứng hô hấp nặng. Cần gọi 115 hoặc chuyển cấp cứu, không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Khách hàng yêu cầu mua amoxicillin cho con bị cảm 2 ngày vì sợ \"cảm kéo dài thành viêm phổi\". DS nên bán thuốc theo yêu cầu.",
            "ans": false,
            "exp": "\"Cảm thành viêm phổi\" là quan niệm sai phổ biến. Cảm cúm do virus → kháng sinh không có tác dụng. DS phải từ chối bán kháng sinh không toa và tư vấn OTC phù hợp.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cảm cúm kèm sốt 38°C, đau đầu, mệt mỏi. Triệu chứng nào giúp phân biệt cúm (influenza) với cảm lạnh thông thường?",
            "opts": [
                "Sổ mũi nước nhiều",
                "Sốt cao đột ngột + đau cơ toàn thân nặng",
                "Hắt hơi liên tục kèm ngứa mũi"
            ],
            "ans": 1,
            "exp": "Cúm (influenza): khởi phát đột ngột, sốt cao (>38.5°C), đau cơ toàn thân nặng, mệt mỏi rõ. Cảm lạnh: khởi phát từ từ, sổ mũi-hắt hơi nổi bật, sốt nhẹ hoặc không sốt, triệu chứng toàn thân nhẹ.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cảm 7 ngày, nay thấy đau nhức vùng mặt, mất khứu giác, dịch mũi đặc đục. DS nghi ngờ gì?",
            "opts": [
                "Cảm cúm kéo dài bình thường",
                "Viêm xoang cấp — cần chuyển BS",
                "Viêm mũi dị ứng mùa"
            ],
            "ans": 1,
            "exp": "Đau nhức vùng mặt + mất khứu giác + dịch mũi đặc đục sau cảm >7 ngày → gợi ý viêm xoang cấp bội nhiễm. Cần chuyển BS đánh giá, có thể cần kháng sinh.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Hầu hết cảm cúm do virus tự khỏi trong vòng 7 ngày, nhưng tới 25% BN có thể có triệu chứng kéo dài tới 14 ngày.",
            "ans": true,
            "exp": "Đa số cảm khỏi trong 1 tuần. Tuy nhiên, nghiên cứu cho thấy ~25% BN có triệu chứng kéo dài ≥14 ngày (đặc biệt ho, nghẹt mũi). Điều này không nhất thiết là bội nhiễm.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 25t bị cảm 3 ngày, triệu chứng: sốt nhẹ, sổ mũi, hắt hơi, mất khứu giác, ho khan. DS cần nghĩ đến chẩn đoán phân biệt nào?",
            "opts": [
                "Viêm mũi dị ứng mùa",
                "COVID-19",
                "Viêm xoang mạn"
            ],
            "ans": 1,
            "exp": "Ho khan mới + mất khứu giác/vị giác là triệu chứng gợi ý COVID-19, cần phân biệt với cảm lạnh thông thường. Nên khuyên BN test nhanh COVID-19 và cách ly phòng ngừa.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS có thể tư vấn OTC cho BN cảm cúm kèm sốt 39°C, khó thở, đau ngực khi hít sâu mà không cần chuyển BS.",
            "ans": false,
            "exp": "Sốt cao 39°C + khó thở + đau ngực khi hít = Red Flag → nghi viêm phổi, thuyên tắc phổi. Cần chuyển BS hoặc cấp cứu ngay, không xử trí OTC đơn thuần.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên không dùng thuốc nào phù hợp cho BN cảm cúm?",
            "opts": [
                "Uống đủ nước, nghỉ ngơi, dùng khăn giấy dùng 1 lần",
                "Xông hơi tinh dầu liều cao khi sốt",
                "Tắm nước lạnh để hạ sốt nhanh"
            ],
            "ans": 0,
            "exp": "Biện pháp non-pharm: uống đủ nước, nghỉ ngơi, rửa tay thường xuyên, dùng khăn giấy 1 lần tránh lây lan. Xông hơi tinh dầu liều cao có thể kích ứng đường thở. Tắm nước lạnh không hạ sốt hiệu quả.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đờm xanh-vàng trong cảm cúm chứng tỏ nhiễm khuẩn và cần dùng kháng sinh.",
            "ans": false,
            "exp": "Đờm xanh-vàng do bạch cầu trung tính (chứa myeloperoxidase) — xảy ra cả trong nhiễm virus. Phần lớn trường hợp cảm cúm có đờm màu vẫn là virus. Chỉ nghi nhiễm khuẩn khi triệu chứng nặng + kéo dài >10–14 ngày.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "NCT 75t, sống một mình, bị cảm cúm với triệu chứng nặng: sốt 38.5°C, mệt lả, ăn uống kém 3 ngày. DS xử trí thế nào?",
            "opts": [
                "Tư vấn thuốc cảm OTC bình thường",
                "Chuyển BS vì NCT sống một mình với triệu chứng suy kiệt",
                "Cho kháng sinh dự phòng biến chứng"
            ],
            "ans": 1,
            "exp": "NCT với triệu chứng suy kiệt (debilitating symptoms), sống một mình, nguy cơ biến chứng cao → cần chuyển BS đánh giá. NCT cần chăm sóc và theo dõi kỹ hơn người trẻ.",
            "icon": "👴"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cảm cúm 3 ngày, nay thấy đau tai phải, giảm thính lực bên phải. DS đánh giá thế nào?",
            "opts": [
                "Triệu chứng bình thường của cảm, tự khỏi",
                "Nghi viêm tai giữa cấp — chuyển BS",
                "Cho thuốc nhỏ tai kháng sinh OTC"
            ],
            "ans": 1,
            "exp": "Đau tai + giảm thính lực sau cảm → nghi viêm tai giữa cấp (biến chứng của URTI). Cần chuyển BS khám tai, đánh giá có cần kháng sinh không. DS không tự kê kháng sinh nhỏ tai.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Cảm cúm lây nhiễm mạnh trong 1–2 ngày đầu tiên có triệu chứng.",
            "ans": true,
            "exp": "Virus cảm lạnh lây nhiễm qua giọt bắn và tiếp xúc. Giai đoạn lây nhiễm cao nhất: 1–2 ngày đầu sau khi xuất hiện triệu chứng. Sau đó, khả năng lây giảm dần.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cảm cúm, sau 10 ngày triệu chứng không cải thiện, ho tăng dần, sốt quay lại. DS nên làm gì?",
            "opts": [
                "Đổi sang thuốc cảm tổng hợp mạnh hơn",
                "Chuyển BS vì nghi bội nhiễm vi khuẩn",
                "Tiếp tục OTC thêm 1 tuần nữa"
            ],
            "ans": 1,
            "exp": "Cảm >10 ngày không cải thiện + triệu chứng nặng lên (sốt quay lại, ho tăng) → nghi bội nhiễm vi khuẩn (viêm xoang, viêm phế quản). Cần chuyển BS đánh giá và có thể cần kháng sinh.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Rửa mũi bằng nước muối sinh lý (saline irrigation) có bằng chứng lâm sàng hỗ trợ giảm triệu chứng nhiễm trùng đường hô hấp trên cấp.",
            "ans": true,
            "exp": "Cochrane review (King et al., 2015) cho thấy rửa mũi bằng nước muối có lợi ích trong giảm triệu chứng URTI cấp. Đây là biện pháp an toàn, rẻ tiền, phù hợp mọi đối tượng.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dextromethorphan có nguy cơ gây hội chứng serotonin nếu dùng chung với thuốc ức chế tái hấp thu serotonin chọn lọc (SSRI).",
            "ans": true,
            "exp": "Dextromethorphan ức chế tái hấp thu serotonin ở mức độ nhất định. Phối hợp với SSRI, MAOI, tramadol → tăng nguy cơ hội chứng serotonin (sốt, run, kích động, rối loạn ý thức).",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Thời gian ủ bệnh của cảm lạnh thông thường (common cold) là bao lâu?",
            "opts": [
                "6–12 giờ",
                "1–3 ngày",
                "7–10 ngày"
            ],
            "ans": 1,
            "exp": "Thời gian ủ bệnh cảm lạnh: 1–3 ngày (có thể ngắn nhất 10–12 giờ). Sau ủ bệnh, đau họng và hắt hơi xuất hiện trước, sau đó nghẹt mũi chiếm ưu thế từ ngày 2–3.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Hơi nước nóng (steam inhalation) có bằng chứng mạnh từ Cochrane review giúp cải thiện triệu chứng cảm cúm.",
            "ans": false,
            "exp": "Cochrane review (Singh et al., 2017) kết luận không có đủ bằng chứng cho thấy hít hơi nước nóng cải thiện triệu chứng cảm. Một số nghiên cứu cho thấy lợi ích nhỏ nhưng không nhất quán.",
            "icon": "🧬"
        }
    ],
    "cough": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 65t, ho khan 5 ngày sau cảm. Thuốc ức chế ho OTC nào còn được khuyến cáo hiện nay?",
            "opts": [
                "Codeine",
                "Dextromethorphan",
                "Pholcodine"
            ],
            "ans": 1,
            "exp": "Pholcodine đã bị rút khỏi thị trường (MHRA, 3/2023). Codeine bị hạn chế cho trẻ <12 tuổi và không khuyến cáo OTC. Dextromethorphan là thuốc ức chế ho OTC duy nhất còn được dùng phổ biến.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho có đờm, đờm trắng đục. DS muốn tư vấn long đờm. Hoạt chất nào có bằng chứng (dù hạn chế) về hiệu quả?",
            "opts": [
                "Ipecacuanha",
                "Guaifenesin",
                "Muối ammonium"
            ],
            "ans": 1,
            "exp": "Guaifenesin là thuốc long đờm duy nhất có bằng chứng (dù hạn chế). Cơ chế: kích thích tiết dịch đường hô hấp, tăng thể tích đờm, giảm độ nhớt → dễ khạc. Ipecacuanha và muối ammonium là thuốc cũ, chưa chứng minh hiệu quả.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Guaifenesin không có tác dụng phụ thường gặp, không tương tác thuốc đáng kể, và an toàn cho thai phụ.",
            "ans": true,
            "exp": "Guaifenesin có hồ sơ an toàn rất tốt: không có tác dụng phụ thường gặp, không tương tác thuốc đáng kể, an toàn trong thai kỳ và cho con bú. Dùng cho người lớn và trẻ >6 tuổi.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 40t, đang dùng sertraline (SSRI) cho trầm cảm, bị ho khan sau cảm. DS cần lưu ý tương tác với thuốc nào?",
            "opts": [
                "Guaifenesin",
                "Dextromethorphan",
                "Simple linctus"
            ],
            "ans": 1,
            "exp": "Dextromethorphan ức chế tái hấp thu serotonin → kết hợp với SSRI (sertraline) tăng nguy cơ hội chứng serotonin. Cần tránh hoặc dùng demulcent/guaifenesin thay thế.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 70t, glaucoma góc đóng, ho khan ban đêm. Thuốc ho nào cần tránh?",
            "opts": [
                "Dextromethorphan",
                "Diphenhydramine (kháng histamine thế hệ 1)",
                "Mật ong pha nước ấm"
            ],
            "ans": 1,
            "exp": "Diphenhydramine có tác dụng anticholinergic → tăng nhãn áp ở BN glaucoma góc đóng. Dextromethorphan và mật ong không có nguy cơ này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cochrane review 2014 kết luận có bằng chứng mạnh cho hiệu quả của thuốc ho OTC trong ho cấp ở người lớn và trẻ em.",
            "ans": false,
            "exp": "Cochrane review (Smith et al., 2014) kết luận KHÔNG có bằng chứng tốt cho hiệu quả của thuốc ho OTC trong ho cấp. Tự chăm sóc (uống đủ nước, demulcent) là phù hợp hơn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ĐTĐ type 1, bị ho sau cảm. DS tư vấn thêm gì khi bán thuốc cảm ho?",
            "opts": [
                "Chọn dạng sugar-free + nhắc theo dõi đường huyết thường xuyên hơn",
                "Tăng liều insulin gấp đôi trong khi bệnh",
                "Không cần lưu ý gì thêm"
            ],
            "ans": 0,
            "exp": "BN ĐTĐ: (1) ưu tiên siro sugar-free, (2) nhiễm trùng cấp tính làm tăng nhu cầu insulin → cần theo dõi đường huyết thường xuyên hơn. Không tự ý tăng liều insulin.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 2 tuổi ho khan sau cảm. DS tư vấn thuốc ho nào?",
            "opts": [
                "Dextromethorphan siro trẻ em",
                "Mật ong 2.5 mL trước ngủ",
                "Demulcent (simple linctus)"
            ],
            "ans": 2,
            "exp": "Trẻ <12 tuổi: tránh dextromethorphan. Mật ong CCĐ trẻ <1 tuổi (nguy cơ botulism) nhưng trẻ 2 tuổi có thể dùng. Tuy nhiên, demulcent (simple linctus) an toàn từ 1 tháng tuổi, là lựa chọn an toàn cho mọi nhóm.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sản phẩm ho chứa đồng thời thuốc ức chế ho (dextromethorphan) và thuốc long đờm (guaifenesin) là phối hợp hợp lý.",
            "ans": false,
            "exp": "Đây là phối hợp phi logic: ức chế ho (giảm phản xạ ho) + long đờm (tăng tiết dịch để ho khạc ra) → mâu thuẫn cơ chế. Nên chọn 1 loại phù hợp với tính chất ho (khan vs có đờm).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen phế quản, ho khan kéo dài 2 tuần. DS nên làm gì?",
            "opts": [
                "Tư vấn dextromethorphan ức chế ho",
                "Chuyển BS vì ho kéo dài ở BN hen cần đánh giá lại",
                "Tư vấn guaifenesin long đờm"
            ],
            "ans": 1,
            "exp": "Ho kéo dài >2 tuần ở BN hen → cần đánh giá kiểm soát hen (có thể cần điều chỉnh ICS). Dextromethorphan cần thận trọng ở BN hen (lý thuyết gây ức chế hô hấp).",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN thai phụ 7 tháng, ho khan khó ngủ. Thuốc ho nào an toàn?",
            "opts": [
                "Dextromethorphan",
                "Simple linctus (demulcent)",
                "Diphenhydramine"
            ],
            "ans": 1,
            "exp": "Demulcent (simple linctus) an toàn cho mọi đối tượng kể cả thai phụ. Dextromethorphan nên tránh trong tam cá nguyệt 3. Diphenhydramine tuy tham khảo cho là OK nhưng một số nhà sản xuất khuyến cáo tránh.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Diphenhydramine có tác dụng ức chế ho thông qua cơ chế anticholinergic làm khô niêm mạc, không phải qua histamine.",
            "ans": true,
            "exp": "Kháng histamine thế hệ 1 trong thuốc ho tác dụng qua cơ chế anticholinergic (làm khô niêm mạc đường thở), không phải qua chẹn thụ thể H1. Tuy nhiên, bằng chứng lâm sàng về hiệu quả ức chế ho còn yếu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 58t, tăng sinh tuyến tiền liệt, ho khan ban đêm. DS nên tránh thuốc ho nào?",
            "opts": [
                "Mật ong",
                "Diphenhydramine",
                "Guaifenesin"
            ],
            "ans": 1,
            "exp": "Diphenhydramine có tác dụng anticholinergic → nguy cơ bí tiểu ở BN tăng sinh tuyến tiền liệt. Mật ong và guaifenesin không có nguy cơ này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều dextromethorphan cho người lớn và trẻ >12 tuổi là bao nhiêu?",
            "opts": [
                "5 mL × 2 lần/ngày",
                "10 mL × 4 lần/ngày",
                "15 mL × 3 lần/ngày"
            ],
            "ans": 1,
            "exp": "Liều chuẩn dextromethorphan (đa số sản phẩm OTC): 10 mL × 4 lần/ngày cho người lớn và trẻ >12 tuổi. Lưu ý: không khuyến cáo cho trẻ 12–18 tuổi có vấn đề hô hấp.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Guaifenesin liều 200 mg × 4 lần/ngày cho người lớn, và có phiên bản sugar-free phù hợp cho BN ĐTĐ.",
            "ans": true,
            "exp": "Liều chuẩn guaifenesin: 200 mg (10 mL) × 4 lần/ngày cho người lớn và trẻ ≥12 tuổi. Có dạng sugar-free (VD: sản phẩm Robitussin) phù hợp BN ĐTĐ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 72t, đang dùng nhiều thuốc (polypharmacy), ho khan sau cảm. Thuốc ho nào ít nguy cơ tương tác?",
            "opts": [
                "Dextromethorphan",
                "Diphenhydramine",
                "Demulcent (simple linctus)"
            ],
            "ans": 2,
            "exp": "Demulcent (simple linctus) không có hoạt chất dược lý → không tương tác thuốc, không tác dụng phụ. An toàn cho NCT, thai phụ, trẻ em, BN dùng nhiều thuốc.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng tramadol cho đau mạn, bị ho khan. Tương tác nguy hiểm nào cần lưu ý?",
            "opts": [
                "Tramadol + guaifenesin → giảm hấp thu",
                "Tramadol + dextromethorphan → hội chứng serotonin",
                "Tramadol + mật ong → giảm hiệu quả giảm đau"
            ],
            "ans": 1,
            "exp": "Tramadol (ức chế tái hấp thu serotonin) + dextromethorphan (cũng ức chế tái hấp thu serotonin) → tăng nguy cơ hội chứng serotonin. Cần tránh phối hợp.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Theophylline OTC có thể dùng cho BN ho có khò khè nhẹ tại nhà thuốc.",
            "ans": false,
            "exp": "Theophylline dù có dạng pharmacy-only nhưng không nên dùng vì: BN có khò khè/khó thở cần đánh giá chuyên sâu (nghi hen, COPD). Theophylline có khoảng trị liệu hẹp, nhiều tương tác thuốc.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho có đờm xanh 4 ngày, không sốt, sinh hoạt bình thường. DS xử trí thế nào?",
            "opts": [
                "Kê kháng sinh vì đờm xanh = nhiễm khuẩn",
                "Tư vấn OTC + theo dõi, hẹn tái khám nếu không cải thiện sau 7 ngày",
                "Chuyển cấp cứu ngay"
            ],
            "ans": 1,
            "exp": "Đờm xanh-vàng KHÔNG đồng nghĩa nhiễm khuẩn — đa số vẫn là virus. Ho cấp <3 tuần, không triệu chứng nặng → tư vấn OTC + safety netting: tái khám nếu ho >2 tuần hoặc triệu chứng nặng lên.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho khan kèm ợ nóng, ợ chua thường xuyên. DS nghi ngờ nguyên nhân ho là gì?",
            "opts": [
                "Viêm phế quản cấp",
                "Trào ngược dạ dày thực quản (GERD)",
                "Hen phế quản"
            ],
            "ans": 1,
            "exp": "Ho khan mạn + ợ nóng, ợ chua → gợi ý GERD là nguyên nhân ho. GERD gây ho qua kích thích vagal và/hoặc vi hít. Cần điều trị GERD (PPI, thay đổi lối sống) thay vì chỉ dùng thuốc ho.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dextromethorphan có tiềm năng lạm dụng thấp hơn codeine và ít tác dụng phụ hơn.",
            "ans": true,
            "exp": "Dextromethorphan là dẫn xuất opioid nhưng có tiềm năng lạm dụng (abuse potential) thấp hơn codeine và ít tác dụng phụ hơn (ít táo bón, ít ức chế hô hấp ở liều OTC).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mật ong dùng cho ho cấp ở trẻ em, liều bao nhiêu và CCĐ nhóm tuổi nào?",
            "opts": [
                "2.5 mL trước ngủ, CCĐ trẻ <1 tuổi",
                "5 mL × 3 lần/ngày, CCĐ trẻ <3 tuổi",
                "10 mL × 2 lần/ngày, CCĐ trẻ <6 tháng"
            ],
            "ans": 0,
            "exp": "Mật ong: 2.5 mL trước ngủ, dùng tối đa 3 ngày. CCĐ tuyệt đối trẻ <1 tuổi vì nguy cơ botulism (Clostridium botulinum). Cochrane review cho thấy hiệu quả hơn giả dược ở trẻ em.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho khan sau cảm 10 ngày, kèm nghẹt mũi dai dẳng và chảy dịch sau mũi (postnasal drip). Nguyên nhân ho là gì?",
            "opts": [
                "Viêm phổi cộng đồng",
                "Hội chứng ho do đường hô hấp trên (UACS)",
                "Lao phổi"
            ],
            "ans": 1,
            "exp": "Ho + nghẹt mũi + chảy dịch sau mũi → Upper Airway Cough Syndrome (UACS, trước đây gọi postnasal drip syndrome). Dịch mũi chảy xuống họng kích thích ho. Có thể xử trí tại nhà thuốc.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc ho thảo dược chứa thyme (cỏ xạ hương) có bằng chứng chất lượng cao về hiệu quả giảm ho.",
            "ans": false,
            "exp": "Systematic review (Wagner et al., 2015) chỉ tìm thấy bằng chứng chất lượng rất thấp cho thyme, ivy, primrose trong ho cấp. Không nên khuyến cáo thường quy dựa trên bằng chứng hiện tại.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng thuốc ức chế men chuyển (ACEi) cho THA. Gần đây bị ho khan kéo dài. DS đánh giá thế nào?",
            "opts": [
                "Tư vấn dextromethorphan ức chế ho",
                "Nghi ho do tác dụng phụ ACEi — chuyển BS đánh giá",
                "Cho guaifenesin vì ho này chắc có đờm"
            ],
            "ans": 1,
            "exp": "ACEi (enalapril, lisinopril...) gây ho khan ở ~10–15% BN do tích tụ bradykinin. Ho thường xuất hiện vài tuần–tháng sau dùng thuốc, hết sau khi ngừng. Cần chuyển BS cân nhắc đổi sang ARB.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho khan, uống rượu thường xuyên. DS cần lưu ý tương tác gì khi tư vấn thuốc ho?",
            "opts": [
                "Guaifenesin + rượu → giảm hấp thu",
                "Dextromethorphan/diphenhydramine + rượu → tăng an thần",
                "Mật ong + rượu → phản ứng disulfiram"
            ],
            "ans": 1,
            "exp": "Dextromethorphan và diphenhydramine đều gây an thần. Kết hợp với rượu → cộng hưởng tác dụng ức chế thần kinh trung ương (buồn ngủ, chóng mặt, giảm phản xạ). Cần cảnh báo BN.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine thế hệ 2 (loratadine, cetirizine) không có vai trò trong điều trị ho cấp do cảm cúm.",
            "ans": true,
            "exp": "Kháng histamine non-sedating (thế hệ 2) không có bằng chứng hiệu quả trong điều trị ho cấp (Smith et al., 2014). Kháng histamine thế hệ 1 có tác dụng anticholinergic giúp khô niêm mạc nhưng bằng chứng cũng yếu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cho con bú, ho khan khó ngủ. DS tư vấn thuốc ho nào phù hợp?",
            "opts": [
                "Dextromethorphan ngắn ngày",
                "Diphenhydramine",
                "Demulcent (simple linctus)"
            ],
            "ans": 2,
            "exp": "Demulcent an toàn cho mọi đối tượng. Dextromethorphan: dùng ngắn ngày OK nhưng có báo cáo gây buồn ngủ và bú kém ở trẻ. Diphenhydramine có thể giảm tiết sữa và gây buồn ngủ ở trẻ bú mẹ.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ho có đờm đang dùng guaifenesin 3 ngày, không thấy cải thiện. DS tư vấn gì?",
            "opts": [
                "Tăng liều guaifenesin gấp đôi",
                "Giải thích bằng chứng hạn chế + uống đủ nước + theo dõi thêm",
                "Đổi sang codeine OTC"
            ],
            "ans": 1,
            "exp": "Bằng chứng cho guaifenesin hạn chế (kết quả nghiên cứu mâu thuẫn). Uống đủ nước là biện pháp quan trọng hỗ trợ loãng đờm. Ho cấp do virus thường tự khỏi. Codeine không còn được khuyến cáo OTC.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN ho có đờm nên dùng thuốc ức chế ho (dextromethorphan) để giảm bớt khó chịu.",
            "ans": false,
            "exp": "Ho có đờm là phản xạ bảo vệ giúp tống đờm ra ngoài. Ức chế ho → đờm ứ đọng → tăng nguy cơ nhiễm trùng. Ho có đờm nên dùng long đờm (guaifenesin) hoặc uống đủ nước, không ức chế ho.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 55t, ho kéo dài 4 tuần, kèm sụt cân không rõ nguyên nhân, mệt mỏi. DS nghi ngờ gì?",
            "opts": [
                "Ho do virus kéo dài — tiếp tục OTC",
                "Nghi bệnh lý nghiêm trọng (ung thư phổi, lao) — chuyển BS ngay",
                "Upper airway cough syndrome — dùng thuốc co mạch mũi"
            ],
            "ans": 1,
            "exp": "Ho >3 tuần + sụt cân + mệt mỏi = Red Flag → nghi ung thư phổi (đặc biệt BN >50 tuổi), lao phổi, hoặc bệnh lý nghiêm trọng khác. Chuyển BS khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ho ra máu (hemoptysis) lần đầu. DS xử trí thế nào?",
            "opts": [
                "Tư vấn thuốc ho + theo dõi 1 tuần",
                "Chuyển BS ngay trong ngày",
                "Cho kháng sinh phổ rộng dự phòng"
            ],
            "ans": 1,
            "exp": "Ho ra máu (hemoptysis) = Red Flag → cần chuyển BS khẩn trong ngày. Nguyên nhân có thể: viêm phổi, lao, ung thư phổi, thuyên tắc phổi. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ho cấp được định nghĩa là ho kéo dài ≤3 tuần.",
            "ans": true,
            "exp": "Ho cấp: ≤3 tuần (đa số do virus tự khỏi). Ho bán cấp: 3–8 tuần. Ho mạn: >8 tuần. Ho >3 tuần cần nghĩ đến nguyên nhân ngoài virus (hen, UACS, GERD, lao, ung thư...).",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 8 tháng, ho khan kèm tiếng thở rít (stridor) vào ban đêm, giọng khàn. DS nghi ngờ gì?",
            "opts": [
                "Viêm phế quản cấp thông thường",
                "Croup (viêm thanh khí phế quản) — cần chuyển BS",
                "Ho do trào ngược sữa"
            ],
            "ans": 1,
            "exp": "Ho ông ổng (barking cough) + stridor + giọng khàn + nặng ban đêm ở trẻ nhỏ → gợi ý croup. Cần chuyển BS đánh giá mức độ nặng, có thể cần corticosteroid hoặc nebulizer adrenaline.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN ho kéo dài kèm khó thở khi nằm, phù chân, mệt khi gắng sức — DS nghi ho do suy tim.",
            "ans": true,
            "exp": "Ho + khó thở khi nằm (orthopnea) + phù chi dưới + mệt khi gắng sức → gợi ý suy tim. Ho do suy tim thường có đờm bọt hồng. Cần chuyển BS ngay, không dùng OTC.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ho kéo dài 4 tuần, chỉ ho ban đêm và khi tiếp xúc không khí lạnh. DS nghi ngờ nguyên nhân gì?",
            "opts": [
                "Viêm phế quản cấp do virus",
                "Hen phế quản",
                "Viêm phổi cộng đồng"
            ],
            "ans": 1,
            "exp": "Ho mạn, nặng ban đêm, khởi phát bởi yếu tố trigger (không khí lạnh, gắng sức) → gợi ý hen phế quản. Cần chuyển BS làm spirometry và đánh giá điều trị hen.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 60t, hút thuốc 30 năm, ho có đờm mỗi sáng kéo dài nhiều tháng. DS đánh giá thế nào?",
            "opts": [
                "Ho do virus thông thường",
                "Nghi COPD/viêm phế quản mạn — chuyển BS",
                "Tư vấn guaifenesin long đờm dài hạn"
            ],
            "ans": 1,
            "exp": "Ho có đờm mạn tính + hút thuốc lâu năm + >40 tuổi → nghi COPD/viêm phế quản mạn. Cần chuyển BS làm spirometry xác định chẩn đoán. Khuyến cáo cai thuốc lá.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS nên chuyển BS mọi trường hợp ho >3 tuần không cần đánh giá thêm.",
            "ans": false,
            "exp": "Ho >3 tuần cần đánh giá kỹ nhưng không phải tất cả đều cần chuyển ngay. VD: UACS (ho do dịch mũi chảy sau) có thể kéo dài hàng tuần và DS có thể xử trí. Chỉ chuyển khi có Red Flag hoặc không đáp ứng OTC.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ho kéo dài, kèm đổ mồ hôi đêm, sụt cân, sốt nhẹ về chiều. DS nghĩ đến bệnh gì?",
            "opts": [
                "Viêm phế quản cấp",
                "Lao phổi (TB)",
                "Trào ngược dạ dày"
            ],
            "ans": 1,
            "exp": "Ho mạn + đổ mồ hôi đêm + sụt cân + sốt nhẹ về chiều = bộ tứ triệu chứng kinh điển của lao phổi. Cần chuyển BS ngay để xét nghiệm (Xpert MTB/RIF, X-quang ngực).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ho tái phát về đêm ở trẻ em liên tục nhiều tuần nên được chuyển BS vì có thể là dấu hiệu hen.",
            "ans": true,
            "exp": "Ho dai dẳng về đêm (persistent nocturnal cough) ở trẻ em = Red Flag gợi ý hen phế quản. Cần chuyển BS đánh giá, không nên chỉ dùng thuốc ho OTC kéo dài.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 35t, ho khan kéo dài 6 tuần, không sốt, không sụt cân, chỉ ho khi thay đổi tư thế hoặc nói nhiều. DS đánh giá gì?",
            "opts": [
                "Viêm phổi không triệu chứng",
                "Ho do rối loạn chức năng dây thanh quản hoặc ho tâm lý",
                "Lao phổi thể ẩn"
            ],
            "ans": 1,
            "exp": "Ho mạn, không triệu chứng toàn thân, trigger bởi nói/thay đổi tư thế → cân nhắc rối loạn chức năng dây thanh quản (vocal cord dysfunction) hoặc ho tâm lý (psychogenic cough). Ho tâm lý thường vắng ban đêm.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ho cấp 5 ngày, hỏi khi nào cần tái khám BS nếu không đỡ. DS hẹn thời gian nào?",
            "opts": [
                "3 ngày",
                "7–14 ngày nếu không cải thiện hoặc nặng lên",
                "30 ngày"
            ],
            "ans": 1,
            "exp": "Safety netting cho ho cấp: tái khám nếu ho không cải thiện sau 7–14 ngày, hoặc bất kỳ lúc nào có Red Flag (ho ra máu, khó thở, sốt cao, đau ngực). Ho cấp do virus thường khỏi trong 1–2 tuần.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nhiễm virus là nguyên nhân phổ biến gây ho cấp tại nhà thuốc, bất kể giới tính và độ tuổi.",
            "ans": true,
            "exp": "Với mọi BN ở mọi lứa tuổi và giới tính, nhiễm virus đường hô hấp trên là nguyên nhân phổ biến gây ho cấp tại cộng đồng. Vi khuẩn chiếm tỷ lệ nhỏ hơn nhiều.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ho kèm đau ngực kiểu màng phổi (đau khi hít sâu), sốt 39°C, khó thở. DS phải làm gì?",
            "opts": [
                "Tư vấn ibuprofen + thuốc ho",
                "Chuyển cấp cứu ngay — nghi viêm phổi hoặc thuyên tắc phổi",
                "Cho kháng sinh phổ rộng OTC"
            ],
            "ans": 1,
            "exp": "Đau ngực kiểu màng phổi + sốt cao + khó thở = Red Flag mức khẩn cấp. Có thể là viêm phổi cộng đồng, thuyên tắc phổi, hoặc tràn khí màng phổi. Chuyển cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Sản phẩm thuốc ho chứa thuốc co mạch mũi (decongestant) phù hợp cho trường hợp nào?",
            "opts": [
                "Ho khan do kích ứng thanh quản",
                "Ho kèm nghẹt mũi, chảy dịch mũi sau (UACS)",
                "Ho do trào ngược dạ dày"
            ],
            "ans": 1,
            "exp": "Thuốc co mạch mũi giảm nghẹt mũi → giảm dịch chảy sau mũi xuống họng → giảm ho do UACS. Không có tác dụng trên ho do kích ứng thanh quản hay GERD.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dextromethorphan không nên dùng cho trẻ 12–18 tuổi có vấn đề hô hấp (hen, khó thở).",
            "ans": true,
            "exp": "Nhà sản xuất khuyến cáo không dùng dextromethorphan cho trẻ 12–18 tuổi có vấn đề hô hấp (hen, COPD). Lý do: lý thuyết có thể gây ức chế hô hấp ở nhóm này.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN ho khan ban đêm kèm ợ nóng, DS có thể tư vấn PPI (omeprazole OTC) vì nghi ho do GERD.",
            "ans": true,
            "exp": "Ho khan mạn tính (đặc biệt ban đêm, khi nằm) + ợ nóng/ợ chua → nghi GERD là nguyên nhân. PPI OTC (omeprazole) có thể thử 2–4 tuần. Nếu không cải thiện → chuyển BS.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị ho kéo dài sau khi mới bắt đầu dùng thuốc mới. Nhóm thuốc nào gây ho khan như tác dụng phụ phổ biến?",
            "opts": [
                "Thuốc chẹn beta (metoprolol)",
                "Thuốc ức chế men chuyển (ramipril)",
                "Thuốc chẹn kênh calci (amlodipine)"
            ],
            "ans": 1,
            "exp": "ACEi (ramipril, enalapril, lisinopril...) gây ho khan ở ~10–15% BN do tích tụ bradykinin trong phổi. Là tác dụng phụ class effect. Beta-blocker và CCB không gây ho đặc trưng.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN ho cấp 1 tuần kèm đờm xanh cần được kê kháng sinh ngay vì đờm xanh chứng tỏ nhiễm khuẩn.",
            "ans": false,
            "exp": "Đờm xanh-vàng gặp cả trong nhiễm virus (do myeloperoxidase của bạch cầu). Ho cấp <2 tuần có đờm màu: đa số vẫn virus. Kháng sinh chỉ cân nhắc khi triệu chứng nặng + kéo dài.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Codeine OTC vẫn được khuyến cáo là thuốc ức chế ho ưu tiên cho trẻ em và người lớn.",
            "ans": false,
            "exp": "MHRA (2015) khuyến cáo hạn chế codeine cho ho: không dùng trẻ <12 tuổi, thận trọng 12–18 tuổi. Codeine chuyển hóa thành morphine qua CYP2D6, nguy cơ ức chế hô hấp ở ultra-rapid metabolizer.",
            "icon": "⛔"
        }
    ],
    "throat": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 28t, đau họng 2 ngày, không sốt, kèm sổ mũi và ho nhẹ. DS nên tư vấn thuốc gì?",
            "opts": [
                "Kháng sinh amoxicillin",
                "Viên ngậm chứa lidocaine hoặc benzocaine",
                "Corticosteroid xịt họng"
            ],
            "ans": 1,
            "exp": "Đau họng kèm triệu chứng cảm (sổ mũi, ho) → nhiễm virus. Điều trị triệu chứng: viên ngậm gây tê (lidocaine, benzocaine) giảm đau tại chỗ. Kháng sinh không có tác dụng trên virus.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi nên dùng viên ngậm hay thuốc súc miệng cho đau họng. DS giải thích gì?",
            "opts": [
                "Súc miệng hiệu quả hơn vì tiếp xúc toàn bộ họng",
                "Viên ngậm tốt hơn vì thời gian tiếp xúc niêm mạc lâu hơn",
                "Cả hai hiệu quả như nhau"
            ],
            "ans": 1,
            "exp": "Thuốc súc miệng (gargle) có thời gian tiếp xúc niêm mạc rất ngắn → tác dụng thoáng qua. Viên ngậm/viên pastille tiếp xúc lâu hơn + kích thích tiết nước bọt bôi trơn họng → hiệu quả hơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị đau họng, dị ứng với benzocaine (phát ban khi dùng trước đó). DS có thể đổi sang thuốc gây tê nào?",
            "opts": [
                "Không có thuốc gây tê nào khác dùng được",
                "Lidocaine — vì cấu trúc hóa học khác, ít dị ứng chéo",
                "Flurbiprofen — cũng là thuốc gây tê tại chỗ"
            ],
            "ans": 1,
            "exp": "Benzocaine (ester) và lidocaine (amide) có cấu trúc hóa học khác nhau → dị ứng chéo hiếm gặp. Nếu dị ứng benzocaine, có thể dùng lidocaine. Flurbiprofen là NSAID chống viêm, không phải thuốc tê.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Viên ngậm chứa lidocaine và benzocaine an toàn cho thai phụ và phụ nữ cho con bú.",
            "ans": true,
            "exp": "Thuốc tê tại chỗ (lidocaine, benzocaine) dạng viên ngậm: hấp thu toàn thân rất ít, không tương tác thuốc đáng kể, không có tác dụng phụ thường gặp nghiêm trọng. An toàn cho thai phụ và cho con bú.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Benzydamine (Difflam) có thể dùng cho trẻ bao nhiêu tuổi dưới dạng xịt họng?",
            "opts": [
                "Chỉ người lớn >18 tuổi",
                "Trẻ từ 6 tuổi (dạng xịt), dưới 6 tuổi tính theo cân nặng",
                "Trẻ từ 12 tuổi (tất cả dạng)"
            ],
            "ans": 1,
            "exp": "Benzydamine xịt: trẻ <6 tuổi dùng 1 nhát xịt/4 kg cân nặng; 6–12 tuổi: 4 nhát xịt; người lớn: 4–8 nhát xịt. Dạng súc miệng và viên ngậm chỉ từ ≥12 tuổi và ≥6 tuổi tương ứng.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN loét dạ dày tá tràng bị đau họng nặng. Thuốc nào CCĐ?",
            "opts": [
                "Benzydamine xịt họng",
                "Flurbiprofen viên ngậm",
                "Lidocaine viên ngậm"
            ],
            "ans": 1,
            "exp": "Flurbiprofen là NSAID → CCĐ ở BN loét dạ dày tá tràng (nguy cơ chảy máu tiêu hóa, làm nặng loét). Benzydamine và lidocaine không có CCĐ này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Flurbiprofen viên ngậm nên tránh ở BN dị ứng aspirin hoặc NSAID.",
            "ans": true,
            "exp": "Flurbiprofen là NSAID → dị ứng chéo với aspirin và các NSAID khác (phản ứng quá mẫn, co thắt phế quản, phù Quincke). CCĐ tuyệt đối ở BN có tiền sử dị ứng NSAID/aspirin.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Flurbiprofen viên ngậm có thể dùng cho đối tượng nào?",
            "opts": [
                "Thai phụ tam cá nguyệt thứ 3",
                "Phụ nữ cho con bú",
                "Trẻ 8 tuổi"
            ],
            "ans": 1,
            "exp": "Flurbiprofen (NSAID): CCĐ tam cá nguyệt 3 (nguy cơ đóng ống động mạch sớm), không khuyến cáo trẻ <12 tuổi. Phụ nữ cho con bú: có thể dùng (lượng bài tiết vào sữa rất ít).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc giảm đau toàn thân nào có bằng chứng tốt cho đau họng?",
            "opts": [
                "Chỉ paracetamol mới hiệu quả",
                "Paracetamol và ibuprofen đều hiệu quả khi dùng đều đặn",
                "Codeine uống là ưu tiên hàng đầu"
            ],
            "ans": 1,
            "exp": "Review (Thomas et al., 2000) xác nhận cả paracetamol và NSAID (chủ yếu ibuprofen) đều hiệu quả giảm đau họng khi dùng đều đặn. Codeine không được khuyến cáo cho đau họng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Súc miệng nước muối hoặc aspirin hòa tan đã được chứng minh lâm sàng hiệu quả trong đau họng.",
            "ans": false,
            "exp": "Súc miệng nước muối và aspirin là biện pháp dân gian phổ biến nhưng chưa có thử nghiệm lâm sàng nào chứng minh hiệu quả. Cho đến khi có bằng chứng, không nên khuyến cáo thường quy.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Viên ngậm chứa chất kháng khuẩn (chlorhexidine, dequalinium) có nên khuyến cáo thường quy cho đau họng?",
            "opts": [
                "Có, vì đa số đau họng do vi khuẩn",
                "Không, vì đa số do virus — chất kháng khuẩn không tác dụng + lo ngại kháng thuốc",
                "Có, vì chất kháng khuẩn giúp ngừa bội nhiễm"
            ],
            "ans": 1,
            "exp": "Đa số đau họng do virus → chất kháng khuẩn tại chỗ không có tác dụng. Ngoài ra, lo ngại về đóng góp vào kháng khuẩn (antimicrobial resistance). Tyrothricin đã bị rút khỏi thị trường năm 2020 vì lý do này.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ĐTĐ type 2 bị đau họng, lo viên ngậm chứa đường ảnh hưởng đường huyết. DS trả lời thế nào?",
            "opts": [
                "Không dùng viên ngậm, chỉ xịt họng",
                "Lượng đường trong viên ngậm quá ít để ảnh hưởng đường huyết — có thể dùng",
                "Phải đổi sang dạng sugar-free bắt buộc"
            ],
            "ans": 1,
            "exp": "Lượng đường trong viên ngậm rất nhỏ, không đủ ảnh hưởng đáng kể đến kiểm soát đường huyết. BN ĐTĐ có thể dùng viên ngậm thông thường. Dạng sugar-free có thể dùng nếu muốn nhưng không bắt buộc.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Benzydamine súc miệng có thể gây châm chích (stinging) niêm mạc — khi đó có thể pha loãng với nước.",
            "ans": true,
            "exp": "Benzydamine (Difflam) dạng súc miệng đôi khi gây châm chích tại chỗ. Có thể pha loãng với nước để giảm kích ứng mà không ảnh hưởng đáng kể hiệu quả.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều tối đa viên ngậm lidocaine (Covonia) cho người lớn >18 tuổi là bao nhiêu viên/ngày?",
            "opts": [
                "5 viên/ngày",
                "10 viên/ngày",
                "Không giới hạn"
            ],
            "ans": 1,
            "exp": "Covonia (lidocaine): người lớn >18 tuổi tối đa 10 viên/ngày; trẻ 12–18 tuổi tối đa 5 viên/ngày. Liều tối đa khác nhau tùy sản phẩm (Chloralieve: 8 viên cho người lớn, 4 cho trẻ 12–18).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 22t, đau họng kèm mảng trắng bám trong miệng, dễ lau sạch, nền đỏ. DS nghi ngờ gì và tư vấn thuốc nào?",
            "opts": [
                "Viêm họng vi khuẩn — cần kháng sinh",
                "Nhiễm nấm Candida (oral thrush) — cần thuốc kháng nấm",
                "Viêm họng virus — viên ngậm lidocaine"
            ],
            "ans": 1,
            "exp": "Mảng trắng bám, dễ lau, nền đỏ → triệu chứng kinh điển của nhiễm Candida miệng (oral thrush). Cần thuốc kháng nấm (nystatin, miconazole), không phải kháng sinh.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Benzocaine xịt họng có thể dùng cho trẻ từ 6 tuổi, trong khi dạng viên ngậm chỉ dùng từ 3 tuổi trở lên.",
            "ans": false,
            "exp": "Ngược lại: benzocaine (Ultra Chloraseptic) dạng xịt: trẻ ≥6 tuổi; dạng viên ngậm: trẻ ≥3 tuổi. Viên ngậm dùng được sớm hơn vì liều thấp hơn và kiểm soát tốt hơn.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau họng đang uống warfarin. DS nên tránh tư vấn thuốc giảm đau nào?",
            "opts": [
                "Paracetamol 500 mg",
                "Ibuprofen 400 mg",
                "Benzydamine xịt họng"
            ],
            "ans": 1,
            "exp": "NSAID (ibuprofen) + warfarin → tăng nguy cơ chảy máu (ức chế COX-1 + kích ứng niêm mạc dạ dày). Paracetamol liều chuẩn an toàn hơn. Benzydamine tại chỗ không tương tác.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Flurbiprofen viên ngậm 8.75 mg dùng tối đa bao nhiêu viên/ngày?",
            "opts": [
                "3 viên/ngày",
                "5 viên/ngày",
                "8 viên/ngày"
            ],
            "ans": 1,
            "exp": "Flurbiprofen (Strefen): ngậm 1 viên mỗi 3–6 giờ, tối đa 5 viên/24 giờ. Dùng cho người lớn và trẻ >12 tuổi. Không nên ngậm với khoảng cách <3 giờ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ngậm viên ngậm hoặc kẹo cứng giúp kích thích tiết nước bọt, bôi trơn họng và giảm đau ngay cả khi không chứa hoạt chất dược lý.",
            "ans": true,
            "exp": "Ngậm bất kỳ viên ngậm/kẹo nào đều kích thích tiết nước bọt → bôi trơn niêm mạc họng → giảm đau do kích ứng. Đây là cơ chế demulcent cơ bản, không cần hoạt chất dược lý.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 20t, đau họng dữ dội, sốt 39°C, sưng amygdale có mủ trắng, hạch cổ đau. FeverPAIN score 4. DS xử trí thế nào?",
            "opts": [
                "Tư vấn viên ngậm OTC + theo dõi",
                "Cân nhắc cung cấp kháng sinh (PGD) hoặc chuyển BS",
                "Cho kháng sinh phổ rộng ngay"
            ],
            "ans": 1,
            "exp": "FeverPAIN ≥4: nghi nhiễm Streptococcus nhóm A. Chương trình Pharmacy First (một số nước) cho phép DS cung cấp kháng sinh theo PGD. Nếu không, chuyển BS để kê kháng sinh (penicillin V, macrolide).",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau họng muốn dùng xịt họng benzydamine. Tần suất dùng khuyến cáo là bao nhiêu?",
            "opts": [
                "1 lần/ngày trước ngủ",
                "Mỗi 1.5–3 giờ khi cần",
                "3 lần/ngày cố định sau ăn"
            ],
            "ans": 1,
            "exp": "Benzydamine xịt/súc miệng: dùng mỗi 1.5–3 giờ khi cần thiết (when required). Không cần theo giờ cố định. Thuốc tác dụng tại chỗ, hiệu quả phụ thuộc vào tần suất tiếp xúc.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Benzydamine không có tương tác thuốc đáng kể và có thể dùng cho mọi nhóm BN bao gồm thai phụ.",
            "ans": true,
            "exp": "Benzydamine (NSAID tại chỗ): không có tương tác thuốc đáng kể, an toàn cho thai phụ, cho con bú, và mọi nhóm BN. Tác dụng phụ chủ yếu: châm chích tại chỗ khi dùng dạng súc miệng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng thuốc gây ức chế miễn dịch (methotrexate) bị đau họng + loét miệng. DS lo ngại gì?",
            "opts": [
                "Tác dụng phụ bình thường, dùng viên ngậm là đủ",
                "Nghi giảm bạch cầu hạt (agranulocytosis) do thuốc — chuyển BS ngay",
                "Chỉ cần đổi thuốc giảm đau"
            ],
            "ans": 1,
            "exp": "Thuốc ức chế miễn dịch (methotrexate, carbimazole...) có thể gây giảm bạch cầu hạt → đau họng + loét miệng là dấu hiệu cảnh báo. Cần chuyển BS xét nghiệm công thức máu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau họng hỏi về flurbiprofen viên ngậm so với ibuprofen uống. Ưu điểm của flurbiprofen viên ngậm là gì?",
            "opts": [
                "Hiệu quả giảm đau mạnh hơn ibuprofen uống",
                "Tác dụng tại chỗ trực tiếp tại niêm mạc họng, ít tác dụng toàn thân hơn",
                "Không có CCĐ như NSAID uống"
            ],
            "ans": 1,
            "exp": "Flurbiprofen viên ngậm: tác dụng chống viêm tại chỗ trực tiếp niêm mạc họng, ít hấp thu toàn thân hơn NSAID uống. Tuy nhiên vẫn giữ CCĐ của NSAID (loét dạ dày, dị ứng NSAID, tam cá nguyệt 3).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Viên ngậm chứa lidocaine có tương tác thuốc đáng kể với các thuốc hệ thống.",
            "ans": false,
            "exp": "Lidocaine viên ngậm: hấp thu toàn thân rất ít → không có tương tác thuốc đáng kể với thuốc uống. Tác dụng phụ chủ yếu: phản ứng mẫn cảm tại chỗ (hiếm).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 19t, đau họng + hạch cổ to + mệt mỏi kéo dài 2 tuần. DS nghĩ đến gì?",
            "opts": [
                "Viêm họng virus thông thường",
                "Nghi tăng bạch cầu đơn nhân nhiễm trùng (glandular fever) — chuyển BS",
                "Viêm amygdale mạn tính"
            ],
            "ans": 1,
            "exp": "Thanh thiếu niên + đau họng + hạch cổ to + mệt mỏi kéo dài → nghi glandular fever (nhiễm EBV). Cần chuyển BS: nguy cơ lách to (tránh va chạm mạnh), triệu chứng kéo dài hàng tuần–tháng.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng sinh nên được kê cho tất cả trường hợp đau họng kèm sốt để phòng biến chứng.",
            "ans": false,
            "exp": "Đại đa số đau họng do virus (>70%) → kháng sinh không có tác dụng. Chỉ kê kháng sinh khi FeverPAIN ≥4 hoặc Centor ≥3 (nghi Streptococcus nhóm A) và triệu chứng nặng.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen phế quản bị đau họng. DS tư vấn thuốc giảm đau nào cần thận trọng?",
            "opts": [
                "Paracetamol",
                "Ibuprofen/flurbiprofen",
                "Benzydamine xịt"
            ],
            "ans": 1,
            "exp": "NSAID (ibuprofen, flurbiprofen) có thể gây co thắt phế quản ở BN hen nhạy cảm với NSAID (~10% BN hen người lớn). Paracetamol an toàn. Benzydamine tại chỗ ít nguy cơ.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Viên ngậm benzydamine 3 mg dùng cho đối tượng nào?",
            "opts": [
                "Chỉ người lớn >18 tuổi",
                "Người lớn và trẻ >6 tuổi, ngậm 1 viên × 3 lần/ngày",
                "Trẻ từ 3 tuổi"
            ],
            "ans": 1,
            "exp": "Benzydamine viên ngậm 3 mg: dùng cho người lớn và trẻ >6 tuổi, liều 1 viên × 3 lần/ngày. Dạng xịt có thể dùng sớm hơn (tính theo cân nặng ở trẻ <6 tuổi).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol và NSAID (ibuprofen) đều hiệu quả giảm đau họng khi dùng đều đặn theo liều khuyến cáo.",
            "ans": true,
            "exp": "Review (Thomas et al., 2000) xác nhận cả paracetamol và NSAID (ibuprofen) đều hiệu quả giảm đau và sốt do đau họng khi dùng đều đặn. Có thể dùng đơn lẻ hoặc xen kẽ nếu cần.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng 3 tuần, không đáp ứng OTC, giọng khàn kéo dài. DS lo ngại gì?",
            "opts": [
                "Viêm họng virus kéo dài bình thường",
                "Nghi bệnh lý nghiêm trọng (ung thư thanh quản/amygdale) — chuyển BS",
                "Trào ngược dạ dày"
            ],
            "ans": 1,
            "exp": "Đau họng >2 tuần không đáp ứng điều trị + khàn giọng kéo dài = Red Flag → nghi ung thư thanh quản, ung thư amygdale (đặc biệt BN >50 tuổi, hút thuốc, uống rượu). Chuyển BS ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng + nuốt khó thực sự (không phải đau khi nuốt). DS phải làm gì?",
            "opts": [
                "Tư vấn thuốc tê tại chỗ giảm nuốt khó",
                "Chuyển BS ngay vì dysphagia thực sự là Red Flag",
                "Cho dùng thuốc kháng viêm mạnh hơn"
            ],
            "ans": 1,
            "exp": "Dysphagia thực sự (khó nuốt do tắc cơ học, không phải đau khi nuốt) = Red Flag → nghi áp-xe quanh amygdale, ung thư thực quản, hoặc viêm nặng gây hẹp đường thở. Chuyển BS ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tiêu chuẩn FeverPAIN gồm 5 yếu tố: sốt 24h qua, mủ trên amygdale, đến khám nhanh (≤3 ngày), viêm amygdale nặng, không ho/sổ mũi.",
            "ans": true,
            "exp": "FeverPAIN: Fever (sốt 24h qua) + Purulence (mủ amygdale) + Attend rapidly (≤3 ngày) + Inflamed tonsils (viêm nặng) + No cough/coryza. Mỗi yếu tố 1 điểm. Score ≥4: nghi Strep A, cân nhắc kháng sinh.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ nhỏ bị đau họng + phát ban đỏ lan từ cổ xuống thân mình, da sần như giấy nhám. DS nghi bệnh gì?",
            "opts": [
                "Viêm họng virus thông thường",
                "Ban đỏ (scarlet fever) — chuyển BS ngay",
                "Dị ứng thuốc"
            ],
            "ans": 1,
            "exp": "Đau họng + phát ban đỏ sần (sandpaper rash) lan từ cổ xuống thân + lưỡi dâu tây → scarlet fever (do Strep A tiết độc tố). Cần kháng sinh (penicillin) → chuyển BS ngay.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đa số đau họng do virus tự khỏi trong vòng 7–10 ngày mà không cần kháng sinh.",
            "ans": true,
            "exp": "70–80% đau họng do virus → tự khỏi 7–10 ngày. Ngay cả nhiễm Strep A, phần lớn cũng tự khỏi. Kháng sinh rút ngắn triệu chứng ~1 ngày và giảm nguy cơ biến chứng (hiếm) như sốt thấp.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng kèm sốt, mệt lả, loét miệng nhiều nơi, hơi thở hôi. DS phân biệt với gì?",
            "opts": [
                "Viêm họng virus thông thường",
                "Viêm nướu-miệng herpes (herpetic gingivostomatitis) — chuyển BS",
                "Viêm amygdale tái phát mạn"
            ],
            "ans": 1,
            "exp": "Đau họng + loét miệng nhiều vị trí + sốt + hơi thở hôi → nghi herpetic gingivostomatitis (HSV-1, thường gặp ở trẻ nhỏ). Cần chuyển BS, có thể cần aciclovir nếu nặng.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Yếu tố nào KHÔNG thuộc tiêu chuẩn Centor trong đánh giá đau họng do vi khuẩn?",
            "opts": [
                "Xuất tiết amygdale",
                "Ho",
                "Hạch cổ trước sưng đau"
            ],
            "ans": 1,
            "exp": "Centor gồm 4 yếu tố: (1) xuất tiết/mủ amygdale, (2) hạch cổ trước sưng đau, (3) sốt >38°C, (4) KHÔNG ho. Ho gợi ý nguyên nhân virus hơn vi khuẩn → có ho = giảm 1 điểm.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN dùng carbimazole (điều trị cường giáp) bị đau họng + sốt — DS chỉ cần tư vấn OTC mà không cần chuyển BS.",
            "ans": false,
            "exp": "Carbimazole có thể gây giảm bạch cầu hạt (agranulocytosis) — tác dụng phụ hiếm nhưng nguy hiểm. Đau họng + sốt ở BN dùng carbimazole = cảnh báo → chuyển BS xét nghiệm công thức máu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng 4 ngày, có triệu chứng: sổ mũi, ho khan, hắt hơi, giọng khàn nhẹ. DS đánh giá thế nào?",
            "opts": [
                "Nghi nhiễm Strep A vì giọng khàn",
                "Viêm họng virus — xử trí OTC triệu chứng",
                "Cần kháng sinh dự phòng biến chứng"
            ],
            "ans": 1,
            "exp": "Đau họng + triệu chứng cảm (sổ mũi, ho, hắt hơi) = pattern virus kinh điển. Giọng khàn do viêm thanh quản virus. Không cần kháng sinh. Tư vấn OTC: thuốc tê tại chỗ, paracetamol, uống ấm.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Herpangina gây đau họng với các vết loét nhỏ ở vòm họng sau, thường do enterovirus, thường gặp ở trẻ em mùa hè.",
            "ans": true,
            "exp": "Herpangina: do Coxsackievirus/enterovirus, gặp chủ yếu ở trẻ em, mùa hè. Loét nhỏ ở vòm họng sau + sốt + đau họng. Tự khỏi 7–10 ngày. Phân biệt với herpes (loét ở môi/nướu phía trước).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng 2 tuần, kèm khó nuốt tiến triển, sụt cân 3 kg, 58 tuổi, hút thuốc 20 năm. DS lo ngại gì?",
            "opts": [
                "Viêm họng mạn do hút thuốc",
                "Nghi ung thư vùng hầu họng — chuyển BS khẩn",
                "Trào ngược gây đau họng mạn"
            ],
            "ans": 1,
            "exp": "Đau họng kéo dài + khó nuốt tiến triển + sụt cân + BN >50 tuổi + hút thuốc = Red Flag ung thư vùng hầu họng (ung thư thanh quản, amygdale). Chuyển BS khẩn để nội soi và sinh thiết.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS có thể dùng thang điểm FeverPAIN hoặc Centor để đánh giá nguy cơ nhiễm Strep A tại nhà thuốc.",
            "ans": true,
            "exp": "FeverPAIN và Centor là công cụ đánh giá lâm sàng đơn giản, có thể áp dụng tại nhà thuốc để phân loại nguy cơ nhiễm Strep A. FeverPAIN ≥4 hoặc Centor ≥3 → nghi Strep A → cân nhắc kháng sinh hoặc chuyển BS.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng + xuất hiện mảng xám dày bám chặt trên amygdale, khó lau, chảy máu khi cố lau. DS nghi gì?",
            "opts": [
                "Nhiễm nấm Candida thông thường",
                "Nghi bạch hầu (diphtheria) — chuyển cấp cứu ngay",
                "Viêm amygdale mủ do Strep A"
            ],
            "ans": 1,
            "exp": "Mảng giả mạc xám dày, bám chặt amygdale, chảy máu khi cố lau = nghi bạch hầu (rất hiếm nhưng nguy hiểm). Cần chuyển cấp cứu ngay. Khác với Candida (trắng, dễ lau) và Strep A (mủ trắng-vàng).",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau họng dữ dội, không thể nuốt thuốc viên. Dạng bào chế nào của paracetamol phù hợp?",
            "opts": [
                "Viên nén bao phim 500 mg",
                "Viên sủi bọt/dạng hòa tan",
                "Viên nang cứng 500 mg"
            ],
            "ans": 1,
            "exp": "BN đau họng nuốt khó → dạng viên sủi bọt/hòa tan dễ uống hơn viên nén cứng. Ngoài ra có thể dùng paracetamol dạng siro hoặc đạn hậu môn (suppository) nếu cần.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN đau họng kèm triệu chứng cúm rõ ràng (sốt cao đột ngột, đau cơ toàn thân, mệt nặng) — DS nên chuyển BS vì có thể cần thuốc kháng virus (oseltamivir).",
            "ans": true,
            "exp": "Nghi cúm (influenza): sốt cao đột ngột + đau cơ toàn thân + mệt nặng. Oseltamivir hiệu quả khi dùng trong 48h đầu. Nên chuyển BS đặc biệt ở nhóm nguy cơ cao (NCT, thai phụ, bệnh mạn tính).",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Flurbiprofen viên ngậm đã được chứng minh có lợi ích-nguy cơ tích cực và nên ưu tiên hơn paracetamol uống cho đau họng.",
            "ans": false,
            "exp": "Review trong Prescrire International (2007) kết luận flurbiprofen viên ngậm có \"cân bằng lợi ích-nguy cơ tiêu cực\" và khuyến cáo \"nên ngậm kẹo thật và uống paracetamol nếu cần\". Bằng chứng ưu việt so với giảm đau đơn giản còn thiếu.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Mọi BN đau họng kèm sốt đều cần được kê kháng sinh để phòng biến chứng thấp khớp.",
            "ans": false,
            "exp": "Chỉ đau họng do Strep A mới có nguy cơ thấp khớp. Đa số đau họng do virus → kháng sinh vô ích. Cần đánh giá FeverPAIN/Centor trước khi quyết định kháng sinh.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chlorhexidine viên ngậm giúp điều trị hiệu quả đau họng do virus vì có tác dụng kháng khuẩn mạnh.",
            "ans": false,
            "exp": "Chlorhexidine chỉ tác dụng trên vi khuẩn, không trên virus. Đa số đau họng do virus → chlorhexidine không cải thiện nguyên nhân. Thêm lo ngại về kháng khuẩn (antimicrobial resistance).",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau họng 5 ngày, FeverPAIN score 2 điểm. DS nên xử trí thế nào?",
            "opts": [
                "Kê kháng sinh ngay",
                "Tư vấn OTC triệu chứng + safety netting",
                "Chuyển cấp cứu"
            ],
            "ans": 1,
            "exp": "FeverPAIN 0–2: nguy cơ thấp nhiễm Strep A (13–18%). Không cần kháng sinh. Tư vấn OTC (thuốc tê, giảm đau) + safety netting: tái khám nếu >2 tuần hoặc nặng lên.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Aspirin dạng súc miệng đã được chứng minh qua thử nghiệm lâm sàng là hiệu quả cho đau họng.",
            "ans": false,
            "exp": "Không có thử nghiệm lâm sàng nào đánh giá hiệu quả của súc miệng aspirin cho đau họng. Đây là biện pháp dân gian, chưa có bằng chứng khoa học hỗ trợ. Không nên khuyến cáo thường quy.",
            "icon": "🧬"
        }
    ],
    "rhinitis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng trung bình–nặng, nghẹt mũi nặng, hắt hơi, chảy mũi. Nhóm thuốc nào hiệu quả toàn diện cho cả 4 triệu chứng mũi?",
            "opts": [
                "Kháng histamine thế hệ 2 uống",
                "Corticosteroid xịt mũi",
                "Thuốc co mạch xịt mũi"
            ],
            "ans": 1,
            "exp": "Corticosteroid xịt mũi (beclomethasone, fluticasone, mometasone) hiệu quả trên tất cả triệu chứng: nghẹt (++++), chảy mũi (+++), hắt hơi (+++), ngứa (+++). Kháng histamine yếu trên nghẹt mũi (+). Co mạch chỉ giảm nghẹt.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng nhẹ, chỉ hắt hơi và ngứa mũi, không nghẹt mũi. Ưu tiên dùng gì?",
            "opts": [
                "Corticosteroid xịt mũi",
                "Kháng histamine thế hệ 2 uống",
                "Thuốc co mạch uống"
            ],
            "ans": 1,
            "exp": "Viêm mũi dị ứng nhẹ, triệu chứng chủ yếu hắt hơi + ngứa → kháng histamine thế hệ 2 uống (loratadine, cetirizine) là ưu tiên. Corticosteroid xịt thường dành cho mức độ trung bình–nặng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN THA dùng amlodipine, viêm mũi dị ứng nghẹt mũi nặng. Thuốc nào CCĐ?",
            "opts": [
                "Cetirizine uống",
                "Pseudoephedrine uống",
                "Fluticasone xịt mũi"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine (sympathomimetic) gây co mạch toàn thân → tăng huyết áp. CCĐ ở BN THA. Cetirizine và fluticasone xịt mũi an toàn cho BN THA.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Corticosteroid xịt mũi cần lắc chai trước khi dùng vì thuốc ở dạng hỗn dịch (suspension).",
            "ans": true,
            "exp": "Corticosteroid xịt mũi là dạng hỗn dịch → cần lắc đều trước mỗi lần dùng để đảm bảo liều đồng nhất. Đây là lưu ý quan trọng khi tư vấn BN sử dụng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bắt đầu dùng fluticasone xịt mũi cho viêm mũi dị ứng. Khi nào đạt hiệu quả tối đa?",
            "opts": [
                "Ngay lập tức (trong 15 phút)",
                "Sau 3–7 giờ, tối đa sau vài ngày dùng đều đặn",
                "Sau 4–6 tuần"
            ],
            "ans": 1,
            "exp": "Corticosteroid xịt mũi bắt đầu tác dụng sau 3–7 giờ, nhưng cần dùng đều đặn hàng ngày để đạt hiệu quả tối đa (có thể mất vài ngày). Cần giải thích BN để đảm bảo tuân thủ.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng dai dẳng (persistent AR). Nguyên nhân dị nguyên phổ biến gây bệnh là gì?",
            "opts": [
                "Phấn hoa cỏ (tháng 5–8)",
                "Bụi nhà (house dust mite)",
                "Bào tử nấm (tháng 9–10)"
            ],
            "ans": 1,
            "exp": "Viêm mũi dị ứng dai dẳng (persistent AR): triệu chứng >4 ngày/tuần, >4 tuần. Dị nguyên chính: bụi nhà (house dust mite), lông động vật (đặc biệt mèo, chó). Phấn hoa gây viêm mũi dị ứng từng đợt (intermittent).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Viêm mũi dị ứng dai dẳng thường gây nghẹt mũi nặng, giảm khứu giác, và ít hắt hơi hơn dạng từng đợt.",
            "ans": true,
            "exp": "Persistent AR: nghẹt mũi chiếm ưu thế → giảm khứu giác (hyposmia), ít hắt hơi, ít triệu chứng mắt. Intermittent AR: hắt hơi + ngứa mũi + chảy mũi nước rõ hơn + hay kèm viêm kết mạc dị ứng.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng cetirizine 10 mg/ngày cho viêm mũi dị ứng nhưng vẫn còn triệu chứng breakthrough buổi chiều. DS tư vấn gì?",
            "opts": [
                "Tăng liều cetirizine lên 20 mg/ngày",
                "Đổi sang acrivastine (dùng 3 lần/ngày) để phân bổ tác dụng đều hơn",
                "Thêm pseudoephedrine uống"
            ],
            "ans": 1,
            "exp": "BN dùng kháng histamine 1 lần/ngày mà còn triệu chứng breakthrough → đổi sang acrivastine (8 mg × 3 lần/ngày). Dùng 3 lần/ngày phân bổ tác dụng đều, giảm breakthrough.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Sodium cromoglicate nhỏ mắt cho viêm kết mạc dị ứng cần dùng bao nhiêu lần/ngày và hạn chế gì?",
            "opts": [
                "1 lần/ngày, tác dụng nhanh",
                "4 lần/ngày, cần 4–6 tuần để đạt tối đa",
                "2 lần/ngày, tác dụng trong 1 giờ"
            ],
            "ans": 1,
            "exp": "Sodium cromoglicate nhỏ mắt: 1–2 giọt × 4 lần/ngày. Nhược điểm: cần 4–6 tuần đạt hiệu quả tối đa → chỉ hữu ích khi BN dự đoán được thời điểm khởi phát triệu chứng.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium cromoglicate nhỏ mắt an toàn cho thai phụ, phụ nữ cho con bú, và mọi nhóm BN.",
            "ans": true,
            "exp": "Sodium cromoglicate nhỏ mắt: không tương tác thuốc, tác dụng phụ hiếm (nhìn mờ thoáng qua). Kinh nghiệm lâm sàng cho thấy an toàn trong thai kỳ. An toàn cho con bú.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng nghẹt mũi rất nặng, cần giảm nhanh trong khi chờ corticosteroid xịt phát huy tác dụng. DS tư vấn gì?",
            "opts": [
                "Dùng thuốc co mạch xịt ngắn ngày (≤5–7 ngày) + bắt đầu corticosteroid xịt",
                "Dùng thuốc co mạch xịt dài hạn thay corticosteroid",
                "Chờ corticosteroid phát huy tác dụng, không cần thêm gì"
            ],
            "ans": 0,
            "exp": "Thuốc co mạch xịt mũi tác dụng nhanh (5–15 phút) → giảm nghẹt nhanh. Dùng ngắn ngày (≤5–7 ngày) để \"bắc cầu\" trong khi chờ corticosteroid xịt phát huy tác dụng. Không dùng dài hạn.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều beclomethasone (Beconase) xịt mũi chuẩn là bao nhiêu?",
            "opts": [
                "1 nhát × 1 lần/ngày (200 µg/ngày)",
                "2 nhát mỗi bên × 2 lần/ngày (400 µg/ngày)",
                "4 nhát mỗi bên × 3 lần/ngày (1200 µg/ngày)"
            ],
            "ans": 1,
            "exp": "Beclomethasone (Beconase): 2 nhát mỗi bên mũi × 2 lần/ngày (400 µg/ngày). Khi cải thiện, giảm xuống 1 nhát × 2 lần/ngày. Nếu tái phát, quay lại liều chuẩn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Fluticasone, mometasone, budesonide và triamcinolone xịt mũi chỉ cần dùng 1 lần/ngày, trong khi beclomethasone cần 2 lần/ngày.",
            "ans": true,
            "exp": "Fluticasone (Pirinase), mometasone (Clarinaze), budesonide (Benacort), triamcinolone (Nasacort): 2 nhát mỗi bên × 1 lần/ngày. Beclomethasone (Beconase): 2 nhát mỗi bên × 2 lần/ngày. Liều ít hơn → tuân thủ tốt hơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ thường gặp của corticosteroid xịt mũi OTC là gì?",
            "opts": [
                "Suy thượng thận do ức chế trục HPA",
                "Kích ứng mũi, chảy máu cam, đau đầu",
                "Tăng cân, phù mặt"
            ],
            "ans": 1,
            "exp": "Tác dụng phụ tại chỗ: kích ứng mũi, chảy máu cam (epistaxis), đau đầu. Fluticasone và beclomethasone có thể gây vị giác/khứu giác bất thường. Tác dụng phụ toàn thân (suy thượng thận) cực hiếm với liều OTC.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng kèm viêm kết mạc dị ứng (ngứa mắt, đỏ mắt). Nhóm thuốc OTC nào hiệu quả cho cả triệu chứng mũi và mắt?",
            "opts": [
                "Thuốc co mạch xịt mũi",
                "Kháng histamine thế hệ 2 uống",
                "Corticosteroid xịt mũi"
            ],
            "ans": 1,
            "exp": "Kháng histamine uống (cetirizine, loratadine): hiệu quả cả triệu chứng mũi (hắt hơi, ngứa, chảy mũi) và mắt (ngứa, đỏ) (++). Corticosteroid xịt mũi cũng giảm triệu chứng mắt (++) qua ức chế phản xạ mũi-mắt.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc co mạch nhỏ mắt (naphazoline, xylometazoline mắt) có thể dùng dài hạn cho viêm kết mạc dị ứng.",
            "ans": false,
            "exp": "Thuốc co mạch nhỏ mắt: dùng tối đa <7 ngày để tránh rebound congestion (đỏ mắt phản hồi). Chỉ giảm đỏ mắt, không điều trị nguyên nhân dị ứng nền.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN lái xe, viêm mũi dị ứng cần kháng histamine. Thuốc nào phù hợp?",
            "opts": [
                "Chlorphenamine",
                "Cetirizine hoặc loratadine",
                "Diphenhydramine"
            ],
            "ans": 1,
            "exp": "Cetirizine và loratadine (thế hệ 2): ít gây buồn ngủ, phù hợp cho BN lái xe, vận hành máy móc. Chlorphenamine và diphenhydramine (thế hệ 1) gây an thần mạnh → CCĐ lái xe.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng, dùng xylometazoline xịt mũi >10 ngày, nay nghẹt mũi nặng hơn dù không tiếp xúc dị nguyên. Nguyên nhân?",
            "opts": [
                "Dị ứng mới xuất hiện",
                "Rhinitis medicamentosa do dùng co mạch quá lâu",
                "Viêm xoang bội nhiễm"
            ],
            "ans": 1,
            "exp": "Thuốc co mạch xịt >5–7 ngày → mất nhạy cảm alpha-adrenoceptor → giãn mạch phản hồi = rhinitis medicamentosa. BN phải ngừng thuốc co mạch, chuyển sang NaCl + corticosteroid xịt.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cetirizine có thể gây buồn ngủ ở một số BN dù được xếp vào kháng histamine thế hệ 2.",
            "ans": true,
            "exp": "Cetirizine tuy là thế hệ 2 nhưng có tính chất \"minimally sedating\" — có thể gây buồn ngủ nhẹ ở một số BN (ít hơn thế hệ 1 nhưng không hoàn toàn không gây buồn ngủ). Loratadine và desloratadine ít buồn ngủ hơn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ mang thai, viêm mũi dị ứng nghẹt mũi. Thuốc nào là ưu tiên?",
            "opts": [
                "Pseudoephedrine uống",
                "NaCl 0.9% rửa mũi + cetirizine nếu cần",
                "Oxymetazoline xịt mũi liều cao"
            ],
            "ans": 1,
            "exp": "Thai phụ: NaCl rửa mũi an toàn ưu tiên 1. Cetirizine/loratadine: hồ sơ an toàn tốt trong thai kỳ (nhiều dữ liệu). Tránh sympathomimetic uống. Corticosteroid xịt mũi: beclomethasone có dữ liệu an toàn thai kỳ.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phân loại ARIA chia viêm mũi dị ứng thành intermittent và persistent dựa trên tiêu chí nào?",
            "opts": [
                "Mức độ nặng của nghẹt mũi",
                "Thời gian triệu chứng: <4 ngày/tuần hoặc <4 tuần vs ≥4 ngày/tuần và ≥4 tuần",
                "Loại dị nguyên gây bệnh"
            ],
            "ans": 1,
            "exp": "ARIA: Intermittent = <4 ngày/tuần HOẶC <4 tuần; Persistent = ≥4 ngày/tuần VÀ ≥4 tuần. Mỗi nhóm chia tiếp: nhẹ hoặc trung bình–nặng (dựa trên ảnh hưởng giấc ngủ, sinh hoạt, công việc).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine uống có tác dụng giảm nghẹt mũi mạnh tương đương corticosteroid xịt mũi.",
            "ans": false,
            "exp": "Kháng histamine uống: giảm nghẹt mũi yếu (+). Corticosteroid xịt mũi: giảm nghẹt mũi mạnh (+++). Thuốc co mạch: giảm nghẹt mạnh (++++). Nếu nghẹt mũi là triệu chứng chính, kháng histamine đơn thuần không đủ.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng mùa, biết trước mùa phấn hoa. Khi nào nên bắt đầu corticosteroid xịt mũi?",
            "opts": [
                "Khi triệu chứng nặng",
                "1–2 tuần trước mùa phấn hoa dự kiến",
                "Ngay lúc triệu chứng bắt đầu"
            ],
            "ans": 1,
            "exp": "Corticosteroid xịt mũi cần thời gian phát huy tối đa. Bắt đầu 1–2 tuần trước mùa dị ứng dự kiến → phòng ngừa hiệu quả. Nếu đã có triệu chứng, vẫn bắt đầu ngay nhưng hiệu quả chậm hơn.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng, dùng loratadine 10 mg/ngày hiệu quả tốt. BN hỏi có thể uống rượu khi dùng thuốc không?",
            "opts": [
                "Tuyệt đối không được",
                "Loratadine ít tương tác rượu, nhưng nên thận trọng",
                "Hoàn toàn an toàn, không lo"
            ],
            "ans": 1,
            "exp": "Loratadine (thế hệ 2) ít gây buồn ngủ và ít tương tác với rượu hơn thế hệ 1. Tuy nhiên, vẫn nên thận trọng vì rượu có thể làm tăng nhẹ tác dụng an thần ở một số cá nhân.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Butterbur (Petasites hybridus) đã được chứng minh rõ ràng có thể thay thế kháng histamine trong viêm mũi dị ứng.",
            "ans": false,
            "exp": "Một số nghiên cứu nhỏ so sánh butterbur với cetirizine/fexofenadine cho kết quả tương đương. Tuy nhiên, bằng chứng chưa đủ mạnh (ít nghiên cứu, mẫu nhỏ), lo ngại an toàn (alkaloid pyrrolizidine độc gan). Không nên khuyến cáo thường quy.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng dùng corticosteroid xịt mũi 2 tuần nhưng không thấy hiệu quả. DS tư vấn gì?",
            "opts": [
                "Ngừng thuốc vì không hiệu quả",
                "Kiểm tra kỹ thuật xịt mũi + đảm bảo dùng đều đặn hàng ngày",
                "Tăng liều gấp đôi ngay"
            ],
            "ans": 1,
            "exp": "Nguyên nhân phổ biến nhất khi corticosteroid xịt không hiệu quả: kỹ thuật xịt sai + không dùng đều đặn. Cần kiểm tra: BN có lắc chai, xịt đúng hướng, dùng hàng ngày không.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng MAOI cho trầm cảm, viêm mũi dị ứng nghẹt mũi. Thuốc nào CCĐ tuyệt đối?",
            "opts": [
                "Cetirizine uống",
                "Pseudoephedrine uống",
                "Fluticasone xịt mũi"
            ],
            "ans": 1,
            "exp": "Pseudoephedrine + MAOI → nguy cơ cơn tăng huyết áp (hypertensive crisis) do ức chế phân hủy noradrenaline. CCĐ tuyệt đối. Kháng histamine uống và corticosteroid xịt an toàn.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine thế hệ 1 (chlorphenamine) bắt đầu tác dụng trong 1 giờ, trong khi corticosteroid xịt cần 12 giờ trở lên.",
            "ans": true,
            "exp": "Kháng histamine uống: onset 1 giờ, duration 12–24 giờ. Corticosteroid xịt: onset 12 giờ, duration 12–48 giờ. Thuốc co mạch xịt: onset 5–15 phút, duration 3–6 giờ (nhanh nhưng ngắn).",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 4 tuổi, viêm mũi dị ứng, chảy mũi nước, hắt hơi. Kháng histamine nào phù hợp?",
            "opts": [
                "Diphenhydramine",
                "Cetirizine hoặc loratadine dạng siro",
                "Acrivastine"
            ],
            "ans": 1,
            "exp": "Cetirizine siro (từ 2 tuổi) và loratadine siro (từ 2 tuổi): kháng histamine thế hệ 2, an toàn cho trẻ. Diphenhydramine gây buồn ngủ mạnh. Acrivastine thường chỉ có dạng viên nang cho người lớn.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ipratropium bromide xịt mũi hiệu quả trong giảm chảy mũi nước (rhinorrhoea) ở viêm mũi dị ứng.",
            "ans": true,
            "exp": "Ipratropium bromide xịt mũi (kháng cholinergic tại chỗ): giảm rhinorrhoea (++) nhưng không tác dụng trên hắt hơi, ngứa, nghẹt mũi. Onset 15–20 phút, duration 4–12 giờ.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng, dị ứng bụi nhà. Biện pháp non-pharm nào DS nên tư vấn?",
            "opts": [
                "Dùng bọc nệm chống bụi nhà, giặt ga giường ≥60°C hàng tuần",
                "Xông hơi tinh dầu mỗi ngày",
                "Uống nước chanh mật ong hàng ngày"
            ],
            "ans": 0,
            "exp": "Tránh dị nguyên: bọc nệm/gối chống dust mite, giặt ga giường ≥60°C (diệt mite), giữ độ ẩm phòng <50%, hút bụi thường xuyên. Xông hơi và nước chanh không có bằng chứng trong AR.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN chảy mũi 1 bên, dịch mũi đục/mủ. DS lo ngại gì?",
            "opts": [
                "Viêm mũi dị ứng thông thường",
                "Dấu hiệu bất thường (dị vật, polyp, u mũi) — chuyển BS",
                "Cảm cúm giai đoạn muộn"
            ],
            "ans": 1,
            "exp": "Chảy mũi 1 bên = Red Flag. Viêm mũi dị ứng thường 2 bên. Chảy 1 bên gợi ý: dị vật (trẻ em), polyp mũi, u mũi, lệch vách ngăn. Cần chuyển BS khám.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm mũi dị ứng có thể ảnh hưởng đáng kể đến chất lượng cuộc sống, hiệu suất làm việc/học tập và giấc ngủ.",
            "ans": true,
            "exp": "AR ảnh hưởng rõ rệt đến chất lượng cuộc sống: rối loạn giấc ngủ, giảm tập trung, giảm hiệu suất làm việc/học tập. ARIA phân loại mức độ nặng dựa trên ảnh hưởng này.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN hắt hơi liên tục từng đợt (paroxysmal sneezing) + ngứa mũi, ngứa mắt, tiền sử gia đình cơ địa dị ứng. DS nghĩ đến gì?",
            "opts": [
                "Cảm cúm thông thường",
                "Viêm mũi dị ứng",
                "Viêm xoang cấp"
            ],
            "ans": 1,
            "exp": "Hắt hơi paroxysmal + ngứa mũi/mắt + tiền sử atopy gia đình = pattern kinh điển viêm mũi dị ứng. Cảm cúm: hắt hơi lẻ tẻ, ít ngứa, có sốt/đau cơ. Viêm xoang: đau vùng mặt, mất khứu giác.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm mũi dị ứng dai dẳng, thường bị viêm xoang tái phát. DS nhận thấy mối liên quan gì?",
            "opts": [
                "Hai bệnh không liên quan",
                "AR dai dẳng là yếu tố nguy cơ gây viêm xoang mạn",
                "Viêm xoang gây ra AR"
            ],
            "ans": 1,
            "exp": "Viêm mũi dị ứng dai dẳng → phù nề niêm mạc mũi mạn tính → tắc lỗ thông xoang → tăng nguy cơ viêm xoang tái phát. BN persistent AR có tần suất viêm xoang mạn cao hơn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS có thể phân biệt viêm mũi nhiễm trùng (infective rhinitis) với viêm mũi dị ứng dựa vào tính chất dịch mũi: dịch đục/mủ gợi ý nhiễm trùng, dịch trong gợi ý dị ứng.",
            "ans": true,
            "exp": "Infective rhinitis (virus): dịch mũi mucopurulent (đục, vàng-xanh), ít ngứa mũi, kèm triệu chứng toàn thân (sốt, đau cơ). AR: dịch trong (watery), ngứa mũi rõ, hắt hơi paroxysmal, triệu chứng theo mùa/tiếp xúc dị nguyên.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN mới dùng thuốc hạ áp (prazosin) 2 tuần, nay xuất hiện nghẹt mũi kéo dài. DS nghĩ đến gì?",
            "opts": [
                "Viêm mũi dị ứng mới khởi phát",
                "Viêm mũi do thuốc (drug-induced rhinitis)",
                "Cảm cúm virus"
            ],
            "ans": 1,
            "exp": "Nhiều thuốc gây viêm mũi: alpha-blocker (prazosin), ACEi, methyldopa, oral contraceptive, chlorpromazine, aspirin/NSAID. Cần xem xét thuốc mới bắt đầu gần đây khi BN xuất hiện nghẹt mũi mạn tính.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm mũi dị ứng từng đợt (intermittent AR) do phấn hoa có triệu chứng mắt thường nổi bật hơn viêm mũi dị ứng dai dẳng.",
            "ans": true,
            "exp": "Intermittent AR (hay fever): triệu chứng mắt (ngứa, đỏ, chảy nước mắt) thường nổi bật do phấn hoa tiếp xúc trực tiếp niêm mạc mắt. Persistent AR: triệu chứng mắt ít hơn, nghẹt mũi chiếm ưu thế.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nghẹt mũi mạn, không đáp ứng kháng histamine và corticosteroid xịt, polyp mũi nhìn thấy. DS nên làm gì?",
            "opts": [
                "Tăng liều corticosteroid xịt",
                "Chuyển BS tai mũi họng — có thể cần phẫu thuật",
                "Thêm thuốc co mạch uống"
            ],
            "ans": 1,
            "exp": "Polyp mũi gây nghẹt mũi cơ học → không đáp ứng tốt thuốc nội khoa đơn thuần. Cần chuyển BS TMH đánh giá kích thước polyp, có thể cần phẫu thuật cắt polyp + corticosteroid xịt sau mổ.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm mũi dị ứng, DS tư vấn tránh dị nguyên. Lời khuyên nào đúng về phấn hoa?",
            "opts": [
                "Mở cửa sổ rộng ban ngày cho thoáng",
                "Đeo kính mát, đóng cửa xe khi lái, tránh phơi quần áo ngoài trời vào mùa phấn hoa",
                "Phấn hoa không thể tránh được nên không cần biện pháp"
            ],
            "ans": 1,
            "exp": "Biện pháp tránh phấn hoa: đeo kính mát, đóng cửa xe/nhà, không phơi quần áo ngoài trời mùa phấn hoa, tắm rửa thay đồ khi về nhà, theo dõi bản tin phấn hoa.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ em viêm mũi dị ứng thường hay chà mũi bằng tay (allergic salute), có thể thấy nếp nhăn ngang sống mũi.",
            "ans": true,
            "exp": "\"Allergic salute\": trẻ dùng lòng bàn tay chà mũi từ dưới lên do ngứa mũi. Lặp đi lặp lại tạo nếp nhăn ngang sống mũi (nasal crease). Đây là dấu hiệu gợi ý AR ở trẻ em.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng corticosteroid xịt mũi bị chảy máu cam. DS tư vấn gì?",
            "opts": [
                "Ngừng thuốc ngay vĩnh viễn",
                "Hướng dẫn xịt ra phía vách mũi ngoài (tránh vách ngăn) + dùng NaCl trước khi xịt",
                "Đổi sang thuốc co mạch dùng lâu dài"
            ],
            "ans": 1,
            "exp": "Chảy máu cam do corticosteroid xịt thường do xịt trúng vách ngăn mũi (septum). Cách khắc phục: xịt hướng ra vách ngoài, dùng NaCl trước để làm ẩm niêm mạc. Không cần ngừng thuốc.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antazoline–xylometazoline nhỏ mắt (Otrivine-Antistin) nên dùng ngắn hạn (<7 ngày) để tránh rebound conjunctivitis.",
            "ans": true,
            "exp": "Sản phẩm phối hợp antazoline (antihistamine) + xylometazoline (sympathomimetic) nhỏ mắt: dùng tối đa <7 ngày. Xylometazoline mắt dùng lâu → rebound (đỏ mắt phản hồi) tương tự xịt mũi.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm mũi dị ứng dai dẳng, hen phế quản kèm theo. DS cần lưu ý gì?",
            "opts": [
                "Hai bệnh không liên quan, điều trị riêng",
                "AR và hen liên quan mật thiết (ARIA) — kiểm soát AR giúp kiểm soát hen tốt hơn",
                "Chỉ cần điều trị hen, AR tự khỏi"
            ],
            "ans": 1,
            "exp": "ARIA (Allergic Rhinitis and its Impact on Asthma): AR và hen là biểu hiện của cùng 1 quá trình viêm dị ứng đường thở. Kiểm soát AR tốt → giảm triệu chứng hen. BN hen + AR nên được điều trị cả hai.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm mũi dị ứng (allergic rhinitis) chỉ gây triệu chứng ở mũi, không ảnh hưởng đến giấc ngủ hay tâm trạng.",
            "ans": false,
            "exp": "AR ảnh hưởng rộng: rối loạn giấc ngủ (nghẹt mũi → ngáy, ngừng thở khi ngủ), mệt mỏi ban ngày, giảm tập trung, ảnh hưởng tâm trạng và chất lượng cuộc sống. ARIA phân loại mức độ nặng dựa trên ảnh hưởng này.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Loratadine và cetirizine khác nhau ở điểm nào quan trọng?",
            "opts": [
                "Loratadine kê đơn, cetirizine OTC",
                "Cetirizine có thể gây buồn ngủ nhẹ hơn loratadine ở một số BN",
                "Loratadine dùng 3 lần/ngày, cetirizine 1 lần/ngày"
            ],
            "ans": 1,
            "exp": "Cả hai đều OTC, 1 lần/ngày, 10 mg. Khác biệt: cetirizine \"minimally sedating\" — có thể gây buồn ngủ nhẹ ở một số BN nhiều hơn loratadine. Nếu BN lo buồn ngủ, ưu tiên loratadine/desloratadine.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc co mạch xịt mũi (oxymetazoline) là lựa chọn hàng đầu cho viêm mũi dị ứng dai dẳng vì tác dụng nhanh.",
            "ans": false,
            "exp": "Thuốc co mạch xịt chỉ dùng ngắn hạn (≤5–7 ngày). Dùng dài hạn gây rhinitis medicamentosa. Viêm mũi dị ứng dai dẳng: corticosteroid xịt mũi là ưu tiên hàng đầu, dùng hàng ngày.",
            "icon": "⏱️"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Kháng histamine thế hệ 1 (chlorphenamine) được ưu tiên hơn thế hệ 2 trong viêm mũi dị ứng vì hiệu quả mạnh hơn.",
            "ans": false,
            "exp": "Hiệu quả chống dị ứng tương đương. Thế hệ 2 được ưu tiên vì ít buồn ngủ, ít anticholinergic, dùng 1 lần/ngày. Thế hệ 1 chỉ ưu tiên khi cần tác dụng an thần (mất ngủ do ngứa ban đêm).",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS nhà thuốc không có vai trò trong việc phân loại mức độ nặng viêm mũi dị ứng theo ARIA.",
            "ans": false,
            "exp": "DS hoàn toàn có thể áp dụng phân loại ARIA tại nhà thuốc: hỏi tần suất (intermittent vs persistent), mức độ ảnh hưởng giấc ngủ/sinh hoạt (mild vs moderate-severe) → chọn thuốc phù hợp.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nghẹt mũi mạn tính 1 bên, không đáp ứng kháng histamine hay corticosteroid xịt. DS lo ngại gì?",
            "opts": [
                "Viêm mũi dị ứng kháng trị — tăng liều",
                "Nguyên nhân cấu trúc (polyp, lệch vách ngăn, u) — chuyển BS TMH",
                "Rhinitis medicamentosa"
            ],
            "ans": 1,
            "exp": "Nghẹt mũi 1 bên, mạn tính, không đáp ứng thuốc → phải loại trừ nguyên nhân cấu trúc: polyp mũi, lệch vách ngăn, u lành/ác. Chuyển BS TMH khám nội soi mũi.",
            "icon": "🏥"
        }
    ],
    "sinusitis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp do virus 5 ngày, nghẹt mũi, đau vùng má, không sốt. DS ưu tiên tư vấn gì?",
            "opts": [
                "Kháng sinh amoxicillin ngay",
                "Giảm đau (paracetamol/ibuprofen) + thuốc co mạch xịt mũi ngắn ngày + NaCl rửa mũi",
                "Corticosteroid uống liều cao"
            ],
            "ans": 1,
            "exp": "Viêm xoang cấp <10 ngày, triệu chứng nhẹ–trung bình → đa số do virus, tự khỏi. Điều trị triệu chứng: giảm đau + co mạch xịt mũi (≤5–7 ngày) + rửa mũi NaCl. Kháng sinh không cần.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, đau vùng mặt + nghẹt mũi. Thuốc giảm đau nào phù hợp ưu tiên?",
            "opts": [
                "Paracetamol hoặc ibuprofen",
                "Tramadol",
                "Codeine"
            ],
            "ans": 0,
            "exp": "Giảm đau OTC (paracetamol, ibuprofen) là đủ cho đau vùng mặt trong viêm xoang cấp. Opioid (tramadol, codeine) không cần thiết và không phù hợp cho đau xoang thông thường.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc co mạch xịt mũi (oxymetazoline) có thể giúp thông lỗ xoang trong viêm xoang cấp, nhưng không nên dùng >5–7 ngày.",
            "ans": true,
            "exp": "Thuốc co mạch xịt giảm phù nề niêm mạc mũi → mở lỗ thông xoang → giúp dẫn lưu dịch xoang. Tuy nhiên, dùng >5–7 ngày → rhinitis medicamentosa → nghẹt mũi nặng hơn.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN THA dùng losartan, viêm xoang cấp nghẹt mũi nặng. DS chọn thuốc co mạch nào?",
            "opts": [
                "Pseudoephedrine uống 60 mg",
                "Oxymetazoline xịt mũi ngắn ngày",
                "Không dùng thuốc co mạch nào, chỉ NaCl"
            ],
            "ans": 1,
            "exp": "BN THA: tránh sympathomimetic uống (pseudoephedrine) vì tăng huyết áp toàn thân. Xịt mũi tại chỗ (oxymetazoline) ít hấp thu toàn thân hơn → an toàn hơn, dùng ngắn ngày. NaCl cũng là lựa chọn an toàn.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp 12 ngày, triệu chứng nặng lên (sốt quay lại, đau mặt tăng, dịch mũi mủ). DS xử trí thế nào?",
            "opts": [
                "Tiếp tục OTC thêm 1 tuần",
                "Chuyển BS vì nghi bội nhiễm vi khuẩn — có thể cần kháng sinh",
                "Tăng liều thuốc co mạch xịt mũi"
            ],
            "ans": 1,
            "exp": "Viêm xoang >10 ngày không cải thiện HOẶC triệu chứng nặng lên (double worsening: sốt quay lại, đau tăng) → nghi bội nhiễm vi khuẩn. Theo NICE NG79, cân nhắc kháng sinh.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng sinh nên được kê cho tất cả trường hợp viêm xoang cấp ngay từ đầu để phòng biến chứng.",
            "ans": false,
            "exp": "NICE NG79: đa số viêm xoang cấp do virus, tự khỏi trong 2–3 tuần. Kháng sinh chỉ cần khi: triệu chứng >10 ngày không cải thiện, triệu chứng nặng (sốt cao ≥39°C + dịch mủ), hoặc double worsening.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, dịch mũi xanh-vàng 4 ngày. Khách yêu cầu kháng sinh. DS giải thích thế nào?",
            "opts": [
                "Đúng, dịch xanh = vi khuẩn, cần kháng sinh",
                "Dịch xanh-vàng cũng gặp trong nhiễm virus — chưa đủ tiêu chuẩn kháng sinh",
                "Cho kháng sinh để BN yên tâm"
            ],
            "ans": 1,
            "exp": "Dịch mũi xanh-vàng do bạch cầu trung tính chứa myeloperoxidase → xảy ra cả trong nhiễm virus. Không phải bằng chứng nhiễm khuẩn. Cần thêm tiêu chí: triệu chứng >10 ngày, sốt cao, hoặc double worsening.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "NaCl rửa mũi (saline irrigation) có vai trò gì trong viêm xoang cấp?",
            "opts": [
                "Diệt vi khuẩn gây viêm xoang",
                "Loãng dịch nhầy, rửa sạch dị nguyên/virus, hỗ trợ dẫn lưu xoang",
                "Thay thế hoàn toàn kháng sinh"
            ],
            "ans": 1,
            "exp": "NaCl rửa mũi: loãng dịch nhầy, rửa sạch dị nguyên/virus/mảnh vụn tế bào, hỗ trợ dẫn lưu xoang tự nhiên. An toàn, rẻ tiền, hiệu quả bổ trợ. Không diệt vi khuẩn trực tiếp và không thay thế kháng sinh khi cần.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Corticosteroid xịt mũi có vai trò trong viêm xoang cấp bằng cách giảm phù nề niêm mạc, hỗ trợ thông thoáng lỗ xoang.",
            "ans": true,
            "exp": "Corticosteroid xịt mũi giảm viêm, giảm phù nề niêm mạc mũi → mở lỗ thông xoang → cải thiện dẫn lưu. Nhiều hướng dẫn khuyến cáo dùng bổ trợ trong viêm xoang cấp, đặc biệt khi có nền AR.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, đang dùng warfarin, đau vùng mặt. DS chọn thuốc giảm đau nào?",
            "opts": [
                "Ibuprofen 400 mg",
                "Paracetamol 1 g",
                "Aspirin 500 mg"
            ],
            "ans": 1,
            "exp": "BN dùng warfarin: tránh NSAID (ibuprofen, aspirin) vì tăng nguy cơ chảy máu. Paracetamol liều chuẩn an toàn, không tương tác đáng kể với warfarin khi dùng ngắn ngày.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy gan mạn, viêm xoang cấp, sốt nhẹ, đau mặt. DS chọn thuốc hạ sốt giảm đau nào?",
            "opts": [
                "Paracetamol liều cao (1 g × 4 lần/ngày)",
                "Ibuprofen 400 mg",
                "Paracetamol liều thấp (500 mg) + theo dõi chức năng gan"
            ],
            "ans": 1,
            "exp": "Suy gan mạn: paracetamol liều cao CCĐ (chất chuyển hóa NAPQI độc gan). Ibuprofen cần thận trọng nhưng ít phụ thuộc chuyển hóa gan hơn. Nếu dùng paracetamol, giảm liều + rút ngắn thời gian.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Xông hơi (steam inhalation) được nhiều BN ưa chuộng trong viêm xoang nhưng chưa có bằng chứng mạnh về hiệu quả.",
            "ans": true,
            "exp": "Xông hơi: BN cảm thấy dễ chịu tạm thời (chủ quan). Tuy nhiên, Cochrane review không tìm thấy bằng chứng mạnh về hiệu quả lâm sàng. Nguy cơ bỏng (đặc biệt trẻ em) cần cảnh báo.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp tái phát nhiều lần, nền viêm mũi dị ứng. DS tư vấn dự phòng thế nào?",
            "opts": [
                "Dùng kháng sinh dự phòng mỗi tháng",
                "Kiểm soát viêm mũi dị ứng nền (corticosteroid xịt mũi hàng ngày + tránh dị nguyên)",
                "Dùng thuốc co mạch xịt mũi hàng ngày"
            ],
            "ans": 1,
            "exp": "AR dai dẳng → phù nề niêm mạc → tắc lỗ xoang → viêm xoang tái phát. Kiểm soát AR nền (corticosteroid xịt + tránh dị nguyên) giúp giảm tần suất tái phát viêm xoang. Không dùng KS dự phòng hay co mạch dài hạn.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ mang thai tam cá nguyệt 2, viêm xoang cấp, nghẹt mũi + đau mặt. Phác đồ OTC nào phù hợp?",
            "opts": [
                "Pseudoephedrine uống + ibuprofen",
                "NaCl rửa mũi + paracetamol + xylometazoline xịt mũi ngắn ngày",
                "Codeine + thuốc co mạch uống"
            ],
            "ans": 1,
            "exp": "Thai phụ tam cá nguyệt 2: NaCl rửa mũi (an toàn), paracetamol (an toàn), xylometazoline xịt mũi ngắn ngày (cân nhắc được sau tam cá nguyệt 1, ít hấp thu toàn thân). Tránh pseudoephedrine uống, ibuprofen (CCĐ tam cá nguyệt 3).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine có vai trò quan trọng trong điều trị viêm xoang cấp do virus.",
            "ans": false,
            "exp": "Kháng histamine không có vai trò trong viêm xoang cấp do virus (không phải cơ chế dị ứng). Chỉ có vai trò nếu viêm xoang trên nền viêm mũi dị ứng (giảm triệu chứng AR nền).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ĐTĐ, viêm xoang cấp sốt 38°C. DS lưu ý gì khi tư vấn?",
            "opts": [
                "Chọn thuốc cảm sugar-free + nhắc theo dõi đường huyết thường xuyên",
                "ĐTĐ không ảnh hưởng đến cách xử trí viêm xoang",
                "Phải dùng kháng sinh ngay vì ĐTĐ nguy cơ nhiễm trùng cao"
            ],
            "ans": 0,
            "exp": "BN ĐTĐ + nhiễm trùng cấp: (1) chọn siro/thuốc sugar-free, (2) nhiễm trùng tăng nhu cầu insulin → theo dõi đường huyết thường xuyên, (3) chú ý thuốc co mạch có thể tăng đường huyết nhẹ.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, đau vùng mặt nặng, hỏi có nên chườm nóng. DS trả lời thế nào?",
            "opts": [
                "Chườm nóng CCĐ tuyệt đối trong viêm xoang",
                "Chườm ấm vùng mặt có thể giúp giảm đau tạm thời, là biện pháp bổ trợ an toàn",
                "Phải chườm lạnh, không được chườm nóng"
            ],
            "ans": 1,
            "exp": "Chườm ấm vùng mặt (khăn ấm, túi chườm) giúp giảm đau tạm thời, tăng lưu thông máu cục bộ. Là biện pháp bổ trợ an toàn kết hợp thuốc giảm đau. Không có CCĐ.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mucolytic (acetylcysteine, bromhexine) được khuyến cáo mạnh mẽ trong viêm xoang cấp để làm loãng dịch xoang.",
            "ans": false,
            "exp": "Bằng chứng cho mucolytic trong viêm xoang cấp rất hạn chế. Không được khuyến cáo mạnh trong các hướng dẫn lớn (NICE, EPOS). NaCl rửa mũi có bằng chứng tốt hơn về hỗ trợ dẫn lưu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy thận mạn (eGFR 20), viêm xoang cấp, đau mặt. Thuốc giảm đau nào an toàn?",
            "opts": [
                "Ibuprofen 400 mg",
                "Paracetamol 500–1000 mg",
                "Naproxen 500 mg"
            ],
            "ans": 1,
            "exp": "Suy thận mạn: NSAID (ibuprofen, naproxen) CCĐ vì giảm lưu lượng máu thận → nguy cơ suy thận cấp. Paracetamol không ảnh hưởng thận, an toàn ở liều chuẩn.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, hỏi mua thuốc xịt mũi co mạch cho con 3 tuổi. DS xử trí thế nào?",
            "opts": [
                "Bán oxymetazoline trẻ em liều thấp",
                "Từ chối — dùng NaCl nhỏ mũi cho trẻ, tránh co mạch ở trẻ <6 tuổi",
                "Bán pseudoephedrine siro trẻ em"
            ],
            "ans": 1,
            "exp": "Trẻ <6 tuổi: tránh thuốc co mạch mũi (thiếu bằng chứng hiệu quả, nguy cơ tác dụng phụ). NaCl 0.9% nhỏ mũi an toàn từ sơ sinh, giúp làm loãng dịch và hỗ trợ dẫn lưu.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dùng ibuprofen kết hợp paracetamol có thể hiệu quả hơn đơn thuần cho đau vùng mặt nặng trong viêm xoang.",
            "ans": true,
            "exp": "Phối hợp paracetamol + ibuprofen (xen kẽ hoặc đồng thời) giúp giảm đau tốt hơn đơn thuần vì cơ chế tác dụng khác nhau (trung ương vs ngoại vi). Phù hợp khi đau mặt nặng không đáp ứng đơn trị.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, đang dùng thuốc co mạch xịt mũi 10 ngày, nghẹt mũi nặng hơn. DS đánh giá gì?",
            "opts": [
                "Viêm xoang nặng lên — cần kháng sinh",
                "Rhinitis medicamentosa — ngừng co mạch, chuyển NaCl + corticosteroid xịt",
                "Dị ứng thuốc — ngừng tất cả thuốc"
            ],
            "ans": 1,
            "exp": "Thuốc co mạch xịt >7 ngày → rhinitis medicamentosa: nghẹt mũi phản hồi do mất nhạy cảm thụ thể alpha. Phải ngừng co mạch, dùng NaCl + corticosteroid xịt để kiểm soát triệu chứng trong giai đoạn cai thuốc.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp kèm ho có đờm (do dịch chảy sau mũi). Thuốc ho nào phù hợp?",
            "opts": [
                "Dextromethorphan ức chế ho",
                "Không cần thuốc ho — điều trị nghẹt mũi (thuốc co mạch + NaCl) sẽ giảm ho",
                "Codeine ức chế ho mạnh"
            ],
            "ans": 1,
            "exp": "Ho trong viêm xoang thường do postnasal drip (dịch chảy sau mũi xuống họng). Điều trị nguyên nhân (thông mũi: co mạch + NaCl + corticosteroid xịt) sẽ giảm ho. Không cần thuốc ức chế ho.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc co mạch uống (pseudoephedrine) hiệu quả hơn xịt mũi trong viêm xoang cấp.",
            "ans": false,
            "exp": "Thuốc co mạch xịt mũi tác dụng nhanh hơn (5–15 phút vs 30–60 phút), mạnh hơn tại chỗ, ít tác dụng toàn thân hơn dạng uống. Dạng uống không được ưu tiên trong viêm xoang cấp.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, dị ứng penicillin. Nếu cần kháng sinh, BS sẽ kê gì?",
            "opts": [
                "Amoxicillin liều cao",
                "Macrolide (azithromycin hoặc clarithromycin)",
                "Metronidazole"
            ],
            "ans": 1,
            "exp": "Dị ứng penicillin → không dùng amoxicillin. Thay thế: macrolide (azithromycin, clarithromycin) hoặc doxycycline. Metronidazole không phổ phù hợp cho viêm xoang.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen phế quản, viêm xoang cấp, đau mặt. DS tư vấn thuốc giảm đau nào thận trọng?",
            "opts": [
                "Paracetamol",
                "Ibuprofen",
                "Benzydamine xịt họng"
            ],
            "ans": 1,
            "exp": "~10% BN hen nhạy cảm NSAID (aspirin-exacerbated respiratory disease). Ibuprofen có thể gây co thắt phế quản ở nhóm này. Paracetamol an toàn cho hầu hết BN hen.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NaCl ưu trương (hypertonic saline 3%) có thể hiệu quả hơn NaCl đẳng trương (0.9%) trong rửa mũi xoang.",
            "ans": true,
            "exp": "NaCl ưu trương 3% tạo gradient thẩm thấu → kéo nước từ niêm mạc phù nề ra → giảm nghẹt + loãng dịch nhầy hiệu quả hơn NaCl 0.9%. Tuy nhiên có thể gây kích ứng mũi hơn ở một số BN.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 80 tuổi, suy tim, viêm xoang cấp nghẹt mũi. DS nên tránh thuốc nào?",
            "opts": [
                "NaCl 0.9% rửa mũi",
                "Pseudoephedrine uống",
                "Paracetamol 500 mg"
            ],
            "ans": 1,
            "exp": "NCT suy tim: pseudoephedrine gây co mạch, tăng huyết áp, tăng tải tim → có thể làm nặng suy tim. Tránh sympathomimetic uống. NaCl và paracetamol an toàn.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Corticosteroid xịt mũi OTC (fluticasone, mometasone) là thuốc kê đơn, DS không thể bán OTC.",
            "ans": false,
            "exp": "Nhiều corticosteroid xịt mũi hiện có dạng OTC tại nhiều quốc gia: fluticasone (Pirinase), mometasone (Clarinaze), beclomethasone (Beconase), triamcinolone (Nasacort), budesonide (Benacort). DS có thể tư vấn mà không cần toa.",
            "icon": "📋"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp, sốt 39.5°C, đau đầu dữ dội vùng trán, phù nề quanh mắt, nhìn đôi. DS xử trí gì?",
            "opts": [
                "Tư vấn thuốc giảm đau OTC mạnh hơn",
                "Chuyển cấp cứu ngay — nghi biến chứng nội sọ hoặc ổ mắt",
                "Cho kháng sinh phổ rộng OTC"
            ],
            "ans": 1,
            "exp": "Sốt cao + đau đầu dữ dội + phù quanh mắt + nhìn đôi = Red Flag biến chứng nguy hiểm: viêm mô hốc mắt (orbital cellulitis), áp-xe nội sọ. Cần cấp cứu ngay — có thể đe dọa tính mạng.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau nhức vùng mặt, nghẹt mũi, giảm khứu giác 8 ngày sau cảm. DS phân biệt viêm xoang cấp với cảm cúm bằng dấu hiệu nào?",
            "opts": [
                "Sổ mũi nước trong",
                "Mất khứu giác + đau nhức tập trung vùng xoang (má, trán)",
                "Hắt hơi liên tục kèm ngứa mũi"
            ],
            "ans": 1,
            "exp": "Viêm xoang cấp: đau nhức tập trung vùng xoang (má, trán, quanh mắt) + mất khứu giác (hyposmia/anosmia) + dịch mũi đục. Cảm cúm: triệu chứng lan tỏa hơn, ít đau vùng xoang tập trung.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm xoang cấp do virus thường tự khỏi trong 2–3 tuần mà không cần kháng sinh.",
            "ans": true,
            "exp": "Đa số viêm xoang cấp (<98%) do virus → tự khỏi trong 2–3 tuần. Chỉ ~0.5–2% tiến triển bội nhiễm vi khuẩn cần kháng sinh. NICE NG79 khuyến cáo \"watchful waiting\" + OTC triệu chứng.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp, nay xuất hiện sưng đỏ nóng quanh mắt 1 bên, mắt lồi, đau khi liếc mắt. DS lo gì?",
            "opts": [
                "Viêm kết mạc dị ứng kèm theo",
                "Viêm mô hốc mắt (orbital cellulitis) — chuyển cấp cứu",
                "Lẹo mắt thông thường"
            ],
            "ans": 1,
            "exp": "Sưng đỏ quanh mắt + lồi mắt (proptosis) + đau khi liếc mắt + viêm xoang = viêm mô hốc mắt (orbital cellulitis) — biến chứng nguy hiểm của viêm xoang. Có thể gây mù, nhiễm trùng nội sọ. Cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Triệu chứng nào giúp phân biệt viêm xoang cấp vi khuẩn với virus?",
            "opts": [
                "Dịch mũi xanh (virus cũng gây dịch xanh)",
                "Triệu chứng >10 ngày không cải thiện HOẶC nặng lên sau 5 ngày (double worsening)",
                "Nghẹt mũi 2 bên"
            ],
            "ans": 1,
            "exp": "Không có 1 triệu chứng đơn lẻ nào phân biệt chắc chắn. Tiêu chuẩn gợi ý vi khuẩn: (1) triệu chứng >10 ngày không cải thiện, (2) double worsening (cải thiện rồi nặng lại), (3) khởi phát nặng (sốt ≥39°C + dịch mủ ≥3 ngày).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau răng hàm trên có thể là dấu hiệu của viêm xoang hàm cấp.",
            "ans": true,
            "exp": "Xoang hàm (maxillary sinus) nằm sát chân răng hàm trên. Viêm xoang hàm → đau có thể lan xuống răng hàm trên, dễ nhầm với đau răng. Cần hỏi kỹ: có kèm nghẹt mũi, dịch mũi đục không.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp điều trị OTC 3 tuần, không cải thiện. DS nên làm gì?",
            "opts": [
                "Tiếp tục OTC thêm 2 tuần nữa",
                "Chuyển BS đánh giá — có thể cần kháng sinh hoặc loại trừ nguyên nhân khác",
                "Tăng liều thuốc co mạch xịt"
            ],
            "ans": 1,
            "exp": "Viêm xoang không cải thiện sau 2–3 tuần OTC → cần chuyển BS: (1) đánh giá vi khuẩn, (2) loại trừ polyp mũi, lệch vách ngăn, u, (3) cân nhắc kháng sinh hoặc imaging.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Cúi đầu xuống thường làm tăng đau vùng mặt trong viêm xoang cấp.",
            "ans": true,
            "exp": "Khi cúi đầu, áp lực trong xoang tăng → đau vùng mặt tăng rõ rệt. Đây là dấu hiệu lâm sàng hữu ích giúp gợi ý viêm xoang (khác với đau đầu do nguyên nhân khác).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp tái phát ≥4 lần/năm, mỗi đợt >10 ngày. DS nhận định gì?",
            "opts": [
                "Viêm xoang cấp thông thường, xử trí OTC mỗi đợt",
                "Nghi viêm xoang cấp tái phát — chuyển BS TMH đánh giá nguyên nhân nền",
                "Cho kháng sinh dự phòng hàng tháng"
            ],
            "ans": 1,
            "exp": "Viêm xoang cấp tái phát ≥4 đợt/năm → cần chuyển BS TMH: đánh giá yếu tố nền (polyp mũi, lệch vách ngăn, AR không kiểm soát, suy giảm miễn dịch). Có thể cần CT scan xoang.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp, nay đau đầu dữ dội + gáy cứng + sốt cao + rối loạn ý thức. DS lo gì?",
            "opts": [
                "Viêm xoang nặng cần kháng sinh liều cao",
                "Nghi viêm màng não do biến chứng viêm xoang — cấp cứu",
                "Sốt co giật lành tính"
            ],
            "ans": 1,
            "exp": "Đau đầu dữ dội + gáy cứng + sốt + rối loạn ý thức = tam chứng viêm màng não → biến chứng nội sọ của viêm xoang. Cần cấp cứu ngay, đe dọa tính mạng.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm xoang cấp thường gây đau vùng mặt tăng vào buổi sáng khi mới thức dậy do dịch ứ đọng qua đêm.",
            "ans": true,
            "exp": "Nằm ngủ → dịch ứ đọng trong xoang qua đêm → áp lực xoang tăng → đau mặt tăng vào sáng sớm. Sau khi đứng dậy, dịch dẫn lưu → đau giảm dần trong ngày.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Vị trí đau vùng mặt giúp gợi ý xoang nào bị viêm. Đau vùng trán gợi ý xoang nào?",
            "opts": [
                "Xoang hàm (maxillary)",
                "Xoang trán (frontal)",
                "Xoang sàng (ethmoid)"
            ],
            "ans": 1,
            "exp": "Đau trán → xoang trán. Đau vùng má/răng hàm trên → xoang hàm. Đau giữa hai mắt → xoang sàng. Đau sâu sau mắt → xoang bướm. Tuy nhiên triệu chứng có thể chồng lắp.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ em <10 tuổi hiếm khi bị viêm xoang trán vì xoang trán chưa phát triển đầy đủ.",
            "ans": true,
            "exp": "Xoang trán (frontal sinus) bắt đầu phát triển từ ~7 tuổi và chưa hoàn thiện đến ~12–14 tuổi. Trẻ nhỏ chủ yếu bị viêm xoang sàng (ethmoid) và xoang hàm (maxillary).",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp, hỏi tại sao BS không cho chụp X-quang xoang. DS giải thích thế nào?",
            "opts": [
                "X-quang xoang bắt buộc cho mọi viêm xoang",
                "Viêm xoang cấp không biến chứng thường chẩn đoán lâm sàng, imaging không cần thiết thường quy",
                "X-quang xoang cho kết quả chính xác hơn CT"
            ],
            "ans": 1,
            "exp": "NICE và EPOS: viêm xoang cấp không biến chứng chẩn đoán dựa trên lâm sàng. X-quang xoang có giá trị hạn chế (nhiều dương tính/âm tính giả). CT scan chỉ khi nghi biến chứng, mạn tính, hoặc trước phẫu thuật.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp, đang dùng MAOI. DS cần tránh tư vấn thuốc nào?",
            "opts": [
                "NaCl rửa mũi",
                "Pseudoephedrine uống",
                "Paracetamol 500 mg"
            ],
            "ans": 1,
            "exp": "MAOI + pseudoephedrine = tương tác nguy hiểm → cơn tăng huyết áp (hypertensive crisis). CCĐ tuyệt đối. Xịt mũi tại chỗ cũng cần thận trọng vì hấp thu qua niêm mạc.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm xoang cấp hỏi có nên dùng thuốc xịt mũi corticosteroid trong bao lâu. DS trả lời gì?",
            "opts": [
                "Chỉ 3 ngày",
                "2–4 tuần, sau đó đánh giá lại",
                "Phải dùng suốt đời"
            ],
            "ans": 1,
            "exp": "Corticosteroid xịt mũi cho viêm xoang cấp: thường dùng 2–4 tuần rồi đánh giá. Nếu có nền AR, có thể dùng lâu dài. Nếu viêm xoang đơn thuần, có thể ngừng khi hết triệu chứng.",
            "icon": "⏱️"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Hơi thở hôi (halitosis) có thể là triệu chứng của viêm xoang cấp do dịch mủ chảy sau mũi.",
            "ans": true,
            "exp": "Dịch mủ từ xoang chảy xuống họng (postnasal drip) → vi khuẩn phân hủy protein trong dịch mủ → hơi thở hôi. Đây là triệu chứng ít được chú ý nhưng gặp trong viêm xoang cấp.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol liều tối đa ở người lớn là 4 g/ngày (1 g × 4 lần, cách ≥4 giờ), kể cả khi phối hợp với thuốc cảm xoang chứa paracetamol.",
            "ans": true,
            "exp": "Tổng liều paracetamol từ TẤT CẢ nguồn (đơn thuần + thuốc cảm tổng hợp) không vượt 4 g/ngày. BN thường không biết thuốc cảm xoang chứa paracetamol → DS phải cảnh báo nguy cơ quá liều.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "X-quang xoang thường quy được khuyến cáo cho tất cả BN viêm xoang cấp tại nhà thuốc.",
            "ans": false,
            "exp": "X-quang xoang không được khuyến cáo thường quy trong viêm xoang cấp. Chẩn đoán dựa trên lâm sàng. X-quang có nhiều dương tính/âm tính giả. CT scan chỉ khi nghi biến chứng hoặc trước phẫu thuật.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng sinh liều thấp dùng kéo dài là biện pháp phòng ngừa viêm xoang cấp tái phát được khuyến cáo rộng rãi.",
            "ans": false,
            "exp": "Kháng sinh dự phòng dài hạn KHÔNG được khuyến cáo cho viêm xoang cấp tái phát: nguy cơ kháng thuốc, tác dụng phụ. Phòng ngừa: kiểm soát AR nền, NaCl rửa mũi, tránh dị nguyên/kích ứng.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm xoang cấp, dịch mũi hôi tanh 1 bên, đau răng hàm trên cùng bên. DS nghĩ đến gì?",
            "opts": [
                "Viêm xoang virus thông thường",
                "Viêm xoang hàm do răng (odontogenic sinusitis) — chuyển BS",
                "Viêm mũi dị ứng"
            ],
            "ans": 1,
            "exp": "Dịch mũi hôi 1 bên + đau răng hàm trên cùng bên → nghi viêm xoang hàm do răng (áp-xe răng, viêm quanh chóp lan sang xoang hàm). Cần chuyển BS răng hàm mặt.",
            "icon": "🏥"
        }
    ],
    "dyspepsia": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 45t, đau vùng thượng vị sau ăn, ợ hơi, đầy bụng. Chưa từng khám. DS xếp loại BN này thuộc nhóm nào theo NICE?",
            "opts": [
                "Dyspepsia đã chẩn đoán",
                "Uninvestigated dyspepsia — có thể xử trí OTC",
                "Peptic ulcer xác định"
            ],
            "ans": 1,
            "exp": "BN lần đầu có triệu chứng khó tiêu, chưa nội soi → uninvestigated dyspepsia theo NICE. DS có thể xử trí OTC (antacid, alginate, H2RA, PPI) nếu không có ALARM symptoms.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN khó tiêu nhẹ, đau thượng vị mơ hồ kèm ợ hơi. DS nên tư vấn thuốc hàng đầu nào?",
            "opts": [
                "PPI (omeprazole 20 mg)",
                "Antacid (hỗn hợp Al/Mg hydroxide)",
                "Kháng sinh diệt H. pylori"
            ],
            "ans": 1,
            "exp": "Khó tiêu nhẹ, không ợ nóng chiếm ưu thế → antacid là lựa chọn first-line. PPI dùng cho triệu chứng trung bình–nặng hoặc ợ nóng tái phát. KS diệt H. pylori cần xét nghiệm trước.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN khó tiêu mà ợ nóng (heartburn) là triệu chứng chính. DS ưu tiên thuốc nào?",
            "opts": [
                "Antacid đơn thuần",
                "Alginate hoặc alginate–antacid kết hợp",
                "Loperamide"
            ],
            "ans": 1,
            "exp": "Heartburn chiếm ưu thế → alginate/alginate-antacid (tạo lớp nổi trên bề mặt dạ dày ngăn trào ngược) hiệu quả hơn antacid đơn thuần. Loperamide là thuốc tiêu chảy, không liên quan.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid dạng lỏng (suspension) có hiệu quả trung hòa acid nhanh hơn và mạnh hơn dạng viên nén.",
            "ans": true,
            "exp": "Dạng lỏng có diện tích tiếp xúc với dịch vị lớn hơn → trung hòa acid nhanh và mạnh hơn. Viên nén cần nhai kỹ trước khi nuốt. Dạng lỏng dùng trước/sau giờ làm, viên nén tiện hơn ban ngày.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy tim, chế độ ăn giảm muối, bị khó tiêu. DS cần tránh antacid nào?",
            "opts": [
                "Magnesium hydroxide",
                "Sodium bicarbonate / Gaviscon (hàm lượng Na cao)",
                "Calcium carbonate"
            ],
            "ans": 1,
            "exp": "Antacid chứa sodium (sodium bicarbonate, nhiều sản phẩm Gaviscon) có hàm lượng Na cao → nguy cơ giữ nước ở BN suy tim, THA. Cần chọn sản phẩm low-sodium.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 75t, táo bón mạn, bị khó tiêu. DS nên tránh antacid chứa muối nào?",
            "opts": [
                "Magnesium",
                "Aluminium",
                "Sodium"
            ],
            "ans": 1,
            "exp": "Aluminium hydroxide gây táo bón → tránh ở NCT đã có xu hướng táo bón. Magnesium gây tiêu chảy → có thể phù hợp hơn cho BN táo bón. Hoặc chọn sản phẩm phối hợp Al + Mg cân bằng.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid có thể giảm hấp thu tetracycline, quinolone, bisphosphonate do cơ chế chelation. Cần uống cách ≥1 giờ.",
            "ans": true,
            "exp": "Antacid (muối Al, Ca, Mg) tạo phức chelate với tetracycline, quinolone, phenytoin, penicillamine, bisphosphonate → giảm hấp thu. Tư vấn BN uống cách antacid tối thiểu 1 giờ (hoặc 2 giờ cho quinolone).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "PPI OTC (omeprazole 20 mg) dùng tối đa bao lâu trước khi cần đánh giá lại?",
            "opts": [
                "3 ngày",
                "2 tuần",
                "3 tháng"
            ],
            "ans": 1,
            "exp": "PPI OTC: dùng tối đa 2 tuần. Nếu triệu chứng không cải thiện sau 2 tuần → chuyển BS đánh giá (nội soi, test H. pylori). Có thể ngừng sớm hơn nếu hết triệu chứng.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng clopidogrel (chống kết tập tiểu cầu). DS cần lưu ý tương tác với thuốc nào?",
            "opts": [
                "Antacid calcium carbonate",
                "Omeprazole",
                "Alginate đơn thuần"
            ],
            "ans": 1,
            "exp": "Omeprazole ức chế CYP2C19 → giảm chuyển hóa clopidogrel thành dạng hoạt động → giảm hiệu quả chống kết tập tiểu cầu. Nên dùng pantoprazole (ít tương tác CYP2C19 hơn) hoặc H2RA.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ranitidine (H2RA) OTC không có tương tác thuốc đáng kể lâm sàng và tác dụng phụ hiếm gặp.",
            "ans": true,
            "exp": "Ranitidine OTC 75 mg: không có tương tác thuốc đáng kể lâm sàng, tác dụng phụ hiếm. An toàn cho hầu hết BN. Có thể dùng trong thai kỳ (tuy nhà sản xuất khuyên hỏi DS/BS trước).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN khó tiêu trung bình–nặng, tái phát thường xuyên, không có ALARM symptoms. DS nên tư vấn thuốc nào hiệu quả hơn?",
            "opts": [
                "Antacid calcium carbonate",
                "PPI (omeprazole/esomeprazole)",
                "Simethicone đơn thuần"
            ],
            "ans": 1,
            "exp": "Nhiều thử nghiệm cho thấy PPI (dù ở nửa liều POM) hiệu quả hơn H2RA trong khó tiêu tái phát và triệu chứng kiểu GERD. PPI là first-line cho khó tiêu trung bình–nặng hoặc tái phát.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thời điểm uống antacid tốt nhất để kéo dài thời gian tác dụng?",
            "opts": [
                "Trước ăn 30 phút",
                "Khoảng 1 giờ sau ăn",
                "Ngay trước khi ngủ"
            ],
            "ans": 1,
            "exp": "Uống antacid ~1 giờ sau ăn: dạ dày đã giảm tốc độ làm rỗng → antacid lưu lại lâu hơn (~3 giờ). Nếu uống trước ăn, chỉ ở lại 30–60 phút vì bị đẩy ra cùng thức ăn.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium bicarbonate phù hợp dùng dài hạn cho khó tiêu mạn tính vì hiệu quả trung hòa acid nhanh.",
            "ans": false,
            "exp": "Sodium bicarbonate: onset nhanh nhưng tác dụng ngắn. Dùng dài hạn: nguy cơ alkalosis toàn thân, tổn thương thận. Chỉ phù hợp cho khó tiêu cấp tính, ngắn hạn, kết hợp với thành phần khác.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng antacid 2 tuần không cải thiện. DS xử trí tiếp thế nào?",
            "opts": [
                "Tăng liều antacid gấp đôi",
                "Chuyển BS đánh giá — nghi bệnh lý nền cần điều tra",
                "Thêm kháng sinh amoxicillin"
            ],
            "ans": 1,
            "exp": "Antacid >2 tuần không hiệu quả → cần chuyển BS: xét nghiệm H. pylori, nội soi loại trừ loét, ung thư. Không tăng liều antacid vô hạn hay tự kê kháng sinh.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "PPI OTC cần uống vào thời điểm nào trong ngày?",
            "opts": [
                "Sau bữa ăn no",
                "Trước bữa ăn, nuốt nguyên viên",
                "Bất kỳ lúc nào, nhai kỹ"
            ],
            "ans": 1,
            "exp": "PPI nuốt nguyên viên (không nhai, không nghiền) với nhiều nước, uống TRƯỚC bữa ăn (thường trước ăn sáng). Thức ăn và rượu không ảnh hưởng hấp thu nhưng tác dụng tốt nhất khi uống trước ăn.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI OTC có thể gây kết quả âm tính giả khi làm test hơi thở (breath test) tìm H. pylori.",
            "ans": true,
            "exp": "PPI ức chế tiết acid → thay đổi môi trường dạ dày → ức chế hoạt động urease của H. pylori → breath test có thể âm tính giả. Cần ngừng PPI ≥2 tuần trước khi test H. pylori.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 32t, mang thai 6 tháng, ợ nóng. DS tư vấn thuốc nào?",
            "opts": [
                "PPI omeprazole",
                "Antacid/alginate (low sodium)",
                "Bismuth subsalicylate"
            ],
            "ans": 1,
            "exp": "Thai phụ ợ nóng: antacid/alginate (low sodium) là ưu tiên — an toàn, hiệu quả. PPI: nhà sản xuất khuyên tránh/thận trọng. Bismuth: tránh (chứa salicylate, liên quan Reye syndrome).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Calcium carbonate (antacid) có ưu điểm gì so với muối khác?",
            "opts": [
                "Rẻ nhất và ít tác dụng phụ nhất",
                "Khởi phát nhanh VÀ kéo dài tác dụng (quick + prolonged)",
                "Không tương tác với thuốc nào"
            ],
            "ans": 1,
            "exp": "Calcium carbonate: vừa tan nhanh (quick onset như sodium) vừa kéo dài tác dụng (prolonged action). Tác dụng phụ: có thể gây táo bón. Tương tác: chelation tương tự muối Al, Mg.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sản phẩm antacid phối hợp Al + Mg giúp giảm tác dụng phụ do mỗi muối gây ra (Al gây táo bón, Mg gây tiêu chảy).",
            "ans": true,
            "exp": "Phối hợp Al + Mg: tác dụng táo bón của Al triệt tiêu với tiêu chảy của Mg → BN không gặp tác dụng phụ đường tiêu hóa rõ rệt. Đây là lý do đa số sản phẩm OTC là dạng phối hợp.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng levothyroxine cho suy giáp. DS cần lưu ý gì khi bán antacid?",
            "opts": [
                "Không cần lưu ý, antacid an toàn",
                "Antacid giảm hấp thu levothyroxine — cách ≥2–4 giờ",
                "Antacid tăng tác dụng levothyroxine"
            ],
            "ans": 1,
            "exp": "Antacid (đặc biệt muối Al, Ca) giảm hấp thu levothyroxine qua chelation và thay đổi pH. Tư vấn BN uống levothyroxine cách antacid ≥2–4 giờ (tốt nhất uống levothyroxine lúc đói sáng).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Omeprazole OTC liều bao nhiêu?",
            "opts": [
                "10 mg × 2 lần/ngày",
                "20 mg × 1 lần/ngày",
                "40 mg × 1 lần/ngày"
            ],
            "ans": 1,
            "exp": "Omeprazole OTC: 20 mg (2 viên 10 mg) × 1 lần/ngày. Esomeprazole OTC: 20 mg × 1 lần/ngày. Pantoprazole OTC: 20 mg × 1 lần/ngày. Tất cả dùng tối đa 2 tuần.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "H2RA (ranitidine) có onset nhanh hơn antacid trong trung hòa acid dạ dày.",
            "ans": false,
            "exp": "Antacid (đặc biệt calcium carbonate, sodium bicarbonate) có onset nhanh hơn H2RA. Tuy nhiên H2RA có tác dụng kéo dài hơn. PPI có tác dụng mạnh nhất nhưng onset chậm (1–2 ngày mới đạt tối đa).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ thường gặp của PPI OTC bao gồm gì?",
            "opts": [
                "Chỉ gây buồn ngủ",
                "Đau đầu, tiêu chảy, táo bón, buồn nôn, đau bụng",
                "Không có tác dụng phụ nào"
            ],
            "ans": 1,
            "exp": "PPI OTC (omeprazole, esomeprazole, pantoprazole): tác dụng phụ thường gặp gồm đau đầu, tiêu chảy, táo bón, buồn nôn, đau bụng. Pantoprazole thêm mệt mỏi. Nhìn chung dung nạp tốt ngắn hạn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng ketoconazole (kháng nấm azole). DS cần lưu ý tương tác với PPI vì sao?",
            "opts": [
                "PPI tăng độc tính ketoconazole",
                "PPI tăng pH dạ dày → giảm hấp thu ketoconazole",
                "PPI không tương tác với azole"
            ],
            "ans": 1,
            "exp": "Ketoconazole cần môi trường acid để hòa tan và hấp thu. PPI tăng pH dạ dày → giảm sinh khả dụng ketoconazole. Tương tự cho itraconazole. Cần lưu ý khi phối hợp.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alginate không có tác dụng phụ hay tương tác thuốc đáng kể.",
            "ans": true,
            "exp": "Alginate: không có tác dụng phụ được báo cáo, không tương tác thuốc. Cơ chế vật lý: tạo lớp nổi (raft) trên bề mặt dạ dày. BN hạn chế muối cần chọn alginate low-sodium.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau thượng vị tăng khi đói, giảm sau ăn, đôi khi đau thức giấc ban đêm. DS nghi ngờ gì?",
            "opts": [
                "Khó tiêu chức năng thông thường",
                "Nghi loét tá tràng — chuyển BS",
                "Trào ngược dạ dày thực quản"
            ],
            "ans": 1,
            "exp": "Đau tăng khi đói + giảm sau ăn + đau thức giấc ban đêm = pattern loét tá tràng kinh điển. Cần chuyển BS xét nghiệm H. pylori + nội soi. Không xử trí OTC đơn thuần.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NSAID (ibuprofen, naproxen) có thể gây hoặc làm nặng khó tiêu thông qua ức chế tổng hợp prostaglandin bảo vệ niêm mạc dạ dày.",
            "ans": true,
            "exp": "NSAID ức chế COX-1 → giảm prostaglandin → giảm tiết nhầy bảo vệ + giảm lưu lượng máu niêm mạc → tăng nguy cơ viêm, loét, chảy máu dạ dày. NCT dùng NSAID cần gastroprotection (PPI).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Curcumin (từ nghệ) đã được so sánh với omeprazole trong khó tiêu chức năng. Kết quả thế nào?",
            "opts": [
                "Curcumin hoàn toàn vô hiệu",
                "Curcumin 500 mg × 4/ngày cho kết quả giảm triệu chứng tương đương omeprazole 20 mg/ngày",
                "Curcumin hiệu quả gấp đôi omeprazole"
            ],
            "ans": 1,
            "exp": "Thử nghiệm RCT (151 BN): curcumin 500 mg × 4 lần/ngày giảm triệu chứng khó tiêu chức năng tương đương omeprazole 20 mg/ngày. Phối hợp 2 thuốc không thêm lợi ích. Tuy nhiên cần theo dõi chức năng gan ở BN thừa cân dùng curcumin.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 58t, khó tiêu mới xuất hiện, sụt cân 5 kg/3 tháng, nuốt khó tiến triển. DS lo ngại gì?",
            "opts": [
                "Khó tiêu chức năng — dùng antacid",
                "ALARM symptoms — chuyển BS khẩn nghi ung thư",
                "Trào ngược nhẹ — dùng PPI"
            ],
            "ans": 1,
            "exp": "ALARM symptoms: Anaemia, Loss of weight, Anorexia, Recent onset progressive, Melaena/haematemesis, dysphagia. BN >55t + sụt cân + nuốt khó = Red Flag ung thư đường tiêu hóa trên. Chuyển BS khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau vùng thượng vị lan lên ngực, cổ, hàm, tăng khi gắng sức — DS chỉ cần tư vấn antacid vì đây là ợ nóng.",
            "ans": false,
            "exp": "Đau ngực lan cổ/hàm + tăng khi gắng sức → nghi cơn đau thắt ngực (angina) hoặc hội chứng vành cấp, KHÔNG phải ợ nóng. Chuyển cấp cứu ngay. Đây là lý do DS phải hỏi kỹ vị trí và tính chất đau.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 65t, dùng naproxen cho viêm khớp, nay đau thượng vị nặng. DS xử trí thế nào?",
            "opts": [
                "Bán thêm antacid kèm naproxen",
                "Chuyển BS — nghi loét do NSAID, cần đánh giá",
                "Đổi sang ibuprofen vì ít tác dụng phụ hơn"
            ],
            "ans": 1,
            "exp": "NCT dùng NSAID + đau thượng vị nặng → nghi loét/chảy máu do NSAID. Cần chuyển BS: ngừng NSAID, nội soi đánh giá, bắt đầu PPI liều POM. NCT cần gastroprotection khi dùng NSAID.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đi phân đen (melaena) kèm khó tiêu. DS xử trí thế nào?",
            "opts": [
                "Tư vấn antacid + sắt bổ sung",
                "Chuyển cấp cứu — nghi chảy máu tiêu hóa trên",
                "Hỏi thêm chế độ ăn"
            ],
            "ans": 1,
            "exp": "Phân đen (melaena) = ALARM symptom → nghi chảy máu tiêu hóa trên (loét dạ dày/tá tràng, ung thư). Chuyển cấp cứu ngay. Lưu ý: sắt, bismuth cũng gây phân đen — cần hỏi thuốc đang dùng.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "H. pylori có mặt trong 90–95% loét tá tràng và 70–90% loét dạ dày.",
            "ans": true,
            "exp": "H. pylori là nguyên nhân chính gây loét tiêu hóa: 90–95% loét tá tràng, 70–90% loét dạ dày. Vi khuẩn tiết độc tố kích hoạt viêm → phá hủy lớp nhầy bảo vệ. Diệt H. pylori giúp lành loét và ngăn tái phát.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN khó tiêu kèm nôn ra máu (haematemesis). DS phải làm gì?",
            "opts": [
                "Cho PPI liều cao + theo dõi",
                "Chuyển cấp cứu ngay — ALARM symptom",
                "Bán bismuth để cầm máu"
            ],
            "ans": 1,
            "exp": "Haematemesis (nôn ra máu) = ALARM symptom nguy hiểm → chuyển cấp cứu ngay. Có thể do loét chảy máu, giãn tĩnh mạch thực quản, Mallory-Weiss tear. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS có thể xử trí OTC cho BN khó tiêu ≥55 tuổi mới khởi phát mà không cần chuyển BS nếu triệu chứng nhẹ.",
            "ans": false,
            "exp": "NICE: BN ≥55 tuổi, khó tiêu mới khởi phát + bất kỳ ALARM symptom nào (sụt cân, nuốt khó, thiếu máu...) → chuyển BS khẩn nghi ung thư. Ngay cả triệu chứng nhẹ ở nhóm tuổi này cần thận trọng.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN khó tiêu, hỏi DS lời khuyên thay đổi lối sống. DS tư vấn gì?",
            "opts": [
                "Ăn bữa lớn 2 lần/ngày để dạ dày nghỉ",
                "Giảm cân nếu thừa cân, ăn ít–nhiều bữa, giảm chất béo/caffeine/rượu, bỏ thuốc lá",
                "Uống nhiều cà phê để kích thích tiêu hóa"
            ],
            "ans": 1,
            "exp": "Non-pharm: giảm cân, ăn ít–nhiều bữa, giảm chất béo (chậm làm rỗng dạ dày), giảm caffeine/rượu/chocolate (giảm trương lực LES), bỏ thuốc lá, tránh ăn khuya, nâng đầu giường.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị dữ dội, đột ngột, co cứng bụng, vã mồ hôi. DS lo ngại gì?",
            "opts": [
                "Khó tiêu cấp do ăn cay — antacid",
                "Nghi thủng loét dạ dày hoặc viêm tụy cấp — cấp cứu ngay",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "Đau bụng dữ dội + đột ngột + co cứng bụng (bụng gỗ) = cấp cứu ngoại khoa → nghi thủng loét, viêm tụy cấp, hoặc tắc ruột. Gọi 115 hoặc đưa đến cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Khó tiêu chức năng (functional dyspepsia) có thể bị khởi phát hoặc nặng lên bởi stress và lo âu.",
            "ans": true,
            "exp": "Yếu tố tâm lý (stress, lo âu) có thể khởi phát hoặc làm nặng khó tiêu chức năng qua: trục não-ruột, tăng nhạy cảm nội tạng, thay đổi vận động dạ dày. Tư vấn giảm stress là phần quan trọng trong điều trị.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng antacid chứa calcium carbonate lâu dài. Tác dụng phụ nào cần lưu ý?",
            "opts": [
                "Tiêu chảy mạn",
                "Táo bón và hội chứng milk-alkite (hiếm)",
                "Buồn ngủ"
            ],
            "ans": 1,
            "exp": "Calcium carbonate lâu dài: (1) táo bón, (2) hiếm: hội chứng milk-alkali (tăng calci máu, alkalosis, suy thận) khi dùng liều rất cao kéo dài. Nên hạn chế antacid ≤2 tuần.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nam 50t bị khó tiêu chức năng, đang dùng domperidone. DS tư vấn BN có thể dùng domperidone OTC liên tục 4 tuần mà không cần tái khám.",
            "ans": false,
            "exp": "Domperidone OTC chỉ nên dùng tối đa 1 tuần. Nếu triệu chứng không cải thiện, cần chuyển BS đánh giá nguyên nhân thực thể.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ranitidine OTC liều bao nhiêu?",
            "opts": [
                "75 mg × 1 viên, lặp lại sau 1 giờ nếu cần, tối đa 300 mg/ngày",
                "150 mg × 3 lần/ngày",
                "75 mg × 1 lần/ngày"
            ],
            "ans": 0,
            "exp": "Ranitidine OTC: 75 mg × 1 viên, nếu triệu chứng còn → thêm 1 viên sau 1 giờ. Tối đa 300 mg (4 viên)/24 giờ (dạng Pharmacy). Dạng GSL: tối đa 150 mg (2 viên)/24 giờ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng diazepam, bị khó tiêu muốn dùng PPI. DS cần lưu ý tương tác gì?",
            "opts": [
                "PPI giảm tác dụng diazepam",
                "Omeprazole tăng tác dụng phụ diazepam qua ức chế CYP",
                "PPI không tương tác với diazepam"
            ],
            "ans": 1,
            "exp": "Omeprazole ức chế CYP2C19 + CYP3A4 → giảm chuyển hóa diazepam → tăng nồng độ diazepam máu → tăng an thần. Cân nhắc dùng pantoprazole hoặc H2RA thay thế.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN nữ 40t, khó tiêu kèm sụt 3 kg/tháng dù ăn uống bình thường. DS đánh giá đây là triệu chứng khó tiêu chức năng và có thể tư vấn OTC.",
            "ans": false,
            "exp": "Sụt cân không chủ ý là red flag cần chuyển BS ngay. Không được xếp vào khó tiêu chức năng khi chưa loại trừ bệnh lý thực thể.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Simethicone (dimethicone) là thuốc chống đầy hơi hoạt động bằng cách trung hòa acid dạ dày.",
            "ans": false,
            "exp": "Simethicone KHÔNG trung hòa acid. Cơ chế: giảm sức căng bề mặt bọt khí → phá bọt khí trong dạ dày/ruột → giảm đầy hơi, ợ hơi. Thường phối hợp với antacid trong sản phẩm OTC.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN khó tiêu, sử dụng antacid tự mua tăng dần liều trong 2 tháng, nay không còn hiệu quả. DS đánh giá gì?",
            "opts": [
                "Tăng liều antacid thêm nữa",
                "Chuyển BS — triệu chứng kéo dài + treatment failure = Red Flag",
                "Đổi sang loại antacid khác"
            ],
            "ans": 1,
            "exp": "Khó tiêu kéo dài 2 tháng + tăng liều antacid + treatment failure = Red Flag → cần chuyển BS: nội soi đánh giá loét, H. pylori, ung thư. Nghi ngờ loét dạ dày/tá tràng mạn tính.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng thuốc sắt bổ sung cho thiếu máu, bị khó tiêu. DS đánh giá gì?",
            "opts": [
                "Sắt không liên quan đến khó tiêu",
                "Sắt uống là nguyên nhân phổ biến gây khó tiêu — cân nhắc đổi dạng/thời điểm uống",
                "Ngừng sắt ngay vì CCĐ"
            ],
            "ans": 1,
            "exp": "Sắt uống gây kích ứng đường tiêu hóa: buồn nôn, khó tiêu, táo bón. Có thể giảm bằng: uống sau ăn (giảm hấp thu nhẹ nhưng dung nạp tốt hơn), đổi dạng sắt hữu cơ, hoặc giảm liều.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN khó tiêu kèm đau vùng mạn sườn phải, sau ăn béo, buồn nôn. DS nghi ngờ gì?",
            "opts": [
                "Khó tiêu chức năng thông thường",
                "Sỏi mật (biliary colic) — chuyển BS",
                "Trào ngược dạ dày"
            ],
            "ans": 1,
            "exp": "Đau mạn sườn phải/thượng vị + sau ăn béo + buồn nôn → nghi biliary colic (sỏi mật). Đau có thể lan ra lưng hoặc vai phải. Cần chuyển BS siêu âm đánh giá.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nam 55t, khó tiêu sau ăn, đang dùng clopidogrel. DS tư vấn dùng omeprazole OTC để giảm triệu chứng.",
            "ans": false,
            "exp": "Omeprazole ức chế CYP2C19, làm giảm chuyển hóa clopidogrel thành dạng hoạt tính, giảm tác dụng chống kết tập tiểu cầu. Nên dùng antacid hoặc H2RA thay thế.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Simeticone có tác dụng ức chế tiết acid dạ dày, giúp giảm triệu chứng đầy bụng khó tiêu.",
            "ans": false,
            "exp": "Simeticone là chất phá bọt khí (defoaming agent), làm giảm sức căng bề mặt của bọt khí trong dạ dày–ruột, giúp thoát hơi. Thuốc không có tác dụng ức chế tiết acid.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI OTC có thể dùng liên tục nhiều tháng mà không cần đánh giá của BS.",
            "ans": false,
            "exp": "PPI OTC tối đa 2 tuần. Dùng dài hạn không giám sát: nguy cơ bỏ lỡ bệnh lý nghiêm trọng + tác dụng phụ tích lũy.",
            "icon": "⏱️"
        }
    ],
    "diarrhea": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 30t, tiêu chảy cấp 6 lần/ngày, phân lỏng, không máu, không sốt, 1 ngày. DS ưu tiên tư vấn gì?",
            "opts": [
                "Loperamide ngay",
                "ORS (dung dịch bù nước và điện giải) + uống nhiều nước",
                "Kháng sinh ciprofloxacin"
            ],
            "ans": 1,
            "exp": "Tiêu chảy cấp: ưu tiên hàng đầu là BÙ NƯỚC (ORS). Đa số tự khỏi 24–48h. Loperamide chỉ khi cần đi làm/đi lại (không thể nghỉ ngơi). Kháng sinh không cần cho tiêu chảy virus thông thường.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "ORS chứa các thành phần chính nào?",
            "opts": [
                "Chỉ glucose và nước",
                "Glucose + sodium + potassium + chloride + citrate",
                "Glucose + kháng sinh + vitamin C"
            ],
            "ans": 1,
            "exp": "ORS (WHO): glucose 75 mmol/L, sodium 75 mmol/L, potassium 20 mmol/L, chloride 65 mmol/L, citrate 10 mmol/L. Glucose giúp hấp thu Na qua cơ chế co-transport → kéo nước theo.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Loperamide là thuốc chống tiêu chảy OTC CCĐ ở trẻ <12 tuổi.",
            "ans": true,
            "exp": "Loperamide OTC: CCĐ trẻ <12 tuổi. Trẻ em tiêu chảy → ưu tiên ORS. Loperamide liều cao hơn (kê đơn) có thể dùng từ 4 tuổi nhưng không phải OTC.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều loperamide cho người >12 tuổi?",
            "opts": [
                "1 viên/ngày duy nhất",
                "2 viên (4 mg) ngay, sau đó 1 viên (2 mg) sau mỗi lần tiêu chảy, tối đa 8 viên/ngày",
                "4 viên mỗi 4 giờ"
            ],
            "ans": 1,
            "exp": "Loperamide: liều đầu 4 mg (2 viên), sau đó 2 mg (1 viên) sau mỗi lần phân lỏng. Tối đa 8 viên (16 mg)/ngày nếu kê đơn; OTC tối đa 6 viên (12 mg)/ngày cho người lớn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Loperamide CCĐ trong tiêu chảy có máu hoặc nghi viêm (sốt cao) vì có thể làm nặng bệnh.",
            "ans": true,
            "exp": "Tiêu chảy có máu/nhầy + sốt → nghi nhiễm trùng xâm lấn (Shigella, Salmonella, Campylobacter) hoặc viêm đại tràng. Loperamide giảm nhu động → vi khuẩn/độc tố ở lại lâu hơn → nguy cơ nặng lên, megacolon.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ mang thai, tiêu chảy cấp. Thuốc OTC nào an toàn?",
            "opts": [
                "Loperamide",
                "ORS",
                "Bismuth subsalicylate"
            ],
            "ans": 1,
            "exp": "Thai phụ: ORS an toàn cho mọi đối tượng. Loperamide: nhà sản xuất khuyên tránh dù dữ liệu không cho thấy nguy hại rõ. Bismuth: CCĐ (chứa salicylate, liên quan hội chứng Reye + nguy cơ cho thai).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bismuth subsalicylate (Pepto-Bismol) có hiệu quả cho loại tiêu chảy nào?",
            "opts": [
                "Tiêu chảy do thuốc",
                "Tiêu chảy du lịch (traveller's diarrhea)",
                "Tiêu chảy do viêm ruột mạn (IBD)"
            ],
            "ans": 1,
            "exp": "Bismuth subsalicylate hiệu quả cho tiêu chảy du lịch (Steffen, 1990). Tuy nhiên, chậm hơn loperamide trong giải quyết triệu chứng. Chỉ dùng cho người >16 tuổi.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Bismuth subsalicylate có thể gây phân đen và lưỡi đen — đây là tác dụng phụ lành tính.",
            "ans": true,
            "exp": "Bismuth không hấp thu → tạo bismuth sulfide trong ruột → phân/lưỡi đen. Lành tính, tự hết khi ngừng thuốc. Quan trọng: phải phân biệt với melaena (phân đen do chảy máu tiêu hóa).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng ciprofloxacin cho nhiễm trùng, đồng thời bị tiêu chảy muốn dùng bismuth. DS lưu ý gì?",
            "opts": [
                "Không có tương tác",
                "Bismuth giảm sinh khả dụng quinolone — cách ≥2 giờ",
                "Bismuth tăng độc tính ciprofloxacin"
            ],
            "ans": 1,
            "exp": "Bismuth giảm hấp thu quinolone (ciprofloxacin, levofloxacin) qua chelation — tương tự antacid. Cần uống cách ≥2 giờ.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 8 tháng tuổi, tiêu chảy 5 lần/ngày, phân lỏng, không máu. DS tư vấn gì?",
            "opts": [
                "Loperamide siro trẻ em",
                "ORS + tiếp tục bú mẹ/bú bình",
                "Ngừng cho bú, chỉ cho uống nước trắng"
            ],
            "ans": 1,
            "exp": "Trẻ nhỏ: ORS là ưu tiên hàng đầu (1–1.5 lần lượng bú thông thường). TIẾP TỤC bú mẹ/bú bình giữa các lần uống ORS. Không ngừng cho bú. Loperamide CCĐ trẻ <12t (OTC).",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Probiotics có bằng chứng mạnh giúp rút ngắn thời gian tiêu chảy cấp ở trẻ em.",
            "ans": false,
            "exp": "Systematic review lớn (dựa trên các RCT chất lượng cao) kết luận probiotics có lẽ ít hoặc không ảnh hưởng đến số người tiêu chảy >48h, và không chắc chắn có giảm thời gian tiêu chảy.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Loperamide quá liều có thể gây tác dụng phụ nghiêm trọng nào?",
            "opts": [
                "Chỉ gây tiêu chảy nặng hơn",
                "Ức chế thần kinh trung ương và loạn nhịp tim",
                "Phát ban toàn thân"
            ],
            "ans": 1,
            "exp": "Loperamide liều cao: có báo cáo ức chế CNS, ức chế hô hấp, và loạn nhịp tim (cardiac arrhythmia). Tối đa 12 mg/ngày (OTC). Cảnh báo BN không vượt liều.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "ORS nên được uống từng ngụm nhỏ mỗi 5–10 phút thay vì uống nhiều một lần.",
            "ans": true,
            "exp": "Uống ORS từng ngụm nhỏ, thường xuyên (mỗi 5–10 phút) → hấp thu tốt hơn, ít gây nôn. Uống nhiều một lần có thể gây nôn, đặc biệt ở trẻ em đang nôn kèm tiêu chảy.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi mua nước muối đường tự pha cho tiêu chảy. DS trả lời thế nào?",
            "opts": [
                "Hoàn toàn phù hợp, rẻ và hiệu quả",
                "Không khuyến cáo vì nồng độ điện giải không đảm bảo chính xác — dùng ORS đóng gói",
                "Chỉ phù hợp cho người lớn, không cho trẻ em"
            ],
            "ans": 1,
            "exp": "Dung dịch tự pha: không đảm bảo chính xác nồng độ điện giải → nguy hiểm đặc biệt cho trẻ nhỏ (tăng/giảm natri máu). Nên dùng ORS đóng gói (Oresol, Dioralyte) với công thức chuẩn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tiêu chảy cấp, hỏi có nên nhịn ăn. DS tư vấn gì?",
            "opts": [
                "Nhịn ăn hoàn toàn 24 giờ cho ruột nghỉ",
                "Tiếp tục ăn bình thường, tránh đồ béo/đường cao, ưu tiên súp nhẹ",
                "Chỉ ăn cháo trắng loãng"
            ],
            "ans": 1,
            "exp": "Khuyến cáo: KHÔNG nhịn ăn. Tiếp tục ăn bình thường (chế độ nhẹ: súp, cơm, bánh mì). Tránh đồ nhiều béo/đường (dung nạp kém). Trẻ em: tiếp tục bú mẹ/bú bình. Uống đủ nước + ORS.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Loperamide kết hợp simethicone hiệu quả hơn loperamide đơn thuần trong tiêu chảy cấp.",
            "ans": false,
            "exp": "Loperamide + simethicone: bằng chứng không cho thấy hiệu quả vượt trội so với loperamide đơn thuần về giảm triệu chứng tiêu chảy. Simethicone chỉ giảm đầy hơi.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tiêu chảy du lịch, hỏi mang thuốc gì phòng ngừa. DS tư vấn gì?",
            "opts": [
                "Mang ORS + loperamide dự phòng",
                "Mang kháng sinh uống dự phòng hàng ngày",
                "Chỉ cần uống nước đóng chai là đủ"
            ],
            "ans": 0,
            "exp": "Du lịch vùng nhiệt đới: mang ORS (bù nước nếu tiêu chảy) + loperamide (giảm triệu chứng khi cần đi lại). Phòng ngừa: vệ sinh thực phẩm, nước đóng chai, rửa tay. Kháng sinh dự phòng: không khuyến cáo thường quy.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 6 tháng, tiêu chảy + nôn nhiều lần + da khô, mắt trũng, khóc không nước mắt. DS đánh giá gì?",
            "opts": [
                "Mất nước nhẹ — ORS tại nhà đủ",
                "Mất nước nặng — chuyển cấp cứu ngay",
                "Viêm ruột nhẹ — theo dõi thêm"
            ],
            "ans": 1,
            "exp": "Trẻ nhỏ + tiêu chảy/nôn + dấu hiệu mất nước nặng (da khô, mắt trũng, khóc không nước mắt, mạch nhanh) = cấp cứu. Cần bù dịch IV. Chuyển viện ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tiêu chảy cấp ở người lớn khỏe mạnh thường tự khỏi trong 24–48 giờ.",
            "ans": true,
            "exp": "Đa số tiêu chảy cấp do virus (rotavirus, norovirus) hoặc thực phẩm tự khỏi trong 24–48 giờ. DS chỉ cần hỗ trợ bù nước + triệu chứng. Chuyển BS nếu >2–3 ngày hoặc có Red Flag.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 42t, thay đổi thói quen đại tiện >6 tuần, tiêu chảy xen kẽ táo bón, phân có máu. DS lo ngại gì?",
            "opts": [
                "Hội chứng ruột kích thích (IBS)",
                "Nghi ung thư đại trực tràng — chuyển BS khẩn",
                "Tiêu chảy nhiễm trùng kéo dài"
            ],
            "ans": 1,
            "exp": "BN >40 tuổi + thay đổi thói quen đại tiện mới + phân có máu = Red Flag → nghi ung thư đại trực tràng. Cần chuyển BS khẩn: nội soi đại tràng. Không chẩn đoán IBS khi chưa loại trừ ung thư.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN NCT 78t, tiêu chảy kéo dài nhiều ngày, không thể uống nước. DS xử trí thế nào?",
            "opts": [
                "Bán ORS + loperamide",
                "Chuyển BS ngay vì nguy cơ mất nước cao ở NCT",
                "Chờ thêm 2 ngày rồi tính"
            ],
            "ans": 1,
            "exp": "NCT + tiêu chảy kéo dài + không uống được nước = nguy cơ mất nước nghiêm trọng → có thể cần bù dịch IV. Chuyển BS ngay trong ngày. NCT dễ mất nước và biến chứng hơn người trẻ.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Rửa tay bằng xà phòng có thể giảm khoảng 1/3 số đợt tiêu chảy.",
            "ans": true,
            "exp": "Cochrane review (Ejemot-Nwadiaro et al., 2021): các biện pháp khuyến khích rửa tay giảm ~33% số đợt tiêu chảy. Tư vấn vệ sinh tay là biện pháp phòng ngừa quan trọng nhất.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy sau du lịch vùng nhiệt đới 2 tuần trước, phân lỏng kéo dài, đầy bụng. DS nghi gì?",
            "opts": [
                "Tiêu chảy virus thông thường",
                "Nghi giardiasis — chuyển BS",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "Tiêu chảy kéo dài sau du lịch vùng nhiệt đới → nghi giardiasis (Giardia lamblia). Triệu chứng: tiêu chảy, đầy bụng, phân mỡ. Cần xét nghiệm phân + điều trị metronidazole.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy kéo dài + sụt cân + phân mỡ (steatorrhoea). DS nghi ngờ gì?",
            "opts": [
                "Tiêu chảy virus thông thường",
                "Hội chứng kém hấp thu (malabsorption) — chuyển BS",
                "Tiêu chảy do stress"
            ],
            "ans": 1,
            "exp": "Tiêu chảy mạn + sụt cân + phân mỡ (steatorrhoea: phân nhờn, khó xả) → nghi malabsorption (bệnh celiac, suy tụy ngoại tiết, Crohn). Chuyển BS xét nghiệm.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS nên khuyên BN tiêu chảy nghỉ làm/nghỉ học ≥48 giờ sau khi hết tiêu chảy để tránh lây lan.",
            "ans": true,
            "exp": "Tiêu chảy nhiễm trùng lây qua đường phân-miệng. Khuyên BN nghỉ làm/học ≥48 giờ sau khi hết triệu chứng. Không dùng chung khăn, đồ ăn. Vệ sinh nhà vệ sinh bằng dung dịch sát khuẩn.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy cấp, dấu hiệu mất nước nhẹ–trung bình gồm những gì?",
            "opts": [
                "Mắt trũng, mạch nhanh yếu, không tiểu",
                "Khát nước, khô miệng, đau đầu, chóng mặt, nước tiểu sẫm màu",
                "Da nhăn, co giật, hạ huyết áp"
            ],
            "ans": 1,
            "exp": "Mất nước nhẹ–trung bình (<10%): khát nước, khô miệng, đau đầu, chóng mặt, nước tiểu sẫm. Mất nước nặng: khát cực độ, thở nhanh, mạch nhanh, ít/không tiểu, lú lẫn → cấp cứu.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tiêu chảy do kháng sinh (antibiotic-associated diarrhea). Probiotic nào có bằng chứng hỗ trợ?",
            "opts": [
                "Tất cả probiotic đều hiệu quả như nhau",
                "Lactobacillus rhamnosus hoặc Saccharomyces boulardii có một số bằng chứng",
                "Probiotic CCĐ khi đang dùng kháng sinh"
            ],
            "ans": 1,
            "exp": "Một số bằng chứng cho thấy chủng cụ thể (L. rhamnosus GG, S. boulardii) có thể giúp phòng ngừa tiêu chảy do kháng sinh. Tuy nhiên bằng chứng chung cho probiotic trong tiêu chảy cấp còn yếu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nước ép trái cây và nước ngọt có gas là thức uống phù hợp thay thế ORS trong tiêu chảy.",
            "ans": false,
            "exp": "Nước ép trái cây: có thể có quá nhiều đường (osmolarity cao) → kéo thêm nước vào ruột → nặng tiêu chảy. Nước ngọt có gas: tương tự. Không thay thế ORS được. Tuy nhiên, nước ép pha loãng + súp có thể bổ sung.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "NCT suy tim, tiêu chảy cấp. Vì sao ORS đặc biệt quan trọng?",
            "opts": [
                "ORS giúp giảm tiêu chảy nhanh hơn",
                "NCT suy tim dễ mất nước → nguy cơ huyết khối, suy thận cấp",
                "ORS chứa thuốc chống tiêu chảy"
            ],
            "ans": 1,
            "exp": "NCT + suy tim + tiêu chảy mất nước → cô đặc máu → tăng nguy cơ huyết khối (DVT, stroke), suy thận cấp trước thận. ORS bù nước điện giải kịp thời rất quan trọng.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tiêu chảy cấp 2 ngày, muốn dùng loperamide để đi làm. DS cần hỏi thêm gì?",
            "opts": [
                "Không cần hỏi thêm, bán ngay",
                "Hỏi: có máu/nhầy trong phân không? Có sốt không? Đau bụng dữ dội không?",
                "Hỏi: có dùng probiotic chưa?"
            ],
            "ans": 1,
            "exp": "Trước khi bán loperamide: loại trừ CCĐ — tiêu chảy có máu/nhầy, sốt cao (nghi viêm), đau bụng dữ dội. Nếu có bất kỳ dấu hiệu nào → chuyển BS, không dùng loperamide.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Metformin là thuốc gây tiêu chảy phổ biến mà DS cần hỏi khi BN đến mua thuốc tiêu chảy.",
            "ans": true,
            "exp": "Metformin gây tiêu chảy ở ~10% BN (đặc biệt khi mới bắt đầu hoặc tăng liều). Ngoài ra: kháng sinh (đặc biệt amoxicillin-clavulanate, macrolide), orlistat, colchicine, SSRI cũng gây tiêu chảy.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tiêu chảy cấp ở NCT >2–3 ngày cần chuyển BS ngay vì nguy cơ biến chứng cao.",
            "ans": true,
            "exp": "NCT và trẻ nhỏ: tiêu chảy >2–3 ngày = Red Flag → nguy cơ mất nước nặng, rối loạn điện giải, suy thận. Chuyển BS đánh giá, có thể cần bù dịch IV.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "ORS cho người lớn: lượng khuyến cáo trong 24 giờ đầu?",
            "opts": [
                "500 mL",
                "2 L + 200 mL sau mỗi lần phân lỏng",
                "5 L"
            ],
            "ans": 1,
            "exp": "Người lớn: 2 L ORS trong 24 giờ đầu, sau đó uống bình thường + 200 mL ORS sau mỗi lần phân lỏng. Trẻ sơ sinh: 1–1.5 lần lượng bú thông thường.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy cấp, phân có nhầy và máu, sốt 38.5°C. DS xử trí gì?",
            "opts": [
                "Bán loperamide để cầm tiêu chảy",
                "Chuyển BS ngay — nghi kiết lỵ/tiêu chảy xâm lấn",
                "Bán ORS + probiotic là đủ"
            ],
            "ans": 1,
            "exp": "Phân nhầy máu + sốt = nghi tiêu chảy xâm lấn (Shigella, Salmonella, Campylobacter, amip). Loperamide CCĐ. Cần chuyển BS: cấy phân, có thể cần kháng sinh đặc hiệu.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT, táo bón mạn, nay tiêu chảy. DS nghi ngờ gì?",
            "opts": [
                "Tiêu chảy virus thông thường",
                "Phân cứng gây tắc (faecal impaction) → tiêu chảy tràn (overflow)",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "NCT táo bón mạn + đột ngột tiêu chảy → nghi faecal impaction (phân cứng tắc → chỉ phân lỏng tràn qua được = overflow diarrhea). Cần chuyển BS đánh giá, có thể cần tháo phân.",
            "icon": "👴"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy mạn + sụt cân + thiếu máu + đau khớp ở người trẻ. DS nghĩ đến gì?",
            "opts": [
                "Tiêu chảy virus tái phát",
                "Viêm ruột mạn (IBD: Crohn hoặc viêm loét đại tràng) — chuyển BS",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "Tiêu chảy mạn + sụt cân + thiếu máu + triệu chứng ngoài ruột (đau khớp) ở người trẻ 20–30 tuổi → nghi IBD (Crohn hoặc UC). Cần nội soi đại tràng + sinh thiết.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nữ 28t, tiêu chảy cấp 2 ngày, phân lỏng không máu. DS tư vấn dùng loperamide kết hợp kháng sinh để điều trị hiệu quả hơn.",
            "ans": false,
            "exp": "Tiêu chảy cấp phần lớn do virus, tự giới hạn. Kháng sinh không có chỉ định trong tiêu chảy cấp không biến chứng. Loperamide + ORS là đủ cho trường hợp này.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ 4 tuổi bị tiêu chảy cấp 1 ngày, còn chơi, uống nước được. DS có thể bán loperamide liều trẻ em để cầm tiêu chảy.",
            "ans": false,
            "exp": "Loperamide chống chỉ định ở trẻ < 6 tuổi (theo nhiều guideline) hoặc < 12 tuổi (theo một số khuyến cáo OTC). Trẻ nhỏ chỉ cần bù dịch bằng ORS.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi về racecadotril cho tiêu chảy. DS biết gì về thuốc này?",
            "opts": [
                "Racecadotril là kháng sinh chống tiêu chảy",
                "Racecadotril ức chế enkephalinase → giảm tiết dịch ruột, không ảnh hưởng nhu động",
                "Racecadotril giống loperamide hoàn toàn"
            ],
            "ans": 1,
            "exp": "Racecadotril: ức chế enkephalinase → tăng enkephalin nội sinh → giảm tiết dịch ruột (antisecretory). Không ảnh hưởng nhu động ruột (khác loperamide). Có thể dùng từ 3 tháng tuổi (kê đơn).",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN tiêu chảy + cường giáp chưa điều trị. DS nhận ra mối liên quan gì?",
            "opts": [
                "Hai bệnh không liên quan",
                "Cường giáp tăng nhu động ruột → tiêu chảy mạn — chuyển BS",
                "Cường giáp gây táo bón chứ không gây tiêu chảy"
            ],
            "ans": 1,
            "exp": "Cường giáp: tăng hormone tuyến giáp → tăng nhu động ruột → tiêu chảy mạn/phân lỏng. Kèm: sụt cân, tim nhanh, mồ hôi, run tay, mất ngủ. Cần chuyển BS điều trị cường giáp.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nước ép trái cây nguyên chất thay thế tốt cho ORS ở trẻ tiêu chảy.",
            "ans": false,
            "exp": "Nước ép nguyên chất: osmolarity cao → kéo nước vào ruột → nặng tiêu chảy. ORS công thức chuẩn glucose-sodium tối ưu.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tiêu chảy do kháng sinh nghi C. difficile. DS lưu ý gì?",
            "opts": [
                "Dùng loperamide cầm",
                "Tránh loperamide, chuyển BS — cần vancomycin/fidaxomicin",
                "Cho thêm kháng sinh phổ rộng"
            ],
            "ans": 1,
            "exp": "C. difficile: loperamide CCĐ (giữ toxin). Cần chuyển BS xét nghiệm toxin + điều trị đặc hiệu.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ em tiêu chảy, DS ưu tiên gì hơn loperamide?",
            "opts": [
                "Kháng sinh",
                "ORS + tiếp tục cho bú",
                "Bismuth"
            ],
            "ans": 1,
            "exp": "Trẻ em: ORS first-line. Loperamide CCĐ <12t OTC. Bismuth CCĐ <16t. Tiếp tục bú mẹ/bú bình quan trọng.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kaolin-pectin có bằng chứng mạnh cho tiêu chảy cấp.",
            "ans": false,
            "exp": "Bằng chứng lâm sàng rất yếu. Không được khuyến cáo trong hướng dẫn hiện đại. ORS + loperamide (khi phù hợp) có bằng chứng tốt hơn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ngoài ORS, BN mất nước nhẹ nên uống gì?",
            "opts": [
                "Nước ngọt có gas",
                "Nước canh/súp (NaCl) + nước ép pha loãng",
                "Chỉ sữa nguyên chất"
            ],
            "ans": 1,
            "exp": "Súp (NaCl) + nước ép pha loãng (glucose+K) bổ sung tốt. Tránh nước ngọt đặc (osmolarity cao). Sữa có thể không dung nạp.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Racecadotril và loperamide có cùng cơ chế tác dụng chống tiêu chảy — đều ức chế nhu động ruột.",
            "ans": false,
            "exp": "Racecadotril là chất ức chế enkephalinase, giảm tiết dịch vào lòng ruột (antisecretory). Loperamide là opioid tổng hợp, giảm nhu động ruột (antimotility). Hai cơ chế hoàn toàn khác nhau.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Orlistat gây tiêu chảy phân mỡ. DS giải thích gì?",
            "opts": [
                "Không liên quan",
                "Orlistat ức chế lipase → chất béo không hấp thu → phân mỡ — tác dụng phụ dự kiến",
                "Ngừng ngay"
            ],
            "ans": 1,
            "exp": "Orlistat ức chế lipase: 30% chất béo không hấp thu → steatorrhea, tiêu chảy. Tác dụng phụ dự kiến, giảm khi ăn ít béo.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Loperamide an toàn cho tiêu chảy kèm sốt cao và phân có máu.",
            "ans": false,
            "exp": "CCĐ: tiêu chảy sốt cao (nhiễm trùng xâm lấn) hoặc phân máu/nhầy. Giảm nhu động → vi khuẩn/toxin ở lâu → nặng thêm.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "ORS cho trẻ nôn kèm tiêu chảy: cho uống thế nào?",
            "opts": [
                "200 mL một lần",
                "10-20 mL mỗi 5-10 phút",
                "Không cho uống khi nôn"
            ],
            "ans": 1,
            "exp": "Trẻ nôn + tiêu chảy: ORS từng ngụm nhỏ (10-20 mL) mỗi 5-10 phút. Lượng nhỏ thường xuyên ít gây nôn hơn.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nam 65t, đang dùng digoxin, bị tiêu chảy cấp. DS tư vấn dùng bismuth subsalicylate không cần lưu ý đặc biệt.",
            "ans": false,
            "exp": "Tiêu chảy gây mất kali, tăng nguy cơ ngộ độc digoxin. Ngoài ra, bismuth subsalicylate chứa salicylate cần thận trọng ở NCT. DS cần ưu tiên bù dịch–điện giải và theo dõi sát.",
            "icon": "⚠️"
        }
    ],
    "constipation": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN táo bón mới, chế độ ăn ít chất xơ, ít uống nước. DS ưu tiên tư vấn gì?",
            "opts": [
                "Bisacodyl ngay",
                "Tăng chất xơ + uống ≥1.5–2L nước/ngày + tăng vận động",
                "Lactulose liều cao"
            ],
            "ans": 1,
            "exp": "Táo bón do lối sống: ưu tiên non-pharm trước. Tăng chất xơ (rau, trái cây, ngũ cốc nguyên hạt), uống đủ nước, tập thể dục đều đặn. Thuốc nhuận tràng chỉ khi biện pháp trên không đủ.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN táo bón, cần thuốc nhuận tràng first-line. DS chọn gì?",
            "opts": [
                "Bisacodyl (kích thích)",
                "Thuốc nhuận tràng tạo khối (ispaghula husk/psyllium)",
                "Glycerin đạn hậu môn"
            ],
            "ans": 1,
            "exp": "NICE: nhuận tràng tạo khối (bulk-forming: ispaghula, methylcellulose) là first-line. Cơ chế: hút nước, tăng khối phân → kích thích nhu động. Cần 2–3 ngày phát huy. Phải uống đủ nước khi dùng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc nhuận tràng tạo khối (ispaghula husk) có thể gây tắc ruột nếu BN không uống đủ nước.",
            "ans": true,
            "exp": "Nhuận tràng tạo khối hút nước → nếu BN không uống đủ → phân cứng thêm → nguy cơ tắc ruột. Tư vấn: mỗi liều ispaghula phải uống kèm ≥150 mL nước. CCĐ ở BN tắc ruột có sẵn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN táo bón, dùng ispaghula 3 ngày chưa thấy hiệu quả. DS tư vấn gì?",
            "opts": [
                "Ngừng ngay vì không hiệu quả",
                "Kiên nhẫn — nhuận tràng tạo khối cần 2–3 ngày, đôi khi đến vài tuần",
                "Đổi sang bisacodyl liều cao"
            ],
            "ans": 1,
            "exp": "Nhuận tràng tạo khối: onset chậm (2–3 ngày). Nếu táo bón mạn, có thể cần vài tuần để cải thiện đáng kể. Tư vấn BN kiên nhẫn + duy trì chế độ ăn giàu xơ + đủ nước.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cần đi tiêu nhanh (chuẩn bị thủ thuật ngày mai). Thuốc nhuận tràng nào tác dụng nhanh?",
            "opts": [
                "Ispaghula husk",
                "Bisacodyl đạn hậu môn (onset 15–60 phút)",
                "Lactulose (onset 24–48h)"
            ],
            "ans": 1,
            "exp": "Bisacodyl đạn hậu môn: onset 15–60 phút (nhanh nhất). Bisacodyl viên uống: onset 6–12h (thường uống tối, tác dụng sáng). Lactulose: onset 24–48h. Ispaghula: 2–3 ngày.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 80t, táo bón mạn. DS nên tránh nhuận tràng nào?",
            "opts": [
                "Lactulose",
                "Thuốc nhuận tràng kích thích (bisacodyl, senna) dùng dài hạn",
                "Macrogol (PEG)"
            ],
            "ans": 1,
            "exp": "Nhuận tràng kích thích (bisacodyl, senna) dùng dài hạn → có thể gây phụ thuộc (lazy bowel), rối loạn điện giải (hạ kali). NCT nên ưu tiên: tăng xơ + lactulose hoặc macrogol dài hạn. Kích thích chỉ dùng ngắn hạn.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Lactulose CCĐ ở phụ nữ mang thai vì gây co tử cung.",
            "ans": false,
            "exp": "Ngược lại: lactulose KHÔNG hấp thu toàn thân → an toàn cho thai phụ, cho con bú, NCT, trẻ em. Là lựa chọn ưu tiên cho táo bón thai kỳ.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ thường gặp của lactulose?",
            "opts": [
                "Táo bón nặng hơn",
                "Đầy hơi, sình bụng, đau quặn bụng",
                "Buồn ngủ"
            ],
            "ans": 1,
            "exp": "Lactulose lên men bởi vi khuẩn đại tràng → sinh khí → đầy hơi, sình bụng, đau quặn. Đặc biệt khi bắt đầu dùng hoặc liều cao. Giảm bằng cách bắt đầu liều thấp, tăng dần.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Macrogol (PEG 3350) có ưu điểm gì so với lactulose?",
            "opts": [
                "Rẻ hơn",
                "Ít gây đầy hơi, sình bụng hơn vì không bị lên men vi khuẩn",
                "Tác dụng nhanh hơn (trong 1 giờ)"
            ],
            "ans": 1,
            "exp": "Macrogol (PEG): giữ nước trong ruột qua thẩm thấu, KHÔNG bị lên men vi khuẩn → ít đầy hơi, sình bụng hơn lactulose. Onset ~24–48h. An toàn, ít tương tác. Thường ưu tiên hơn lactulose cho táo bón mạn.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Senna và bisacodyl an toàn dùng dài hạn hàng tháng mà không gây phụ thuộc.",
            "ans": false,
            "exp": "Ngược lại: nhuận tràng kích thích dùng >1 tuần nguy cơ phụ thuộc (lazy bowel), rối loạn điện giải (hạ kali), melanosis coli (senna).",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ mang thai 7 tháng, táo bón. DS ưu tiên thuốc nào?",
            "opts": [
                "Bisacodyl viên uống",
                "Lactulose hoặc ispaghula husk",
                "Dầu khoáng (mineral oil) uống"
            ],
            "ans": 1,
            "exp": "Thai phụ: lactulose và ispaghula là lựa chọn an toàn (không hấp thu toàn thân). Bisacodyl: có thể dùng ngắn hạn nhưng không ưu tiên. Dầu khoáng: tránh dài hạn (giảm hấp thu vitamin tan trong dầu).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Glycerin đạn hậu môn tác dụng qua cơ chế nào?",
            "opts": [
                "Ức chế hấp thu nước",
                "Kích thích trực tiếp niêm mạc trực tràng + bôi trơn + tăng thẩm thấu",
                "Giết vi khuẩn gây táo bón"
            ],
            "ans": 1,
            "exp": "Glycerin (glycerol) đạn: (1) kích thích niêm mạc trực tràng → tăng nhu động, (2) bôi trơn phân, (3) tăng thẩm thấu nhẹ. Onset 15–30 phút. An toàn cho mọi đối tượng, kể cả trẻ nhỏ.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Docusate sodium là thuốc nhuận tràng mềm phân (stool softener), tác dụng qua giảm sức căng bề mặt → nước ngấm vào phân.",
            "ans": true,
            "exp": "Docusate: hoạt chất bề mặt (surfactant) → giảm sức căng bề mặt phân → nước và chất béo ngấm vào → phân mềm. Onset 24–48h. Hiệu quả nhẹ, thường phối hợp với biện pháp khác.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng opioid (codeine) cho đau mạn, bị táo bón nặng. DS tư vấn gì?",
            "opts": [
                "Tăng ispaghula là đủ",
                "Macrogol hoặc lactulose thường quy + nhuận tràng kích thích nếu cần",
                "Chỉ tăng xơ và nước"
            ],
            "ans": 1,
            "exp": "Táo bón do opioid: cần nhuận tràng phòng ngừa thường quy (macrogol hoặc lactulose). Opioid giảm nhu động + tăng hấp thu nước → táo bón nặng, không đáp ứng đủ với xơ đơn thuần. Có thể thêm kích thích ngắn hạn.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN táo bón hỏi mua thuốc nhuận tràng muối (magnesium sulfate/citrate). DS lưu ý gì?",
            "opts": [
                "An toàn dùng dài hạn",
                "Chỉ dùng ngắn hạn (occasional use); CCĐ suy thận",
                "Hiệu quả nhất trong mọi loại nhuận tràng"
            ],
            "ans": 1,
            "exp": "Nhuận tràng muối (Mg sulfate/citrate, Na phosphate): tác dụng nhanh nhưng chỉ dùng ngắn hạn (occasional). BN suy thận: CCĐ Mg (tích lũy gây tăng Mg máu). Liều cao gây mất nước, rối loạn điện giải.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nhuận tràng kích thích (senna) dùng dài hạn có thể gây melanosis coli (đổi màu niêm mạc đại tràng).",
            "ans": false,
            "exp": "Melanosis coli do senna/anthraquinone: đổi màu nâu niêm mạc đại tràng. Tuy nhiên, đây là tình trạng lành tính, hồi phục sau khi ngừng thuốc. Mối lo ngại chính với dùng dài hạn là phụ thuộc thuốc và rối loạn điện giải, không phải melanosis.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trẻ em 3 tuổi, táo bón mạn. DS tư vấn thuốc nào?",
            "opts": [
                "Bisacodyl viên uống",
                "Macrogol (PEG) dạng bột pha",
                "Senna liều cao"
            ],
            "ans": 1,
            "exp": "Trẻ em táo bón mạn: macrogol (PEG) là ưu tiên hàng đầu (dễ điều chỉnh liều, ít tác dụng phụ, an toàn). Lactulose là lựa chọn thay thế. Nhuận tràng kích thích chỉ dùng ngắn hạn, add-on nếu cần.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng thuốc nào dưới đây có thể gây táo bón?",
            "opts": [
                "Metformin",
                "Opioid (codeine, tramadol)",
                "Orlistat"
            ],
            "ans": 1,
            "exp": "Opioid CCĐ nhu động ruột qua thụ thể mu → táo bón rất phổ biến (40–90% BN dùng opioid). Metformin gây tiêu chảy, không táo bón. Orlistat gây phân mỡ/tiêu chảy.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mineral oil (dầu khoáng) uống có thể giảm hấp thu vitamin A, D, E, K nếu dùng dài hạn.",
            "ans": true,
            "exp": "Mineral oil (dầu parafin): bôi trơn phân nhưng dùng dài hạn → giảm hấp thu vitamin tan trong dầu (A, D, E, K). Ngoài ra nguy cơ viêm phổi hít (lipoid pneumonia) nếu nuốt sặc. Không ưu tiên.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bisacodyl viên uống cần lưu ý gì?",
            "opts": [
                "Nhai kỹ trước khi nuốt",
                "Nuốt nguyên viên, KHÔNG uống cùng sữa hoặc antacid (phá lớp bao tan ruột)",
                "Uống cùng sữa để giảm kích ứng"
            ],
            "ans": 1,
            "exp": "Bisacodyl viên bao tan trong ruột: nuốt nguyên, không nhai. Tránh uống cùng sữa/antacid (tăng pH → phá lớp bao → giải phóng bisacodyl tại dạ dày → kích ứng, đau bụng).",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN táo bón mới, kèm sụt cân, phân có máu, >50 tuổi. DS lo ngại gì?",
            "opts": [
                "Táo bón do thiếu xơ thông thường",
                "Nghi ung thư đại trực tràng — chuyển BS khẩn",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "Táo bón mới + sụt cân + phân có máu + >50 tuổi = Red Flag ung thư đại trực tràng. Chuyển BS khẩn: nội soi đại tràng. Không xử trí OTC đơn thuần.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Táo bón phổ biến ở NCT >65 tuổi, ước tính 25–40% NCT bị táo bón.",
            "ans": true,
            "exp": "NCT: lối sống ít vận động, giảm uống nước, dinh dưỡng kém, bệnh mạn tính, dùng nhiều thuốc gây táo bón → 25–40% NCT >65 tuổi bị táo bón. Nữ bị nhiều hơn nam 2–3 lần.",
            "icon": "👴"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN táo bón mới, kèm đau bụng dữ dội, nôn, bụng chướng, không xì hơi. DS lo gì?",
            "opts": [
                "Táo bón nặng thông thường — dùng bisacodyl",
                "Nghi tắc ruột (bowel obstruction) — cấp cứu ngay",
                "Hội chứng ruột kích thích thể táo bón"
            ],
            "ans": 1,
            "exp": "Đau bụng dữ dội + nôn + bụng chướng + không xì hơi (không trung tiện) = triệu chứng tắc ruột. Cấp cứu ngoại khoa → chuyển cấp cứu ngay. Nhuận tràng CCĐ trong tắc ruột.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN mới dùng verapamil (chẹn kênh calci) 2 tuần, nay táo bón. DS nhận ra gì?",
            "opts": [
                "Hai vấn đề không liên quan",
                "Verapamil gây táo bón — tác dụng phụ phổ biến, báo BS",
                "Táo bón do thiếu xơ"
            ],
            "ans": 1,
            "exp": "Verapamil (và diltiazem): chẹn kênh calci → giảm nhu động ruột → táo bón phổ biến. Thuốc khác gây táo bón: opioid, antihistamine thế hệ 1, sắt, antacid Al, thuốc chống trầm cảm TCA.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS luôn cần hỏi BN \"bình thường bạn đi tiêu bao nhiêu lần\" vì tần suất đại tiện bình thường thay đổi theo người.",
            "ans": true,
            "exp": "Tần suất đại tiện bình thường: từ 3 lần/ngày đến 3 lần/tuần. Táo bón = GIẢM so với thói quen bình thường của BN đó + phân cứng + khó đi. Không áp dụng 1 tiêu chuẩn cho tất cả.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN táo bón mạn, dùng nhuận tràng 3 tuần không cải thiện. DS nên làm gì?",
            "opts": [
                "Tăng liều nhuận tràng gấp đôi",
                "Chuyển BS đánh giá nguyên nhân nền",
                "Đổi sang thụt tháo hàng ngày"
            ],
            "ans": 1,
            "exp": "Táo bón không đáp ứng nhuận tràng sau 2–3 tuần → cần chuyển BS: loại trừ nguyên nhân cấu trúc (u đại tràng), rối loạn sàn chậu, bệnh nội tiết (suy giáp), thuốc. Không tăng liều vô hạn.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "~40% phụ nữ mang thai cuối thai kỳ bị táo bón do hormone progesterone giảm nhu động ruột.",
            "ans": true,
            "exp": "Progesterone cao trong thai kỳ → giãn cơ trơn ruột → giảm nhu động → táo bón. Thêm: tử cung to đè ép ruột + bổ sung sắt → 40% thai phụ cuối thai kỳ táo bón.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy thận mạn, táo bón. DS cần tránh nhuận tràng chứa gì?",
            "opts": [
                "PEG (macrogol)",
                "Magnesium (Mg sulfate, Mg hydroxide)",
                "Lactulose"
            ],
            "ans": 1,
            "exp": "Suy thận mạn: Mg thải qua thận → tích lũy nếu suy thận → tăng Mg máu (yếu cơ, hạ HA, loạn nhịp). Tránh nhuận tràng chứa Mg. PEG và lactulose an toàn hơn.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi về nhuận tràng thảo dược chứa senna. DS tư vấn gì?",
            "opts": [
                "Thảo dược nên an toàn dùng dài hạn",
                "Senna là nhuận tràng kích thích — chỉ dùng ngắn hạn dù là thảo dược",
                "Senna OTC không có tác dụng phụ"
            ],
            "ans": 1,
            "exp": "Senna dù là thảo dược vẫn là nhuận tràng kích thích (anthraquinone). Dùng dài hạn: nguy cơ phụ thuộc, hạ kali máu, đau bụng quặn. Tối đa 1 tuần OTC. \"Thảo dược\" không đồng nghĩa an toàn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nhuận tràng tạo khối (ispaghula) CCĐ ở BN tắc ruột hoặc nghi tắc ruột.",
            "ans": true,
            "exp": "Nhuận tràng tạo khối trương nở → tăng khối phân. Nếu đã tắc ruột → phân không đi qua được → nặng thêm tắc. CCĐ tuyệt đối trong tắc ruột, phình đại tràng (megacolon), atonic colon.",
            "icon": "⛔"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN táo bón hỏi DS lời khuyên thay đổi lối sống. DS tư vấn gì?",
            "opts": [
                "Uống cà phê nhiều để kích thích ruột",
                "Tăng chất xơ (25–30 g/ngày), uống đủ nước, tập thể dục đều đặn, không nhịn đi tiêu",
                "Ăn kiêng hoàn toàn chất béo"
            ],
            "ans": 1,
            "exp": "Non-pharm: (1) tăng xơ (rau, trái cây, ngũ cốc nguyên hạt) 25–30 g/ngày, (2) uống ≥1.5–2L nước/ngày, (3) tập thể dục đều (30 phút/ngày), (4) không nhịn khi có cảm giác muốn đi tiêu, (5) tập thói quen đi tiêu cố định.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng antacid chứa aluminium hydroxide lâu ngày, nay táo bón. DS nhận ra gì?",
            "opts": [
                "Hai vấn đề không liên quan",
                "Aluminium hydroxide gây táo bón — đổi sang Mg hoặc phối hợp Al+Mg",
                "Aluminium gây tiêu chảy"
            ],
            "ans": 1,
            "exp": "Aluminium hydroxide: tác dụng phụ gây táo bón (tăng hấp thu nước trong ruột). Nếu BN cần antacid mà dễ táo bón → đổi sang Mg hydroxide (gây lỏng) hoặc sản phẩm phối hợp Al+Mg.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Phosphate enema (thụt phosphate) an toàn dùng thường quy cho NCT táo bón.",
            "ans": false,
            "exp": "Phosphate enema: CCĐ dùng thường quy ở NCT → nguy cơ tăng phosphate máu, hạ calci, mất nước, đặc biệt ở BN suy thận. Chỉ dùng khi thật cần thiết, dưới giám sát. NCT: ưu tiên macrogol, lactulose uống.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS thể táo bón (IBS-C). DS tư vấn nhuận tràng nào?",
            "opts": [
                "Senna hàng ngày",
                "Ispaghula husk hoặc macrogol + tránh trigger (stress, thực phẩm)",
                "Bisacodyl liều cao"
            ],
            "ans": 1,
            "exp": "IBS-C: nhuận tràng tạo khối (ispaghula) hoặc thẩm thấu (macrogol) phù hợp dài hạn. Tránh nhuận tràng kích thích thường quy. Kết hợp: quản lý stress, tránh trigger food, tập thể dục.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN táo bón mạn + mệt mỏi + tăng cân + da khô + nhịp tim chậm. DS nghi gì?",
            "opts": [
                "Táo bón do ít xơ",
                "Nghi suy giáp — chuyển BS xét nghiệm tuyến giáp",
                "IBS thể táo bón"
            ],
            "ans": 1,
            "exp": "Táo bón + mệt + tăng cân + da khô + nhịp tim chậm + sợ lạnh = gợi ý suy giáp (hypothyroidism). Cần chuyển BS xét nghiệm TSH, FT4. Điều trị suy giáp sẽ cải thiện táo bón.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN táo bón mới khởi phát ở người >50 tuổi luôn cần chuyển BS đánh giá để loại trừ ung thư đại trực tràng.",
            "ans": true,
            "exp": "Thay đổi thói quen đại tiện mới (táo bón hoặc tiêu chảy) ở người >50 tuổi → Red Flag ung thư đại trực tràng. Cần nội soi đại tràng. Đặc biệt khi kèm sụt cân, phân có máu.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Stimulant laxative (bisacodyl uống) thường được khuyên uống buổi tối vì tác dụng trong 6–12 giờ, sẽ đi tiêu vào sáng hôm sau.",
            "ans": true,
            "exp": "Bisacodyl uống: onset 6–12 giờ. Uống buổi tối → đi tiêu vào sáng hôm sau, phù hợp thói quen sinh hoạt. Đạn hậu môn: onset 15–60 phút, dùng khi cần tác dụng nhanh.",
            "icon": "⏰"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 5 tuổi, táo bón mạn, hay nhịn đi tiêu vì sợ đau. DS tư vấn gì?",
            "opts": [
                "Chỉ dùng bisacodyl liều cao",
                "Macrogol để phân mềm + khuyến khích tập thói quen đi tiêu + không ép trẻ",
                "Thụt tháo hàng ngày"
            ],
            "ans": 1,
            "exp": "Trẻ em sợ đi tiêu (witholding behaviour): phân cứng → đau → sợ → nhịn → phân càng cứng (vòng xoắn). Macrogol (PEG) làm phân mềm + tập thói quen ngồi toilet sau bữa ăn (tận dụng phản xạ gastrocolic) + khen ngợi, không ép.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng thuốc chống trầm cảm 3 vòng (amitriptyline), bị táo bón. DS hiểu cơ chế gì?",
            "opts": [
                "Amitriptyline kích thích nhu động",
                "Tác dụng anticholinergic của amitriptyline → giảm nhu động ruột",
                "Amitriptyline gây tiêu chảy chứ không táo bón"
            ],
            "ans": 1,
            "exp": "TCA (amitriptyline, nortriptyline): tác dụng anticholinergic mạnh → giảm tiết dịch, giảm nhu động ruột → táo bón. Thuốc khác gây táo bón qua anticholinergic: antihistamine thế hệ 1, thuốc chống co thắt.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Bisacodyl là thuốc nhuận tràng thẩm thấu, hoạt động bằng cách giữ nước trong lòng ruột.",
            "ans": false,
            "exp": "Bisacodyl là thuốc nhuận tràng kích thích (stimulant laxative), tác dụng lên đám rối thần kinh Auerbach, tăng nhu động ruột. Thuốc nhuận tràng thẩm thấu là lactulose, macrogol, muối magnesi.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tất cả nhuận tràng đều an toàn dùng dài hạn không cần giám sát.",
            "ans": false,
            "exp": "Chỉ tạo khối (ispaghula) và thẩm thấu (macrogol, lactulose) phù hợp dài hạn. Kích thích (senna, bisacodyl) chỉ ngắn hạn.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Táo bón do opioid kháng trị. Thuốc ETC nào có thể giúp?",
            "opts": [
                "Tăng senna gấp 4",
                "Methylnaltrexone (opioid antagonist ngoại vi)",
                "Thụt tháo hàng ngày"
            ],
            "ans": 1,
            "exp": "Methylnaltrexone/naloxegol: chặn mu-opioid ngoại vi → giảm táo bón mà không giảm giảm đau. ETC kê đơn.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Lactulose và sorbitol gây tác dụng phụ chung gì?",
            "opts": [
                "Buồn ngủ",
                "Đầy hơi, sình bụng do lên men vi khuẩn đại tràng",
                "Tăng huyết áp"
            ],
            "ans": 1,
            "exp": "Lactulose/sorbitol: lên men vi khuẩn đại tràng → sinh khí → đầy hơi. Macrogol (PEG) không lên men → ít đầy hơi hơn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nữ 30t, táo bón mạn tính, dùng senna hằng ngày 3 tháng nay. DS đánh giá việc dùng kéo dài này là an toàn.",
            "ans": false,
            "exp": "Thuốc nhuận tràng kích thích (senna, bisacodyl) không nên dùng kéo dài > 1 tuần liên tục vì nguy cơ lệ thuộc, giảm trương lực ruột (melanosis coli). Cần chuyển sang nhuận tràng thẩm thấu hoặc tạo khối.",
            "icon": "⏱️"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN nam 58t, táo bón mới xuất hiện 2 tuần kèm phân dẹt (ribbon-like). DS đánh giá đây là táo bón chức năng do ít chất xơ.",
            "ans": false,
            "exp": "Thay đổi hình dạng phân (phân dẹt, nhỏ) kèm táo bón mới khởi phát ở người > 50t là red flag nghi ngờ tắc nghẽn đại tràng (u đại tràng). Cần chuyển BS ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Táo bón + nôn + đau bụng quặn + bụng chướng. DS nghi gì?",
            "opts": [
                "Táo bón nặng thông thường",
                "Tắc ruột — cấp cứu ngoại khoa",
                "IBS táo bón"
            ],
            "ans": 1,
            "exp": "Đau quặn + nôn + chướng bụng + không xì hơi = tắc ruột cơ học. Cấp cứu. Nhuận tràng CCĐ.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Chlorphenamine gây táo bón qua cơ chế gì?",
            "opts": [
                "Kích thích nhu động",
                "Tác dụng anticholinergic giảm nhu động ruột",
                "Tăng hấp thu nước"
            ],
            "ans": 1,
            "exp": "KH thế hệ 1: anticholinergic → giảm nhu động → táo bón. DS cần kiểm tra thuốc BN đang dùng khi đánh giá táo bón.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Macrogol có nhiều tương tác thuốc và CCĐ.",
            "ans": false,
            "exp": "Macrogol: KHÔNG hấp thu, KHÔNG lên men, KHÔNG tương tác thuốc. Rất ít CCĐ (tắc ruột, thủng ruột). Nhuận tràng thẩm thấu an toàn nhất.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Táo bón + phân dẹt (ribbon-like). DS lo gì?",
            "opts": [
                "Thiếu xơ",
                "Nghi hẹp đại/trực tràng (u, polyp) — chuyển BS",
                "IBS"
            ],
            "ans": 1,
            "exp": "Phân dẹt → nghi hẹp lòng ruột: u, polyp lớn, ung thư. Red Flag ở BN >50 tuổi. Nội soi đại tràng.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Lactulose có thể dùng an toàn cho BN đái tháo đường mà không cần lưu ý gì đặc biệt.",
            "ans": false,
            "exp": "Lactulose là đường tổng hợp (disaccharide). Dù hấp thu rất ít, một số dạng bào chế chứa galactose/lactose tự do có thể ảnh hưởng đường huyết ở BN ĐTĐ. Macrogol (PEG) là lựa chọn thay thế phù hợp hơn.",
            "icon": "⚠️"
        }
    ],
    "gerd": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ợ nóng (heartburn) tái phát, nặng hơn khi nằm và cúi người. DS ưu tiên thuốc nào?",
            "opts": [
                "Antacid đơn thuần",
                "Alginate-antacid kết hợp (tạo raft ngăn trào ngược)",
                "Loperamide"
            ],
            "ans": 1,
            "exp": "Heartburn tái phát + nặng khi nằm/cúi = GERD kinh điển. Alginate tạo lớp raft nổi trên bề mặt dạ dày ngăn acid trào ngược lên thực quản. Hiệu quả hơn antacid đơn thuần cho GERD.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD triệu chứng trung bình–nặng, alginate không đủ kiểm soát. DS nâng bậc lên thuốc nào?",
            "opts": [
                "Tăng liều antacid",
                "PPI OTC (omeprazole/esomeprazole 20 mg/ngày)",
                "Metoclopramide"
            ],
            "ans": 1,
            "exp": "PPI hiệu quả hơn H2RA và antacid trong GERD (Sigterman et al., 2013). Omeprazole/esomeprazole/pantoprazole OTC 20 mg/ngày × tối đa 2 tuần. Nếu không đáp ứng → chuyển BS.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI ức chế bơm proton (H+/K+-ATPase) ở tế bào thành dạ dày — là thuốc ức chế tiết acid mạnh nhất.",
            "ans": true,
            "exp": "PPI ức chế giai đoạn cuối tiết acid (H+/K+-ATPase) → ức chế tiết acid mạnh và kéo dài (>24h). Hiệu quả hơn H2RA (chỉ chặn histamine) và antacid (chỉ trung hòa acid có sẵn).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD dùng PPI OTC 2 tuần, triệu chứng hết. BN hỏi có cần tiếp tục. DS trả lời gì?",
            "opts": [
                "Dùng tiếp 3 tháng cho chắc",
                "Có thể ngừng — nếu tái phát → chuyển BS đánh giá",
                "Dùng suốt đời"
            ],
            "ans": 1,
            "exp": "PPI OTC: dùng tối đa 2 tuần, ngừng khi hết triệu chứng. Nếu tái phát sau ngừng → chuyển BS: nội soi đánh giá (viêm thực quản, Barrett). Không tự ý dùng PPI dài hạn OTC.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nằm hay bị trào ngược ban đêm. DS tư vấn non-pharm gì?",
            "opts": [
                "Ăn nhiều trước ngủ để hấp thu acid",
                "Nâng đầu giường 10–20 cm, ăn tối ≥3–4 giờ trước ngủ",
                "Nằm nghiêng phải để dạ dày xả nhanh hơn"
            ],
            "ans": 1,
            "exp": "Non-pharm GERD ban đêm: nâng đầu giường (kê gạch/gỗ dưới chân giường, không chỉ gối cao), ăn tối ≥3–4h trước ngủ, tránh ăn khuya. Nằm nghiêng trái có thể tốt hơn phải (giải phẫu).",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Caffeine, chocolate và rượu làm TĂNG trương lực cơ thắt thực quản dưới (LES) → bảo vệ khỏi trào ngược.",
            "ans": false,
            "exp": "Ngược lại: caffeine, chocolate, rượu GIẢM trương lực LES → tăng trào ngược. Đây là lý do BN GERD cần tránh các chất này.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD đang dùng nifedipine (chẹn kênh calci) cho THA. DS nhận ra gì?",
            "opts": [
                "Nifedipine không ảnh hưởng GERD",
                "Nifedipine giảm trương lực LES → có thể gây/nặng trào ngược",
                "Nifedipine chữa GERD"
            ],
            "ans": 1,
            "exp": "Nhiều thuốc giảm trương lực LES: chẹn kênh calci (nifedipine, amlodipine), nitrate, theophylline, anticholinergic, benzodiazepine. DS nên xem xét thuốc BN đang dùng khi đánh giá GERD.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN thừa cân (BMI 30) bị GERD. DS nhấn mạnh biện pháp nào?",
            "opts": [
                "Dùng PPI liều cao dài hạn",
                "Giảm cân — bằng chứng giảm triệu chứng GERD",
                "Phẫu thuật chống trào ngược"
            ],
            "ans": 1,
            "exp": "Thừa cân/béo phì: tăng áp lực ổ bụng → đẩy acid trào ngược. Có bằng chứng giảm cân cải thiện triệu chứng GERD. Giảm cân là biện pháp non-pharm quan trọng nhất ở BN thừa cân.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI có onset nhanh hơn H2RA và phù hợp hơn cho triệu chứng GERD nhẹ, không thường xuyên.",
            "ans": false,
            "exp": "Ngược lại: H2RA onset ~1h (nhanh hơn PPI cần 1-2 ngày đạt tối đa). H2RA phù hợp cho ợ nóng nhẹ, không thường xuyên. PPI cho GERD tái phát, trung bình-nặng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN mang thai ợ nóng nặng. DS tư vấn thuốc nào?",
            "opts": [
                "PPI omeprazole",
                "Antacid/alginate low-sodium",
                "Bismuth subsalicylate"
            ],
            "ans": 1,
            "exp": "Thai phụ GERD: antacid/alginate low-sodium là ưu tiên (an toàn). PPI: nhà sản xuất OTC khuyên tránh/thận trọng. Ranitidine: có thể dùng (an toàn thai kỳ). Bismuth: CCĐ (salicylate).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Alginate tác dụng qua cơ chế nào?",
            "opts": [
                "Trung hòa acid trực tiếp",
                "Tạo lớp gel nổi (raft) trên bề mặt dạ dày ngăn acid trào ngược",
                "Ức chế tiết acid ở tế bào thành"
            ],
            "ans": 1,
            "exp": "Alginate + acid dạ dày → kết tủa thành matrix gel xốp nổi trên bề mặt dạ dày (raft). Kết hợp NaHCO3 → CO2 giúp raft nổi. Raft ngăn acid trào lên thực quản. Cơ chế vật lý, không phải hóa học.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alginate hiệu quả nhất khi uống lúc đói vì không có thức ăn cản trở.",
            "ans": false,
            "exp": "Ngược lại: alginate cần thức ăn trong dạ dày để raft nổi trên bề mặt. Uống SAU ăn + trước ngủ = tối ưu.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau ngực kiểu ợ nóng nhưng không đáp ứng antacid, đau lan lên cánh tay trái. DS lo gì?",
            "opts": [
                "GERD kháng trị — tăng liều PPI",
                "Nghi đau thắt ngực/bệnh mạch vành — chuyển cấp cứu",
                "Viêm thực quản nặng"
            ],
            "ans": 1,
            "exp": "Đau ngực + lan cánh tay trái + không đáp ứng antacid = Red Flag tim mạch (angina, hội chứng vành cấp). GERD và bệnh mạch vành triệu chứng chồng lắp. Chuyển cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD, hỏi về PPI dùng lâu dài có tác dụng phụ gì. DS trả lời gì?",
            "opts": [
                "PPI hoàn toàn không có tác dụng phụ dài hạn",
                "PPI dài hạn: tăng nguy cơ gãy xương, giảm Mg máu, nhiễm trùng đường ruột, giảm hấp thu B12",
                "PPI dài hạn chỉ gây đau đầu"
            ],
            "ans": 1,
            "exp": "PPI dài hạn (>1 năm): tăng nguy cơ gãy xương (giảm hấp thu Ca), hạ Mg máu, nhiễm C. difficile, viêm phổi, giảm hấp thu vitamin B12/sắt. Tuy nhiên nguy cơ tuyệt đối thấp. Dùng liều thấp nhất hiệu quả.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ợ nóng kèm nuốt khó (dysphagia) tiến triển. DS đánh giá gì?",
            "opts": [
                "GERD bình thường — dùng PPI",
                "Red Flag — nghi hẹp thực quản hoặc ung thư → chuyển BS khẩn",
                "Trầm cảm gây cảm giác nuốt khó"
            ],
            "ans": 1,
            "exp": "Dysphagia (nuốt khó thực sự) = Red Flag → nghi: hẹp thực quản do trào ngược mạn, Barrett thực quản, ung thư thực quản. Chuyển BS khẩn: nội soi thực quản.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "GERD mạn tính không điều trị có thể dẫn đến Barrett thực quản — tình trạng tiền ung thư.",
            "ans": true,
            "exp": "Trào ngược acid mạn → viêm thực quản → thay đổi mô (metaplasia: biểu mô vảy → biểu mô trụ) = Barrett thực quản. Barrett tăng nguy cơ adenocarcinoma thực quản. Cần nội soi theo dõi.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN GERD, DS tư vấn thay đổi tư thế. Lời khuyên nào đúng?",
            "opts": [
                "Cúi người sau ăn giúp tiêu hóa",
                "Tránh cúi, khom lưng, ngồi gù sau ăn — các tư thế tăng áp lực ổ bụng",
                "Nằm ngay sau ăn để dạ dày nghỉ"
            ],
            "ans": 1,
            "exp": "Cúi, khom, ngồi gù, nằm ngay sau ăn → tăng áp lực ổ bụng → đẩy acid trào ngược. Tư vấn: đứng/ngồi thẳng sau ăn ≥30 phút, tránh cúi người, nâng đầu giường khi ngủ.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ợ nóng (heartburn) phổ biến ở phụ nữ mang thai, thường bắt đầu từ giữa–cuối thai kỳ.",
            "ans": true,
            "exp": "Thai kỳ: progesterone giảm trương lực LES + tử cung to tăng áp lực ổ bụng → ợ nóng phổ biến, đặc biệt từ tháng 4–5 trở đi. Có thể xuất hiện ở bất kỳ giai đoạn nào. Thường hết sau sinh.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều ranitidine OTC cho GERD?",
            "opts": [
                "75 mg × 1 viên, lặp lại sau 1h nếu cần, tối đa 300 mg/ngày",
                "150 mg × 3 lần/ngày",
                "300 mg liều duy nhất"
            ],
            "ans": 0,
            "exp": "Ranitidine OTC: 75 mg, lặp lại sau 1h nếu triệu chứng còn. Tối đa 300 mg (4 viên)/24h (Pharmacy). GSL: tối đa 150 mg (2 viên)/24h. Không tương tác thuốc đáng kể.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN hút thuốc lá, GERD tái phát. DS nhấn mạnh gì?",
            "opts": [
                "Hút thuốc không liên quan GERD",
                "Bỏ thuốc lá — nicotine giảm trương lực LES + tăng tiết acid",
                "Chỉ cần dùng PPI là đủ"
            ],
            "ans": 1,
            "exp": "Nicotine: giảm trương lực LES + tăng tiết acid + giảm tiết nước bọt (buffer tự nhiên) → nặng GERD. Bỏ thuốc là biện pháp non-pharm quan trọng cho GERD.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid dạng lỏng khi BN đang chờ PPI phát huy tác dụng là phối hợp hợp lý trong GERD.",
            "ans": true,
            "exp": "PPI cần 1–2 ngày để đạt hiệu quả tối đa (ức chế bơm proton cần tích lũy). Trong thời gian chờ, antacid/alginate cho relief nhanh là phối hợp hợp lý. Sau vài ngày PPI đủ hiệu quả, có thể ngừng antacid.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng bisphosphonate (alendronate) cho loãng xương, bị GERD. DS lưu ý gì?",
            "opts": [
                "Bisphosphonate có thể gây viêm thực quản nặng — báo BS",
                "GERD và bisphosphonate không liên quan",
                "Cho dùng thêm antacid cùng lúc bisphosphonate"
            ],
            "ans": 0,
            "exp": "Bisphosphonate (alendronate, risedronate) gây viêm/loét thực quản nếu không uống đúng cách (phải đứng/ngồi thẳng ≥30 phút sau uống). GERD + bisphosphonate = nguy cơ viêm thực quản cao → báo BS.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN GERD, nôn ra máu (haematemesis). DS xử trí gì?",
            "opts": [
                "Tăng liều PPI",
                "Chuyển cấp cứu — ALARM symptom",
                "Dùng alginate liều cao"
            ],
            "ans": 1,
            "exp": "Haematemesis = ALARM symptom → nghi chảy máu tiêu hóa trên (viêm thực quản nặng, loét, Mallory-Weiss tear). Cấp cứu ngay. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Omeprazole có tương tác quan trọng với clopidogrel — cần thay thế bằng pantoprazole nếu BN dùng clopidogrel.",
            "ans": true,
            "exp": "Omeprazole ức chế CYP2C19 mạnh → giảm chuyển hóa clopidogrel → giảm hiệu quả chống kết tập tiểu cầu. Pantoprazole ít ức chế CYP2C19 hơn → ưu tiên cho BN dùng clopidogrel.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD + ho khan mạn tính ban đêm. DS nhận ra mối liên quan gì?",
            "opts": [
                "Hai bệnh không liên quan",
                "GERD gây ho khan qua kích thích vagal và/hoặc vi hít acid",
                "BN cần thêm thuốc ho ức chế"
            ],
            "ans": 1,
            "exp": "GERD là 1 trong 3 nguyên nhân phổ biến gây ho mạn (cùng với hen và UACS). Acid trào lên kích thích dây vagus và/hoặc vi hít vào đường thở → ho khan, đặc biệt ban đêm. Điều trị GERD sẽ giảm ho.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Stress và lo âu có thể làm nặng triệu chứng GERD dù không phải nguyên nhân trực tiếp.",
            "ans": true,
            "exp": "Stress/lo âu: tăng nhạy cảm thực quản (visceral hypersensitivity), thay đổi vận động GI, tăng tiết acid → nặng triệu chứng GERD. Quản lý stress là phần quan trọng trong điều trị toàn diện.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD mãn, dùng PPI OTC nhiều đợt (mỗi đợt 2 tuần). DS nên làm gì?",
            "opts": [
                "Tiếp tục cho dùng OTC không giới hạn",
                "Chuyển BS đánh giá — GERD tái phát cần nội soi và PPI liều kê đơn",
                "Đổi sang antacid dài hạn"
            ],
            "ans": 1,
            "exp": "GERD tái phát nhiều đợt → cần đánh giá chuyên sâu: nội soi loại trừ Barrett, viêm thực quản, loét. BS có thể kê PPI liều đầy đủ (omeprazole 20–40 mg/ngày) dài hạn có giám sát.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN GERD, nay thấy khó thở + khò khè ban đêm, không có tiền sử hen. DS nghĩ gì?",
            "opts": [
                "Hen mới khởi phát",
                "GERD gây triệu chứng hô hấp (extraesophageal GERD) — chuyển BS",
                "Viêm phổi do virus"
            ],
            "ans": 1,
            "exp": "GERD extraesophageal: acid trào ngược gây vi hít → khò khè, khó thở, viêm thanh quản, ho mạn. BN không có tiền sử hen nhưng có triệu chứng hô hấp + GERD → cần đánh giá BS.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Gaviscon Advance chứa ít sodium nên an toàn cho BN suy tim và THA.",
            "ans": false,
            "exp": "Gaviscon Advance chứa ~4.6 mmol Na/10 mL — đáng kể. BN suy tim, THA cần chọn sản phẩm low-sodium.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng PPI, bị tiêu chảy nhẹ. DS giải thích thế nào?",
            "opts": [
                "PPI không gây tiêu chảy",
                "Tiêu chảy là tác dụng phụ thường gặp của PPI — thường nhẹ và tự hết",
                "Ngừng PPI ngay"
            ],
            "ans": 1,
            "exp": "PPI: tiêu chảy là tác dụng phụ thường gặp (~1/100). Thường nhẹ, tự hết. Nếu nặng hoặc kéo dài → cân nhắc đổi PPI khác hoặc giảm liều. Tiêu chảy nặng + sốt + kháng sinh gần đây → nghi C. difficile.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc nào trong nhóm OTC có hiệu quả mạnh nhất trong kiểm soát GERD?",
            "opts": [
                "Antacid",
                "H2RA (ranitidine)",
                "PPI (omeprazole, esomeprazole)"
            ],
            "ans": 2,
            "exp": "Thứ tự hiệu quả: PPI > H2RA > antacid/alginate. Cochrane review xác nhận PPI (dù nửa liều POM) hiệu quả hơn H2RA trong GERD. Tuy nhiên, bắt đầu từ biện pháp đơn giản hơn cũng hợp lý cho triệu chứng nhẹ.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN GERD nên ăn tối ít nhất 3–4 giờ trước khi đi ngủ để cho dạ dày rỗng.",
            "ans": true,
            "exp": "Ăn khuya → dạ dày còn đầy thức ăn khi nằm → tăng trào ngược. Tư vấn: ăn tối ≥3–4h trước ngủ. Ăn bữa nhỏ, tránh béo. Nếu phải ăn muộn, chọn thức ăn nhẹ, dễ tiêu.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI nên uống trước bữa ăn sáng 30 phút để đạt hiệu quả tối đa.",
            "ans": true,
            "exp": "PPI ức chế bơm proton đang hoạt động (khi ăn kích thích tiết acid). Uống trước ăn 30 phút → PPI hấp thu → sẵn sàng ức chế bơm proton khi bơm được kích hoạt bởi bữa ăn. Uống sau ăn → hiệu quả giảm.",
            "icon": "⏰"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 60t, GERD >5 năm, nay nuốt vướng + sụt cân nhẹ. DS lo gì?",
            "opts": [
                "GERD bình thường",
                "Nghi Barrett thực quản hoặc ung thư thực quản — chuyển BS khẩn",
                "Viêm họng do trào ngược"
            ],
            "ans": 1,
            "exp": "GERD mạn >5 năm + nuốt vướng + sụt cân = Red Flag → nghi Barrett (tiền ung thư) hoặc adenocarcinoma thực quản. Chuyển BS khẩn: nội soi + sinh thiết.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid đơn thuần hiệu quả hơn alginate cho GERD vì trung hòa acid trực tiếp.",
            "ans": false,
            "exp": "Ngược lại: alginate (tạo raft ngăn trào ngược) vượt trội antacid đơn thuần cho GERD. Antacid chỉ trung hòa acid, không ngăn trào ngược.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium bicarbonate phù hợp cho BN suy tim bị GERD.",
            "ans": false,
            "exp": "Sodium bicarbonate hàm lượng Na cao → giữ nước → nặng suy tim. CCĐ BN suy tim, THA, bệnh thận.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD dùng PPI 2 tuần hết ợ nóng. Có cần tiếp tục?",
            "opts": [
                "Thêm 3 tháng",
                "Ngừng — nếu tái phát → quay lại PPI hoặc chuyển BS",
                "Suốt đời"
            ],
            "ans": 1,
            "exp": "PPI OTC: stop when symptom-free. Tái phát thường xuyên → chuyển BS nội soi.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng atazanavir (HIV). DS lưu ý tương tác với?",
            "opts": [
                "Alginate",
                "PPI — giảm hấp thu atazanavir",
                "Paracetamol"
            ],
            "ans": 1,
            "exp": "Atazanavir cần acid để hấp thu. PPI tăng pH → giảm sinh khả dụng atazanavir. CCĐ đồng thời.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Rượu không ảnh hưởng hấp thu PPI.",
            "ans": true,
            "exp": "Rượu và thức ăn không ảnh hưởng hấp thu PPI. Nhưng rượu gây GERD (giảm LES). Tư vấn giảm rượu.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ợ nóng là triệu chứng kinh điển GERD — nóng rát sau xương ức lan lên cổ.",
            "ans": true,
            "exp": "Heartburn retrosternal: acid trào lên thực quản → kích thích niêm mạc → đau rát. Nặng khi nằm, cúi, sau ăn.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN GERD + viêm khớp cần giảm đau. DS ưu tiên?",
            "opts": [
                "Ibuprofen",
                "Paracetamol",
                "Aspirin"
            ],
            "ans": 1,
            "exp": "NSAID/aspirin giảm LES + kích ứng niêm mạc → nặng GERD. Paracetamol không ảnh hưởng GI → ưu tiên.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "GERD chỉ gây triệu chứng tại thực quản (ợ nóng), không ảnh hưởng đường hô hấp hay thanh quản.",
            "ans": false,
            "exp": "GERD gây nhiều triệu chứng ngoài thực quản: viêm thanh quản (khàn giọng), ho mạn, khò khè, xói mòn men răng. Gọi là extraesophageal GERD.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN quên uống PPI trước ăn sáng, uống sau trưa. DS nói gì?",
            "opts": [
                "Không sao",
                "Hiệu quả giảm — PPI cần trước ăn để ức chế bơm proton đang hoạt động",
                "Bỏ liều"
            ],
            "ans": 1,
            "exp": "PPI ức chế bơm proton đang hoạt động (kích hoạt bởi ăn). Uống trước ăn 30 phút → tối ưu. Sau ăn → giảm ~30%.",
            "icon": "⏰"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN GERD mạn >10 năm. DS khuyên gì?",
            "opts": [
                "Tiếp tục PPI OTC",
                "Chuyển BS nội soi tầm soát Barrett",
                "Ngừng thuốc"
            ],
            "ans": 1,
            "exp": "GERD mạn >5-10 năm: nguy cơ Barrett. Cần nội soi tầm soát + sinh thiết. Barrett → theo dõi định kỳ.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "H2RA dễ bị tachyphylaxis (giảm đáp ứng) khi dùng liên tục hơn PPI.",
            "ans": true,
            "exp": "H2RA: tachyphylaxis sau vài tuần dùng liên tục (up-regulation H2 receptor). PPI không có tachyphylaxis đáng kể.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Alginate dạng lỏng cần làm gì trước dùng?",
            "opts": [
                "Hâm nóng",
                "Lắc đều",
                "Không cần chuẩn bị"
            ],
            "ans": 1,
            "exp": "Alginate suspension: lắc đều trước dùng để đảm bảo liều đồng nhất. Bảo quản nhiệt độ phòng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "PPI OTC không có dạng viên nhai — phải nuốt nguyên.",
            "ans": true,
            "exp": "PPI: viên bao tan ruột → nuốt nguyên, KHÔNG nhai/nghiền. Nhai → phá bao → acid dạ dày phân hủy → mất hiệu quả.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "GERD + hôi miệng mạn. DS nhận ra gì?",
            "opts": [
                "Không liên quan",
                "Acid trào ngược gây viêm hầu → hôi miệng — triệu chứng ngoài thực quản",
                "Do thiếu vitamin"
            ],
            "ans": 1,
            "exp": "GERD: acid/pepsin trào lên hầu gây viêm + thay đổi hệ vi khuẩn miệng → halitosis. Kiểm soát GERD có thể cải thiện.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN dùng PPI phải kiêng coffee hoàn toàn vì caffeine làm PPI mất tác dụng.",
            "ans": false,
            "exp": "Caffeine không ảnh hưởng dược lý PPI. Nhưng caffeine giảm LES → nặng GERD. Tư vấn GIẢM caffeine, không kiêng hoàn toàn.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khi nào cần fundoplication cho GERD?",
            "opts": [
                "Ngay khi ợ nóng",
                "Thất bại PPI tối đa + thay đổi lối sống, hoặc không thể PPI dài hạn",
                "First-line"
            ],
            "ans": 1,
            "exp": "Fundoplication: GERD kháng PPI tối đa, biến chứng tái phát, hoặc BN muốn tránh PPI suốt đời. Option cuối sau thất bại nội khoa.",
            "icon": "🏥"
        }
    ],
    "gastritis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 48t, đau thượng vị âm ỉ, tăng sau ăn, ợ chua. Không có ALARM symptoms. DS tư vấn gì?",
            "opts": [
                "Kháng sinh diệt H. pylori ngay",
                "Antacid hoặc PPI OTC × 2 tuần + thay đổi lối sống",
                "Thuốc giảm đau opioid"
            ],
            "ans": 1,
            "exp": "Đau thượng vị không có ALARM → uninvestigated dyspepsia. DS có thể tư vấn antacid/PPI OTC (≤2 tuần) + giảm chất béo/rượu/caffeine. Nếu không đáp ứng → chuyển BS test H. pylori, nội soi.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau thượng vị khi đói, đỡ sau ăn, đôi khi đau thức giấc ban đêm. DS nghi gì?",
            "opts": [
                "Viêm dạ dày đơn thuần",
                "Loét tá tràng — chuyển BS",
                "Trào ngược dạ dày"
            ],
            "ans": 1,
            "exp": "Đau khi đói + đỡ sau ăn + đau ban đêm (2–3h sáng) = pattern loét tá tràng. Cần chuyển BS: test H. pylori (có mặt 90–95% loét tá tràng), nội soi xác định.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày do uống rượu nhiều đêm qua. DS tư vấn thuốc gì?",
            "opts": [
                "Kháng sinh amoxicillin",
                "Antacid (Mg/Al hydroxide) + nghỉ ngơi + bù nước",
                "PPI liều cao × 1 tháng"
            ],
            "ans": 1,
            "exp": "Đau dạ dày cấp do rượu: rượu kích ứng niêm mạc → viêm dạ dày cấp. Antacid trung hòa acid + nghỉ ngơi + bù nước. Thường tự khỏi. PPI chỉ cần nếu triệu chứng nặng/kéo dài.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NSAID không liên quan đến loét dạ dày — chỉ H. pylori mới gây loét.",
            "ans": false,
            "exp": "NSAID là nguyên nhân thứ 2 (sau H. pylori) gây loét dạ dày. NSAID ức chế prostaglandin bảo vệ niêm mạc. BN dùng NSAID dài hạn cần gastroprotection.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT dùng aspirin liều thấp + naproxen cho viêm khớp, nay đau thượng vị. DS lo gì?",
            "opts": [
                "Đau dạ dày bình thường — bán antacid",
                "Nguy cơ loét/chảy máu GI cao do phối hợp aspirin + NSAID — chuyển BS",
                "Aspirin + NSAID an toàn cho dạ dày"
            ],
            "ans": 1,
            "exp": "Aspirin + NSAID: tăng synergistic nguy cơ loét/chảy máu GI. NCT càng nguy cơ cao. Cần chuyển BS: cân nhắc ngừng NSAID, thay paracetamol, thêm PPI gastroprotection nếu cần tiếp tục.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng NSAID lâu dài, BS kê PPI đi kèm. Mục đích là gì?",
            "opts": [
                "PPI giảm đau mạnh hơn NSAID",
                "PPI bảo vệ niêm mạc dạ dày khỏi tổn thương do NSAID (gastroprotection)",
                "PPI tăng hấp thu NSAID"
            ],
            "ans": 1,
            "exp": "PPI gastroprotection: ức chế acid → giảm tổn thương niêm mạc do NSAID → phòng loét/chảy máu. Chỉ định: BN >65 tuổi, tiền sử loét, dùng đồng thời aspirin/corticosteroid/anticoagulant + NSAID.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "SSRI bảo vệ niêm mạc dạ dày khi phối hợp với NSAID.",
            "ans": false,
            "exp": "Ngược lại: SSRI ức chế hấp thu serotonin vào tiểu cầu → giảm chức năng tiểu cầu + NSAID ức chế COX → tăng nguy cơ chảy máu GI gấp ~6 lần.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau thượng vị, dùng antacid 2 tuần không đỡ. DS nên làm gì?",
            "opts": [
                "Đổi sang antacid khác",
                "Chuyển BS — treatment failure là Red Flag",
                "Tăng liều antacid gấp 3"
            ],
            "ans": 1,
            "exp": "Antacid >2 tuần không đáp ứng = treatment failure. Cần chuyển BS: nội soi, test H. pylori, loại trừ loét, ung thư. DS không nên kéo dài OTC khi đã thất bại.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày, dương tính H. pylori. Phác đồ diệt H. pylori chuẩn gồm gì?",
            "opts": [
                "PPI đơn thuần × 4 tuần",
                "PPI + 2 kháng sinh (triple therapy) × 7–14 ngày",
                "Antacid + 1 kháng sinh × 3 ngày"
            ],
            "ans": 1,
            "exp": "Triple therapy diệt H. pylori: PPI (omeprazole/lansoprazole) + 2 kháng sinh (VD: amoxicillin + clarithromycin hoặc metronidazole) × 7–14 ngày. Đây là phác đồ ETC (kê đơn), DS cần biết để tư vấn.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc kháng acid (antacid, H2RA, PPI) chỉ giảm triệu chứng mà không diệt được H. pylori.",
            "ans": true,
            "exp": "Antacid/H2RA/PPI: giảm triệu chứng bằng cách giảm acid. Nhưng KHÔNG diệt H. pylori. Nếu không diệt H. pylori → loét tái phát khi ngừng thuốc. Cần kháng sinh phối hợp PPI để diệt HP.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày, hỏi mua sucralfate. DS biết thuốc này tác dụng thế nào?",
            "opts": [
                "Trung hòa acid",
                "Tạo lớp bảo vệ trên vết loét, ngăn acid tiếp xúc",
                "Ức chế tiết acid ở tế bào thành"
            ],
            "ans": 1,
            "exp": "Sucralfate: trong môi trường acid, tạo gel bám dính trên bề mặt loét → bảo vệ loét khỏi acid + pepsin. Cần uống khi đói (acid thấp → gel bám tốt). Là thuốc ETC. Tương tác: giảm hấp thu nhiều thuốc.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen dùng corticosteroid hít (ICS) + ibuprofen cho đau, nay đau thượng vị. DS đánh giá yếu tố nào?",
            "opts": [
                "ICS không ảnh hưởng dạ dày",
                "Ibuprofen (NSAID) là nguyên nhân gây đau dạ dày — cân nhắc đổi sang paracetamol",
                "Corticosteroid hít gây loét dạ dày"
            ],
            "ans": 1,
            "exp": "NSAID (ibuprofen) = nguyên nhân phổ biến gây đau/loét dạ dày. ICS liều thường ít ảnh hưởng GI (ít hấp thu toàn thân). Tư vấn: đổi sang paracetamol, hoặc thêm PPI gastroprotection nếu cần NSAID.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Corticosteroid uống bảo vệ niêm mạc dạ dày và giảm nguy cơ loét.",
            "ans": false,
            "exp": "Ngược lại: corticosteroid ức chế prostaglandin + giảm đề kháng niêm mạc + chậm lành loét. Phối hợp NSAID → nguy cơ loét/chảy máu GI tăng gấp bội.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau thượng vị, uống rượu nhiều, hỏi dùng ibuprofen giảm đau. DS tư vấn gì?",
            "opts": [
                "Ibuprofen OK vì giảm đau tốt",
                "Tránh ibuprofen — rượu + NSAID tăng synergistic nguy cơ chảy máu GI. Dùng paracetamol",
                "Chỉ cần uống ibuprofen sau ăn no"
            ],
            "ans": 1,
            "exp": "Rượu + NSAID: cả hai kích ứng niêm mạc dạ dày + rượu tăng tiết acid → nguy cơ chảy máu GI rất cao. Dùng paracetamol thay thế (tuy nhiên paracetamol + rượu nặng cũng cần thận trọng — suy gan).",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày, BS đã kê phác đồ diệt H. pylori. DS tư vấn BN gì?",
            "opts": [
                "Dùng kháng sinh 3 ngày rồi ngừng nếu đỡ",
                "Dùng ĐỦ liệu trình (7–14 ngày) dù hết triệu chứng — tránh kháng thuốc",
                "Dùng kháng sinh nhưng bỏ PPI"
            ],
            "ans": 1,
            "exp": "Diệt HP: PHẢI dùng đủ liệu trình (7–14 ngày) cả PPI + 2 KS, dù đã hết triệu chứng. Ngừng sớm → HP không bị diệt hết → kháng thuốc + tái phát loét. DS tư vấn tuân thủ rất quan trọng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN viêm dạ dày cấp do thức ăn/rượu thường tự khỏi trong vài ngày mà không cần điều trị kéo dài.",
            "ans": true,
            "exp": "Viêm dạ dày cấp do rượu/thực phẩm: tổn thương niêm mạc tạm thời → tự phục hồi khi loại bỏ tác nhân. Antacid giảm triệu chứng. Nếu kéo dài >5 ngày hoặc nặng → chuyển BS.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 58t, đau thượng vị kéo dài, sụt 4 kg/2 tháng, chán ăn. DS lo gì?",
            "opts": [
                "Viêm dạ dày do stress",
                "ALARM symptoms — nghi ung thư dạ dày → chuyển BS khẩn",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "BN >55t + đau thượng vị kéo dài + sụt cân + chán ăn = ALARM symptoms → nghi ung thư dạ dày. Chuyển BS khẩn: nội soi dạ dày + sinh thiết. NICE khuyến cáo chuyển khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Phân đen (melaena) + đau thượng vị = Red Flag nghi chảy máu tiêu hóa trên — cần cấp cứu ngay.",
            "ans": true,
            "exp": "Melaena (phân đen, nhầy, hôi tanh) = máu tiêu hóa trên bị tiêu hóa qua ruột. Kết hợp đau thượng vị → nghi loét chảy máu. Cấp cứu ngay. (Lưu ý: sắt/bismuth cũng gây phân đen nhưng không hôi tanh).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị, nôn ra \"bã cà phê\" (coffee-ground vomit). DS phải làm gì?",
            "opts": [
                "Bán antacid để dịu dạ dày",
                "Cấp cứu ngay — nôn bã cà phê = chảy máu tiêu hóa trên",
                "Cho uống nước ấm và theo dõi"
            ],
            "ans": 1,
            "exp": "Nôn bã cà phê = máu bị tiêu hóa 1 phần trong dạ dày → chảy máu tiêu hóa trên (loét chảy máu, ung thư). Cấp cứu ngay. Khác với hematemesis (máu đỏ tươi = chảy máu nhanh hơn).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị, dùng NSAID lâu dài cho thoái hóa khớp. DS tư vấn gì?",
            "opts": [
                "NSAID an toàn dùng lâu dài cho mọi BN",
                "Hỏi BS về gastroprotection (PPI đi kèm) và cân nhắc giảm liều/đổi thuốc",
                "Không cần lo vì BN đã quen NSAID"
            ],
            "ans": 1,
            "exp": "NSAID lâu dài: nguy cơ loét/chảy máu GI tích lũy theo thời gian. BN đau thượng vị khi đang dùng NSAID → nghi tổn thương niêm mạc. Cần BS đánh giá: PPI đi kèm, hoặc đổi sang paracetamol ± codeine.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "H. pylori lây qua đường hô hấp (giọt bắn) và phổ biến ngang nhau ở mọi quốc gia.",
            "ans": false,
            "exp": "H. pylori lây phân-miệng, miệng-miệng, nước ô nhiễm. Phổ biến hơn ở nước đang phát triển (>50% dân số vs ~30% nước phát triển).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng warfarin + ibuprofen OTC cho đau khớp, nay đau thượng vị. DS nhận ra nguy cơ gì?",
            "opts": [
                "Warfarin + ibuprofen an toàn",
                "Tăng nguy cơ chảy máu GI nghiêm trọng — chuyển BS ngay",
                "Warfarin bảo vệ dạ dày"
            ],
            "ans": 1,
            "exp": "Warfarin (anticoagulant) + NSAID (ibuprofen): tăng synergistic nguy cơ chảy máu GI → có thể đe dọa tính mạng. Đau thượng vị = dấu hiệu cảnh báo. Chuyển BS ngay, ngừng ibuprofen.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày, hỏi nên ăn uống gì. DS tư vấn gì?",
            "opts": [
                "Nhịn ăn hoàn toàn 2 ngày",
                "Ăn bữa nhỏ, nhiều bữa, ít béo, tránh thức ăn cay, rượu, caffeine",
                "Ăn nhiều ớt để kích thích tiêu hóa"
            ],
            "ans": 1,
            "exp": "Non-pharm viêm dạ dày: bữa nhỏ/nhiều bữa, giảm béo (chậm làm rỗng dạ dày), tránh cay (kích ứng), giảm caffeine/rượu (tăng tiết acid), bỏ thuốc lá. Không cần nhịn ăn hoàn toàn.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị kiểu bỏng rát, tăng khi ăn, kèm buồn nôn. Đau giảm khi đói. DS nghi gì?",
            "opts": [
                "Loét tá tràng",
                "Loét dạ dày hoặc viêm dạ dày — chuyển BS đánh giá",
                "GERD đơn thuần"
            ],
            "ans": 1,
            "exp": "Đau tăng khi ăn + giảm khi đói → gợi ý loét dạ dày (khác loét tá tràng: đau khi đói, đỡ sau ăn). Kèm buồn nôn, chán ăn. Cần nội soi xác định + test H. pylori.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NCT >65 tuổi dùng NSAID không cần gastroprotection vì liều OTC thấp.",
            "ans": false,
            "exp": "NICE: BN ≥65t dùng NSAID BẮT BUỘC co-prescribe PPI. NCT: nguy cơ loét/chảy máu GI tăng đáng kể + triệu chứng không điển hình.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng aspirin liều thấp (81 mg) phòng ngừa tim mạch, đau nhẹ thượng vị. DS tư vấn gì?",
            "opts": [
                "Ngừng aspirin ngay",
                "Không ngừng aspirin tự ý — hỏi BS về thêm PPI bảo vệ",
                "Đổi aspirin sang ibuprofen"
            ],
            "ans": 1,
            "exp": "Aspirin liều thấp phòng ngừa tim mạch: BN không nên tự ngừng (nguy cơ biến cố tim mạch). Nếu đau thượng vị → hỏi BS thêm PPI gastroprotection. Ibuprofen có tương tác với aspirin (giảm tác dụng chống kết tập tiểu cầu).",
            "icon": "❤️"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau thượng vị tăng khi gắng sức, lan lên cổ/hàm — DS cần nghĩ đến nguyên nhân tim mạch chứ không chỉ dạ dày.",
            "ans": true,
            "exp": "Đau thượng vị + tăng khi gắng sức + lan cổ/hàm/cánh tay = nghi angina/hội chứng vành cấp. Triệu chứng tim mạch có thể nhầm với đau dạ dày. DS phải hỏi: đau có liên quan gắng sức không? Có lan không?",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày do stress (stress gastritis). DS tư vấn gì ngoài thuốc?",
            "opts": [
                "Chỉ cần PPI là đủ",
                "Quản lý stress (thư giãn, tập thể dục, giấc ngủ đủ) + thay đổi chế độ ăn",
                "Uống rượu để giảm stress"
            ],
            "ans": 1,
            "exp": "Stress/lo âu kích hoạt trục não-ruột → tăng tiết acid, giảm lưu lượng máu niêm mạc, thay đổi vận động GI. Quản lý stress (relaxation, exercise, ngủ đủ) kết hợp thuốc giảm acid có hiệu quả toàn diện hơn.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng metformin cho ĐTĐ type 2, bị đau bụng vùng thượng vị + buồn nôn. DS nghĩ gì?",
            "opts": [
                "Đau dạ dày do virus",
                "Metformin gây kích ứng GI phổ biến — tư vấn uống sau ăn",
                "Dùng antacid là đủ"
            ],
            "ans": 1,
            "exp": "Metformin: tác dụng phụ GI rất phổ biến (buồn nôn, đau bụng, tiêu chảy), đặc biệt khi mới bắt đầu. Tư vấn: uống sau ăn/cùng ăn, tăng liều từ từ. Nếu không chịu được → hỏi BS đổi dạng XR (phóng thích kéo dài).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc sắt uống không gây tác dụng phụ đường tiêu hóa đáng kể.",
            "ans": false,
            "exp": "Sắt uống (ferrous sulfate, fumarate): kích ứng GI → đau thượng vị, buồn nôn, táo bón rất phổ biến. DS cần hỏi BN có dùng sắt không.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày hỏi mua pantoprazole OTC. DS lưu ý tác dụng phụ nào đặc biệt của pantoprazole so với omeprazole?",
            "opts": [
                "Pantoprazole gây buồn ngủ mạnh",
                "Pantoprazole thêm tác dụng phụ mệt mỏi (fatigue) ngoài các tác dụng chung của PPI",
                "Pantoprazole không có tác dụng phụ"
            ],
            "ans": 1,
            "exp": "Pantoprazole (Pantoloc Control): ngoài tác dụng phụ chung PPI (đau đầu, tiêu chảy, buồn nôn), thêm mệt mỏi (fatigue). Nhà sản xuất khuyên tránh thai kỳ/cho con bú (dù dữ liệu cho thấy an toàn ở liều thấp).",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị âm ỉ 3 tháng, không đáp ứng OTC, test H. pylori âm tính, nội soi bình thường. Chẩn đoán gì?",
            "opts": [
                "Loét dạ dày bỏ sót",
                "Khó tiêu chức năng (functional dyspepsia)",
                "Ung thư dạ dày giai đoạn sớm"
            ],
            "ans": 1,
            "exp": "Triệu chứng dyspepsia + test HP (-) + nội soi bình thường = functional dyspepsia (non-ulcer dyspepsia). Nguyên nhân đa yếu tố: chậm làm rỗng dạ dày, tăng nhạy cảm nội tạng, stress. Điều trị: PPI + quản lý stress.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm dạ dày không triệu chứng có thể tồn tại nhiều năm ở BN nhiễm H. pylori mà BN không biết.",
            "ans": true,
            "exp": "H. pylori gây viêm dạ dày mạn ở hầu hết người nhiễm nhưng chỉ ~10–15% phát triển loét, <1% ung thư dạ dày. Nhiều BN nhiễm HP không triệu chứng (asymptomatic) suốt đời.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid nên dùng tối đa 2 tuần cho đau dạ dày. Nếu không đáp ứng → cần đánh giá chuyên sâu.",
            "ans": true,
            "exp": "Antacid >2 tuần không đáp ứng = treatment failure → cần chuyển BS: nội soi, test HP, loại trừ loét/ung thư. DS không nên cho BN tự dùng antacid kéo dài vô hạn.",
            "icon": "⏱️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm dạ dày + thiếu máu (xanh xao, mệt mỏi). DS nhận ra Red Flag gì?",
            "opts": [
                "Thiếu máu do ăn uống kém",
                "Thiếu máu là ALARM symptom — nghi chảy máu GI ẩn hoặc ung thư → chuyển BS",
                "Thiếu máu do viêm dạ dày thông thường"
            ],
            "ans": 1,
            "exp": "Thiếu máu (Anaemia) = chữ A trong ALARM → nghi chảy máu tiêu hóa ẩn (occult bleeding: mất máu ít, kéo dài) hoặc ung thư. Cần xét nghiệm máu ẩn trong phân (FOBT), nội soi.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày cấp, hỏi DS nên uống sữa để dịu dạ dày. DS trả lời gì?",
            "opts": [
                "Sữa giúp trung hòa acid rất tốt",
                "Sữa tạm thời dịu nhưng kích thích tiết acid sau đó (rebound) — không phải giải pháp",
                "Sữa CCĐ hoàn toàn trong viêm dạ dày"
            ],
            "ans": 1,
            "exp": "Sữa: tạm thời coat niêm mạc → cảm giác dịu. Nhưng protein + calcium trong sữa kích thích tiết gastrin → tăng tiết acid sau đó (acid rebound). Không phải giải pháp cho viêm dạ dày. Dùng antacid tốt hơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid dạng lỏng hiệu quả hơn viên nén trong trung hòa acid dạ dày.",
            "ans": true,
            "exp": "Dạng lỏng: diện tích tiếp xúc lớn hơn → onset nhanh + trung hòa acid mạnh hơn viên nén. Viên nén cần nhai kỹ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày, dùng antacid chứa Mg hydroxide lâu ngày. Tác dụng phụ gì?",
            "opts": [
                "Táo bón",
                "Tiêu chảy",
                "Buồn ngủ"
            ],
            "ans": 1,
            "exp": "Mg hydroxide: tác dụng phụ tiêu chảy (tăng thẩm thấu trong ruột). Al hydroxide gây táo bón. Phối hợp Al+Mg cân bằng tác dụng phụ.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Antacid nên uống lúc đói để tác dụng trung hòa acid nhanh nhất.",
            "ans": false,
            "exp": "Ngược lại: uống antacid ~1h sau ăn tốt hơn vì dạ dày giảm tốc độ làm rỗng → antacid lưu lại ~3h (vs 30-60 phút nếu đói).",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau dạ dày kèm đầy hơi. DS tư vấn thêm gì?",
            "opts": [
                "Simethicone (giảm đầy hơi) kết hợp antacid",
                "Loperamide",
                "Kháng sinh"
            ],
            "ans": 0,
            "exp": "Simethicone: giảm sức căng bề mặt bọt khí → phá bọt → giảm đầy hơi, ợ hơi. Thường phối hợp với antacid trong sản phẩm OTC cho khó tiêu + đầy hơi.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN dùng quinolone (ciprofloxacin) phải uống cách antacid ≥2 giờ để tránh giảm hấp thu.",
            "ans": true,
            "exp": "Antacid (Al, Ca, Mg) + quinolone → chelation → giảm hấp thu quinolone 50-90%. Cần cách ≥2h (trước 2h hoặc sau 4-6h). Tương tự với tetracycline, bisphosphonate.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày, cần giảm đau khớp. DS nên khuyên dùng gì?",
            "opts": [
                "Diclofenac gel bôi tại chỗ",
                "Ibuprofen uống liều cao",
                "Aspirin liều cao"
            ],
            "ans": 0,
            "exp": "NSAID bôi (diclofenac gel): hấp thu toàn thân ít → ít ảnh hưởng GI hơn NSAID uống. Phù hợp cho BN viêm dạ dày cần giảm đau cơ xương khớp tại chỗ.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau thượng vị nặng hơn khi nằm/cúi + ợ nóng → gợi ý GERD hơn viêm dạ dày đơn thuần.",
            "ans": true,
            "exp": "GERD: triệu chứng tăng khi nằm/cúi (acid trào ngược do trọng lực). Viêm dạ dày: đau liên quan bữa ăn (tăng/giảm khi ăn) hơn tư thế. Phân biệt giúp chọn thuốc phù hợp.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ranitidine OTC hiệu quả tương đương antacid trong điều trị khó tiêu nhẹ.",
            "ans": true,
            "exp": "Nghiên cứu: H2RA (ranitidine, famotidine) hiệu quả tương đương antacid cho khó tiêu nhẹ. H2RA kéo dài hơn, antacid nhanh hơn. PPI hiệu quả hơn cả hai cho triệu chứng trung bình-nặng.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị + thiếu máu hồng cầu nhỏ nhược sắc + phân đen ẩn. DS lo gì?",
            "opts": [
                "Thiếu sắt do ăn uống",
                "Chảy máu GI ẩn (occult bleeding) — chuyển BS xét nghiệm phân ẩn + nội soi",
                "Thiếu máu do mệt mỏi"
            ],
            "ans": 1,
            "exp": "Thiếu máu nhỏ nhược sắc + phân đen/phân ẩn dương tính = chảy máu GI mạn (loét, ung thư). ALARM symptom → nội soi đánh giá.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày cấp, không đáp ứng antacid 5 ngày. DS nên làm gì?",
            "opts": [
                "Tăng liều antacid",
                "Nâng bậc lên PPI OTC 2 tuần hoặc chuyển BS",
                "Cho kháng sinh H. pylori"
            ],
            "ans": 1,
            "exp": "Antacid 5 ngày không đáp ứng: cân nhắc nâng bậc PPI OTC (2 tuần). Nếu PPI cũng không đáp ứng → chuyển BS nội soi, test H. pylori.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN viêm dạ dày nên kiêng hoàn toàn thức ăn cay vĩnh viễn.",
            "ans": false,
            "exp": "Thức ăn cay kích ứng niêm mạc → tránh trong giai đoạn viêm cấp. Tuy nhiên, không cần kiêng vĩnh viễn. Sau khi hết viêm, BN có thể ăn vừa phải tùy dung nạp cá nhân.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau thượng vị + nôn nhiều + vàng da + sốt. DS nghi gì?",
            "opts": [
                "Viêm dạ dày cấp",
                "Viêm gan hoặc sỏi mật — chuyển BS khẩn",
                "Ngộ độc thực phẩm"
            ],
            "ans": 1,
            "exp": "Đau thượng vị/hạ sườn phải + nôn + vàng da + sốt → nghi viêm đường mật (cholangitis) hoặc viêm gan. Cần siêu âm + xét nghiệm chức năng gan. Chuyển BS khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm dạ dày mạn H. pylori (+), đã diệt HP thành công. Cần làm gì sau?",
            "opts": [
                "Dùng PPI suốt đời",
                "Kiểm tra lại HP sau 4-8 tuần để xác nhận eradication",
                "Không cần theo dõi"
            ],
            "ans": 1,
            "exp": "Sau diệt HP: kiểm tra lại (breath test hoặc phân antigen) sau ≥4 tuần ngừng kháng sinh và ≥2 tuần ngừng PPI. Xác nhận eradication thành công. Nếu thất bại → phác đồ 2.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Misoprostol (prostaglandin E1 analog) có thể dùng bảo vệ dạ dày khi dùng NSAID nhưng CCĐ ở thai phụ.",
            "ans": true,
            "exp": "Misoprostol: thay thế prostaglandin bị NSAID ức chế → bảo vệ niêm mạc. Tuy nhiên CCĐ tuyệt đối ở thai phụ (gây co tử cung, sẩy thai). PPI thường được ưu tiên hơn misoprostol.",
            "icon": "🤰"
        }
    ],
    "hemorrhoids": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 35t, ngứa hậu môn + đau khi đi tiêu + chảy máu đỏ tươi trên giấy vệ sinh. DS nghi gì và tư vấn gì?",
            "opts": [
                "Ung thư trực tràng — cấp cứu",
                "Trĩ nội/ngoại — tư vấn OTC + tăng xơ + uống đủ nước",
                "Nứt hậu môn — kháng sinh"
            ],
            "ans": 1,
            "exp": "Trĩ: ngứa hậu môn + đau khi đi tiêu + máu đỏ tươi (trên giấy vệ sinh hoặc nhỏ giọt) = triệu chứng kinh điển trĩ. DS có thể tư vấn OTC nếu BN trẻ (<50t), không ALARM. Tăng xơ + uống nước là nền tảng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mục tiêu điều trị hàng đầu cho trĩ tại nhà thuốc là gì?",
            "opts": [
                "Phẫu thuật cắt trĩ ngay",
                "Giảm táo bón (tăng xơ + nhuận tràng nếu cần) + giảm triệu chứng tại chỗ",
                "Kháng sinh toàn thân"
            ],
            "ans": 1,
            "exp": "Trĩ: nguyên nhân chính = táo bón mạn + rặn khi đi tiêu. Mục tiêu: (1) giảm táo bón (xơ 25–30g/ngày, nước ≥2L, nhuận tràng tạo khối), (2) giảm triệu chứng (kem/thuốc đặt tại chỗ). Cochrane: chất xơ giảm triệu chứng trĩ ~50%.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thành phần thường có trong kem/thuốc đặt trĩ OTC?",
            "opts": [
                "Kháng sinh + steroid mạnh",
                "Thuốc gây tê (lidocaine/benzocaine) + thuốc co mạch + chất bảo vệ + corticosteroid nhẹ",
                "Chỉ có vaseline đơn thuần"
            ],
            "ans": 1,
            "exp": "Sản phẩm trĩ OTC chứa: thuốc tê (giảm đau/ngứa), co mạch (giảm sưng nề), chất bảo vệ/bôi trơn (giảm ma sát), ± hydrocortisone 0.25–0.5% (giảm viêm). Kháng sinh không có trong OTC trĩ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hydrocortisone trong sản phẩm trĩ OTC không nên dùng quá 7 ngày.",
            "ans": true,
            "exp": "Hydrocortisone tại chỗ (OTC trĩ): tối đa 7 ngày. Dùng lâu: teo da vùng hậu môn, tăng nguy cơ nhiễm trùng da, chậm lành vết thương. Nếu triệu chứng >7 ngày → chuyển BS.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, cần giảm táo bón. Nhuận tràng nào phù hợp nhất?",
            "opts": [
                "Bisacodyl dài hạn",
                "Nhuận tràng tạo khối (ispaghula husk) dài hạn",
                "Nhuận tràng muối magnesium"
            ],
            "ans": 1,
            "exp": "Cochrane review (Alonso-Coello et al., 2005, 2006): chất xơ/nhuận tràng tạo khối giảm ~50% triệu chứng trĩ. Nhuận tràng tạo khối cần 2–3 ngày, có thể đến 6 tuần mới cải thiện triệu chứng trĩ đầy đủ. Dùng dài hạn an toàn.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nhuận tràng tạo khối cho trĩ có thể cần tới 6 tuần mới cải thiện đầy đủ triệu chứng trĩ.",
            "ans": true,
            "exp": "Alonso-Coello et al. (2006): chất xơ giảm chảy máu, đau, ngứa do trĩ. Nhưng cần 2–3 ngày để phân mềm, và đến 6 tuần để cải thiện toàn bộ triệu chứng trĩ. Tư vấn BN kiên nhẫn.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Sản phẩm trĩ OTC dùng bao nhiêu lần/ngày?",
            "opts": [
                "1 lần trước ngủ",
                "2 lần/ngày + sau mỗi lần đi tiêu",
                "4 lần/ngày cố định"
            ],
            "ans": 1,
            "exp": "Liều chuẩn kem/thuốc đặt trĩ OTC: 2 lần/ngày (sáng + tối) + thêm 1 lần sau mỗi lần đi tiêu. Tác dụng phụ ít (kích ứng tại chỗ nhẹ). Không tương tác thuốc.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sản phẩm trĩ OTC (kem, thuốc đặt) an toàn cho thai phụ và phụ nữ cho con bú.",
            "ans": true,
            "exp": "Hầu hết sản phẩm trĩ OTC: hấp thu toàn thân rất ít → an toàn cho thai phụ, cho con bú. Thai phụ bị trĩ rất phổ biến (~40% cuối thai kỳ) do tăng áp lực ổ bụng + progesterone giãn tĩnh mạch.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, hỏi về flavonoid (diosmin, hesperidin). DS biết gì?",
            "opts": [
                "Flavonoid không có bằng chứng nào",
                "Meta-analysis cho thấy flavonoid giảm triệu chứng trĩ (chảy máu, đau, ngứa)",
                "Flavonoid CCĐ trong trĩ"
            ],
            "ans": 1,
            "exp": "Meta-analysis (Alonso-Coello et al., 2006b): flavonoid (diosmin ± hesperidin) giảm đáng kể chảy máu, đau, ngứa và tái phát trĩ. Cơ chế: tăng trương lực tĩnh mạch, giảm viêm, cải thiện vi tuần hoàn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ ngoại sưng đau (thrombosed external hemorrhoid) cấp tính. DS xử trí gì?",
            "opts": [
                "Bán kem trĩ OTC + tắm ngồi nước ấm + giảm đau",
                "Phẫu thuật cắt trĩ ngay",
                "Cho kháng sinh uống"
            ],
            "ans": 0,
            "exp": "Trĩ ngoại huyết khối: rất đau. OTC: kem chứa thuốc tê + giảm đau uống (paracetamol/ibuprofen) + tắm ngồi nước ấm (sitz bath) 10–15 phút × 2–3 lần/ngày. Nếu đau dữ dội → chuyển BS (có thể cần rạch lấy huyết khối).",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ dùng kem có hydrocortisone 12 ngày, vẫn ngứa. DS nên làm gì?",
            "opts": [
                "Tiếp tục thêm 2 tuần",
                "Ngừng hydrocortisone (đã >7 ngày) — chuyển BS đánh giá",
                "Tăng lên hydrocortisone nồng độ cao hơn"
            ],
            "ans": 1,
            "exp": "Hydrocortisone tại chỗ OTC: tối đa 7 ngày. Đã 12 ngày → cần ngừng (nguy cơ teo da, nhiễm nấm/vi khuẩn thứ phát). Triệu chứng kéo dài → chuyển BS đánh giá: nghi nguyên nhân khác (nấm, eczema quanh hậu môn).",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tắm ngồi nước lạnh tốt hơn nước ấm cho trĩ vì co mạch giảm sưng.",
            "ans": false,
            "exp": "Nước ấm (không nóng) tốt hơn: giãn cơ vòng hậu môn + tăng tuần hoàn cục bộ → giảm đau, sưng. Nước lạnh/chườm lạnh dùng ngắn hạn giảm sưng cấp, khác mục đích.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, hỏi có nên rặn mạnh khi đi tiêu. DS tư vấn gì?",
            "opts": [
                "Rặn mạnh giúp đi nhanh hơn",
                "KHÔNG rặn mạnh — tăng áp lực tĩnh mạch hậu môn → nặng trĩ. Phân mềm + ngồi đúng tư thế",
                "Rặn vừa phải được"
            ],
            "ans": 1,
            "exp": "Rặn mạnh kéo dài = nguyên nhân chính gây/nặng trĩ (tăng áp lực tĩnh mạch hậu môn). Tư vấn: phân mềm (xơ + nước), không ngồi toilet quá lâu, tư thế chân cao (giống ngồi xổm) giúp thẳng trục trực tràng.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc giảm đau uống nào phù hợp cho trĩ ngoại sưng đau?",
            "opts": [
                "Codeine",
                "Paracetamol hoặc ibuprofen",
                "Aspirin"
            ],
            "ans": 1,
            "exp": "Paracetamol: an toàn cho mọi BN. Ibuprofen: giảm đau + chống viêm tốt, tránh nếu có chảy máu trĩ nặng (NSAID tăng nguy cơ chảy máu). Codeine: gây táo bón → nặng trĩ → tránh. Aspirin: tăng chảy máu.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Codeine và các opioid gây táo bón → làm nặng trĩ, cần tránh ở BN trĩ.",
            "ans": true,
            "exp": "Opioid (codeine, tramadol, morphine): giảm nhu động ruột → táo bón → phải rặn → nặng trĩ. Nếu BN trĩ cần giảm đau mạnh, ưu tiên paracetamol + ibuprofen. Nếu dùng opioid, thêm nhuận tràng.",
            "icon": "⛔"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 55t, chảy máu hậu môn, thay đổi thói quen đại tiện 2 tháng, sụt cân. DS lo gì?",
            "opts": [
                "Trĩ nội chảy máu bình thường",
                "Nghi ung thư đại trực tràng — chuyển BS khẩn",
                "Nứt hậu môn do táo bón"
            ],
            "ans": 1,
            "exp": "BN >50t + chảy máu hậu môn + thay đổi thói quen đại tiện mới + sụt cân = Red Flag ung thư đại trực tràng. Cần nội soi đại tràng khẩn. KHÔNG chẩn đoán trĩ đơn thuần khi có ALARM symptoms.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Máu đỏ tươi, nhỏ giọt hoặc dính giấy vệ sinh thường gợi ý trĩ hoặc nứt hậu môn hơn là ung thư.",
            "ans": true,
            "exp": "Máu đỏ tươi (không trộn lẫn phân) + nhỏ giọt/dính giấy = trĩ hoặc nứt hậu môn (nguồn gần hậu môn). Máu sẫm/trộn phân + thay đổi thói quen đại tiện → nghi tổn thương cao hơn (đại tràng, ung thư). Tuy nhiên >50t vẫn cần loại trừ ung thư.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ, búi trĩ sa ra ngoài hậu môn, không đẩy vào lại được, rất đau. DS đánh giá gì?",
            "opts": [
                "Trĩ nhẹ — dùng kem OTC",
                "Trĩ sa nghẹt (incarcerated hemorrhoid) — chuyển BS cấp",
                "Trĩ bình thường, tự khỏi"
            ],
            "ans": 1,
            "exp": "Búi trĩ sa không đẩy lại được + sưng đau dữ dội = trĩ sa nghẹt (Grade IV hoặc incarcerated). Nguy cơ hoại tử nếu không xử trí. Chuyển BS cấp (có thể cần can thiệp thủ thuật/phẫu thuật).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ, hỏi khi nào cần khám BS. DS tư vấn gì?",
            "opts": [
                "Chỉ khi đau không chịu được",
                "Khi chảy máu nhiều/kéo dài, >50t, búi trĩ sa không đẩy lại, triệu chứng >7 ngày OTC không đáp ứng",
                "Không bao giờ cần khám BS cho trĩ"
            ],
            "ans": 1,
            "exp": "Chuyển BS khi: (1) chảy máu nhiều/kéo dài, (2) BN >50t (loại trừ ung thư), (3) búi trĩ sa không đẩy lại, (4) OTC >7 ngày không đáp ứng, (5) sụt cân/thay đổi thói quen đại tiện.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Phụ nữ mang thai hiếm khi bị trĩ vì progesterone bảo vệ tĩnh mạch.",
            "ans": false,
            "exp": "Ngược lại: progesterone GIÃN cơ trơn mạch máu → giãn TM trĩ + tử cung to tăng áp lực → ~40% thai phụ cuối kỳ bị trĩ.",
            "icon": "🤰"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ, ngứa hậu môn dai dẳng dù đã dùng kem trĩ. DS cần nghĩ đến gì?",
            "opts": [
                "Trĩ kháng trị",
                "Nguyên nhân khác: nhiễm nấm, giun kim, eczema quanh hậu môn — chuyển BS",
                "Dị ứng da thông thường"
            ],
            "ans": 1,
            "exp": "Ngứa hậu môn dai dẳng: không phải lúc nào cũng do trĩ. Cần loại trừ: nhiễm nấm Candida, giun kim (đặc biệt trẻ em, ngứa ban đêm), eczema, viêm da tiếp xúc, psoriasis. Chuyển BS nếu OTC thất bại.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ nội độ 1 (chảy máu, không sa). DS có thể xử trí OTC không?",
            "opts": [
                "Không, phải phẫu thuật",
                "Có — xơ + nhuận tràng tạo khối + kem/thuốc đặt OTC",
                "Chỉ BS mới xử trí được"
            ],
            "ans": 1,
            "exp": "Trĩ nội độ 1 (chảy máu không sa): DS hoàn toàn có thể xử trí OTC. Tăng xơ + nhuận tràng tạo khối + kem/thuốc đặt tại chỗ + sitz bath. Chuyển BS nếu không đáp ứng sau 7 ngày.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trĩ ít gặp ở người trẻ <20 tuổi. BN trẻ có triệu chứng giống trĩ nên được chuyển BS đánh giá kỹ.",
            "ans": true,
            "exp": "Trĩ hiếm ở người trẻ khỏe mạnh. Nếu BN <20t có chảy máu hậu môn → cần loại trừ: nứt hậu môn, IBD, polyp. DS nên chuyển BS nếu triệu chứng trĩ ở người trẻ.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ hỏi dùng kem hay thuốc đặt (suppository). DS tư vấn gì?",
            "opts": [
                "Kem và thuốc đặt hiệu quả tương đương",
                "Kem phù hợp trĩ ngoại (bôi ngoài), thuốc đặt phù hợp trĩ nội (đưa vào trong hậu môn)",
                "Chỉ dùng kem, không cần thuốc đặt"
            ],
            "ans": 1,
            "exp": "Kem: bôi vùng hậu môn ngoài → phù hợp trĩ ngoại, ngứa quanh hậu môn. Thuốc đặt (suppository): đưa vào hậu môn → tiếp xúc trĩ nội bên trong. Nếu có cả trĩ nội + ngoại → dùng cả hai.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sản phẩm trĩ OTC chứa hydrocortisone có thể dùng cho trẻ em dưới 12 tuổi.",
            "ans": false,
            "exp": "Hydrocortisone sản phẩm trĩ OTC: giấy phép dùng từ 12 hoặc 18 tuổi tùy sản phẩm. Trẻ <12 tuổi bị trĩ rất hiếm → nếu có triệu chứng → chuyển BS đánh giá (nguyên nhân khác).",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ, phân có nhầy máu + thay đổi thói quen đại tiện + đau bụng. DS nghĩ gì?",
            "opts": [
                "Trĩ nặng",
                "Nghi IBD hoặc ung thư đại trực tràng — chuyển BS",
                "Hội chứng ruột kích thích"
            ],
            "ans": 1,
            "exp": "Nhầy máu + thay đổi thói quen đại tiện + đau bụng → vượt quá triệu chứng trĩ thông thường. Cần loại trừ IBD (Crohn, UC) hoặc ung thư đại trực tràng. Chuyển BS nội soi đại tràng.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, lối sống ngồi nhiều (nhân viên văn phòng). DS tư vấn non-pharm gì?",
            "opts": [
                "Ngồi lâu không ảnh hưởng trĩ",
                "Đứng dậy đi lại mỗi 1–2 giờ, tập thể dục đều đặn, tránh ngồi toilet lâu",
                "Dùng gối ngồi đặc biệt là đủ"
            ],
            "ans": 1,
            "exp": "Ngồi lâu → tăng áp lực tĩnh mạch vùng chậu → nặng trĩ. Tư vấn: đứng dậy đi lại thường xuyên, tập thể dục (tăng tuần hoàn + giảm táo bón), không ngồi toilet quá 10 phút, không đọc điện thoại khi đi tiêu.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ chảy máu nhiều, huyết áp tụt, mệt lả. DS xử trí gì?",
            "opts": [
                "Bán kem trĩ + sắt bổ sung",
                "Cấp cứu ngay — nghi chảy máu trĩ nặng gây thiếu máu cấp",
                "Cho uống ORS"
            ],
            "ans": 1,
            "exp": "Chảy máu trĩ nặng + huyết áp tụt + mệt lả = mất máu đáng kể → thiếu máu cấp → cấp cứu. Có thể cần truyền máu + can thiệp thắt trĩ/phẫu thuật. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chế độ ăn giàu xơ không chỉ giảm táo bón mà còn giảm triệu chứng trĩ (chảy máu, đau) khoảng 50% theo meta-analysis.",
            "ans": true,
            "exp": "Meta-analysis (Alonso-Coello et al., 2006a): xơ giảm ~50% nguy cơ triệu chứng trĩ dai dẳng và ~50% nguy cơ chảy máu. Xơ là nền tảng điều trị trĩ, thường bị bỏ qua vì BN chỉ quan tâm thuốc bôi.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 28t, sau sinh 2 tuần, trĩ sưng đau. DS tư vấn gì?",
            "opts": [
                "Tự khỏi, không cần làm gì",
                "Kem trĩ OTC (an toàn cho con bú) + sitz bath + nhuận tràng nếu táo bón",
                "Phẫu thuật cắt trĩ ngay"
            ],
            "ans": 1,
            "exp": "Trĩ sau sinh rất phổ biến (do rặn khi sinh + tăng áp lực thai kỳ). Thường cải thiện dần. OTC: kem trĩ (an toàn cho con bú), sitz bath, nhuận tràng nếu táo bón. Phẫu thuật chỉ khi nặng/kéo dài.",
            "icon": "🤰"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trĩ nội đau nhiều hơn trĩ ngoại vì nằm sâu trong ống hậu môn.",
            "ans": false,
            "exp": "Ngược lại: trĩ nội trên đường lược (ít thần kinh soma → ít đau, chủ yếu chảy máu). Trĩ ngoại dưới đường lược (nhiều TK soma → rất đau đặc biệt khi huyết khối).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, đang dùng anticoagulant (warfarin). DS lưu ý gì?",
            "opts": [
                "Warfarin không ảnh hưởng trĩ",
                "Chảy máu trĩ có thể nặng hơn do warfarin — theo dõi sát, báo BS nếu chảy máu",
                "Ngừng warfarin ngay"
            ],
            "ans": 1,
            "exp": "BN dùng warfarin/DOAC: chảy máu trĩ có thể kéo dài/nặng hơn. Không tự ngừng anticoagulant. Báo BS nếu chảy máu trĩ tăng. Tránh NSAID (tăng thêm nguy cơ chảy máu).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nứt hậu môn (anal fissure) có triệu chứng tương tự trĩ nhưng đặc trưng bởi đau rát dữ dội KHI và SAU đi tiêu.",
            "ans": true,
            "exp": "Nứt hậu môn: đau rát như cắt/xé khi đi tiêu + kéo dài hàng giờ sau. Máu đỏ tươi nhỏ giọt. Khác trĩ: trĩ đau ít hơn (trừ huyết khối), chủ yếu chảy máu + ngứa. DS cần phân biệt.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, hỏi có nên dùng giấy vệ sinh khô lau. DS tư vấn gì?",
            "opts": [
                "Giấy vệ sinh khô phù hợp",
                "Dùng giấy vệ sinh ướt không hương liệu hoặc rửa nước ấm — tránh giấy khô cứng gây kích ứng",
                "Dùng xà phòng kháng khuẩn mỗi lần lau"
            ],
            "ans": 1,
            "exp": "Giấy vệ sinh khô: ma sát → kích ứng vùng hậu môn viêm. Tư vấn: giấy vệ sinh ướt (không hương liệu, không cồn), hoặc rửa nước ấm + thấm khô nhẹ. Tránh xà phòng mạnh gây kích ứng thêm.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN viêm đại tràng mạn tính (IBD) bị trĩ. DS lưu ý gì?",
            "opts": [
                "Trĩ và IBD không liên quan",
                "Trĩ trên nền IBD phức tạp hơn — ưu tiên chuyển BS quản lý",
                "Chỉ dùng kem OTC như BN trĩ thông thường"
            ],
            "ans": 1,
            "exp": "BN IBD (Crohn, UC): trĩ/biến chứng hậu môn phức tạp hơn (nứt hậu môn, rò, áp-xe). Cần BS chuyên khoa quản lý tổng thể, không chỉ xử trí OTC đơn thuần.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN trĩ nên tránh ngồi toilet quá lâu (đọc sách, chơi điện thoại) vì tăng áp lực tĩnh mạch hậu môn.",
            "ans": true,
            "exp": "Ngồi toilet lâu: trọng lượng cơ thể tập trung vùng chậu/hậu môn → tăng áp lực tĩnh mạch trĩ. Tư vấn: đi tiêu nhanh (<10 phút), không đọc sách/điện thoại trên toilet, tập thói quen đi tiêu đúng giờ.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kem trĩ chứa lidocaine an toàn dùng dài hạn vì tác dụng tại chỗ.",
            "ans": false,
            "exp": "Lidocaine viên ngậm/kem trĩ: dùng ngắn hạn. Dùng lâu → mẫn cảm da (contact dermatitis). Sản phẩm chứa hydrocortisone: tối đa 7 ngày.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ kèm nứt hậu môn. DS tư vấn thêm gì?",
            "opts": [
                "Kháng sinh bôi",
                "Bôi trơn + phân mềm (macrogol/lactulose) + sitz bath + glycerin đạn nếu cần",
                "Phẫu thuật ngay"
            ],
            "ans": 1,
            "exp": "Nứt hậu môn: đau rát khi đi tiêu do rách niêm mạc. Phân mềm (macrogol, lactulose) giảm đau khi đi tiêu + bôi trơn + sitz bath. Nứt mạn không lành → BS (glyceryl trinitrate bôi, botox).",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ, hỏi dùng thuốc co mạch trong kem trĩ lâu dài. DS lưu ý gì?",
            "opts": [
                "An toàn dùng không giới hạn",
                "Thuốc co mạch tại chỗ (phenylephrine) giảm sưng nề nhưng dùng lâu có thể gây kích ứng/teo niêm mạc",
                "CCĐ tuyệt đối thuốc co mạch ở trĩ"
            ],
            "ans": 1,
            "exp": "Thuốc co mạch tại chỗ: giảm sưng nề tạm thời. Dùng lâu: kích ứng, có thể teo niêm mạc. Dùng ngắn hạn kết hợp biện pháp nền (xơ, nước, nhuận tràng).",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Aspirin là thuốc giảm đau phù hợp cho BN trĩ chảy máu.",
            "ans": false,
            "exp": "Aspirin: chống kết tập tiểu cầu → tăng chảy máu. CCĐ ở BN trĩ đang chảy máu. Ibuprofen cũng cần thận trọng. Paracetamol an toàn hơn cho giảm đau trĩ.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ ngoại sưng to, rất đau, 48h đầu. DS tư vấn gì?",
            "opts": [
                "Chỉ dùng kem OTC",
                "Kem tê + chườm lạnh + giảm đau uống (paracetamol/ibuprofen) + sitz bath nước ấm",
                "Chỉ chườm nóng"
            ],
            "ans": 1,
            "exp": "Trĩ ngoại huyết khối 48h đầu: rất đau. Phối hợp: kem tê tại chỗ + giảm đau uống + chườm lạnh (giảm sưng) + sitz bath nước ấm (giãn cơ thắt). Nếu đau dữ dội → BS (rạch lấy huyết khối trong 72h).",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ + tiêu chảy mạn + đau bụng + phân nhầy máu. DS lo gì?",
            "opts": [
                "Trĩ nội nặng",
                "IBD (viêm ruột mạn tính) — chuyển BS nội soi",
                "Ngộ độc thực phẩm kéo dài"
            ],
            "ans": 1,
            "exp": "Trĩ + tiêu chảy mạn + đau bụng + nhầy máu → vượt quá trĩ → nghi IBD (Crohn, UC). Nội soi đại tràng + sinh thiết xác định chẩn đoán.",
            "icon": "🏥"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ dùng kem hydrocortisone, hỏi dùng bao lâu. DS trả lời gì?",
            "opts": [
                "1 tháng",
                "Tối đa 7 ngày",
                "Không giới hạn"
            ],
            "ans": 1,
            "exp": "Hydrocortisone tại chỗ OTC: tối đa 7 ngày. Dùng lâu hơn → teo da, giãn mạch, dễ nhiễm trùng. Nếu >7 ngày chưa đỡ → chuyển BS.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN nam 40t bị trĩ ngoại sưng đau, DS tư vấn dùng thuốc đặt (suppository) để điều trị trĩ ngoại.",
            "ans": false,
            "exp": "Suppository chủ yếu tác dụng tại trĩ nội (bên trong ống hậu môn). Trĩ ngoại nên dùng dạng kem/mỡ bôi ngoài (ointment/cream) để tiếp xúc trực tiếp với vùng tổn thương.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hydrocortisone cream bôi trĩ có thể dùng liên tục 4 tuần để kiểm soát triệu chứng ngứa.",
            "ans": false,
            "exp": "Corticosteroid tại chỗ vùng hậu môn chỉ nên dùng tối đa 7 ngày. Dùng kéo dài gây teo da, giãn mạch, tăng nguy cơ nhiễm nấm tại chỗ.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ dùng sản phẩm chứa witch hazel (Hamamelis). DS biết gì?",
            "opts": [
                "Witch hazel là kháng sinh mạnh",
                "Witch hazel có tính chất se (astringent) giảm ngứa/kích ứng nhẹ tại chỗ",
                "Witch hazel là thuốc gây tê"
            ],
            "ans": 1,
            "exp": "Witch hazel (Hamamelis): chất se (astringent) — thu nhẹ mô, giảm ngứa/kích ứng nhẹ. Có trong nhiều sản phẩm trĩ OTC (wipes, cream). Hiệu quả hạn chế nhưng an toàn.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN nữ 55t, chảy máu hậu môn lượng ít khi đi tiêu. DS kết luận đây là trĩ và tư vấn OTC mà không cần chuyển BS.",
            "ans": false,
            "exp": "Chảy máu hậu môn ở người > 50t không nên tự chẩn đoán trĩ. Cần loại trừ ung thư đại–trực tràng bằng nội soi. DS phải chuyển BS để thăm khám trước khi tư vấn OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN trĩ, búi trĩ sa khi rặn nhưng tự co lại sau. Trĩ nội độ mấy?",
            "opts": [
                "Độ 1",
                "Độ 2",
                "Độ 4"
            ],
            "ans": 1,
            "exp": "Trĩ nội: Độ 1 = chảy máu, không sa. Độ 2 = sa khi rặn, TỰ CO LẠI. Độ 3 = sa, phải đẩy lại bằng tay. Độ 4 = sa không đẩy lại được (nghẹt).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN trĩ hỏi dùng băng vệ sinh lạnh hoặc ice pack. DS tư vấn gì?",
            "opts": [
                "Ice pack CCĐ hoàn toàn",
                "Chườm lạnh 10-15 phút giúp giảm sưng đau, bọc trong vải (không áp trực tiếp da)",
                "Chỉ chườm nóng, không lạnh"
            ],
            "ans": 1,
            "exp": "Chườm lạnh: giảm sưng nề, co mạch, giảm đau. Bọc ice pack trong vải mỏng, áp 10-15 phút, nghỉ 20 phút. Phối hợp sitz bath nước ấm (khác thời điểm) cho hiệu quả tốt.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Phenylephrine trong thuốc bôi trĩ an toàn cho mọi đối tượng BN vì chỉ tác dụng tại chỗ, không hấp thu toàn thân.",
            "ans": false,
            "exp": "Phenylephrine (co mạch) có thể hấp thu qua niêm mạc hậu môn, gây tăng huyết áp. CCĐ hoặc thận trọng ở BN THA, bệnh tim mạch, cường giáp, ĐTĐ.",
            "icon": "❤️"
        }
    ],
    "nausea": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 25t, buồn nôn + nôn khi đi xe đường dài (say tàu xe). DS tư vấn thuốc OTC nào?",
            "opts": [
                "Loperamide",
                "Dimenhydrinate hoặc meclizine",
                "Omeprazole"
            ],
            "ans": 1,
            "exp": "Say tàu xe (motion sickness): kháng histamine thế hệ 1 (dimenhydrinate, meclizine, cyclizine) hoặc kháng cholinergic (hyoscine/scopolamine) là ưu tiên OTC. Uống 30–60 phút trước khởi hành.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Hyoscine (scopolamine) patch dán sau tai dùng cho say tàu xe tác dụng bao lâu?",
            "opts": [
                "2 giờ",
                "Lên đến 72 giờ (3 ngày)",
                "12 giờ"
            ],
            "ans": 1,
            "exp": "Hyoscine patch (Scopoderm): dán sau tai 5–6 giờ trước hành trình, tác dụng kéo dài ~72 giờ. Cơ chế: kháng cholinergic (muscarinic) tại trung tâm nôn và hệ tiền đình.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc chống nôn cho say tàu xe cần uống TRƯỚC khi khởi hành (30–60 phút) — uống khi đã nôn rồi ít hiệu quả.",
            "ans": true,
            "exp": "Phòng ngừa hiệu quả hơn điều trị: uống 30–60 phút trước khởi hành để thuốc kịp hấp thu. Khi đã nôn → dạ dày co thắt → thuốc uống hấp thu kém. Có thể dùng dạng dán/đặt hậu môn nếu đã nôn.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ mang thai 8 tuần, nôn nghén nặng. DS tư vấn thuốc OTC nào?",
            "opts": [
                "Metoclopramide",
                "Vitamin B6 (pyridoxine) ± gừng",
                "Ondansetron"
            ],
            "ans": 1,
            "exp": "Nôn nghén (NVP): first-line = vitamin B6 (pyridoxine) 10–25 mg × 3–4 lần/ngày ± gừng (viên hoặc trà). An toàn trong thai kỳ. Metoclopramide và ondansetron = ETC, cần BS kê.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Gừng không có bất kỳ bằng chứng lâm sàng nào cho giảm buồn nôn.",
            "ans": false,
            "exp": "Nhiều RCT và meta-analysis: gừng 250 mg × 4/ngày giảm buồn nôn ở thai phụ (NVP) và PONV. An toàn trong thai kỳ.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN say tàu xe, glaucoma góc đóng. DS cần tránh thuốc chống nôn nào?",
            "opts": [
                "Tất cả thuốc chống nôn đều CCĐ",
                "Hyoscine (scopolamine) và kháng histamine thế hệ 1 — tác dụng anticholinergic",
                "Gừng viên"
            ],
            "ans": 1,
            "exp": "Hyoscine (anticholinergic) và kháng histamine thế hệ 1 (anticholinergic phụ): CCĐ ở glaucoma góc đóng → tăng nhãn áp. Gừng không có CCĐ này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 70t, tăng sinh tuyến tiền liệt, say tàu xe. DS nên tránh thuốc nào?",
            "opts": [
                "Gừng",
                "Hyoscine/dimenhydrinate (anticholinergic → nguy cơ bí tiểu)",
                "Paracetamol"
            ],
            "ans": 1,
            "exp": "Thuốc anticholinergic (hyoscine, kháng histamine thế hệ 1): gây bí tiểu ở BN tăng sinh tuyến tiền liệt. Tương tự BN glaucoma góc đóng. Ưu tiên: gừng hoặc biện pháp non-pharm.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine thế hệ 1 chống nôn (dimenhydrinate, cyclizine) gây buồn ngủ — cần cảnh báo BN lái xe.",
            "ans": true,
            "exp": "Tất cả kháng histamine thế hệ 1 (dimenhydrinate, meclizine, cyclizine, promethazine): gây buồn ngủ do qua hàng rào máu-não. Cảnh báo: không lái xe/vận hành máy móc, tránh phối hợp rượu.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn sau nhậu (hangover nausea). DS tư vấn gì?",
            "opts": [
                "Kháng sinh đường ruột",
                "Bù nước + ORS + paracetamol (nếu đau đầu) + thời gian nghỉ ngơi",
                "Loperamide"
            ],
            "ans": 1,
            "exp": "Hangover: mất nước + kích ứng dạ dày + chất chuyển hóa rượu (acetaldehyde). OTC: bù nước/ORS + antacid (nếu đau dạ dày) + paracetamol (liều thấp, thận trọng — rượu + PCM tăng nguy cơ gan). Nghỉ ngơi.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn do hóa trị (CINV). Thuốc chống nôn nào hiệu quả nhất?",
            "opts": [
                "Dimenhydrinate",
                "Ondansetron (5-HT3 antagonist)",
                "Domperidone"
            ],
            "ans": 1,
            "exp": "CINV (chemotherapy-induced nausea & vomiting): ondansetron (5-HT3 antagonist) là thuốc hiệu quả nhất. ETC (kê đơn). Thường phối hợp dexamethasone ± aprepitant (NK1 antagonist) cho hóa trị emetogenic cao.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Domperidone là thuốc prokinetic chống nôn, tác dụng ngoại vi (không qua hàng rào máu-não) → ít gây tác dụng phụ thần kinh hơn metoclopramide.",
            "ans": true,
            "exp": "Domperidone: antagonist dopamine D2 ngoại vi (chemoreceptor trigger zone + đường tiêu hóa) → prokinetic + chống nôn. Ít qua hàng rào máu-não → ít gây EPS (extrapyramidal symptoms) hơn metoclopramide. Nhưng cần thận trọng: nguy cơ loạn nhịp tim.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nôn nhiều, không uống thuốc viên được. Dạng bào chế nào của thuốc chống nôn phù hợp?",
            "opts": [
                "Viên nang cứng kích thước lớn",
                "Thuốc đặt hậu môn (suppository) hoặc dán qua da",
                "Siro đặc"
            ],
            "ans": 1,
            "exp": "BN nôn liên tục → thuốc uống hấp thu kém. Dạng thay thế: đạn hậu môn (promethazine, prochlorperazine), dán qua da (hyoscine patch), tiêm (metoclopramide IM). Siro có thể bị nôn ra.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Metoclopramide CCĐ ở đối tượng nào?",
            "opts": [
                "NCT >65 tuổi",
                "Trẻ em và thanh thiếu niên <18 tuổi (OTC/cộng đồng)",
                "Thai phụ"
            ],
            "ans": 1,
            "exp": "Metoclopramide: CCĐ ở trẻ <18 tuổi trong nhiều quốc gia (do nguy cơ EPS cao: loạn trương lực cơ, akathisia). Nếu dùng cho người lớn: liều thấp nhất, tối đa 5 ngày. EMA đã hạn chế chỉ định.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Metoclopramide không gây phản ứng ngoại tháp và an toàn ở mọi liều.",
            "ans": false,
            "exp": "Metoclopramide: antagonist D2 trung ương → EPS (dystonia cấp, akathisia, Parkinson). Nguy cơ cao: người trẻ, liều cao, dùng kéo dài. Max 5 ngày.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn + đau bụng + tiêu chảy 2 ngày (nghi ngộ độc thực phẩm). DS ưu tiên gì?",
            "opts": [
                "Metoclopramide chống nôn",
                "Bù nước (ORS) + nghỉ ngơi + theo dõi",
                "Kháng sinh phổ rộng"
            ],
            "ans": 1,
            "exp": "Ngộ độc thực phẩm nhẹ: thường tự khỏi 24–48h. Ưu tiên: bù nước (ORS), nghỉ ngơi, ăn nhẹ dần. Thuốc chống nôn: chỉ khi nôn nhiều không uống được. KS: không cần (đa số virus/toxin).",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ anticholinergic của hyoscine gồm gì?",
            "opts": [
                "Tiêu chảy và tăng tiết nước bọt",
                "Khô miệng, nhìn mờ, bí tiểu, buồn ngủ",
                "Tăng huyết áp và nhịp tim nhanh"
            ],
            "ans": 1,
            "exp": "Hyoscine (scopolamine) = anticholinergic mạnh: khô miệng, nhìn mờ (giãn đồng tử), bí tiểu, táo bón, buồn ngủ, lú lẫn (đặc biệt NCT). CCĐ: glaucoma góc đóng, tăng sinh tiền liệt tuyến.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Promethazine (kháng histamine thế hệ 1) không gây buồn ngủ đáng kể.",
            "ans": false,
            "exp": "Promethazine: an thần RẤT MẠNH (kháng H1 thế hệ 1 + anticholinergic). Buồn ngủ là tác dụng phụ chính. CCĐ trẻ <2 tuổi.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nôn nghén nặng (hyperemesis gravidarum), không ăn uống được, sụt cân. DS xử trí gì?",
            "opts": [
                "Tư vấn gừng trà + vitamin B6",
                "Chuyển BS ngay — cần bù dịch IV + thuốc chống nôn ETC",
                "Bán ORS về nhà"
            ],
            "ans": 1,
            "exp": "Hyperemesis gravidarum: nôn nặng + sụt cân >5% + mất nước + rối loạn điện giải. Cần nhập viện: bù dịch IV + thuốc chống nôn (ondansetron, metoclopramide) + bổ sung thiamine (phòng Wernicke).",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc chống nôn nào tác dụng tại CTZ (chemoreceptor trigger zone) nhưng không qua hàng rào máu-não?",
            "opts": [
                "Dimenhydrinate",
                "Domperidone",
                "Hyoscine"
            ],
            "ans": 1,
            "exp": "Domperidone: antagonist D2 tại CTZ (nằm ngoài hàng rào máu-não) + prokinetic ngoại vi. Không qua BBB đáng kể → ít tác dụng thần kinh trung ương (ít EPS). Tuy nhiên: nguy cơ kéo dài QT → loạn nhịp.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Domperidone cần thận trọng ở BN có bệnh tim vì nguy cơ kéo dài khoảng QT gây loạn nhịp.",
            "ans": true,
            "exp": "EMA (2014): domperidone liên quan tăng nhẹ nguy cơ loạn nhịp thất và đột tử tim. Hạn chế: liều thấp nhất (10 mg × 3/ngày), ngắn nhất (≤1 tuần), CCĐ: bệnh tim nặng, kéo dài QT, phối hợp thuốc kéo dài QT.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN say tàu xe hỏi biện pháp non-pharm. DS tư vấn gì?",
            "opts": [
                "Đọc sách trên xe để quên buồn nôn",
                "Ngồi ghế trước/gần cửa sổ, nhìn ra xa đường chân trời, tránh đọc sách, thông gió tốt",
                "Ăn no trước khi đi"
            ],
            "ans": 1,
            "exp": "Non-pharm say tàu xe: ngồi trước/giữa xe, nhìn đường chân trời (horizon) — giúp đồng bộ tín hiệu thị giác-tiền đình. Tránh đọc sách/nhìn điện thoại. Thông gió. Ăn nhẹ trước đi (không quá no/đói).",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng meclizine cho say tàu xe. Liều và thời điểm dùng?",
            "opts": [
                "25–50 mg, 1 giờ trước khởi hành",
                "100 mg, ngay khi buồn nôn",
                "12.5 mg, 3 lần/ngày"
            ],
            "ans": 0,
            "exp": "Meclizine: 25–50 mg, uống 1 giờ trước khởi hành, lặp lại mỗi 24 giờ nếu cần. Ít gây buồn ngủ hơn dimenhydrinate. Dùng cho người >12 tuổi.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Kháng histamine thế hệ 2 (loratadine, cetirizine) có hiệu quả chống nôn/say tàu xe.",
            "ans": false,
            "exp": "Kháng histamine thế hệ 2 ít qua hàng rào máu-não → KHÔNG tác dụng trên trung tâm nôn/hệ tiền đình. Chỉ thế hệ 1 (dimenhydrinate, meclizine, cyclizine, promethazine) có tác dụng chống nôn.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nôn kéo dài 5 ngày + mất nước + không ăn uống được. DS xử trí gì?",
            "opts": [
                "Bán ORS + thuốc chống nôn OTC",
                "Chuyển BS/cấp cứu ngay — nôn kéo dài + mất nước cần bù dịch IV",
                "Bán probiotic + vitamin"
            ],
            "ans": 1,
            "exp": "Nôn >48–72h + không uống được + mất nước = cần can thiệp y tế khẩn. Có thể cần bù dịch IV + thuốc chống nôn IV/IM + tìm nguyên nhân (tắc ruột, viêm tụy, thần kinh trung ương).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nôn ra máu hoặc dịch nôn có màu xanh lục (bile) là Red Flag cần chuyển BS ngay.",
            "ans": true,
            "exp": "Nôn máu (hematemesis/bã cà phê) → chảy máu GI trên. Nôn dịch mật xanh lục → nghi tắc ruột dưới chỗ bóng Vater. Cả hai đều là Red Flag cần cấp cứu.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nôn + đau đầu dữ dội + cứng gáy + sốt. DS lo gì?",
            "opts": [
                "Ngộ độc thực phẩm",
                "Nghi viêm màng não — cấp cứu ngay",
                "Migraine nặng"
            ],
            "ans": 1,
            "exp": "Nôn + đau đầu dữ dội + cứng gáy + sốt = tam chứng viêm màng não. Cấp cứu ngay — đe dọa tính mạng. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nôn + đau bụng dữ dội vùng hạ sườn phải + sốt. DS nghi gì?",
            "opts": [
                "Viêm dạ dày cấp",
                "Viêm túi mật cấp (acute cholecystitis) — chuyển BS",
                "Ngộ độc thực phẩm"
            ],
            "ans": 1,
            "exp": "Đau hạ sườn phải + sốt + nôn = tam chứng viêm túi mật cấp (Charcot's triad khi thêm vàng da). Cần siêu âm + nhập viện. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nôn vọt (projectile vomiting) ở trẻ sơ sinh 3–6 tuần tuổi gợi ý hẹp môn vị phì đại — cần phẫu thuật.",
            "ans": true,
            "exp": "Trẻ 3–6 tuần + nôn vọt mạnh sau bú + đói lại ngay → nghi hẹp môn vị phì đại (pyloric stenosis). Cần siêu âm xác định + phẫu thuật (pyloromyotomy). Cấp cứu ngoại nhi.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN buồn nôn mạn tính + sụt cân + chán ăn + vàng da. DS lo gì?",
            "opts": [
                "Ngộ độc thực phẩm kéo dài",
                "Nghi bệnh gan/tụy/ung thư — chuyển BS khẩn",
                "Rối loạn ăn uống"
            ],
            "ans": 1,
            "exp": "Buồn nôn mạn + sụt cân + chán ăn + vàng da = Red Flag nghiêm trọng → nghi: ung thư tụy, ung thư gan, viêm gan mạn, xơ gan. Chuyển BS khẩn: xét nghiệm chức năng gan, CT scan.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN chóng mặt + nôn do rối loạn tiền đình (labyrinthitis). Thuốc OTC nào phù hợp?",
            "opts": [
                "Loperamide",
                "Cinnarizine hoặc dimenhydrinate",
                "Omeprazole"
            ],
            "ans": 1,
            "exp": "Nôn do rối loạn tiền đình: kháng histamine thế hệ 1 (cinnarizine, dimenhydrinate, meclizine) hiệu quả vì tác dụng trên hệ tiền đình. Cinnarizine cũng có tác dụng chẹn kênh calci bổ sung.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine chỉ có tác dụng kháng histamine H1 đơn thuần, không có tác dụng trên mạch máu.",
            "ans": false,
            "exp": "Cinnarizine: kháng H1 + chẹn kênh calci → giảm co mạch + giảm kích thích tiền đình. Tác dụng phụ: buồn ngủ, tăng cân.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN dùng thuốc mới (metformin, sắt, kháng sinh). Nay buồn nôn. DS đánh giá gì?",
            "opts": [
                "Không liên quan đến thuốc",
                "Buồn nôn có thể do tác dụng phụ thuốc — xem xét thuốc mới bắt đầu",
                "Cho thêm metoclopramide"
            ],
            "ans": 1,
            "exp": "Buồn nôn là tác dụng phụ phổ biến của nhiều thuốc: metformin, sắt, kháng sinh (erythromycin, metronidazole), NSAID, opioid, digoxin, theophylline. DS phải hỏi: BN bắt đầu thuốc mới nào gần đây?",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn thai kỳ, không muốn dùng thuốc. DS tư vấn non-pharm gì?",
            "opts": [
                "Ăn bữa lớn hiếm bữa",
                "Ăn bữa nhỏ, thường xuyên, tránh thức ăn mùi mạnh, uống gừng trà, bánh cracker trước khi xuống giường",
                "Nhịn ăn sáng vì hay nôn buổi sáng"
            ],
            "ans": 1,
            "exp": "Non-pharm nôn nghén: bữa nhỏ thường xuyên (dạ dày không quá no hoặc rỗng), tránh mùi trigger, bánh cracker/biscuit trước khi xuống giường sáng, gừng trà/kẹo gừng, acupressure cổ tay (bằng chứng hạn chế).",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dimenhydrinate an toàn dùng cùng rượu và thuốc an thần mà không tăng buồn ngủ.",
            "ans": false,
            "exp": "Dimenhydrinate (kháng H1 thế hệ 1): tác dụng an thần CỘNG HƯỞNG với rượu, benzodiazepine, opioid → buồn ngủ nặng. Cảnh báo BN.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ trẻ, buồn nôn sáng sớm, trễ kinh 2 tuần. DS nghĩ đến gì?",
            "opts": [
                "Viêm dạ dày do stress",
                "Nghi có thai — hỏi về khả năng mang thai, test thử thai",
                "Say xe do đi làm buổi sáng"
            ],
            "ans": 1,
            "exp": "Buồn nôn sáng sớm + trễ kinh ở phụ nữ tuổi sinh sản → nghi có thai (morning sickness). DS nên hỏi: kỳ kinh cuối, quan hệ tình dục, biện pháp tránh thai. Tư vấn test thử thai.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nôn kèm đau đầu dữ dội, cứng gáy, sợ ánh sáng ở BN không sốt → nghi xuất huyết dưới nhện (SAH) — cấp cứu.",
            "ans": true,
            "exp": "Đau đầu dữ dội đột ngột (thunderclap headache) + nôn + cứng gáy + sợ ánh sáng, KHÔNG SỐT → nghi SAH (xuất huyết dưới nhện do vỡ phình mạch). Cấp cứu thần kinh — đe dọa tính mạng.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 3 tuổi, nôn + tiêu chảy + sốt 38°C, 2 ngày. DS đánh giá gì?",
            "opts": [
                "Cho loperamide + thuốc chống nôn",
                "Bù nước ORS + theo dõi sát — nếu mất nước nặng → chuyển BS ngay",
                "Cho kháng sinh phổ rộng"
            ],
            "ans": 1,
            "exp": "Trẻ nhỏ viêm dạ dày ruột: ORS là ưu tiên hàng đầu. Tiếp tục bú mẹ/bú bình. Theo dõi dấu hiệu mất nước (khô miệng, mắt trũng, ít tiểu). Nếu nặng → BS ngay. Loperamide CCĐ <12t, KS không cần.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nôn do migraine. Thuốc chống nôn nào thường dùng kèm thuốc giảm đau migraine?",
            "opts": [
                "Hyoscine",
                "Metoclopramide hoặc domperidone (prokinetic giúp hấp thu thuốc giảm đau)",
                "Loperamide"
            ],
            "ans": 1,
            "exp": "Migraine gây chậm làm rỗng dạ dày (gastroparesis) → thuốc giảm đau uống hấp thu kém. Metoclopramide/domperidone: chống nôn + prokinetic → tăng hấp thu paracetamol/triptan. Dùng 15–20 phút trước thuốc giảm đau.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ondansetron (5-HT3 antagonist) không gây buồn ngủ đáng kể — ưu điểm so với kháng histamine thế hệ 1.",
            "ans": true,
            "exp": "Ondansetron: ít tác dụng an thần (không ức chế H1 trung ương), ít anticholinergic. Ưu điểm lớn so với kháng histamine thế hệ 1 và phenothiazine. Tuy nhiên: tác dụng phụ = đau đầu, táo bón, kéo dài QT (liều cao).",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN NCT nôn + lú lẫn + vàng da + suy kiệt. DS lo gì?",
            "opts": [
                "Ngộ độc thực phẩm thông thường",
                "Nghi bệnh lý nghiêm trọng (suy gan, ung thư, nhiễm trùng nặng) — cấp cứu",
                "Rối loạn ăn uống"
            ],
            "ans": 1,
            "exp": "NCT + nôn + lú lẫn + vàng da + suy kiệt = Red Flag đa cơ quan → nghi: suy gan (encephalopathy), nhiễm trùng huyết, ung thư di căn. Cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN say sóng (seasickness) kéo dài. Dạng thuốc nào phù hợp khi đã nôn nhiều?",
            "opts": [
                "Viên nang uống",
                "Miếng dán hyoscine sau tai (tránh đường uống khi nôn)",
                "Siro đường"
            ],
            "ans": 1,
            "exp": "BN đã nôn nhiều → đường uống hấp thu kém. Miếng dán hyoscine (Scopoderm): hấp thu qua da → tránh đường uống. Tác dụng lên đến 72h. Lựa chọn tối ưu cho say sóng kéo dài.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Buồn nôn/nôn đơn thuần trong 24–48 giờ ở người lớn khỏe mạnh thường tự khỏi mà không cần thuốc.",
            "ans": true,
            "exp": "Nôn cấp do virus/thực phẩm: thường tự khỏi 24–48h. BN khỏe mạnh: bù nước + nghỉ ngơi là đủ. Chỉ cần thuốc nếu nôn nhiều gây mất nước hoặc ảnh hưởng sinh hoạt. Chuyển BS nếu >48h hoặc có Red Flag.",
            "icon": "⏳"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn sau phẫu thuật (PONV). Yếu tố nguy cơ nào tăng PONV?",
            "opts": [
                "Nam giới, hút thuốc lá",
                "Nữ giới, không hút thuốc, tiền sử say tàu xe, dùng opioid sau mổ",
                "Tuổi >70, BMI thấp"
            ],
            "ans": 1,
            "exp": "Yếu tố nguy cơ PONV (Apfel score): nữ giới, không hút thuốc, tiền sử PONV/say tàu xe, dùng opioid sau mổ. Mỗi yếu tố tăng nguy cơ. 0 yếu tố: ~10%, 4 yếu tố: ~80% nguy cơ PONV.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Prochlorperazine (phenothiazine) là thuốc chống nôn ETC có thể gây phản ứng ngoại tháp (EPS) đặc biệt ở người trẻ.",
            "ans": true,
            "exp": "Prochlorperazine (Stemetil): antagonist D2 mạnh → chống nôn hiệu quả nhưng nguy cơ EPS cao (dystonia cấp, akathisia) đặc biệt ở người trẻ và phụ nữ. Dùng ngắn hạn, liều thấp. ETC (kê đơn).",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nôn + đau thượng vị + đau lưng dữ dội. DS nghi gì?",
            "opts": [
                "Đau dạ dày thông thường",
                "Nghi viêm tụy cấp — chuyển cấp cứu",
                "Say xe muộn"
            ],
            "ans": 1,
            "exp": "Nôn + đau thượng vị dữ dội lan ra lưng = viêm tụy cấp (thường do sỏi mật hoặc rượu). Cấp cứu — cần nhập viện, nhịn ăn, bù dịch IV, giảm đau. Không xử trí OTC.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dimenhydrinate có thể dùng cho trẻ từ 2 tuổi (với liều giảm theo tuổi/cân nặng).",
            "ans": true,
            "exp": "Dimenhydrinate: dùng từ 2 tuổi (liều theo cân nặng). <2 tuổi: CCĐ OTC. Dạng siro/viên nhai trẻ em. Tác dụng phụ ở trẻ: buồn ngủ, kích thích nghịch thường (paradoxical excitement).",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ondansetron gây táo bón là tác dụng phụ thường gặp.",
            "ans": true,
            "exp": "Ondansetron: chặn 5-HT3 → giảm nhu động GI → táo bón (tác dụng phụ phổ biến nhất). Ngoài ra: đau đầu, nóng bừng mặt. Liều cao: kéo dài QT.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN buồn nôn do vertigo (BPPV). Thuốc OTC nào phù hợp?",
            "opts": [
                "Omeprazole",
                "Meclizine hoặc dimenhydrinate",
                "Loperamide"
            ],
            "ans": 1,
            "exp": "Vertigo/BPPV gây buồn nôn: kháng histamine thế hệ 1 (meclizine, dimenhydrinate, cinnarizine) ức chế hệ tiền đình → giảm chóng mặt + buồn nôn. Phối hợp bài tập Epley.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acupressure band (Sea-Band) đeo cổ tay tại huyệt P6 (Neiguan) không có bất kỳ bằng chứng nào cho chống nôn.",
            "ans": false,
            "exp": "Acupressure P6: một số RCT cho thấy lợi ích nhẹ cho say tàu xe, nôn nghén, PONV (dù bằng chứng chưa thống nhất hoàn toàn). An toàn, không tác dụng phụ → có thể thử, đặc biệt thai phụ muốn tránh thuốc.",
            "icon": "🧬"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nôn liên tục + đau đầu tăng dần + nhìn mờ → nghi tăng áp lực nội sọ — cấp cứu thần kinh.",
            "ans": true,
            "exp": "Nôn vọt + đau đầu tăng dần (đặc biệt sáng sớm) + nhìn mờ + phù gai thị = tăng áp lực nội sọ (u não, xuất huyết não, hydrocephalus). Cấp cứu thần kinh ngay.",
            "icon": "🚨"
        }
    ],
    "minorwound": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 35t có tiền sử dị ứng Sulfonamide đến nhà thuốc mua thuốc bôi vết bỏng nhẹ. DS nên tránh tư vấn hoạt chất nào?",
            "opts": [
                "Chlorhexidine gluconate 0.05%",
                "Bạc Sulfadiazin 1% cream",
                "NaCl 0.9% dung dịch xịt"
            ],
            "ans": 1,
            "exp": "Bạc Sulfadiazin chứa nhóm Sulfonamide trong cấu trúc phân tử → nguy cơ dị ứng chéo. Chlorhexidine và NaCl 0.9% không có cấu trúc Sulfonamide, an toàn cho BN dị ứng Sulfonamide.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bỏng nước sôi diện tích <1% BSA, bỏng độ II nông, đã làm mát đúng cách 15 phút. Hoạt chất tại chỗ OTC nào phù hợp nhất cho điều trị tiếp theo?",
            "opts": [
                "Povidone-Iodine 10% dung dịch bôi trực tiếp",
                "Bạc Sulfadiazin 1% cream",
                "Acid Fusidic 2% cream"
            ],
            "ans": 1,
            "exp": "Bạc Sulfadiazin 1% cream là lựa chọn hàng đầu cho bỏng nhẹ: phổ rộng gồm P. aeruginosa và S. aureus, thân thiện với mô hạt. Povidone-Iodine gây độc mô hạt khi dùng liên tục. Acid Fusidic dùng khi có nhiễm khuẩn xác định do Staphylococcus.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Povidone-Iodine 10% dùng sát khuẩn vết thương liên tục tối đa bao lâu để tránh ảnh hưởng chức năng tuyến giáp?",
            "opts": [
                "3 ngày",
                "7 ngày",
                "21 ngày"
            ],
            "ans": 1,
            "exp": "Khuyến cáo dùng Povidone-Iodine tại chỗ tối đa 7 ngày. Dùng kéo dài → hấp thu iodine toàn thân → hiệu ứng Wolf-Chaikoff (ức chế tổng hợp hormone giáp) hoặc cường giáp Jod-Basedow ở người có bướu giáp nhân.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao hướng dẫn lâm sàng hiện đại khuyến cáo dùng NaCl 0.9% thay thế Hydrogen peroxide 3% để rửa vết thương hở?",
            "opts": [
                "NaCl 0.9% có tác dụng kháng khuẩn mạnh hơn Hydrogen peroxide",
                "NaCl 0.9% không gây tổn thương tế bào hạt và nguyên bào sợi đang phân bào",
                "NaCl 0.9% có khả năng pha loãng dịch mủ tốt hơn"
            ],
            "ans": 1,
            "exp": "Hydrogen peroxide giải phóng oxy tự do → oxy hóa màng lipid tế bào → phá hủy mô hạt và nguyên bào sợi → chậm lành thương. NaCl 0.9% đẳng trương, trung tính sinh lý, không gây độc mô. Theo NICE và WUWHS, nước sạch uống được cũng chấp nhận khi không có NaCl 0.9%.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Acid Fusidic thuộc nhóm kháng sinh nào và tác động theo cơ chế nào khác biệt với các nhóm kháng sinh phổ biến?",
            "opts": [
                "Macrolide — ức chế tiểu đơn vị 50S ribosome ngăn tổng hợp protein",
                "Fusidane — ức chế yếu tố kéo dài EF-G trong quá trình dịch mã protein",
                "Beta-lactam — ức chế transpeptidase ngăn tổng hợp thành tế bào"
            ],
            "ans": 1,
            "exp": "Acid Fusidic là kháng sinh duy nhất trong nhóm Fusidane, ức chế EF-G (elongation factor G) → ngăn translocation → dừng dịch mã protein. Phổ hẹp, tập trung Gram(+) đặc biệt S. aureus kể cả MRSA, không có đề kháng chéo với các nhóm kháng sinh phổ biến.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trong ba hoạt chất dùng cho vết thương, hoạt chất nào là thuốc kê đơn (ETC) tại Việt Nam, không được tư vấn OTC tự do?",
            "opts": [
                "Povidone-Iodine 10% dung dịch",
                "Chlorhexidine gluconate 0.05%",
                "Acid Fusidic 2% cream"
            ],
            "ans": 2,
            "exp": "Acid Fusidic 2% cream là kháng sinh bôi tại chỗ — thuốc kê đơn (ETC) tại Việt Nam. Dùng không kê đơn → đề kháng Acid Fusidic với S. aureus ngày càng phổ biến. Povidone-Iodine và Chlorhexidine nồng độ thấp đều là OTC hợp lệ.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Cảnh báo nào sau đây là ĐÚNG khi dùng Chlorhexidine gluconate để rửa vết thương?",
            "opts": [
                "Có thể rửa tai khi bị viêm tai ngoài vì Chlorhexidine an toàn trên niêm mạc",
                "Tuyệt đối không để dây vào tai giữa, mắt, hoặc khoang màng não",
                "Pha loãng với NaCl 0.9% để tăng hiệu quả kháng khuẩn"
            ],
            "ans": 1,
            "exp": "Chlorhexidine gây độc tai (ototoxic) khi vào tai giữa → nguy cơ điếc không hồi phục nếu màng nhĩ thủng. Gây tổn thương giác mạc nặng nếu vào mắt. Pha loãng quá mức giảm hiệu quả chứ không tăng. Tuyệt đối không dùng gần tai giữa, mắt, màng não.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thai phụ 35 tuần bị bỏng nhẹ cần thuốc bôi. Hoạt chất nào cần thận trọng và ưu tiên hỏi ý kiến BS trước khi dùng?",
            "opts": [
                "NaCl 0.9% dung dịch rửa vết thương",
                "Bạc Sulfadiazin 1% cream bôi rộng",
                "Chlorhexidine gluconate 0.05% rửa sơ bộ"
            ],
            "ans": 1,
            "exp": "Bạc Sulfadiazin CCĐ ở 3 tháng cuối thai kỳ: nhóm Sulfonamide cạnh tranh bilirubin gắn albumin → tăng bilirubin tự do → kernicterus (vàng da nhân não) ở trẻ sơ sinh. NaCl 0.9% và Chlorhexidine nồng độ thấp được chấp nhận trong sơ cứu.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN THA đang dùng Amlodipine bị bỏng nhẹ, cần giảm đau uống ngắn hạn. DS ưu tiên tư vấn hoạt chất nào?",
            "opts": [
                "Ibuprofen 400 mg × 3 lần/ngày",
                "Naproxen sodium 220 mg × 2 lần/ngày",
                "Paracetamol 500–1000 mg × 3–4 lần/ngày"
            ],
            "ans": 2,
            "exp": "NSAID (Ibuprofen, Naproxen) ức chế prostaglandin thận → giữ muối/nước → tăng HA và giảm hiệu quả thuốc hạ áp. Paracetamol không ảnh hưởng HA, là lựa chọn ưu tiên giảm đau nhẹ–vừa ở BN THA. CCĐ của Paracetamol: suy gan nặng, nghiện rượu mạn.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy thận mạn giai đoạn 3 bị bỏng nhẹ diện tích ~3% BSA cần bôi Bạc Sulfadiazin. DS lưu ý điểm gì quan trọng nhất?",
            "opts": [
                "Không cần lưu ý — thuốc bôi tại chỗ không ảnh hưởng thận",
                "Bạc Sulfadiazin bôi diện tích rộng → hấp thu ion Ag+ và Sulfonamide toàn thân → nguy cơ tích lũy khi thận suy",
                "Thay bằng Acid Fusidic vì hoàn toàn an toàn hơn cho thận"
            ],
            "ans": 1,
            "exp": "Bôi diện tích lớn → hấp thu Sulfonamide và ion bạc qua da → thanh thải chậm khi suy thận → tích lũy. Acid Fusidic cũng hấp thu toàn thân một phần và là ETC. Cần hội chẩn BS khi bôi rộng ở BN suy thận và theo dõi chức năng thận định kỳ.",
            "icon": "🫘"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Khi nào DS nên ưu tiên tư vấn băng bán thấm (hydrocolloid) hơn băng gạc khô truyền thống cho vết thương nhỏ?",
            "opts": [
                "Vết thương đã khô, đóng vảy hoàn toàn",
                "Vết thương rỉ dịch vừa phải, cần môi trường ẩm để thúc đẩy tái biểu mô",
                "Vết thương đang chảy máu nhiều chưa cầm"
            ],
            "ans": 1,
            "exp": "Nguyên tắc moist wound healing (Winter, 1962): môi trường ẩm tối ưu → tế bào biểu mô di trú nhanh hơn, ít đau, ít sẹo hơn. Hydrocolloid phù hợp khi rỉ dịch vừa. Vết thương đang chảy máu → cầm máu trước. Vết thương khô đóng vảy → không cần băng bán thấm.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "So với Povidone-Iodine, Chlorhexidine gluconate có ưu điểm lâm sàng nào đặc biệt phù hợp cho vệ sinh vết thương mạn tính?",
            "opts": [
                "Phổ kháng khuẩn rộng hơn kể cả virus và nấm",
                "Duy trì tác dụng kháng khuẩn dư (substantivity) kéo dài 6–8h sau khi áp dụng",
                "Không bị bất hoạt bởi máu và chất hữu cơ"
            ],
            "ans": 1,
            "exp": "Chlorhexidine gắn kết với protein da (substantivity) → tác dụng dư kéo dài 6–8h sau khi bôi — ưu điểm đặc biệt. Ngược lại, Povidone-Iodine hoạt lực tức thì nhưng ngắn và bị bất hoạt đáng kể bởi máu/chất hữu cơ. Povidone-Iodine có hoạt tính kháng virus/nấm nhất định, Chlorhexidine ít hơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tự bôi Povidone-Iodine 10% nguyên chất hàng ngày suốt 3 tuần vì bôi nhiều để an toàn. Nguy cơ nào khả năng xảy ra nhất trên toàn thân?",
            "opts": [
                "Da mất sắc tố vĩnh viễn tại vùng bôi",
                "Rối loạn chức năng tuyến giáp do hấp thu iodine tích lũy",
                "Suy thận cấp do iodine"
            ],
            "ans": 1,
            "exp": "Dùng liên tục >7 ngày → iodine hấp thu toàn thân → hiệu ứng Wolf-Chaikoff (ức chế tổng hợp T3/T4) hoặc cường giáp Jod-Basedow ở người có nốt giáp sẵn. Suy thận do iodine rất hiếm gặp. Mất sắc tố da không phải tác dụng phụ của Povidone-Iodine.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Paracetamol uống để giảm đau sau bỏng nhẹ nên dùng vào thời điểm nào so với bữa ăn?",
            "opts": [
                "Nhịn ăn ít nhất 2 giờ trước để tăng tốc độ hấp thu",
                "Uống trước, trong, hoặc sau ăn đều được vì ít ảnh hưởng đến sinh khả dụng",
                "Chỉ uống sau ăn no để tránh kích ứng dạ dày"
            ],
            "ans": 1,
            "exp": "Paracetamol hấp thu tốt qua đường tiêu hóa bất kể tình trạng thức ăn. Thức ăn có thể làm chậm Tmax nhẹ nhưng không ảnh hưởng tổng sinh khả dụng. Không gây loét dạ dày (khác NSAID) → không cần uống sau ăn. Tuy nhiên uống sau ăn vẫn được nếu BN muốn.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 78t bị bỏng nhẹ 0.5% BSA, muốn dùng Bạc Sulfadiazin. DS lưu ý điều gì đặc biệt ở NCT?",
            "opts": [
                "Không cần lưu ý riêng, liều dùng như người trẻ trưởng thành",
                "Chức năng thận giảm theo tuổi → Sulfonamide hấp thu qua da tích lũy chậm hơn → theo dõi dấu hiệu tích lũy",
                "CCĐ tuyệt đối toàn bộ nhóm NCT, không dùng bất kỳ trường hợp nào"
            ],
            "ans": 1,
            "exp": "NCT: da mỏng hơn (hấp thu thuốc tăng), chức năng thận suy giảm sinh lý → thanh thải Sulfonamide chậm → nguy cơ tích lũy khi bôi kéo dài hoặc diện rộng. Không phải CCĐ tuyệt đối nhưng cần giới hạn diện tích và thời gian. Theo dõi chức năng thận nếu dùng >7 ngày.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng thuốc mỡ chứa hợp chất thủy ngân và mua Povidone-Iodine để sát khuẩn đồng thời. Nguy cơ nào xảy ra khi phối hợp hai chất này trên vết thương?",
            "opts": [
                "Tăng hiệu quả sát khuẩn hiệp đồng, an toàn",
                "Iodine phản ứng với thủy ngân → tạo thủy ngân(II) iodide → kích ứng và tăng độc tính thủy ngân",
                "Phản ứng trung hòa lẫn nhau, không còn tác dụng sát khuẩn"
            ],
            "ans": 1,
            "exp": "Iodine + Hg → HgI2 (thủy ngân(II) iodide) → kích ứng da, tăng hấp thu và độc tính thủy ngân toàn thân. Cần hỏi về tất cả các thuốc/dung dịch BN đang dùng tại vùng vết thương trước khi tư vấn Povidone-Iodine.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ sơ sinh <1 tháng tuổi bị bỏng nhẹ. Hoạt chất nào KHÔNG phù hợp dùng cho đối tượng này?",
            "opts": [
                "NaCl 0.9% để làm sạch vết thương",
                "Bạc Sulfadiazin 1% cream",
                "Chlorhexidine 0.05% nồng độ thấp để rửa sơ bộ"
            ],
            "ans": 1,
            "exp": "Bạc Sulfadiazin CCĐ ở trẻ sơ sinh và trẻ <2 tháng: nhóm Sulfonamide cạnh tranh bilirubin gắn albumin → tăng bilirubin tự do → kernicterus (tổn thương não không hồi phục). NaCl 0.9% an toàn. Chlorhexidine 0.05% chấp nhận được nhưng cần thận trọng ở trẻ rất nhỏ.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bạc Sulfadiazin 1% cream có phổ kháng khuẩn nào đặc biệt quan trọng trong phòng ngừa nhiễm khuẩn vết bỏng?",
            "opts": [
                "Chủ yếu Staphylococcus aureus, không bao phủ vi khuẩn Gram(-)",
                "Pseudomonas aeruginosa và Staphylococcus aureus (kể cả MRSA) — hai tác nhân hàng đầu bội nhiễm bỏng",
                "Chủ yếu vi khuẩn kỵ khí và vi khuẩn đường ruột"
            ],
            "ans": 1,
            "exp": "P. aeruginosa là vi khuẩn nguy hiểm nhất trong nhiễm khuẩn vết bỏng (sinh biofilm, đề kháng cao). Bạc Sulfadiazin có phổ rộng bao gồm cả P. aeruginosa và MRSA — đây là lý do chọn Bạc Sulfadiazin thay vì Acid Fusidic (phổ hẹp, không bao phủ P. aeruginosa).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ngay sau khi bị bỏng nhiệt tại nhà, bước xử trí ưu tiên đầu tiên là gì?",
            "opts": [
                "Bôi thuốc mỡ kháng khuẩn ngay để ngăn nhiễm trùng sớm",
                "Làm mát vùng bỏng bằng nước mát 15–20°C liên tục trong 15–20 phút",
                "Chọc phồng nước để dịch thoát ra, tránh nguy cơ nhiễm khuẩn"
            ],
            "ans": 1,
            "exp": "Nước mát 15–20°C trong 15–20 phút → giảm nhiệt mô → giảm độ sâu và diện tích tổn thương. Không dùng nước đá (<10°C) gây co mạch và tổn thương thêm. Không chọc phồng (tăng nguy cơ nhiễm khuẩn). Thuốc bôi chỉ dùng SAU khi đã làm mát và đánh giá mức độ bỏng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại nhà thuốc OTC, DS có thể tư vấn hoạt chất nào dưới đây mà không cần kê đơn cho vết thương nhỏ?",
            "opts": [
                "Mupirocin 2% mỡ",
                "Acid Fusidic 2% cream",
                "Povidone-Iodine 10% dung dịch"
            ],
            "ans": 2,
            "exp": "Povidone-Iodine 10% là sản phẩm OTC phổ biến và hợp lệ để sát khuẩn vết thương nhỏ. Mupirocin 2% và Acid Fusidic 2% đều là kháng sinh bôi, thuộc nhóm ETC tại Việt Nam — bán không kê đơn góp phần đề kháng kháng sinh tại chỗ.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN bôi Bạc Sulfadiazin 1% cream cho vết bỏng, nhận thấy vùng da xung quanh chuyển màu nâu-vàng sau 2 ngày. Đây là phản ứng argyria cục bộ nhẹ, không phải dấu hiệu nhiễm trùng, không cần dừng thuốc.",
            "ans": true,
            "exp": "Biến đổi màu sắc xung quanh vết thương khi dùng Bạc Sulfadiazin là do ion Ag+ kết hợp với protein da và tiếp xúc ánh sáng — phản ứng bình thường. Nhiễm trùng đặc trưng bởi đỏ lan rộng, sưng, đau tăng, mủ, sốt — không phải đổi màu đơn thuần.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Bôi đồng thời Chlorhexidine và Povidone-Iodine lên cùng một vết thương sẽ tăng hiệu quả sát khuẩn hiệp đồng so với từng chất đơn độc.",
            "ans": false,
            "exp": "Chlorhexidine (base hữu cơ) + Povidone-Iodine (chứa iodine acid) → phản ứng hóa học bất hoạt lẫn nhau → giảm hiệu quả cả hai. Không phối hợp đồng thời; nếu muốn đổi sang chất khác, rửa sạch chất cũ trước.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN bị bỏng nhẹ có tiền sử viêm loét dạ dày tá tràng. Paracetamol uống giảm đau là lựa chọn phù hợp hơn Ibuprofen vì Paracetamol không ức chế COX niêm mạc dạ dày.",
            "ans": true,
            "exp": "Paracetamol ức chế COX chủ yếu ở trung ương, không ức chế mạnh COX-1 niêm mạc dạ dày → không gây loét hoặc kích ứng tiêu hóa trực tiếp. NSAID ức chế COX-1 → giảm prostaglandin bảo vệ niêm mạc → tăng nguy cơ loét và chảy máu tiêu hóa.",
            "icon": "🫁"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Vết thương nhỏ ở NCT tự lành như người trẻ khỏe mạnh vì da chỉ mỏng hơn nhưng quá trình lành thương sinh lý không thay đổi đáng kể.",
            "ans": false,
            "exp": "NCT có nhiều yếu tố làm chậm lành thương: giảm tưới máu ngoại vi, giảm phân bào nguyên bào sợi, giảm tổng hợp collagen, miễn dịch suy giảm, thường kèm bệnh nền. Vết thương ở NCT lành chậm hơn 30–50% so với người trẻ và dễ nhiễm khuẩn hơn.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Trẻ 6 tháng tuổi bị trầy xước nhỏ có thể sát khuẩn an toàn bằng Povidone-Iodine 10% nguyên chất như người lớn.",
            "ans": false,
            "exp": "Trẻ nhũ nhi da mỏng, diện tích bề mặt/cân nặng lớn → hấp thu iodine qua da cao hơn nhiều → nguy cơ rối loạn tuyến giáp ảnh hưởng phát triển thần kinh. Ưu tiên: rửa bằng NaCl 0.9% hoặc nước sạch; nếu cần sát khuẩn, pha loãng Povidone-Iodine hoặc dùng Chlorhexidine 0.05%.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chlorhexidine gluconate ≥0.5% có thể gây kích ứng hóa học và độc tế bào khi bôi trực tiếp lên vết thương hở.",
            "ans": true,
            "exp": "Chlorhexidine an toàn kháng khuẩn ở nồng độ 0.05–0.2% cho rửa vết thương. Nồng độ ≥0.5% → gây độc tế bào (nguyên bào sợi, keratinocyte), kích ứng hóa học. Sản phẩm 4% dùng rửa tay phẫu thuật — TUYỆT ĐỐI KHÔNG bôi vết thương hở trực tiếp.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN tự mua Acid Fusidic 2% cream về bôi vết thương nhỏ 10 ngày liên tục mà không cần kê đơn — việc này không có tác hại gì đáng kể.",
            "ans": false,
            "exp": "Acid Fusidic là ETC → phải có kê đơn. Dùng không kiểm soát → đề kháng Acid Fusidic với S. aureus ngày càng phổ biến (>30% ở một số quốc gia châu Âu). Ngoài ra dùng sai chỉ định → không điều trị đúng vi khuẩn gây bệnh. DS có trách nhiệm từ chối bán không kê đơn.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Neomycin (thành phần trong một số thuốc mỡ kháng khuẩn đa thành phần) có tỷ lệ gây viêm da tiếp xúc dị ứng tương đối cao so với các kháng sinh bôi khác.",
            "ans": true,
            "exp": "Neomycin là một trong các nguyên nhân hàng đầu gây viêm da tiếp xúc dị ứng (allergic contact dermatitis) do thuốc bôi — tỷ lệ dương tính patch test khoảng 10% dân số dùng dài hạn. DS cần hỏi tiền sử dị ứng và hạn chế dùng >7 ngày.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN muốn bôi Bạc Sulfadiazin 1% cream 3 lần/ngày thay vì 1–2 lần/ngày để vết bỏng mau lành hơn — điều này có cơ sở khoa học.",
            "ans": false,
            "exp": "Khuyến cáo chuẩn: Bạc Sulfadiazin bôi 1–2 lần/ngày sau khi rửa sạch. Bôi nhiều hơn không tăng hiệu quả (nồng độ ion Ag+ tại vùng vết thương đã bão hòa) mà chỉ tăng hấp thu toàn thân và nguy cơ kích ứng da, tốn kém không cần thiết.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN THA đang dùng Enalapril bị bỏng nhẹ và dùng Ibuprofen uống để giảm đau có nguy cơ làm tăng huyết áp và giảm hiệu quả của Enalapril.",
            "ans": true,
            "exp": "NSAID ức chế prostaglandin thận → co tiểu động mạch vào, giảm lọc cầu thận, giữ muối/nước → tăng HA và giảm hiệu quả ACE inhibitor (Enalapril) và ARB. Nguy cơ tăng gấp đôi ở BN THA có thận yếu. Paracetamol là lựa chọn thay thế an toàn hơn.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hướng dẫn lâm sàng hiện đại (NICE, WUWHS) khuyến cáo Hydrogen peroxide 3% là dung dịch rửa vết thương hở hiệu quả và an toàn.",
            "ans": false,
            "exp": "NICE và WUWHS không còn khuyến cáo H2O2 để rửa vết thương từ giữa những năm 2000: gây độc nguyên bào sợi và keratinocyte (phá hủy mô hạt), làm chậm tái biểu mô. Ưu tiên hiện nay: NaCl 0.9% hoặc nước uống được sạch.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Vết bỏng độ II nhỏ đã lành sau 10 ngày vẫn cần bảo vệ khỏi UV ít nhất 6–12 tháng để phòng tăng sắc tố hậu viêm (post-inflammatory hyperpigmentation).",
            "ans": true,
            "exp": "Da mới phục hồi sau bỏng thiếu melanin bảo vệ → dễ tổn thương UV → kích hoạt tăng sản melanocyte → PIH. Đặc biệt nặng hơn ở người da sẫm màu. Khuyến cáo: che phủ vật lý hoặc kem chống nắng SPF ≥30 trong 6–12 tháng sau khi lành.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN vết thương ở bàn tay, chảy máu không cầm dù đã ép chặt bằng gạc sạch 20 phút. DS nên xử trí ngay thế nào?",
            "opts": [
                "Tư vấn thêm băng cầm máu và tiếp tục ép tại nhà thêm 30 phút",
                "Hướng dẫn tự garo và đến phòng khám trong vài giờ",
                "Gọi 115 hoặc chuyển cấp cứu ngay — đây là Red Flag nghiêm trọng"
            ],
            "ans": 2,
            "exp": "Chảy máu không cầm sau 15–20 phút ép liên tục = Red Flag cấp cứu → nghi tổn thương mạch máu lớn hoặc rối loạn đông máu. Gọi 115 hoặc chuyển ngay. Không tự garo nếu không được đào tạo (garo sai → thiếu máu chi, hoại tử).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khách hàng bị chó lạ cắn vào tay, vết thương nhỏ, đã tự rửa xà phòng tại nhà. DS tư vấn thế nào?",
            "opts": [
                "Tư vấn OTC: rửa sạch, bôi Povidone-Iodine, băng lại theo dõi tại nhà",
                "Chuyển cơ sở y tế ngay để tiêm phòng dại và đánh giá uốn ván — bất kể vết thương nhỏ",
                "Chỉ cần uống kháng sinh dự phòng, không cần tiêm phòng"
            ],
            "ans": 1,
            "exp": "Vết thương do chó/mèo lạ cắn: LUÔN chuyển viện — (1) Dại: cần tiêm PEP trong 24h đầu để đạt hiệu quả tối đa; (2) Uốn ván: nước bọt + vết thương → nguy cơ cao. DS không xử lý OTC trường hợp này bất kể vết thương nhỏ.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN bỏng nước sôi, diện tích ước tính bằng 2 lòng bàn tay của BN cộng cẳng tay (khoảng 2% BSA), bỏng độ II. DS xử trí thế nào?",
            "opts": [
                "Tư vấn OTC: làm mát + bôi Bạc Sulfadiazin + băng bán thấm tại nhà",
                "Chuyển viện ngay — bỏng độ II ≥1% BSA cần đánh giá chuyên khoa",
                "Theo dõi tại nhà 24 giờ, nếu phồng to hơn mới chuyển viện"
            ],
            "ans": 1,
            "exp": "Ngưỡng chuyển viện bỏng độ II: ≥1% BSA người lớn (tương đương 1 lòng bàn tay). 2% BSA vượt ngưỡng OTC: nguy cơ mất dịch, nhiễm khuẩn, cần đánh giá chuyên khoa bỏng. Phòng khám/khoa cấp cứu sẽ quyết định nhập viện hay điều trị ngoại trú.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trong sơ cứu bỏng nhiệt tại nhà, lời khuyên nào ĐÚNG theo khuyến cáo y tế hiện đại?",
            "opts": [
                "Chườm đá viên trực tiếp lên vùng bỏng để hạ nhiệt nhanh",
                "Bôi kem đánh răng lên vết bỏng để giảm đau ngay tức thì",
                "Làm mát liên tục bằng nước mát 15–20°C trong 15–20 phút"
            ],
            "ans": 2,
            "exp": "Nước mát 15–20°C trong 15–20 phút là tiêu chuẩn sơ cứu bỏng (Burn Foundation, WHO). Đá viên (<10°C) gây co mạch → tổn thương mô thêm. Kem đánh răng, bơ, dầu → bẫy nhiệt, tăng nguy cơ nhiễm khuẩn và cản trở đánh giá độ bỏng. Sơ cứu đúng giảm độ sâu tổn thương đáng kể.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN vết thương có mủ xanh, vùng đỏ lan rộng ~3 cm quanh mép, đau tăng dần, kèm sốt 38.5°C. DS nên xử trí thế nào?",
            "opts": [
                "Tăng liều Povidone-Iodine và theo dõi thêm 48 giờ tại nhà",
                "Tư vấn mua Acid Fusidic 2% cream để điều trị nhiễm khuẩn tại chỗ",
                "Chuyển BS ngay — nhiễm khuẩn lan rộng kèm sốt cần kháng sinh toàn thân"
            ],
            "ans": 2,
            "exp": "Mủ xanh + sốt + đỏ lan → nhiễm khuẩn vết thương vượt phạm vi OTC. Kháng sinh bôi tại chỗ không kiểm soát được nhiễm khuẩn lan rộng → cần kháng sinh toàn thân (uống hoặc tiêm tùy mức độ). DS không kê đơn kháng sinh hệ thống.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Bỏng độ II ở vị trí nào cần chuyển viện ngay dù diện tích rất nhỏ (<0.5% BSA)?",
            "opts": [
                "Vùng lưng trên",
                "Vùng cẳng tay",
                "Mặt, bàn tay, bộ phận sinh dục, khớp lớn"
            ],
            "ans": 2,
            "exp": "Bỏng ở vị trí đặc biệt → nguy cơ sẹo chức năng nghiêm trọng: mặt (mù mắt, sẹo co rút), bàn tay (mất chức năng), bộ phận sinh dục/tầng sinh môn, khớp lớn (co rút khớp). Dù nhỏ, cần chuyên khoa bỏng đánh giá. Lưng và cẳng tay ít nguy hiểm hơn về chức năng.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN cuối cùng tiêm phòng uốn ván cách đây 8 năm, bị vết thương sâu do đinh gỉ đâm vào bàn chân. DS tư vấn thế nào?",
            "opts": [
                "Tư vấn dùng kháng sinh OTC dự phòng uốn ván tại nhà",
                "Chuyển trạm y tế/BS ngay để tiêm nhắc vắc xin Td (hoặc Tdap)",
                "Không cần lo ngại vì đã tiêm đủ lịch cơ bản từ trước"
            ],
            "ans": 1,
            "exp": "Vết thương bẩn sâu + cuối cùng tiêm >5 năm → cần tiêm nhắc Td ngay. Quy tắc: vết thương sạch → tiêm nếu >10 năm; vết thương bẩn/sâu → tiêm nếu >5 năm. Kháng sinh không thay thế tiêm phòng uốn ván. DS không có thẩm quyền tiêm vắc xin, phải chuyển cơ sở y tế.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Vết trầy xước nông sạch (chỉ tổn thương lớp biểu bì) ở người lớn khỏe mạnh thông thường lành hoàn toàn trong bao lâu?",
            "opts": [
                "1–3 ngày",
                "7–14 ngày",
                "4–6 tuần"
            ],
            "ans": 1,
            "exp": "Vết trầy nông (abrasion) chỉ tổn thương lớp biểu bì → tái biểu mô hoàn toàn trong 7–14 ngày với điều kiện giữ sạch và ẩm vừa. 1–3 ngày quá ngắn. 4–6 tuần dành cho vết thương sâu qua toàn lớp da hoặc sau phẫu thuật.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN ĐTĐ type 2 đang dùng Insulin bị vết thương nhỏ sạch ở bàn chân, chưa có dấu hiệu nhiễm khuẩn. DS tư vấn thế nào?",
            "opts": [
                "Tư vấn OTC đơn giản: rửa sạch + băng bó, theo dõi tại nhà như bình thường",
                "Chuyển BS/phòng khám đánh giá — dù vết thương nhỏ, bàn chân ĐTĐ nguy cơ rất cao",
                "Khuyên BN theo dõi 1 tuần, nếu không lành mới đến gặp BS"
            ],
            "ans": 1,
            "exp": "Bàn chân ĐTĐ: giảm cảm giác (không đau dù nhiễm khuẩn nặng), tuần hoàn kém (lành chậm), miễn dịch suy giảm → vết thương nhỏ có thể tiến triển nhanh thành viêm xương, hoại tử. IDF khuyến cáo: bất kỳ vết thương nào ở bàn chân ĐTĐ → đánh giá BS trong 24h.",
            "icon": "👴"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN điều trị vết bỏng nhẹ OTC tại nhà. Sau bao nhiêu ngày không cải thiện, DS nên khuyên tái khám BS?",
            "opts": [
                "2 ngày",
                "5–7 ngày",
                "14 ngày"
            ],
            "ans": 1,
            "exp": "Nếu sau 5–7 ngày điều trị OTC đúng cách (làm mát, Bạc Sulfadiazin, băng bán thấm) mà vết bỏng chưa cải thiện (vẫn đau nhiều, rỉ dịch, xuất hiện dấu nhiễm khuẩn) → cần BS đánh giá lại: bỏng có thể sâu hơn ban đầu, hoặc đang nhiễm khuẩn. 14 ngày là quá muộn.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Dấu hiệu nào giúp phân biệt bỏng độ I (nông) và bỏng độ II nông (partial-thickness)?",
            "opts": [
                "Bỏng độ I: đau dữ dội hơn bỏng độ II vì thụ cảm đau còn nguyên vẹn",
                "Bỏng độ II nông: xuất hiện phồng nước, nền ẩm hồng, đau nhiều khi chạm nhẹ",
                "Bỏng độ II: da đen sạm và mất hoàn toàn cảm giác đau"
            ],
            "ans": 1,
            "exp": "Bỏng độ I: đỏ da, đau, không phồng (chỉ biểu bì). Bỏng độ II nông: phồng nước, nền ẩm hồng, đau dữ dội khi chạm (lớp bì nông tổn thương nhưng thụ cảm đau còn). Bỏng độ III: da đen/trắng cứng, không đau (thụ cảm đau bị hủy).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN hỏi DS về chế độ dinh dưỡng trong thời gian phục hồi sau bỏng nhẹ. Tư vấn nào ĐÚNG theo bằng chứng y khoa?",
            "opts": [
                "Kiêng hoàn toàn thịt và đạm động vật để tránh hình thành sẹo lồi",
                "Bổ sung đầy đủ protein, kẽm và Vitamin C để hỗ trợ tổng hợp collagen và tái tạo mô",
                "Uống nhiều nước có đường để cung cấp năng lượng nhanh cho quá trình phục hồi"
            ],
            "ans": 1,
            "exp": "Lành thương cần: Protein (nguyên liệu tổng hợp collagen và tái tạo mô), Kẽm (cofactor enzyme tổng hợp ADN/protein), Vitamin C (hydroxylation proline/lysine trong chuỗi collagen). Sẹo lồi do yếu tố di truyền và vị trí vết thương, không phải chế độ ăn đạm. Đường đơn nhiều → nguy cơ nhiễm khuẩn cao hơn.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Bôi mỡ trăn hoặc dầu dừa ngay lên vết bỏng mới bị là biện pháp dân gian hiệu quả và được y học hiện đại khuyến cáo áp dụng sớm.",
            "ans": false,
            "exp": "Bôi bất kỳ chất béo nào ngay sau bỏng → bẫy nhiệt trong mô → kéo dài tổn thương nhiệt sâu hơn. Không có bằng chứng khoa học đủ mạnh. Bước chuẩn: làm mát nước mát trước tiên 15–20 phút, sau đó mới đánh giá và dùng thuốc phù hợp.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nghiên cứu khoa học đã chứng minh giữ ẩm vết thương (moist wound healing) giúp lành nhanh hơn và ít sẹo hơn so với để vết thương khô hoàn toàn.",
            "ans": true,
            "exp": "Nghiên cứu Winter (1962) và nhiều RCT sau đó: môi trường ẩm → tế bào biểu mô di trú nhanh hơn khoảng 50%, giảm đau, giảm sẹo. Băng hydrocolloid/film dressing vượt trội hơn băng gạc khô. Đây là nền tảng modern wound care.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Hút thuốc lá trong giai đoạn phục hồi vết bỏng làm chậm lành thương và tăng nguy cơ nhiễm khuẩn do co mạch và giảm oxy mô.",
            "ans": true,
            "exp": "Nicotine → co mạch → giảm tưới máu → giảm oxy và dưỡng chất đến vùng thương. Carbon monoxide → gắn hemoglobin → giảm cung ứng oxy mô. Hút thuốc làm chậm lành thương và tăng nguy cơ nhiễm khuẩn rõ ràng. DS nên tư vấn ngừng hút trong giai đoạn hồi phục.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Vết thương nhỏ có dấu hiệu nhiễm khuẩn nhẹ tại chỗ (hơi đỏ mép, chưa có mủ, không sốt) cần dùng ngay kháng sinh uống (VD: Amoxicillin) để ngăn lan rộng.",
            "ans": false,
            "exp": "Nhiễm khuẩn nhẹ tại chỗ (viêm mép vết thương khu trú, không lan, không sốt) → thường đủ điều trị bằng vệ sinh sạch + kháng sinh bôi tại chỗ (nếu có ETC). Kháng sinh uống cho vết thương nhỏ không có chỉ định rõ → lạm dụng kháng sinh, tăng đề kháng. DS không kê đơn kháng sinh hệ thống.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ <6 tháng bị trầy xước nhỏ có thể điều trị hoàn toàn tương tự người lớn với Povidone-Iodine 10% nguyên chất không pha loãng.",
            "ans": false,
            "exp": "Trẻ <6 tháng: tỷ lệ diện tích da/cân nặng lớn, da mỏng → hấp thu iodine cao hơn nhiều → nguy cơ suy giáp và ảnh hưởng phát triển thần kinh. Tư vấn cha mẹ rửa bằng NaCl 0.9% hoặc nước sạch; chuyển BS nếu vết thương cần thuốc kháng khuẩn.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Không nên bóc vảy vết thương đang lành dù bị ngứa, vì lớp vảy là màng bảo vệ tự nhiên che phủ vùng tái biểu mô bên dưới.",
            "ans": true,
            "exp": "Vảy (scab/eschar) bảo vệ mô hạt và vùng tái biểu mô đang phát triển khỏi vi khuẩn và tổn thương cơ học. Bóc vảy → phá vỡ lớp biểu mô non → chậm lành, tăng nguy cơ sẹo và nhiễm khuẩn. Ngứa khi lành là sinh lý bình thường do histamine giải phóng trong quá trình phục hồi.",
            "icon": "🍯"
        }
    ],
    "funginf": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "Điểm khác biệt cơ chế tác động quan trọng nhất giữa Terbinafine HCl và Clotrimazole trong điều trị nấm da là gì?",
            "opts": [
                "Cả hai đều ức chế CYP51 (lanosterol 14α-demethylase) dẫn đến thiếu ergosterol",
                "Terbinafine ức chế squalene epoxidase → tích lũy squalene độc + thiếu ergosterol (fungicidal); Clotrimazole ức chế CYP51 → thiếu ergosterol (fungistatic)",
                "Terbinafine và Clotrimazole có cùng cơ chế, chỉ khác phổ tác dụng trên loại nấm"
            ],
            "ans": 1,
            "exp": "Terbinafine (allylamine): ức chế squalene epoxidase → squalene tích lũy độc hại + thiếu ergosterol → fungicidal (diệt nấm). Azole (Clotrimazole, Miconazole): ức chế CYP51 → chỉ thiếu ergosterol → fungistatic (kìm nấm). Fungicidal → liệu trình ngắn hơn, tỷ lệ tái phát thấp hơn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị lang ben (tinea versicolor) vùng ngực và lưng. Hoạt chất bôi tại chỗ nào phù hợp nhất cho đối tượng này?",
            "opts": [
                "Terbinafine HCl 1% cream bôi 2 lần/ngày trong 2 tuần",
                "Ketoconazole 2% shampoo bôi như sữa tắm, để 5–10 phút rồi xả",
                "Tolnaftate 1% cream bôi 3 lần/ngày trong 4 tuần"
            ],
            "ans": 1,
            "exp": "Tinea versicolor do Malassezia furfur (nấm men, không phải dermatophyte). Ketoconazole 2% shampoo/gel bôi lên vùng tổn thương → để 5–10 phút → xả: hiệu quả cao, thuận tiện. Selenium sulfide 2.5% cũng là lựa chọn tốt. Tolnaftate ít hiệu quả với Malassezia. Terbinafine cream ít được nghiên cứu cho loài này.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị nấm móng (tinea unguium) đến nhà thuốc hỏi mua thuốc bôi OTC. DS tư vấn thế nào?",
            "opts": [
                "Bôi Clotrimazole cream 2 lần/ngày trong 2 tháng đủ điều trị nấm móng",
                "Dùng Terbinafine cream 1% bôi vào móng và dưới móng trong 4 tuần",
                "Chuyển BS để được kê đơn thuốc uống — thuốc bôi OTC không thấm đủ qua móng để điều trị"
            ],
            "ans": 2,
            "exp": "Tinea unguium: móng là rào cản vật lý dày → thuốc bôi không thấm đủ sâu → thất bại. Cần thuốc uống hệ thống (ETC): Terbinafine 250 mg/ngày × 6 tuần (móng tay) hoặc 12 tuần (móng chân), hoặc Itraconazole pulse. DS tư vấn chuyển BS da liễu.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị tinea pedis (nấm kẽ ngón chân) điển hình dùng Terbinafine HCl 1% cream. Thời gian điều trị tiêu chuẩn và cách dừng thuốc đúng là gì?",
            "opts": [
                "Dừng ngay khi hết ngứa và bong da — khoảng 3–5 ngày",
                "Dùng 1–2 tuần, tiếp tục thêm 1 tuần sau khi hết hoàn toàn triệu chứng",
                "Dùng 4–6 tuần liên tục để chắc chắn diệt hết bào tử"
            ],
            "ans": 1,
            "exp": "Terbinafine cream tinea pedis: 1–2 tuần. Quan trọng: tiếp tục 1 tuần sau khi hoàn toàn hết triệu chứng để diệt bào tử còn sót trong tế bào sừng. Dừng theo triệu chứng → tái phát cao. 4–6 tuần thường dành cho azole hoặc tinea versicolor.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Điểm khác biệt lâm sàng quan trọng nào giữa Miconazole nitrate và Clotrimazole mà DS cần biết khi chọn thuốc?",
            "opts": [
                "Clotrimazole không tác dụng trên Candida; Miconazole tác dụng tốt cả Candida và dermatophyte",
                "Miconazole có thêm hoạt tính trên vi khuẩn Gram(+); Clotrimazole không có tác dụng này",
                "Cả hai có phổ kháng nấm và vi khuẩn giống hệt nhau, không có điểm khác biệt lâm sàng"
            ],
            "ans": 1,
            "exp": "Miconazole có thêm hoạt tính kháng khuẩn Gram(+) (S. aureus, Streptococcus) — hữu ích khi tinea kèm bội nhiễm vi khuẩn. Cả hai đều tác dụng tốt với Candida và dermatophyte. Đây là điểm khác biệt thực tế, không phải Clotrimazole không tác dụng Candida.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Khi nào DS nên ưu tiên tư vấn Ketoconazole shampoo thay vì Clotrimazole cream cho BN nấm da?",
            "opts": [
                "Tinea capitis (nấm tóc) gây rụng tóc ở trẻ 8 tuổi",
                "Tinea versicolor (lang ben) vùng lưng và ngực người lớn",
                "Tinea corporis (nấm thân) vùng bụng dưới người lớn"
            ],
            "ans": 1,
            "exp": "Ketoconazole shampoo phù hợp cho tinea versicolor (Malassezia) vùng thân. Tinea capitis ở trẻ em cần thuốc uống hệ thống (Griseofulvin, Terbinafine uống — ETC) vì dermatophyte xâm nhập nang tóc, bôi tại chỗ không đủ. Tinea corporis → cream azole hoặc Terbinafine cream.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thai phụ 20 tuần bị tinea corporis nhỏ vùng cẳng tay. Hoạt chất bôi tại chỗ nào có bằng chứng an toàn tốt nhất trong thai kỳ?",
            "opts": [
                "Clotrimazole cream bôi diện tích nhỏ — hấp thu toàn thân <1%, được chấp nhận",
                "Selenium sulfide 2.5% bôi toàn thân — phù hợp nhất và an toàn nhất",
                "Terbinafine cream — không có dữ liệu, tránh hoàn toàn trong cả 3 tam cá nguyệt"
            ],
            "ans": 0,
            "exp": "Clotrimazole topical được chấp nhận trong thai kỳ (hấp thu <1% qua da, không có bằng chứng gây hại thai). Selenium sulfide tránh bôi diện rộng (hấp thu selenium). Terbinafine cream: dữ liệu hạn chế nhưng hấp thu rất thấp — thường chấp nhận thận trọng, song Clotrimazole có bằng chứng an toàn tốt hơn.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN ĐTĐ type 2 kiểm soát kém, bị tinea cruris tái phát lần 3 trong năm. Ngoài thuốc bôi tại chỗ, DS nên làm gì thêm?",
            "opts": [
                "Chỉ tăng thời gian bôi thuốc lên 8 tuần và đổi sang Terbinafine",
                "Chuyển BS đánh giá kiểm soát đường huyết và cân nhắc thuốc uống hệ thống",
                "Kết hợp thêm Ketoconazole shampoo gội vùng bẹn hàng ngày"
            ],
            "ans": 1,
            "exp": "ĐTĐ kiểm soát kém → glucose da cao → môi trường nấm phát triển mạnh → tái phát liên tục. Cần: (1) Kiểm soát HbA1c, (2) Đánh giá cần thuốc uống hệ thống (Fluconazole/Itraconazole — ETC). Không thể xử lý bằng OTC đơn thuần khi tái phát nhiều lần.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN THA đang dùng Simvastatin và Amlodipine, được BS kê Fluconazole uống điều trị nấm. DS cần cảnh báo tương tác nào nguy hiểm nhất?",
            "opts": [
                "Fluconazole tương tác với Amlodipine → tăng nguy cơ phù nề nghiêm trọng",
                "Fluconazole ức chế CYP3A4 → tăng nồng độ Simvastatin → tăng nguy cơ tiêu cơ vân (rhabdomyolysis)",
                "Fluconazole và thuốc hạ áp không có tương tác đáng kể"
            ],
            "ans": 1,
            "exp": "Fluconazole là chất ức chế mạnh CYP3A4 và CYP2C9 → tăng AUC Simvastatin 3–4 lần → tăng nguy cơ tiêu cơ vân và suy thận cấp. Cần ngừng Simvastatin trong thời gian dùng Fluconazole hoặc đổi sang Pravastatin (không chuyển hóa qua CYP3A4). Amlodipine ít bị ảnh hưởng hơn.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao cần tiếp tục bôi thuốc chống nấm thêm 1 tuần sau khi triệu chứng ngứa và bong da đã hoàn toàn hết?",
            "opts": [
                "Để giảm nguy cơ phát triển đề kháng thuốc trong tương lai",
                "Vì bào tử nấm còn sót trong tế bào sừng chưa bị tiêu diệt hết — dừng sớm dẫn đến tái phát",
                "Để tăng cường miễn dịch da địa phương chống tái nhiễm từ môi trường"
            ],
            "ans": 1,
            "exp": "Triệu chứng hết khi đủ lượng nấm bị ức chế/tiêu diệt nhưng bào tử/sợi nấm còn sót trong lớp sừng sâu hơn. Dừng thuốc sớm → bào tử còn sót phát triển lại → tái phát trong 2–4 tuần. Đây là nguyên nhân hàng đầu thất bại điều trị do bệnh nhân tự dừng thuốc.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 8 tuổi bị tinea capitis với vùng rụng tóc lan rộng. DS tư vấn xử trí như thế nào?",
            "opts": [
                "Bôi Clotrimazole cream 1% lên da đầu 2 lần/ngày trong 4 tuần",
                "Gội đầu bằng Ketoconazole shampoo 2% hàng ngày, đủ 2 tuần",
                "Chuyển BS kê đơn thuốc uống — tinea capitis nhất thiết cần điều trị hệ thống"
            ],
            "ans": 2,
            "exp": "Tinea capitis (dermatophyte trong nang tóc): thuốc bôi không thấm đủ vào nang tóc → thất bại. Cần Griseofulvin (first-line trẻ em) hoặc Terbinafine uống (ETC). Ketoconazole shampoo có thể dùng bổ sung để giảm lây nhiễm nhưng không thay thế điều trị uống.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Cảnh báo quan trọng nào DS cần tư vấn cho BN điều trị tinea versicolor bằng Clotrimazole cream?",
            "opts": [
                "Thuốc gây tăng nhạy cảm ánh sáng mạnh — phải tránh nắng hoàn toàn trong suốt liệu trình",
                "Mảng da nhạt màu sau điều trị tồn tại vài tháng là bình thường — không phải thất bại điều trị",
                "Thuốc gây khô da nghiêm trọng — cần bôi thêm dưỡng ẩm đậm đặc song song"
            ],
            "ans": 1,
            "exp": "Sau điều trị thành công (diệt Malassezia), mảng hypopigmentation tồn tại vài tháng đến >1 năm do melanocyte chưa phục hồi tổng hợp melanin. BN thường lo lắng nghĩ thuốc không hiệu quả. DS cần giải thích rõ: đây là dấu hiệu bình thường, tiếp xúc ánh nắng có kiểm soát giúp phục hồi sắc tố nhanh hơn.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị tinea pedis thể kẽ ngón (interdigital) điển hình. DS ưu tiên tư vấn hoạt chất nào và lý do?",
            "opts": [
                "Tolnaftate 1% cream vì ít kích ứng và phổ biến nhất trong OTC",
                "Terbinafine HCl 1% cream vì fungicidal, liệu trình ngắn hơn, tỷ lệ khỏi cao hơn với dermatophyte",
                "Selenium sulfide shampoo vì có tác dụng tiêu sừng tốt"
            ],
            "ans": 1,
            "exp": "Terbinafine 1% cream là lựa chọn ưu tiên cho tinea pedis (dermatophyte): fungicidal, 1–2 tuần (vs 2–4 tuần với azole), tỷ lệ khỏi và không tái phát cao hơn. Tolnaftate hiệu quả nhưng kém hơn. Selenium sulfide không có chỉ định cho tinea pedis.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang bôi Clotrimazole cream để điều trị nấm kẽ ngón chân. Thời điểm bôi thuốc nào tối ưu nhất?",
            "opts": [
                "Buổi sáng ngay sau khi tắm và còn ướt để tăng thấm thuốc vào da",
                "Buổi tối trước khi ngủ, sau khi rửa chân sạch và lau khô kỹ kẽ ngón",
                "Bất kỳ lúc nào 3 lần/ngày để duy trì nồng độ thuốc liên tục"
            ],
            "ans": 1,
            "exp": "Bôi tối trước ngủ → thuốc tiếp xúc da lâu nhất mà không bị mồ hôi hoặc sinh hoạt rửa trôi → hấp thu tối đa. Buổi sáng sau tắm → thuốc bị rửa trôi trong ngày. 1–2 lần/ngày là đủ theo khuyến cáo; 3 lần không tăng hiệu quả.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN suy thận giai đoạn 4 bị tinea corporis diện rộng. Thuốc chống nấm bôi tại chỗ (Terbinafine cream, Clotrimazole cream) có cần điều chỉnh liều không?",
            "opts": [
                "Có — tất cả thuốc chống nấm đều cần giảm liều khi suy thận, kể cả dạng bôi",
                "Không — hấp thu toàn thân của thuốc bôi tại chỗ <5% qua da nguyên vẹn, không cần điều chỉnh",
                "Chỉ Terbinafine cream cần giảm liều; Clotrimazole không cần"
            ],
            "ans": 1,
            "exp": "Thuốc bôi tại chỗ hấp thu toàn thân <5% qua da nguyên vẹn → nồng độ hệ thống không đáng kể → không cần điều chỉnh liều theo chức năng thận. Ngược lại, Terbinafine uống (ETC): cần thận trọng khi GFR <50 mL/min. Với da tổn thương diện rộng, hấp thu có thể tăng nhưng vẫn thường không cần chỉnh liều.",
            "icon": "🫘"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bôi Terbinafine cream 1% lên vùng nấm thân diện rộng 2 lần/ngày suốt 6 tuần liên tục. Nguy cơ nào khả năng xảy ra nhất?",
            "opts": [
                "Suy gan do hấp thu Terbinafine tích lũy toàn thân qua cream",
                "Kích ứng da tại chỗ kéo dài — dùng lâu hơn cần thiết, không cải thiện hiệu quả thêm",
                "Không có nguy cơ gì — dùng càng lâu càng an toàn và hiệu quả hơn"
            ],
            "ans": 1,
            "exp": "Terbinafine cream hấp thu toàn thân rất thấp → suy gan do cream rất hiếm (khác Terbinafine uống có nguy cơ gan đáng kể). Dùng kéo dài >4 tuần không tăng hiệu quả, chỉ tăng kích ứng da và chi phí. Nếu sau 4 tuần không đáp ứng → cần BS xem xét lại chẩn đoán.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "NCT 72t bị tinea cruris tái phát nhiều lần trong năm. DS cần hỏi tiền sử nào để tư vấn phù hợp nhất?",
            "opts": [
                "Tiền sử dị ứng thực phẩm và dị ứng theo mùa",
                "Tiền sử ĐTĐ, dùng corticosteroid hoặc thuốc ức chế miễn dịch",
                "Tiền sử bệnh tim mạch và thuốc chống đông máu"
            ],
            "ans": 1,
            "exp": "ĐTĐ → glucose da cao → môi trường thuận lợi cho nấm; corticosteroid/ức chế miễn dịch → giảm đề kháng nấm tại da. NCT có một trong hai yếu tố này → tái phát liên tục bất kể dùng thuốc đúng → cần kiểm soát bệnh nền song song với điều trị nấm.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Salicylic acid được phối hợp với thuốc chống nấm trong một số chế phẩm điều trị nấm da. Vai trò chính của Salicylic acid trong phối hợp này là gì?",
            "opts": [
                "Tác dụng kháng nấm trực tiếp qua ức chế tổng hợp ergosterol",
                "Tiêu sừng (keratolytic) — làm mềm lớp sừng dày → tăng thấm thuốc chống nấm vào nang tuyến bã",
                "Chống viêm để giảm ngứa do phản ứng dị ứng với nấm"
            ],
            "ans": 1,
            "exp": "Salicylic acid: tiêu sừng (làm bong stratum corneum dày do nấm gây ra) → tăng tiếp xúc và thấm thuốc chống nấm. Không có tác dụng kháng nấm trực tiếp ở nồng độ thông thường (<5%). Đặc biệt hữu ích cho tinea pedis dạng hyperkeratotic và tinea versicolor có vảy dày.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Selenium sulfide điều trị tinea versicolor (Malassezia) theo cơ chế nào?",
            "opts": [
                "Ức chế CYP51 của Malassezia → thiếu ergosterol (giống azole)",
                "Tiêu sừng và tác dụng kháng nấm trực tiếp ức chế tăng trưởng Malassezia",
                "Ức chế squalene epoxidase của Malassezia (giống Terbinafine)"
            ],
            "ans": 1,
            "exp": "Selenium sulfide: (1) Tác dụng tiêu sừng giúp bong lớp sừng mang Malassezia; (2) Tác dụng kháng nấm trực tiếp (cơ chế chưa hoàn toàn rõ, có thể liên quan ức chế enzyme ty thể). Không ức chế CYP51 hay squalene epoxidase. Hiệu quả tốt cho lang ben và gàu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 6 tuổi bị tinea capitis có mảng mủ đau (kerion). DS xử trí thế nào?",
            "opts": [
                "Bôi Terbinafine cream 1% lên da đầu 2 lần/ngày trong 4 tuần",
                "Tư vấn Ketoconazole shampoo gội 3 lần/tuần thay thế thuốc uống",
                "Chuyển BS ngay — kerion là biến chứng nặng cần kháng sinh uống và antifungal uống, nguy cơ sẹo hói vĩnh viễn"
            ],
            "ans": 2,
            "exp": "Kerion: phản ứng viêm mủ nặng với dermatophyte ở da đầu → phù nề, đau, có thể kèm hạch → sẹo xơ hói vĩnh viễn nếu không điều trị kịp. Cần: antifungal uống (Griseofulvin/Terbinafine), kháng sinh uống nếu bội nhiễm, đôi khi corticosteroid ngắn hạn. Thuốc bôi hoàn toàn không đủ.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Terbinafine cream có tác dụng fungicidal (diệt nấm) nên thường cho liệu trình điều trị ngắn hơn so với Clotrimazole cream có tác dụng fungistatic (kìm nấm).",
            "ans": true,
            "exp": "Terbinafine (allylamine) → squalene tích lũy độc hại + thiếu ergosterol → diệt nấm (fungicidal). Azole → chỉ thiếu ergosterol → ngăn sinh trưởng (fungistatic), cần hệ miễn dịch BN tiêu diệt nấm còn lại → thời gian dài hơn. VD: tinea pedis: Terbinafine 1 tuần vs Clotrimazole 4 tuần.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN bôi Clotrimazole cream cho nấm kẽ ngón, song song tự bôi thêm hydrocortisone 1% để giảm ngứa nhanh hơn — đây là cách xử trí an toàn và hợp lý.",
            "ans": false,
            "exp": "Corticosteroid (kể cả hydrocortisone 1%) ức chế miễn dịch da cục bộ → tạo điều kiện nấm phát triển mạnh hơn → nguy cơ tinea incognito: triệu chứng bị che giấu nhưng nấm lan rộng âm thầm. Không tự phối hợp corticosteroid với antifungal, trừ khi có chỉ định BS với chế phẩm cố định đã được kiểm soát.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sau điều trị tinea versicolor thành công (KOH âm tính), mảng da nhạt màu (hypopigmented patches) có thể tồn tại vài tháng trước khi sắc tố phục hồi hoàn toàn.",
            "ans": true,
            "exp": "Malassezia tiết acid azelaic → ức chế tyrosinase → giảm tổng hợp melanin → mảng nhạt. Sau khi diệt nấm thành công, melanocyte cần vài tháng phục hồi sản xuất melanin. Người da sẫm màu lâu hơn. Đây không phải thất bại điều trị mà là giai đoạn phục hồi sắc tố bình thường.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NCT 78t bị nấm kẽ ngón chân (tinea pedis) không cần điều trị vì đây là bệnh lành tính tự giới hạn theo tuổi.",
            "ans": false,
            "exp": "Tinea pedis ở NCT đặc biệt nguy hiểm: kẽ ngón ẩm nứt nẻ → cửa ngõ cho Streptococcus/S. aureus → viêm mô tế bào (cellulitis) chi dưới, nguy hiểm tính mạng. Nghiên cứu cho thấy tinea pedis là yếu tố nguy cơ độc lập gây cellulitis tái phát. Phải điều trị tích cực.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Clotrimazole cream không nên bôi vào mắt, miệng và niêm mạc âm đạo bên trong vì tá dược của dạng cream gây kích ứng niêm mạc nhạy cảm.",
            "ans": true,
            "exp": "Clotrimazole cream da (dạng dùng ngoài) chứa tá dược (propylene glycol, cetostearyl alcohol) gây kích ứng niêm mạc. Không nhầm với Clotrimazole viên đặt âm đạo hoặc kem âm đạo (khác dạng bào chế, tá dược khác). Bôi cream da lên mắt → kích ứng nghiêm trọng.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Trẻ <12 tháng bị nấm da kẽ ngón tay có thể bôi Tolnaftate 1% cream an toàn và hiệu quả.",
            "ans": false,
            "exp": "Tolnaftate: (1) Không có dữ liệu an toàn đủ cho trẻ <2 tuổi. (2) Quan trọng hơn: nấm da ở trẻ nhũ nhi thường do Candida (không phải dermatophyte) → Tolnaftate không tác dụng với Candida. Cần chuyển BS chẩn đoán chính xác và chọn Miconazole (có tác dụng Candida) hoặc điều trị phù hợp.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN tự tăng Clotrimazole cream từ 2 lần/ngày lên 4 lần/ngày với hy vọng trị nấm nhanh hơn — điều này không mang lại hiệu quả thêm.",
            "ans": true,
            "exp": "Clotrimazole (fungistatic) hoạt động theo nồng độ: 2 lần/ngày đủ duy trì nồng độ ức chế tối thiểu (MIC) trong lớp sừng. Lớp sừng đã bão hòa thuốc sau 2 lần — tăng tần suất không tăng nồng độ tại đích. Chỉ lãng phí, không tăng hiệu quả và có thể tăng kích ứng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Selenium sulfide 2.5% bôi toàn thân hoàn toàn an toàn cho thai phụ trong cả 3 tam cá nguyệt.",
            "ans": false,
            "exp": "Selenium sulfide: hấp thu qua da có thể xảy ra, đặc biệt khi bôi diện rộng hoặc da tổn thương → selenium tích lũy → độc tiềm tàng. FDA phân loại Cat C. Trong thai kỳ, ưu tiên điều trị nhẹ nhàng hơn: Clotrimazole topical diện tích nhỏ. Cần hỏi ý kiến BS.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nấm da kẽ ngón chân tái phát nhiều lần sau điều trị đúng cần kiểm tra và thay thế vật dụng cá nhân (tất, giày) là nguồn tái nhiễm bào tử nấm.",
            "ans": true,
            "exp": "Giày/tất ẩm/thảm là ổ chứa bào tử dermatophyte tồn tại nhiều tháng → tái nhiễm sau điều trị. Biện pháp: giặt tất >60°C, phơi nắng giày, xịt chất kháng nấm (tolnaftate spray) vào giày, thay thảm. Điều trị thuốc mà không kiểm soát nguồn tái nhiễm → vòng lặp tái phát vô tận.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Butenafine HCl 1% cream có thể thay thế hoàn toàn Terbinafine 1% cream cho bất kỳ loại nấm da nào mà không cần phân biệt tác nhân.",
            "ans": false,
            "exp": "Butenafine (benzylamine) cơ chế tương tự Terbinafine (ức chế squalene epoxidase), hiệu quả tốt với dermatophyte. Tuy nhiên: hoạt tính trên Candida kém hơn Clotrimazole/Miconazole; với Malassezia (tinea versicolor) ít được nghiên cứu hơn Ketoconazole. Cần biết tác nhân nấm để chọn thuốc tối ưu.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NCT đi chân trần thường xuyên ở khu vực công cộng ẩm ướt (bể bơi, phòng thay đồ) có nguy cơ cao hơn bị tinea pedis so với người đi dép.",
            "ans": true,
            "exp": "Dermatophyte (T. rubrum, T. mentagrophytes) tồn tại trên sàn ẩm → lây qua tiếp xúc trực tiếp. NCT da khô hơn, giảm tiết bã nhờn bảo vệ → dễ nhiễm hơn. Đi dép ở khu công cộng ẩm là biện pháp dự phòng hiệu quả nhất.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tinea versicolor điều trị thành công một lần là khỏi hoàn toàn vĩnh viễn, không cần lo ngại tái phát.",
            "ans": false,
            "exp": "Tinea versicolor tái phát rất phổ biến (>60–80% trong vài năm) vì Malassezia là vi nấm ký sinh thường trú của da người — bùng phát khi điều kiện thuận lợi (nóng ẩm, tiết bã nhiều, ức chế miễn dịch, HbA1c cao). Một số BN cần điều trị dự phòng hàng tháng vào mùa nóng.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Tinea capitis ở trẻ 5 tuổi có dấu hiệu nào cảnh báo kerion (biến chứng nặng cần chuyển BS ngay)?",
            "opts": [
                "Vảy trắng nhiều trên da đầu, tóc gãy sát gốc, không đau và không sốt",
                "Mảng da mềm, đau khi chạm, đầy mủ, rụng tóc từng mảng, kèm hạch cổ to",
                "Ngứa da đầu nhiều, gàu nhiều, tóc ít rụng"
            ],
            "ans": 1,
            "exp": "Kerion: phản ứng viêm quá mức với dermatophyte → tụ mủ, phù nề mềm, đau khi ấn, rụng tóc, hạch cổ → sẹo hói vĩnh viễn nếu chậm điều trị. Cần BS để phối hợp antifungal uống + đánh giá kháng sinh/steroid. Tinea capitis thông thường (không kerion): DS cũng cần chuyển BS nhưng ít khẩn cấp hơn.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN dùng đủ liệu trình Terbinafine cream (2 tuần, 2 lần/ngày) cho tinea corporis nhưng tổn thương không cải thiện. DS nên xử trí thế nào?",
            "opts": [
                "Tiếp tục thêm 2 tuần — cần thời gian dài hơn vì vi nấm đề kháng",
                "Chuyển BS để xem xét chẩn đoán sai hoặc cần thuốc uống hệ thống",
                "Đổi sang Clotrimazole và điều trị thêm 4 tuần là đủ"
            ],
            "ans": 1,
            "exp": "Không đáp ứng sau đủ liệu trình → hai khả năng: (1) Chẩn đoán sai — eczema đồng tiền, psoriasis, pityriasis rosea, granuloma annulare có thể nhầm với tinea; (2) Cần thuốc hệ thống. BS cần xét nghiệm KOH soi trực tiếp và/hoặc nuôi cấy. DS không tiếp tục tự điều trị thêm.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Đặc điểm nào giúp phân biệt tinea corporis (nấm thân) với eczema dạng đồng tiền (nummular eczema)?",
            "opts": [
                "Tinea corporis: tổn thương hình nhẫn, bờ nâng cao có vảy hoạt động, trung tâm đang lành hơn viền",
                "Tinea corporis: ngứa dữ dội hơn và chảy dịch nhiều hơn eczema đồng tiền",
                "Tinea corporis: ảnh hưởng cả hai bên cơ thể đối xứng như eczema đồng tiền"
            ],
            "ans": 0,
            "exp": "Tinea corporis đặc trưng: hình nhẫn (annular/ringworm), bờ nâng cao có vảy đỏ, viền là vùng nấm đang hoạt động và lan, trung tâm đang lành. Eczema đồng tiền: tròn đồng đều, ứa dịch/đóng vảy đồng đều, không có trung tâm lành. Xét nghiệm KOH dương với nấm xác nhận tinea.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên không dùng thuốc nào ĐÚNG và quan trọng nhất cho BN tinea pedis (nấm kẽ ngón chân)?",
            "opts": [
                "Mang tất bông dày để giữ ấm chân và che phủ vùng nấm",
                "Đi chân trần tại nhà để da thông thoáng và khỏi nhanh hơn",
                "Lau khô kỹ kẽ ngón sau khi tắm, dùng dép ở khu vực công cộng ẩm ướt"
            ],
            "ans": 2,
            "exp": "Tinea pedis phát triển mạnh trong môi trường ẩm. Tất bông ẩm → môi trường thuận lợi; đi chân trần nơi công cộng → lây cho người khác. Đúng: lau khô kỹ kẽ ngón (khăn riêng), dùng bột chống ẩm (talc), đi dép ở bể bơi/phòng thay đồ, tất cotton thay hàng ngày.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Bà mẹ yêu cầu mua kháng sinh cho con 7 tuổi bị tinea capitis vì nấm thì phải dùng kháng sinh mới khỏi. DS giải thích thế nào?",
            "opts": [
                "Đồng ý và tư vấn mua Amoxicillin kết hợp thuốc bôi để trị cả vi khuẩn lẫn nấm",
                "Giải thích: nấm là vi nấm (fungi — eukaryote), khác vi khuẩn (bacteria) — kháng sinh (antibacterial) không tác dụng lên nấm, cần thuốc kháng nấm (antifungal)",
                "Đồng ý một phần: kháng sinh cần thiết khi có bội nhiễm, luôn dùng kèm"
            ],
            "ans": 1,
            "exp": "Nấm da (dermatophyte) là vi nấm eukaryote — kháng sinh (antibacterial) không tác dụng. Đây là misconception phổ biến. Tinea capitis nặng (kerion) đôi khi cần kháng sinh khi có bội nhiễm vi khuẩn, nhưng đây là BS quyết định, không phải lý do thường quy. DS cần giáo dục BN trước khi từ chối.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 3 tuổi bị tinea corporis nhỏ (~2 cm) ở cẳng tay, không phải tinea capitis. DS có thể tư vấn OTC không?",
            "opts": [
                "Không — trẻ <5 tuổi tuyệt đối không dùng thuốc chống nấm tại chỗ",
                "Có thể tư vấn Clotrimazole cream nhưng dặn cha mẹ theo dõi và chuyển BS nếu không đáp ứng sau 2–3 tuần",
                "Chuyển BS ngay vì mọi nấm da ở trẻ nhỏ đều cần xử lý chuyên khoa"
            ],
            "ans": 1,
            "exp": "Tinea corporis diện tích nhỏ ở trẻ ≥2 tuổi → Clotrimazole cream phù hợp: hấp thu toàn thân <1%, an toàn. Cần theo dõi: nếu lan rộng, không đáp ứng sau 2–4 tuần, hoặc nghi tinea capitis → chuyển BS. Cha mẹ cần hướng dẫn cách bôi đúng và dấu hiệu cần gặp BS.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khuyến cáo nào giúp phòng ngừa tái phát tinea cruris (nấm bẹn) hiệu quả nhất?",
            "opts": [
                "Mặc quần bó sát để da vùng bẹn không tiếp xúc với nguồn bệnh môi trường",
                "Mặc quần cotton rộng rãi, giữ vùng bẹn khô, thay quần lót hàng ngày",
                "Rắc bột Talc nhiều vào vùng bẹn mỗi sáng để hút hết ẩm"
            ],
            "ans": 1,
            "exp": "Tinea cruris phát triển trong môi trường ẩm/nóng/cọ xát. Quần bó tăng cọ xát và ẩm. Talc: hữu ích vừa phải nhưng dùng quá nhiều → bít lỗ chân lông và có thể gây kích ứng. Tốt nhất: cotton rộng (thấm ẩm tốt), thay quần lót hàng ngày (đặc biệt sau tập thể dục), lau khô vùng bẹn sau tắm.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN hỏi DS sau khi điều trị khỏi lang ben, bao lâu da sẽ về màu bình thường?",
            "opts": [
                "2–4 tuần sau khi hết nấm — da phục hồi sắc tố rất nhanh",
                "3–6 tháng, có thể lâu hơn tùy mức độ tổn thương và màu da tự nhiên",
                "Ngay khi hết ngứa và hết vảy là da đã phục hồi sắc tố"
            ],
            "ans": 1,
            "exp": "Sau điều trị thành công (KOH âm tính), melanocyte cần 3–6 tháng phục hồi tổng hợp melanin bình thường. Người da sẫm màu và tổn thương diện rộng lâu hơn. Ánh sáng mặt trời có kiểm soát (không bỏng nắng) giúp kích thích melanocyte. DS cần tư vấn để BN không bỏ điều trị vì tưởng thuốc không hiệu quả.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN bị nấm da đang điều trị OTC, nay xuất hiện sốt cao 39.5°C, đỏ sưng lan nhanh ra vùng xung quanh, đau dữ dội. DS xử trí thế nào?",
            "opts": [
                "Thêm kháng sinh bôi tại chỗ và theo dõi thêm 24 giờ",
                "Chuyển cấp cứu ngay — nghi cellulitis lan tỏa từ vị trí nấm bội nhiễm vi khuẩn",
                "Tăng liều antifungal và dùng Ibuprofen hạ sốt, theo dõi tại nhà"
            ],
            "ans": 1,
            "exp": "Sốt cao + đỏ lan nhanh + đau dữ dội từ vùng nấm da → nghi cellulitis do bội nhiễm Streptococcus/Staphylococcus xâm nhập qua da tổn thương do nấm. Đây là nhiễm khuẩn mô mềm cần kháng sinh toàn thân đường uống/tiêm — nguy hiểm tính mạng nếu chậm trễ. Chuyển cấp cứu ngay.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đến với tổn thương tròn trên da nghi tinea corporis, không ngứa, không đau, phát triển chậm >3 tháng, không đáp ứng với Terbinafine cream. DS nên làm gì?",
            "opts": [
                "Tư vấn tăng liều Terbinafine và theo dõi thêm 4 tuần nữa",
                "Chuyển BS da liễu — tổn thương tròn không đáp ứng antifungal cần loại trừ granuloma annulare, psoriasis hoặc bệnh tự miễn",
                "Đổi sang Ketoconazole shampoo bôi trực tiếp lên tổn thương"
            ],
            "ans": 1,
            "exp": "Tổn thương tròn không ngứa, không đau, >3 tháng không đáp ứng antifungal: không điển hình cho tinea. Loại trừ: granuloma annulare (không ngứa, không đáp ứng antifungal), psoriasis, pityriasis rosea, lupus đĩa. Cần KOH soi trực tiếp và/hoặc sinh thiết da tại BS da liễu.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Tinea versicolor và vitiligo đều gây mảng da nhạt màu. Dấu hiệu nào giúp phân biệt trên lâm sàng?",
            "opts": [
                "Vitiligo: có vảy mịn khi cạo nhẹ; Tinea versicolor: da hoàn toàn mịn không vảy",
                "Tinea versicolor: có vảy mịn khi cạo, phân bố vùng tiết bã, dưới đèn Wood phát quang vàng-cam; Vitiligo: da mịn, mất hoàn toàn sắc tố, dưới đèn Wood phát sáng xanh",
                "Không phân biệt được bằng khám lâm sàng, nhất thiết phải sinh thiết da"
            ],
            "ans": 1,
            "exp": "Tinea versicolor: vảy phấn mịn khi cạo nhẹ (dấu hiệu lát), vùng ngực/lưng/cổ, dưới đèn Wood phát quang vàng-cam (Malassezia). Vitiligo: mất sắc tố hoàn toàn, da mịn tuyệt đối, dưới đèn Wood phát sáng xanh ngọc sáng. KOH dương tính với hình ảnh spaghetti and meatballs xác nhận Malassezia.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 45t ĐTĐ type 2 dùng Insulin, bị nấm kẽ ngón chân tái phát. Vì sao DS cần chuyển BS thay vì chỉ tư vấn OTC?",
            "opts": [
                "Vì ĐTĐ làm thuốc chống nấm OTC mất tác dụng hoàn toàn",
                "Vì vết nứt kẽ ngón do nấm + ĐTĐ → cửa vào cho vi khuẩn → bàn chân ĐTĐ → hoại tử, nguy cơ cắt cụt chi cao",
                "Vì Clotrimazole tương tác với Insulin làm mất ổn định đường huyết"
            ],
            "ans": 1,
            "exp": "BN ĐTĐ + nấm kẽ ngón → vết nứt ẩm ướt là cửa vào cho vi khuẩn (S. aureus, P. aeruginosa) → bàn chân ĐTĐ → viêm xương, hoại tử → nguy cơ cắt cụt chi. IDF và ADA đều nhấn mạnh: bất kỳ vết thương nào ở bàn chân ĐTĐ cần BS đánh giá. DS cần phối hợp kiểm soát cả bệnh nền.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Dùng khăn tắm riêng và không chia sẻ với người khác trong gia đình là biện pháp hiệu quả phòng lây tinea corporis.",
            "ans": true,
            "exp": "Dermatophyte lây qua tiếp xúc trực tiếp và gián tiếp (khăn, quần áo, thảm). Khăn tắm ẩm là môi trường bảo quản bào tử lý tưởng. Giặt khăn >60°C, phơi nắng hoặc sấy khô hoàn toàn, không dùng chung — biện pháp dự phòng lây chéo hiệu quả trong gia đình.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Bể bơi có chlorine an toàn hoàn toàn với nấm da vì chlorine trong nước tiêu diệt hết bào tử dermatophyte.",
            "ans": false,
            "exp": "Chlorine trong nước bể bơi không đủ nồng độ và thời gian tiếp xúc để tiêu diệt dermatophyte trên sàn, bậc thang và phòng tắm ẩm ướt xung quanh. Lây tinea pedis chủ yếu qua sàn ẩm quanh bể bơi, không phải trong nước. Đi dép trong toàn khu vực là biện pháp cần thiết.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Bôi thuốc chống nấm rộng hơn bờ tổn thương 1–2 cm giúp đảm bảo bao phủ vùng nấm đang hoạt động và lan rộng ở viền.",
            "ans": true,
            "exp": "Viền (bờ) tổn thương tinea là vùng nấm đang hoạt động và lan rộng nhất. Bôi đúng lên và rộng hơn bờ 1–2 cm đảm bảo diệt nấm tại vùng phát triển. Chỉ bôi vào trung tâm tổn thương (thường đang lành) → bỏ sót vùng nấm hoạt động → tái phát nhanh.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tất cả các trường hợp nấm da đều cần kháng sinh uống đi kèm để dự phòng bội nhiễm vi khuẩn từ vùng da tổn thương.",
            "ans": false,
            "exp": "Nấm da đơn thuần không có dấu hiệu bội nhiễm vi khuẩn → không cần KS uống. Dùng KS không có chỉ định → tiêu diệt vi khuẩn có lợi trên da (microbiome), tăng nguy cơ đề kháng KS, không ngăn được bội nhiễm tương lai. Chỉ dùng KS khi có mủ, sốt, cellulitis rõ ràng.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Kiểm soát đường huyết tốt (HbA1c <7%) ở BN ĐTĐ là biện pháp quan trọng giúp giảm tần suất tái phát nấm da.",
            "ans": true,
            "exp": "Glucose cao trong máu → tăng glucose da và dịch tiết → môi trường dinh dưỡng thuận lợi cho nấm. HbA1c cao tương quan với tần suất nhiễm nấm da cao hơn. Kiểm soát HbA1c <7% là biện pháp nền tảng bên cạnh thuốc kháng nấm — điều trị căn nguyên.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ bị tinea capitis đang dùng thuốc uống hệ thống có thể đi học bình thường ngay từ ngày đầu điều trị vì không còn lây nhiễm khi đã uống thuốc.",
            "ans": false,
            "exp": "Tinea capitis lây qua tiếp xúc trực tiếp và gián tiếp (mũ, lược, gối). BN giảm lây sau khi điều trị có hiệu quả (thường 1–2 tuần sau khi bắt đầu thuốc uống). Khuyến cáo: nghỉ học 1–2 tuần đầu điều trị. Ketoconazole shampoo bổ sung giúp giảm bào tử trên da đầu nhanh hơn.",
            "icon": "👶"
        }
    ],
    "acne": [
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⛔",
            "q": "BN nữ 24 tuổi đang mang thai 8 tuần, mụn viêm nhẹ–vừa. DS nên tư vấn tránh hoạt chất nào sau đây?",
            "opts": [
                "Benzoyl peroxide 2.5% dạng gel",
                "Adapalene 0.1% dạng gel",
                "Azelaic acid 20% dạng kem"
            ],
            "ans": 1,
            "exp": "Adapalene là retinoid tổng hợp, xếp loại Category X (FDA) vì nguy cơ gây dị tật thai nhi. Benzoyl peroxide và azelaic acid thuộc Category B — có thể cân nhắc trong thai kỳ khi lợi ích vượt trội nguy cơ. Mọi trường hợp cần tham vấn BS sản khoa trước khi dùng."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Adapalene thuộc nhóm dược lý nào và tác động chính trên tế bào da là gì?",
            "opts": [
                "Retinoid thế hệ 3, gắn chọn lọc RAR-β và RAR-γ",
                "Retinoid thế hệ 1, gắn tất cả thụ thể RAR",
                "Dẫn chất vitamin A thế hệ 2, ức chế tiết bã nhờn"
            ],
            "ans": 0,
            "exp": "Adapalene là retinoid tổng hợp thế hệ 3, gắn chọn lọc vào RAR-β và RAR-γ trên nhân tế bào — chuẩn hoá quá trình sừng hoá nang lông và kháng viêm. Không gắn RAR-α nên ít tác dụng phụ toàn thân hơn tretinoin (thế hệ 1) và ổn định quang hoá học hơn."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🏆",
            "q": "BN nữ 19 tuổi có mụn viêm nhẹ–vừa (comedone + papule/pustule hỗn hợp). Phác đồ OTC nào được ưu tiên nhất theo hướng dẫn hiện hành?",
            "opts": [
                "Benzoyl peroxide + Adapalene",
                "Salicylic acid đơn trị liệu",
                "Niacinamide + kẽm"
            ],
            "ans": 0,
            "exp": "Theo AAD và EDF, phối hợp BPO + Adapalene là phác đồ first-line cho mụn viêm nhẹ–vừa hỗn hợp. BPO diệt khuẩn Cutibacterium acnes trong khi Adapalene điều chỉnh sừng hoá và kháng viêm — hai cơ chế bổ sung nhau. Salicylic acid phù hợp hơn cho mụn comedonal thuần."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Benzoyl peroxide tiêu diệt Cutibacterium acnes theo cơ chế nào, và điều này có ý nghĩa lâm sàng quan trọng gì?",
            "opts": [
                "Bactericidal qua phóng thích gốc oxy tự do — không gây đề kháng kháng sinh",
                "Bacteriostatic, ức chế tổng hợp protein qua ribosome 50S",
                "Ức chế DNA gyrase, có nguy cơ đề kháng chéo với fluoroquinolone"
            ],
            "ans": 0,
            "exp": "BPO tác động diệt khuẩn (bactericidal) bằng cách phóng thích gốc oxy tự do (ROS), oxy hóa thành tế bào vi khuẩn theo cơ chế vật lý–hoá học. Cutibacterium acnes không thể phát triển đề kháng với BPO — ưu điểm lớn so với kháng sinh. Kết hợp BPO với kháng sinh tại chỗ còn giúp ngăn ngừa chọn lọc chủng đề kháng."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "📋",
            "q": "Hoạt chất nào sau đây dùng trong điều trị mụn nhưng BẮT BUỘC phải có đơn thuốc tại Việt Nam?",
            "opts": [
                "Benzoyl peroxide 5%",
                "Clindamycin phosphate 1%",
                "Salicylic acid 2%"
            ],
            "ans": 1,
            "exp": "Clindamycin phosphate tại chỗ là kháng sinh nhóm lincosamide — thuộc danh mục thuốc kê đơn (ETC) theo quy định Cục Quản lý Dược VN. Bán không có đơn vi phạm quy chế kê đơn và thúc đẩy đề kháng kháng sinh cộng đồng. BPO và salicylic acid ở nồng độ thông thường là OTC."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "BPO 10% có hiệu quả trị mụn vượt trội hơn BPO 2.5% không?",
            "opts": [
                "Không — hiệu quả tương đương nhưng 10% gây kích ứng nhiều hơn",
                "Có — nồng độ cao cho tỷ lệ đáp ứng cao hơn rõ rệt",
                "Tuỳ loại mụn — 10% tốt hơn cho viêm, 2.5% tốt hơn cho comedone"
            ],
            "ans": 0,
            "exp": "Tổng quan hệ thống cho thấy BPO 2.5–5% có hiệu quả tương đương BPO 10% về giảm tổng thương tổn, nhưng nồng độ thấp ít gây đỏ, khô, bong tróc hơn đáng kể. AAD khuyến cáo bắt đầu từ nồng độ thấp nhất có hiệu quả để cải thiện tuân thủ điều trị."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⏱️",
            "q": "BN hỏi: 'Bao lâu thì thấy thuốc trị mụn có tác dụng?' DS nên tư vấn kỳ vọng thực tế như thế nào?",
            "opts": [
                "6–12 tuần mới đánh giá được hiệu quả đầy đủ",
                "1–2 tuần sẽ thấy cải thiện rõ rệt",
                "Kết quả tốt nhất sau 3 ngày dùng đều đặn"
            ],
            "ans": 0,
            "exp": "Chu kỳ tái tạo da mất 28–40 ngày, trong khi microcomedone hình thành 2–3 tháng trước khi nhìn thấy được. Cần ít nhất 6–12 tuần để đánh giá hiệu quả thực sự của phác đồ OTC. Tuân thủ điều trị trong giai đoạn này là yếu tố quyết định — DS cần giải thích rõ để BN không bỏ thuốc sớm."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⏰",
            "q": "Tại sao Adapalene nên bôi vào buổi tối thay vì buổi sáng?",
            "opts": [
                "Adapalene làm tăng nhạy cảm ánh sáng da — bôi tối tránh phơi nắng sau bôi",
                "Adapalene chỉ hấp thu qua da khi không có mồ hôi ban đêm",
                "Adapalene kích hoạt trong môi trường thiếu oxy lúc ngủ"
            ],
            "ans": 0,
            "exp": "Adapalene gây tăng tính nhạy cảm ánh sáng (photosensitization). Bôi buổi tối để tránh phơi nắng ngay sau bôi và giảm nguy cơ bỏng nắng nặng hơn bình thường. Buổi sáng cần dùng kem chống nắng SPF ≥30 trong suốt liệu trình, kể cả ngày흐리."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "Cảnh báo nào DS PHẢI nói với BN khi phát thuốc chứa benzoyl peroxide?",
            "opts": [
                "Sản phẩm có thể làm mất màu (tẩy trắng) vĩnh viễn quần áo, ga gối và tóc",
                "Tuyệt đối không dùng cùng với bất kỳ sản phẩm dưỡng ẩm nào",
                "Ngừng ngay nếu cảm thấy da căng nhẹ vì đây là dấu hiệu dị ứng"
            ],
            "ans": 0,
            "exp": "BPO là tác nhân oxy hóa mạnh — làm mất màu vĩnh viễn vải cotton có màu, ga gối, khăn mặt. Đây là nguyên nhân phổ biến khiến BN bỏ điều trị. DS nên hướng dẫn dùng ga/khăn trắng và để BPO khô hoàn toàn trước khi tiếp xúc vải. Cảm giác căng nhẹ là phản ứng bình thường, không phải lý do ngừng thuốc."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "BN đang dùng Adapalene 0.1%, muốn thêm Tretinoin 0.025% để tăng hiệu quả. DS nên tư vấn gì?",
            "opts": [
                "Không kết hợp — cùng nhóm retinoid gây kích ứng cộng hưởng mà không tăng thêm hiệu quả",
                "Có thể kết hợp — dùng sáng Adapalene, tối Tretinoin xen kẽ",
                "Được, nhưng chỉ dùng mỗi loại 2 lần/tuần để giảm kích ứng"
            ],
            "ans": 0,
            "exp": "Adapalene và tretinoin đều là retinoid — kết hợp gây kích ứng cộng hưởng (peeling, đỏ, rát) mà không tăng thêm hiệu quả do cùng cơ chế. Ngoài ra, BPO + tretinoin dùng đồng thời phân hủy lẫn nhau do phản ứng oxy hóa. Phác đồ đúng: BPO buổi sáng + Adapalene buổi tối."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "👶",
            "q": "Adapalene 0.1% gel OTC được phê duyệt sử dụng cho lứa tuổi nào?",
            "opts": [
                "Từ 12 tuổi trở lên",
                "Từ 6 tuổi trở lên với liều giảm",
                "Mọi lứa tuổi theo hướng dẫn của BS"
            ],
            "ans": 0,
            "exp": "FDA phê duyệt Adapalene 0.1% OTC từ 12 tuổi trở lên. Trẻ dưới 12 tuổi cần đánh giá bởi BS da liễu nhi vì dữ liệu an toàn chưa đầy đủ. Mụn ở trẻ nhỏ hơn (acne infantum, milia) có nguyên nhân và xử trí khác acne vulgaris ở tuổi dậy thì."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "👴",
            "q": "BN nữ 52 tuổi, mãn kinh 2 năm, xuất hiện mụn viêm ở cằm và má. Hướng xử trí nào ưu tiên nhất?",
            "opts": [
                "Chuyển BS — hormonal acne ở tuổi mãn kinh cần đánh giá nội tiết trước khi dùng thuốc",
                "Bắt đầu BPO 2.5% + Adapalene OTC ngay, đánh giá sau 8 tuần",
                "Tư vấn salicylic acid 2% rửa mặt kết hợp niacinamide"
            ],
            "ans": 0,
            "exp": "Mụn viêm xuất hiện ở phụ nữ trung niên sau mãn kinh thường liên quan đến thay đổi nội tiết. Cần loại trừ hội chứng buồng trứng đa nang muộn hoặc tăng androgen trước khi điều trị OTC. BS nội tiết hoặc da liễu sẽ đánh giá toàn diện hơn."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Salicylic acid 2% trong điều trị mụn tác động chủ yếu qua cơ chế nào?",
            "opts": [
                "Keratolytic — phá liên kết tế bào chết, thông thoáng lỗ chân lông",
                "Bactericidal — tiêu diệt Cutibacterium acnes trực tiếp",
                "Retinoid-like — chuẩn hoá sừng hoá nang lông"
            ],
            "ans": 0,
            "exp": "Salicylic acid là beta-hydroxy acid (BHA) lipophilic, thâm nhập được vào nang lông tích tụ bã nhờn. Cơ chế chính là keratolytic — phá vỡ desmosomes giữa tế bào chết, thông thoáng lỗ chân lông và ngăn hình thành comedone. Không có tác dụng bactericidal đáng kể như BPO."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "BN có comedone đóng và mở chiếm ưu thế, gần như không có mụn viêm. Hoạt chất nào ưu tiên nhất?",
            "opts": [
                "Salicylic acid 2% hoặc Adapalene 0.1%",
                "Benzoyl peroxide 5%",
                "Clindamycin phosphate 1%"
            ],
            "ans": 0,
            "exp": "Mụn comedonal thuần (không viêm) phù hợp nhất với các hoạt chất điều chỉnh sừng hoá: salicylic acid 2% (keratolytic) hoặc Adapalene 0.1% (retinoid). BPO phù hợp hơn cho thành phần viêm. Clindamycin chỉ có tác dụng kháng khuẩn, không cần thiết cho mụn không viêm."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "Với BN da dầu, mụn hỗn hợp vùng T, DS nên ưu tiên dạng bào chế nào của BPO?",
            "opts": [
                "Gel hoặc dung dịch rửa (wash)",
                "Kem dưỡng ẩm (cream)",
                "Thuốc mỡ (ointment)"
            ],
            "ans": 0,
            "exp": "Dạng gel và dung dịch rửa không tạo cảm giác bí, ít gây bít tắc lỗ chân lông hơn kem. Kem phù hợp hơn cho da hỗn hợp–khô. Thuốc mỡ (nền dầu/vaseline) hoàn toàn không phù hợp vì comedogenic. Dung dịch rửa BPO cũng thuận tiện cho vùng lưng/ngực."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "Niacinamide 4–5% có vai trò gì trong điều trị mụn OTC?",
            "opts": [
                "Kháng viêm và điều tiết bã nhờn, phù hợp phối hợp với BPO hoặc Adapalene",
                "Diệt khuẩn Cutibacterium acnes trực tiếp, thay thế được BPO",
                "Retinoid tổng hợp thế hệ mới với ít tác dụng phụ hơn Adapalene"
            ],
            "ans": 0,
            "exp": "Niacinamide (vitamin B3) kháng viêm nhẹ và điều tiết bã nhờn qua ức chế chuyển lipid từ tế bào tuyến bã. Không phải retinoid và không diệt khuẩn. Đặc biệt hữu ích để giảm tăng sắc tố sau viêm (PIH) — điểm mạnh với da châu Á. Vai trò là hỗ trợ, phối hợp tốt với BPO hoặc Adapalene."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🤰",
            "q": "Thai phụ 3 tháng đầu bị mụn vừa, hỏi DS về thuốc tại chỗ. Lựa chọn an toàn nhất là gì?",
            "opts": [
                "Azelaic acid 15–20%",
                "Adapalene 0.1%",
                "Benzoyl peroxide 10%"
            ],
            "ans": 0,
            "exp": "Azelaic acid xếp loại Category B (FDA), an toàn trong thai kỳ với tác dụng kháng khuẩn, kháng viêm và điều chỉnh sừng hoá nhẹ. BPO cũng Category B nhưng ưu tiên thứ hai; dùng nồng độ thấp (2.5–5%), tránh bôi diện rộng. Adapalene (retinoid) là Category X — chống chỉ định tuyệt đối."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "❤️",
            "q": "BN nam 35 tuổi, đái tháo đường type 2 kiểm soát tốt, bị mụn nang lớn (cyst) ở mặt. DS nên làm gì?",
            "opts": [
                "Chuyển BS da liễu — mụn nang không phải chỉ định OTC, đặc biệt ở BN đái tháo đường",
                "Tư vấn BPO 5% + Adapalene OTC trước rồi đánh giá sau 8 tuần",
                "Dùng Clindamycin topical ngay để phòng nhiễm trùng"
            ],
            "ans": 0,
            "exp": "Mụn nang (cystic acne) gây viêm sâu, nguy cơ để lại sẹo rỗ cao. Ở BN đái tháo đường, nguy cơ nhiễm trùng thứ phát và lành thương chậm càng cao hơn. Đây là chỉ định rõ ràng cần BS da liễu để cân nhắc isotretinoin hoặc kháng sinh toàn thân. Clindamycin topical đơn thuần không đủ."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "BN bắt đầu dùng Adapalene 0.1% được 3 tuần, mụn nổi nhiều hơn và lo lắng muốn dừng thuốc. DS giải thích thế nào?",
            "opts": [
                "Đây có thể là 'purging' — phản ứng bình thường trong 4–6 tuần đầu khi retinoid đẩy microcomedone ra bề mặt",
                "Đây là dị ứng — cần dừng ngay và thử hoạt chất khác",
                "Adapalene đang gây kháng thuốc — cần tăng nồng độ lên 0.3%"
            ],
            "ans": 0,
            "exp": "'Purging' là phản ứng dự kiến khi bắt đầu retinoid. Adapalene tăng tốc turnover tế bào, đẩy microcomedone đã hình thành từ trước lên bề mặt da nhanh hơn. Kéo dài 4–6 tuần rồi tự giải quyết. Khác với dị ứng thật (đỏ rát lan rộng, ngứa, mề đay ngay sau bôi). DS cần khuyến khích BN kiên trì."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🏆",
            "q": "BN nữ 22 tuổi, mụn nặng (cyst + nodule), đã thất bại với 2 đợt OTC 8 tuần. Bước tiếp theo hợp lý nhất?",
            "opts": [
                "Chuyển BS da liễu — cân nhắc isotretinoin đường uống",
                "Kết hợp BPO + Adapalene + niacinamide OTC thêm 8 tuần",
                "Mua Clindamycin topical để bổ sung vào phác đồ"
            ],
            "ans": 0,
            "exp": "Mụn nặng (severe acne) với cyst/nodule thất bại với OTC là chỉ định rõ ràng cần BS da liễu. Isotretinoin đường uống là tiêu chuẩn vàng với tỷ lệ thuyên giảm vĩnh viễn cao. Tiếp tục OTC làm chậm điều trị và tăng nguy cơ sẹo vĩnh viễn không hồi phục."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🧬",
            "q": "Benzoyl peroxide có tác dụng bactericidal và không gây đề kháng kháng sinh ở Cutibacterium acnes.",
            "ans": true,
            "exp": "BPO tác động diệt khuẩn qua gốc oxy tự do — cơ chế vật lý/hoá học mà vi khuẩn không thể phát triển đề kháng. Kết hợp BPO với kháng sinh tại chỗ còn giúp ngăn chọn lọc chủng đề kháng kháng sinh."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "Adapalene ổn định dưới ánh sáng UV nên có thể bôi thoải mái vào buổi sáng mà không cần dùng kem chống nắng.",
            "ans": false,
            "exp": "Dù Adapalene ổn định quang hoá hơn tretinoin, thuốc vẫn gây tăng nhạy cảm ánh sáng da (photosensitization). Bôi buổi tối là khuyến cáo chuẩn; nếu bôi sáng, bắt buộc dùng kem chống nắng SPF ≥30. Bỏ kem chống nắng có thể gây bỏng nắng nặng hơn bình thường."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "📋",
            "q": "Clindamycin phosphate 1% topical là thuốc OTC tại Việt Nam và DS có thể bán không cần đơn.",
            "ans": false,
            "exp": "Clindamycin là kháng sinh nhóm lincosamide — thuộc danh mục thuốc kê đơn (ETC) theo quy định Cục Quản lý Dược. Bán không đơn vi phạm quy chế kê đơn và góp phần vào vấn đề kháng kháng sinh cộng đồng."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🧬",
            "q": "Salicylic acid 2% (BHA) thâm nhập được vào nang lông chứa bã nhờn do tính lipophilic, phù hợp hơn AHA cho mụn comedonal.",
            "ans": true,
            "exp": "Tính lipophilic (tan trong dầu) cho phép BHA thâm nhập vào nang lông tích tụ bã nhờn — nơi AHA (tan trong nước) không đến được. Đây là lý do salicylic acid hiệu quả hơn glycolic acid cho mụn comedonal."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "💊",
            "q": "BPO 10% gel cho thấy hiệu quả trị mụn cao hơn rõ rệt so với BPO 2.5% trong các thử nghiệm lâm sàng đối chứng.",
            "ans": false,
            "exp": "Tổng quan hệ thống cho thấy BPO 2.5–5% có hiệu quả tương đương BPO 10% về giảm tổng thương tổn, nhưng nồng độ 10% gây kích ứng, khô da, bong tróc nhiều hơn đáng kể. AAD khuyến cáo bắt đầu từ nồng độ thấp nhất có hiệu quả."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "Sử dụng clindamycin topical đơn trị liệu kéo dài có nguy cơ thúc đẩy đề kháng kháng sinh ở Cutibacterium acnes.",
            "ans": true,
            "exp": "Kháng clindamycin ở C. acnes gia tăng đáng kể trong 20 năm qua do lạm dụng kháng sinh đơn trị liệu. Hướng dẫn hiện hành khuyến cáo KHÔNG dùng kháng sinh tại chỗ đơn độc — luôn phối hợp với BPO. Kháng clindamycin còn có thể gây kháng chéo với erythromycin."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "👶",
            "q": "Adapalene 0.1% gel OTC được FDA phê duyệt an toàn cho trẻ từ 6 tuổi trở lên.",
            "ans": false,
            "exp": "Adapalene 0.1% OTC được FDA phê duyệt từ 12 tuổi trở lên. Dữ liệu lâm sàng cho trẻ dưới 12 tuổi chưa đủ. Mụn ở trẻ nhỏ hơn có nguyên nhân và xử trí khác — cần đánh giá bởi BS chuyên khoa nhi."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "💊",
            "q": "Niacinamide có tác dụng ức chế chuyển melanosome và giúp giảm tăng sắc tố sau viêm (PIH), đặc biệt phù hợp với da châu Á.",
            "ans": true,
            "exp": "Niacinamide ức chế chuyển melanosome từ tế bào hắc tố sang tế bào sừng, giảm PIH — vấn đề thường gặp sau mụn ở da châu Á. Kết hợp với phác đồ OTC giúp cải thiện cả mụn và hậu quả tăng sắc tố, tăng tuân thủ điều trị."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🏆",
            "q": "Phác đồ phối hợp Adapalene + benzoyl peroxide được chứng minh hiệu quả hơn mỗi hoạt chất đơn độc trong các thử nghiệm lâm sàng có đối chứng về điều trị mụn viêm hỗn hợp.",
            "ans": true,
            "exp": "Nhiều RCT so sánh đầu trực tiếp cho thấy phối hợp BPO + Adapalene giảm tổng thương tổn và tổng thương tổn viêm tốt hơn có ý nghĩa thống kê so với BPO đơn trị liệu hoặc Adapalene đơn trị liệu. Cơ chế bổ sung (bactericidal + chuẩn hoá sừng hoá) giải thích hiệu quả cộng hưởng này."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "Hiện tượng 'purging' (bùng phát mụn ban đầu) khi bắt đầu retinoid là phản ứng sinh lý bình thường và thường tự giải quyết sau 4–6 tuần.",
            "ans": true,
            "exp": "Retinoid tăng tốc turnover tế bào, đẩy microcomedone ẩn ra bề mặt da nhanh hơn, tạo cảm giác 'mụn nhiều hơn'. Khác với dị ứng thật (urticaria, phù, ngứa toàn thân). DS giải thích trước để BN không bỏ điều trị trong giai đoạn này."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "BPO và tretinoin có thể dùng đồng thời vì hai thuốc bổ sung cơ chế cho nhau.",
            "ans": false,
            "exp": "BPO (chất oxy hóa mạnh) phân hủy và làm mất hoạt tính của tretinoin khi dùng đồng thời. Phác đồ đúng: BPO buổi sáng + tretinoin/retinoid buổi tối, hoặc rửa sạch BPO trước khi bôi retinoid. Adapalene ổn định hơn với BPO nhưng vẫn nên dùng tách biệt thời điểm."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🧬",
            "q": "Mụn đầu đen (comedone mở) là tổn thương viêm và màu đen là do vi khuẩn Cutibacterium acnes tạo ra.",
            "ans": false,
            "exp": "Comedone mở là tổn thương KHÔNG viêm. Màu đen là do oxy hóa melanin và lipid tiếp xúc không khí — không phải do bẩn hay vi khuẩn. C. acnes chỉ đóng vai trò khi nang lông chuyển thành papule/pustule (mụn viêm). SA và retinoid phù hợp, không cần BPO hay kháng sinh."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🚨",
            "q": "BN nữ 18 tuổi bị mụn nặng đột ngột bùng phát toàn mặt + ngực + lưng, kèm sốt và đau khớp. DS cần làm gì?",
            "opts": [
                "Gửi cấp cứu ngay — đây là dấu hiệu của acne fulminans, biến chứng nghiêm trọng cần điều trị toàn thân",
                "Tư vấn OTC mạnh hơn — dùng BPO 10% + Adapalene phối hợp ngay",
                "Hướng dẫn đặt lịch hẹn BS da liễu trong 1–2 tuần tới"
            ],
            "ans": 0,
            "exp": "Acne fulminans là biến chứng hiếm nhưng nghiêm trọng: mụn viêm hoại tử bùng phát đột ngột kèm triệu chứng hệ thống (sốt, đau xương khớp, tăng bạch cầu). Điều trị cần corticosteroid toàn thân + isotretinoin liều thấp. DS phát hiện sớm và chuyển cấp cứu là hành động đúng đắn nhất."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏥",
            "q": "Mụn nang/nốt (cyst/nodule) ≥5 mm trên khuôn mặt là tín hiệu gì với DS OTC?",
            "opts": [
                "Cần chuyển BS da liễu sớm — nguy cơ sẹo rỗ cao, OTC không đủ hiệu quả",
                "Có thể xử lý OTC với BPO 5% trong 12 tuần rồi đánh giá lại",
                "Chỉ chuyển BS nếu BN đã thất bại với ≥3 đợt OTC"
            ],
            "ans": 0,
            "exp": "Mụn nang gây viêm sâu trong chân bì, để lại sẹo rỗ (atrophic scar) khó điều trị. OTC không đủ để kiểm soát và ngăn sẹo. AAD và EDF khuyến cáo chuyển BS da liễu sớm khi có ≥1 nốt cyst để cân nhắc isotretinoin — không chờ thất bại OTC."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🚨",
            "q": "Thai phụ 20 tuần hỏi DS về cách trị mụn tại nhà. DS nên tư vấn như thế nào?",
            "opts": [
                "Giới thiệu azelaic acid 15–20% và quy trình vệ sinh da dịu nhẹ, khuyến nghị hỏi thêm BS sản khoa",
                "Tư vấn BPO 10% + salicylic acid 2% — OTC an toàn trong thai kỳ",
                "Không được dùng bất kỳ thuốc gì trong thai kỳ — phải đợi sau sinh"
            ],
            "ans": 0,
            "exp": "DS có thể tư vấn azelaic acid (Category B) và điều chỉnh quy trình skincare. Cần nhắc hỏi thêm BS sản khoa trước khi dùng. BPO 10% diện rộng không khuyến cáo. 'Không dùng gì' là quá cực đoan — azelaic acid và BPO 2.5% diện hạn chế có dữ liệu an toàn cơ bản."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🍯",
            "q": "Lời khuyên vệ sinh da nào đúng nhất khi điều trị mụn?",
            "opts": [
                "Rửa mặt 2 lần/ngày bằng sữa rửa mặt dịu nhẹ, tránh chà xát mạnh",
                "Rửa mặt 4–5 lần/ngày để giảm bã nhờn và vi khuẩn tích tụ",
                "Dùng cồn (alcohol) lau mặt để diệt khuẩn và se khít lỗ chân lông"
            ],
            "ans": 0,
            "exp": "Rửa mặt quá nhiều hoặc chà xát mạnh phá vỡ hàng rào lipid da, kích hoạt phản ứng bù dầu (sebostasis) và tăng viêm. Cồn gây khô da nghiêm trọng. Khuyến cáo chuẩn: 2 lần/ngày, sữa rửa mặt pH ~4.5–5.5, không chứa sodium lauryl sulfate nồng độ cao, dùng kem dưỡng ẩm non-comedogenic sau rửa."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "BN 28 tuổi có các nốt đỏ ở mũi và má, không có comedone, kèm giãn mao mạch rõ. DS nghĩ đến chẩn đoán nào?",
            "opts": [
                "Rosacea — không phải acne vulgaris, cần chuyển BS da liễu để chẩn đoán và điều trị đúng",
                "Acne vulgaris giai đoạn viêm — điều trị BPO + Adapalene",
                "Viêm nang lông (folliculitis) — dùng Povidone-Iodine tại chỗ"
            ],
            "ans": 0,
            "exp": "Rosacea và acne vulgaris có thể giống nhau nhưng phân biệt quan trọng: rosacea KHÔNG có comedone, thường kèm giãn mao mạch (telangiectasia), đỏ bừng mặt khi tiếp xúc nắng/rượu/đồ nóng. Điều trị rosacea khác hoàn toàn (metronidazole, azelaic acid, ivermectin) — dùng BPO/retinoid có thể làm nặng thêm."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "👶",
            "q": "Neonatal acne (mụn sơ sinh) ở trẻ 3 tuần tuổi — DS cần tư vấn gì cho bố mẹ?",
            "opts": [
                "Không cần điều trị — tự khỏi sau vài tuần do hormon mẹ truyền qua nhau thai, chỉ cần vệ sinh nhẹ nhàng",
                "Dùng BPO 2.5% thoa nhẹ lên vùng bị mụn",
                "Đưa trẻ đến BS ngay vì đây là dấu hiệu nhiễm trùng nghiêm trọng"
            ],
            "ans": 0,
            "exp": "Neonatal acne xảy ra ở ~20% trẻ sơ sinh do kích thích tuyến bã bởi androgen còn tồn dư từ mẹ. Tự giới hạn hoàn toàn sau 4–8 tuần không cần điều trị. Chỉ cần vệ sinh nhẹ nhàng bằng nước ấm. KHÔNG dùng BPO hay hoạt chất nào cho trẻ sơ sinh. Nếu không tự hết sau 3 tháng, cần BS nhi loại trừ rối loạn nội tiết."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔄",
            "q": "BN đã dùng BPO 5% + Adapalene 0.1% đúng hướng dẫn trong 8 tuần, mụn không cải thiện. DS nên làm gì?",
            "opts": [
                "Chuyển BS da liễu — OTC thất bại sau 8 tuần là chỉ định rõ ràng",
                "Tăng BPO lên 10% và bổ sung thêm salicylic acid",
                "Khuyến cáo thêm 8 tuần nữa vì một số BN cần 16 tuần"
            ],
            "ans": 0,
            "exp": "8 tuần là đủ thời gian đánh giá phác đồ OTC first-line. Không đáp ứng sau 8 tuần với BPO + Adapalene là ngưỡng chuyển BS da liễu theo hướng dẫn AAD và EDF. Tự ý leo thang lên BPO 10% không có cơ sở bằng chứng và có thể gây kích ứng không cần thiết."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏃",
            "q": "Bằng chứng về mối liên hệ giữa chế độ ăn và mụn trứng cá hiện nay cho thấy điều gì?",
            "opts": [
                "Thực phẩm chỉ số đường huyết cao và sữa có thể làm nặng mụn ở một số người nhạy cảm",
                "Chocolate, đồ chiên và thức ăn cay là nguyên nhân trực tiếp, đã được chứng minh gây mụn",
                "Chế độ ăn không ảnh hưởng đến mụn — nguyên nhân chỉ là di truyền và hormon"
            ],
            "ans": 0,
            "exp": "Bằng chứng mức B-C cho thấy thực phẩm GI cao (đường, tinh bột trắng) và sữa toàn phần có thể làm nặng mụn qua cơ chế tăng IGF-1 và insulin. Chocolate/đồ chiên/đồ cay chưa có bằng chứng RCT rõ ràng. DS không nên cấm đoán tuyệt đối mà tư vấn theo dõi phản ứng cá nhân."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏥",
            "q": "BN nữ 25 tuổi, mụn viêm vùng xương hàm–cằm theo chu kỳ kinh nguyệt, OTC 12 tuần không hiệu quả. DS hướng đến đâu?",
            "opts": [
                "BS phụ khoa hoặc nội tiết — hormonal acne cần can thiệp hormon (thuốc tránh thai hoặc spironolactone)",
                "BS da liễu để kê clindamycin + kháng sinh uống",
                "Tiếp tục OTC với niacinamide + BPO thêm 12 tuần nữa"
            ],
            "ans": 0,
            "exp": "Mụn chu kỳ ở vùng xương hàm–cằm ở nữ trưởng thành điển hình là hormonal acne do tăng androgen tương đối. Xử lý hiệu quả nhất là can thiệp hormon: thuốc tránh thai chứa progestin kháng androgen (cyproterone acetate, drospirenone) hoặc spironolactone. BS phụ khoa hoặc nội tiết phù hợp hơn."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "Khác biệt chính giữa 'purging' do retinoid và phản ứng kích ứng/dị ứng với Adapalene là gì?",
            "opts": [
                "Purging: mụn cùng loại ở vùng hay bị mụn, tuần 2–4; Dị ứng: đỏ rát, ngứa, mề đay lan rộng ngay sau bôi",
                "Purging xảy ra ngay ngày đầu dùng; Dị ứng xuất hiện sau 4–6 tuần",
                "Không thể phân biệt — phải ngừng thuốc và thử lại sau 1 tuần"
            ],
            "ans": 0,
            "exp": "Purging — mụn dạng comedone/papule thêm ở vùng thường bị mụn, sau 2–4 tuần dùng, tự giải quyết trong 6 tuần, không kèm ngứa. Dị ứng/kích ứng thật — xuất hiện ngay sau bôi, đỏ rát lan rộng ngoài vùng mụn, kèm ngứa, mề đay. Nếu là dị ứng thật → ngừng thuốc và báo BS."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "💉",
            "q": "BN hỏi: 'Mụn do da bẩn nên rửa mặt càng nhiều càng tốt, đúng không?' DS trả lời thế nào?",
            "opts": [
                "Không đúng — mụn do tắc nang lông, rửa quá nhiều phá hàng rào da và kích thích tiết dầu thêm",
                "Đúng một phần — rửa 4–5 lần/ngày với sữa rửa mặt mạnh là tốt nhất",
                "Đúng hoàn toàn — vệ sinh là yếu tố quan trọng nhất trong điều trị mụn"
            ],
            "ans": 0,
            "exp": "Acne vulgaris không phải do 'da bẩn' — nguyên nhân là sừng hoá bất thường, tăng bã nhờn, và C. acnes. Rửa mặt quá nhiều phá hàng rào lipid da, kích hoạt phản ứng bù dầu và làm hàng rào bảo vệ yếu đi. Khuyến cáo: 2 lần/ngày, pH ~4.5–5.5, không chà xát."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "⏳",
            "q": "Cha mẹ hỏi DS: 'Con trai 15 tuổi bị mụn nhẹ, có cần điều trị không hay để tự hết?' DS trả lời thế nào?",
            "opts": [
                "Nên điều trị OTC sớm — ngăn sẹo và tăng sắc tố PIH, vì mụn tuổi dậy thì có thể kéo dài đến 20–25 tuổi",
                "Không cần — mụn tuổi dậy thì luôn tự khỏi sau vài tháng",
                "Chỉ điều trị nếu BN tự thấy ảnh hưởng tâm lý, ngoài ra không cần"
            ],
            "ans": 0,
            "exp": "Để không điều trị có nguy cơ để lại PIH và sẹo rỗ — hậu quả khó điều trị hơn bản thân mụn. Mụn tuổi dậy thì không tự khỏi đồng loạt — nhiều BN còn mụn đến 20–25 tuổi hoặc hơn. Điều trị OTC sớm và đúng cách là chiến lược phòng ngừa sẹo tốt nhất."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🍯",
            "q": "Ăn nhiều chocolate và thức ăn cay là nguyên nhân trực tiếp, đã được chứng minh bằng thử nghiệm lâm sàng đối chứng, gây ra mụn trứng cá.",
            "ans": false,
            "exp": "Bằng chứng về chocolate và đồ cay gây mụn còn hạn chế và không nhất quán trong RCT có chất lượng. Thực phẩm GI cao và sữa có bằng chứng mạnh hơn nhưng vẫn ở mức B-C. DS không nên cấm đoán tuyệt đối dựa trên niềm tin phổ biến thiếu cơ sở."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🏃",
            "q": "Stress tâm lý có thể làm nặng mụn trứng cá thông qua tăng tiết androgen từ tuyến thượng thận và kích thích trực tiếp tuyến bã nhờn.",
            "ans": true,
            "exp": "Stress kích thích trục HPA, tăng ACTH → tăng androgen tuyến thượng thận → tăng tiết bã nhờn. CRH còn tác động trực tiếp lên tuyến bã qua thụ thể CRH-R1. Tư vấn giảm stress là một phần hợp lý trong quản lý toàn diện mụn."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🍯",
            "q": "Rửa mặt 5–6 lần/ngày bằng sữa rửa mặt mạnh giúp giảm dầu hiệu quả và là biện pháp hỗ trợ tốt trong điều trị mụn.",
            "ans": false,
            "exp": "Rửa mặt quá nhiều phá vỡ hàng rào lipid da, kích hoạt phản ứng bù dầu (sebostasis) — tuyến bã tiết thêm để bù lại lượng lipid bị mất. Khuyến cáo chuẩn: 2 lần/ngày với sữa rửa mặt nhẹ nhàng pH 4.5–5.5."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🧬",
            "q": "Acne vulgaris có thành phần di truyền đáng kể — con của bố hoặc mẹ bị mụn nặng có nguy cơ cao hơn người bình thường.",
            "ans": true,
            "exp": "Nghiên cứu trên cặp sinh đôi ước tính hệ số di truyền (heritability) của acne vulgaris là 78–81%. Các gen liên quan đến tiết bã nhờn, sừng hoá và phản ứng viêm đều có yếu tố di truyền. Tiền sử gia đình là dữ liệu khai thác quan trọng khi tư vấn BN."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🤰",
            "q": "Mụn ở phụ nữ mang thai thường cải thiện rõ rệt so với trước khi mang thai do thay đổi hormon tích cực.",
            "ans": false,
            "exp": "Trong thai kỳ, đặc biệt 3 tháng đầu, tăng progesterone và androgen thường làm mụn nặng hơn ở ~40–50% phụ nữ có tiền sử mụn. Thách thức điều trị lớn vì nhiều hoạt chất bị chống chỉ định. DS cần nhớ điều này khi tư vấn sản phụ."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🍯",
            "q": "Sử dụng sản phẩm dưỡng ẩm có nhãn 'non-comedogenic' không làm nặng mụn và thực tế được khuyến cáo khi dùng retinoid tại chỗ.",
            "ans": true,
            "exp": "Retinoid và BPO đều gây khô da, phá hàng rào da. Dưỡng ẩm non-comedogenic giúp phục hồi hàng rào da, giảm kích ứng và cải thiện tuân thủ điều trị — AAD khuyến cáo rõ ràng. Sản phẩm oil-free, không chứa lanolin/isopropyl myristate/cocoa butter sẽ không gây thêm mụn."
        }
    ],
    "arthritis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích cho BN: ibuprofen giảm đau và chống viêm trong viêm khớp theo cơ chế nào?",
            "opts": [
                "Ức chế enzyme cyclooxygenase (COX-1 và COX-2), giảm tổng hợp prostaglandin gây đau và viêm",
                "Gắn vào thụ thể opioid tại tủy sống, ức chế dẫn truyền tín hiệu đau",
                "Kích hoạt thụ thể corticosteroid, ức chế đáp ứng miễn dịch tại khớp"
            ],
            "ans": 0,
            "exp": "Ibuprofen là NSAID không chọn lọc, ức chế cả COX-1 và COX-2. COX-2 bị ức chế → giảm tổng hợp prostaglandin (PGE2) tại mô viêm → giảm đau, phù nề và sốt. COX-1 bị ức chế → giảm prostaglandin bảo vệ niêm mạc dạ dày và thromboxane A2 → giải thích tác dụng phụ loét dạ dày và ảnh hưởng tiểu cầu. Không phải opioid hay corticosteroid.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phác đồ ibuprofen OTC chuẩn cho người lớn bị đau khớp thoái hóa nhẹ–trung bình là gì?",
            "opts": [
                "200–400 mg × 3 lần/ngày; tổng không quá 1 200 mg/ngày khi dùng OTC không có chỉ định BS",
                "600 mg × 4 lần/ngày; tổng tối đa 2 400 mg/ngày theo phác đồ OTC chuẩn",
                "800 mg × 2 lần/ngày; dùng vào sáng và tối để duy trì nồng độ ổn định"
            ],
            "ans": 0,
            "exp": "Liều ibuprofen OTC người lớn: 200–400 mg/lần × 3 lần/ngày, tối đa 1 200 mg/ngày không kê đơn (Blenkinsopp 2025, Rutter 2026). Trên kê đơn, BS có thể chỉ định đến 2 400 mg/ngày. OTC chỉ dùng ngắn hạn, không quá vài ngày đến 1–2 tuần; nếu cần lâu hơn hoặc liều cao hơn, phải có BS đánh giá.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 58t, tiền sử loét dạ dày tá tràng đã điều trị lành sẹo 2 năm trước, bị đau khớp gối thoái hóa. Lựa chọn giảm đau OTC phù hợp nhất là gì?",
            "opts": [
                "Ibuprofen 400 mg × 3 lần/ngày vì loét đã lành, nguy cơ thấp",
                "Paracetamol 500–1 000 mg × 3–4 lần/ngày — an toàn hơn cho BN có tiền sử loét dạ dày",
                "Naproxen 500 mg × 2 lần/ngày vì ít ảnh hưởng đến niêm mạc dạ dày hơn ibuprofen"
            ],
            "ans": 1,
            "exp": "Tiền sử loét dạ dày là CCĐ quan trọng của NSAID toàn thân (ibuprofen, naproxen) ngay cả khi đã lành — nguy cơ tái phát loét và xuất huyết tiêu hóa vẫn cao hơn người bình thường. Paracetamol là lựa chọn ưu tiên cho BN cần giảm đau nhưng có CCĐ NSAID. Nếu bắt buộc phải dùng NSAID, cần thêm PPI (kê đơn).",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 70t, đau khớp háng thoái hóa, creatinine huyết thanh tăng nhẹ (eGFR 45 mL/phút). BN muốn dùng ibuprofen. DS tư vấn thế nào?",
            "opts": [
                "Dùng liều 200 mg × 2 lần/ngày là đủ an toàn vì giảm liều bù cho suy thận",
                "Tránh ibuprofen — NSAID ức chế tổng hợp prostaglandin thận, giảm lưu lượng máu cầu thận, làm nặng thêm suy thận ở BN đã có suy thận",
                "Ibuprofen an toàn nếu uống đủ nước 2 lít/ngày để bảo vệ thận"
            ],
            "ans": 1,
            "exp": "NSAID ức chế COX-2 tại thận → giảm tổng hợp PGE2 và PGI2 — các prostaglandin duy trì lưu lượng máu cầu thận khi thận đang bù trừ. Ở BN suy thận (eGFR <60 mL/phút), đặc biệt NCT, NSAID có thể gây suy thận cấp. Uống nhiều nước không ngăn được cơ chế này. Paracetamol là lựa chọn an toàn hơn với suy thận nhẹ-trung bình.",
            "icon": "🫘"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 55t đang dùng ramipril (ACE inhibitor) + furosemide (lợi tiểu) vì suy tim, bị đau khớp gối muốn uống ibuprofen. DS nhận diện nguy cơ gì nghiêm trọng nhất?",
            "opts": [
                "Ibuprofen giảm hiệu quả furosemide do cạnh tranh bài tiết ống thận — phù nề tăng nhẹ",
                "Bộ ba ibuprofen + ACE inhibitor + lợi tiểu gây suy thận cấp tính (triple whammy) — nguy cơ cao cần tránh",
                "Ibuprofen không tương tác với ACE inhibitor vì hai thuốc có cơ chế hoàn toàn khác nhau"
            ],
            "ans": 1,
            "exp": "'Triple whammy' là tương tác nguy hiểm được ghi nhận trong y văn: NSAID (giảm lưu lượng máu thận) + ACE inhibitor/ARB (giảm co mạch efferent) + lợi tiểu (giảm thể tích) → suy thận cấp, đặc biệt khi BN mất nước hoặc bệnh cấp tính kèm theo. Blenkinsopp 2025 cảnh báo rõ: tránh phối hợp cả ba. DS phải từ chối bán ibuprofen và tư vấn paracetamol.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng lithium carbonate điều trị rối loạn lưỡng cực, bị đau khớp hỏi mua ibuprofen. DS cần cảnh báo điều gì?",
            "opts": [
                "Ibuprofen làm tăng nồng độ lithium trong máu → nguy cơ ngộ độc lithium: buồn nôn, run tay, đa niệu, yếu cơ",
                "Lithium làm tăng tác dụng chống viêm của ibuprofen, nên có thể dùng liều thấp hơn",
                "Không có tương tác đáng kể khi dùng ibuprofen liều OTC ngắn hạn"
            ],
            "ans": 0,
            "exp": "NSAID (ibuprofen) ức chế tổng hợp prostaglandin tại thận → giảm bài tiết lithium qua ống thận → tăng nồng độ lithium trong máu → nguy cơ ngộ độc. Lithium có khoảng điều trị hẹp (therapeutic index hẹp): biểu hiện ngộ độc gồm rối loạn tiêu hóa, run, đa niệu, yếu cơ, lú lẫn. Blenkinsopp 2025 và Rutter 2026 đều nhấn mạnh: tránh NSAID ở BN dùng lithium.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng clopidogrel sau đặt stent động mạch vành 6 tháng trước, bị đau khớp muốn uống ibuprofen hàng ngày. DS tư vấn thế nào?",
            "opts": [
                "An toàn vì clopidogrel và ibuprofen không cùng cơ chế",
                "Tốt nhất tránh ibuprofen — NSAID ức chế tiểu cầu và tăng nguy cơ xuất huyết tiêu hóa khi phối hợp với thuốc chống kết tập tiểu cầu",
                "Giảm liều ibuprofen xuống 200 mg × 1 lần/ngày là đủ an toàn"
            ],
            "ans": 1,
            "exp": "Clopidogrel (antiplatelet) + NSAID (cũng ảnh hưởng tiểu cầu + gây loét dạ dày) → tăng đáng kể nguy cơ xuất huyết tiêu hóa. Blenkinsopp 2025: ibuprofen 'best avoided' khi BN dùng clopidogrel hay aspirin liều thấp. Paracetamol là lựa chọn an toàn hơn. Nếu bắt buộc phải dùng NSAID (kê đơn), phải kèm PPI.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 32t mang thai tuần 34 bị đau khớp ngón tay. Hỏi DS về ibuprofen. DS tư vấn thế nào?",
            "opts": [
                "Ibuprofen an toàn ở tất cả các giai đoạn thai kỳ vì không qua nhau thai đáng kể",
                "CCĐ ibuprofen trong tam cá nguyệt 3 (từ tuần 28) — nguy cơ đóng sớm ống động mạch (ductus arteriosus) và suy thận thai nhi; cần khám BS",
                "Ibuprofen 200 mg × 1 lần/ngày ngắn hạn an toàn trong tam cá nguyệt 3"
            ],
            "ans": 1,
            "exp": "NSAID trong tam cá nguyệt 3: CCĐ rõ ràng vì ức chế prostaglandin → đóng sớm ductus arteriosus (gây tăng áp động mạch phổi thai nhi), suy thận thai nhi, giảm nước ối, làm chậm hoặc kéo dài chuyển dạ. Blenkinsopp 2025: 'ibuprofen should be avoided in pregnancy, particularly during the third trimester.' Paracetamol là giảm đau an toàn hơn trong thai kỳ khi cần thiết.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ưu điểm chính của ibuprofen gel bôi tại chỗ so với ibuprofen uống trong điều trị đau khớp gối thoái hóa nhẹ là gì?",
            "opts": [
                "Hiệu quả giảm đau mạnh hơn vì nồng độ thuốc tại khớp cao hơn so với đường uống",
                "Tác dụng phụ toàn thân (GI, thận, tim mạch) rất ít vì hấp thu toàn thân thấp — phù hợp cho BN có CCĐ NSAID uống",
                "Không cần lo ngại tương tác thuốc vì thuốc hoàn toàn không vào máu"
            ],
            "ans": 1,
            "exp": "Topical NSAID có hấp thu toàn thân rất thấp → tác dụng phụ GI, thận và tim mạch rất ít so với NSAID uống. Rutter 2026 khuyến cáo topical NSAID (đặc biệt diclofenac gel) là lựa chọn thay thế cho BN có CCĐ NSAID uống. Tuy nhiên, vì vẫn có hấp thu nhỏ, vẫn thận trọng với BN nhạy cảm aspirin/hen phế quản. Hiệu quả tại chỗ không nhất thiết cao hơn oral.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Dựa trên tổng quan Cochrane của Derry et al. (2015), dạng topical NSAID nào cho kết quả lâm sàng tốt nhất trong đau cơ xương khớp?",
            "opts": [
                "Dạng kem (cream) chứa ibuprofen",
                "Dạng gel (gel) của diclofenac hoặc ibuprofen",
                "Dạng miếng dán (patch) chứa felbinac"
            ],
            "ans": 1,
            "exp": "Tổng quan Cochrane 2015 (Derry et al.) và tổng quan 2017 kết luận: dạng gel của diclofenac và ibuprofen cho kết quả lâm sàng tốt nhất trong các dạng bào chế topical NSAID. Rutter 2026 trích dẫn: 'diclofenac gel should be recommended.' Dạng cream và patch có hiệu quả nhưng bằng chứng yếu hơn gel.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hen phế quản kiểm soát tốt, chưa từng dùng NSAID bao giờ, bị đau khớp vai. DS tư vấn thế nào về ibuprofen?",
            "opts": [
                "CCĐ tuyệt đối mọi NSAID kể cả topical với tất cả BN hen phế quản",
                "Thận trọng — hen phế quản tăng nguy cơ nhạy cảm aspirin/NSAID; DS nên hỏi BN đã từng dùng aspirin/NSAID chưa và có phản ứng không",
                "Ibuprofen an toàn hoàn toàn vì BN đang kiểm soát hen tốt, nguy cơ bronchospasm chỉ xảy ra ở hen không kiểm soát"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: khoảng 4% BN hen có nhạy cảm aspirin (aspirin-exacerbated respiratory disease). Hen phế quản làm tăng nguy cơ phản ứng NSAID nhưng không phải CCĐ tuyệt đối với tất cả BN hen. DS nên hỏi: 'Anh/chị đã từng dùng ibuprofen/aspirin chưa? Có bị khó thở không?' Nếu đã dùng NSAID trước mà không có vấn đề, có thể tiếp tục. Nếu chưa từng dùng, thận trọng bắt đầu liều thấp.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng fluoxetine (SSRI) điều trị trầm cảm hỏi mua ibuprofen cho đau khớp. Tương tác đáng lo ngại nhất là gì?",
            "opts": [
                "Ibuprofen làm giảm nồng độ fluoxetine trong máu qua cảm ứng enzyme CYP3A4",
                "Phối hợp NSAID + SSRI tăng nguy cơ xuất huyết tiêu hóa do cộng hưởng ức chế tiểu cầu",
                "Fluoxetine làm tăng tốc độ hấp thu ibuprofen, gây ngộ độc NSAID cấp"
            ],
            "ans": 1,
            "exp": "SSRI (fluoxetine, citalopram, sertraline) ức chế tái hấp thu serotonin tại tiểu cầu → giảm serotonin dự trữ trong tiểu cầu → giảm kết tập tiểu cầu. Khi phối hợp với NSAID (vốn đã ức chế COX-1 → giảm thromboxane A2 → giảm tiểu cầu + tổn thương niêm mạc dạ dày) → tăng đáng kể nguy cơ xuất huyết tiêu hóa. Blenkinsopp 2025: 'care is needed if the patient is on a SSRI.'",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "NICE 2022 (NG226 — hướng dẫn viêm khớp thoái hóa) khuyến nghị thế nào về glucosamine sulfate?",
            "opts": [
                "Khuyến cáo glucosamine sulfate 1 500 mg/ngày như lựa chọn đầu tay cho OA khớp gối",
                "Cho phép dùng glucosamine như bổ sung thực phẩm khi bằng chứng lâm sàng được cải thiện",
                "Không khuyến cáo glucosamine vì bằng chứng lâm sàng hiện tại không đủ thuyết phục"
            ],
            "ans": 2,
            "exp": "NICE 2022 (NG226) — hướng dẫn viêm khớp thoái hóa hiện hành — khuyến nghị KHÔNG cung cấp glucosamine cho OA. Blenkinsopp 2025 ghi rõ: 'The 2022 NICE guideline on osteoarthritis (NG226) advises not to offer glucosamine.' Mặc dù có một số bằng chứng hạn chế về lợi ích triệu chứng ở OA đầu gối, chất lượng nghiên cứu kém và không nhất quán.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi về nguồn gốc của glucosamine bổ sung và lo ngại dị ứng hải sản. DS cần lưu ý gì?",
            "opts": [
                "Glucosamine bổ sung luôn được tổng hợp hoàn toàn từ glucose và glutamic acid, không liên quan hải sản",
                "Nhiều sản phẩm glucosamine được chiết xuất từ vỏ giáp xác (tôm, cua) — cần thận trọng với BN dị ứng hải sản; nên hỏi nhà sản xuất về nguồn gốc",
                "Dị ứng hải sản không liên quan đến glucosamine vì protein gây dị ứng bị loại hoàn toàn trong quá trình chế biến"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Some are produced from natural sources (the shells of crabs and other crustaceans), while others are synthesised from glutamic acid and glucose.' Protein hải sản (gây dị ứng) thường bị loại trong quá trình tinh chế nhưng rủi ro chéo vẫn không thể loại trừ hoàn toàn. DS nên hỏi nguồn gốc sản phẩm với BN dị ứng giáp xác và gợi ý dùng glucosamine tổng hợp nếu cần.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Cơ chế tác động của methyl salicylate bôi ngoài da trong giảm đau cơ khớp là gì?",
            "opts": [
                "Thấm sâu qua da vào khớp, ức chế COX tại chỗ tương tự topical NSAID",
                "Counterirritant — kích thích nhẹ da tạo cảm giác ấm nóng, làm não chú ý đến cảm giác này thay vì đau gốc; tăng lưu lượng máu tại chỗ",
                "Phong bế thần kinh cảm giác tại chỗ, ngăn dẫn truyền tín hiệu đau về não"
            ],
            "ans": 1,
            "exp": "Methyl salicylate là rubefacient/counterirritant — kích thích thụ thể TRPV1 và TRPA1 tại da gây cảm giác ấm nóng (rubor). Cơ chế giảm đau theo lý thuyết gate control: kích thích thần kinh cảm giác bề mặt 'lấn át' tín hiệu đau từ mô sâu hơn. Blenkinsopp 2025 và Rutter 2026 đều xác nhận không có bằng chứng chất lượng cao về ức chế COX tại khớp từ đường bôi ngoài da.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "NCT 78t đau khớp gối mạn tính, dùng ibuprofen uống thường xuyên >2 tuần. DS nên gợi ý thêm biện pháp nào để bảo vệ dạ dày?",
            "opts": [
                "Uống ibuprofen cùng sữa để tạo lớp đệm bảo vệ niêm mạc",
                "Tham khảo ý kiến BS về bổ sung PPI (omeprazole, pantoprazole) kê đơn — khuyến cáo cho NCT dùng NSAID dài hạn",
                "Đổi sang aspirin liều thấp vì ít kích thích dạ dày hơn ibuprofen"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Older people buying and using ibuprofen repeatedly should be asked to consult with their GP surgery so this can be considered' — ám chỉ việc thêm PPI để bảo vệ dạ dày. NCT dùng NSAID >1 tuần có nguy cơ xuất huyết tiêu hóa cao hơn, cần bảo vệ dạ dày bằng PPI. Sữa không đủ bảo vệ. Aspirin còn gây kích thích dạ dày nhiều hơn ibuprofen ở liều cao.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS tư vấn BN về ưu, nhược điểm của paracetamol so với ibuprofen trong điều trị OA mạn tính. Điểm khác biệt cốt lõi nào DS cần nhấn mạnh?",
            "opts": [
                "Paracetamol tác dụng chống viêm mạnh hơn ibuprofen nhưng ít tác dụng giảm đau hơn",
                "Paracetamol an toàn hơn cho dạ dày và thận nhưng hầu như không có tác dụng chống viêm — phù hợp cho đau thuần túy, kém hơn khi có viêm khớp rõ",
                "Paracetamol và ibuprofen có hiệu quả và độ an toàn tương đương nhau, chỉ khác về giá thành"
            ],
            "ans": 1,
            "exp": "Paracetamol: cơ chế chưa hoàn toàn rõ — có thể ức chế COX-3 trung ương và hệ cannabinoid nội sinh, nhưng hầu như KHÔNG có tác dụng chống viêm tại khớp. An toàn hơn với dạ dày, thận và tim mạch ở hầu hết BN. Ibuprofen: có tác dụng chống viêm rõ ràng — hiệu quả hơn khi OA có viêm hoạt động. NICE khuyến cáo paracetamol đầu tay cho đau thuần túy ở NCT; NSAID khi cần tác dụng chống viêm thêm.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Celecoxib (COX-2 selective inhibitor) có ưu điểm gì về an toàn tiêu hóa so với ibuprofen, và tình trạng OTC/ETC tại Việt Nam là thế nào?",
            "opts": [
                "Celecoxib OTC tại Việt Nam, ít tác dụng phụ GI hơn ibuprofen vì không ức chế COX-1",
                "Celecoxib là ETC tại Việt Nam — ít ảnh hưởng COX-1 bảo vệ niêm mạc → ít loét dạ dày hơn, nhưng tăng nguy cơ tim mạch và giữ nước",
                "Celecoxib OTC với liều thấp 100 mg, ETC với liều 200 mg trở lên"
            ],
            "ans": 1,
            "exp": "Celecoxib là COX-2 selective — ít ức chế COX-1 bảo vệ niêm mạc dạ dày → tỷ lệ loét và xuất huyết tiêu hóa thấp hơn NSAID không chọn lọc. Tuy nhiên nhược điểm: tăng nguy cơ biến cố tim mạch (huyết khối), giữ nước, tăng HA — cần thận trọng với BN tim mạch. Tại Việt Nam, celecoxib là ETC, cần kê đơn. Không được bán OTC dù liều nào.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau khớp ngón tay thoái hóa hỏi về sử dụng gel diclofenac kết hợp ibuprofen uống cùng lúc. DS nhận xét thế nào?",
            "opts": [
                "Phối hợp là hợp lý vì tác dụng bổ sung nhau: topical tác dụng tại chỗ, oral tác dụng toàn thân",
                "Không khuyến cáo phối hợp hai NSAID cùng lúc — tăng nguy cơ tác dụng phụ toàn thân mà ít tăng thêm hiệu quả",
                "An toàn hoàn toàn vì gel không được hấp thu đáng kể, không ảnh hưởng đến tác dụng của ibuprofen uống"
            ],
            "ans": 1,
            "exp": "Dù topical NSAID hấp thu toàn thân rất thấp, về nguyên tắc không nên phối hợp hai NSAID cùng lúc (oral + topical trên cùng một người). Hiệu quả tổng thể không tăng đáng kể nhưng nguy cơ tác dụng phụ GI và thận tăng. Hướng dẫn lâm sàng khuyến cáo: nếu đã dùng NSAID uống, không cần thêm topical NSAID và ngược lại.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN có tiền sử nhạy cảm aspirin (bị khó thở khi dùng aspirin) không nên dùng cả ibuprofen uống lẫn gel diclofenac.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Cross-sensitivity between aspirin and NSAIDs occurs' — BN nhạy cảm aspirin có thể phản ứng tương tự với mọi NSAID. Topical NSAID có hấp thu rất thấp nhưng không bằng không; 'several reports of bronchospasm have been received following the use of these products' ở BN hen nhạy cảm aspirin. Do đó CCĐ áp dụng cho cả oral và topical NSAID ở BN có tiền sử phản ứng rõ với aspirin.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen là NSAID an toàn để dùng ở BN đang dùng warfarin, miễn là theo dõi INR thường xuyên.",
            "ans": false,
            "exp": "Blenkinsopp 2025: ibuprofen 'should not be used at all if the patient is on warfarin.' Cả hai cơ chế gây nguy cơ: (1) NSAID ức chế tiểu cầu và gây loét dạ dày → tăng nguy cơ xuất huyết tiêu hóa; (2) ibuprofen có thể làm giảm đào thải warfarin (ức chế CYP2C9 nhẹ) → tăng nồng độ warfarin → tăng INR. Paracetamol là lựa chọn an toàn hơn với BN dùng warfarin (dù cũng cần thận trọng ở liều cao).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Topical NSAID (ibuprofen gel, diclofenac gel) được chứng minh hoàn toàn không gây tác dụng phụ tiêu hóa.",
            "ans": false,
            "exp": "Rutter 2026: 'GI side effects have been reported but are rare' với topical NSAID. Hấp thu toàn thân từ da thấp nhưng không phải bằng không — đủ gây tác dụng phụ GI (khó tiêu, buồn nôn, tiêu chảy) ở một số BN nhạy cảm. Tuy nhiên tỷ lệ và mức độ thấp hơn đáng kể so với oral NSAID. 'Hoàn toàn không' là không chính xác.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mẹ đang cho con bú có thể dùng ibuprofen để giảm đau khớp vì lượng thuốc vào sữa mẹ rất nhỏ.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Breastfeeding mothers may safely take ibuprofen, since it is excreted in only small amounts in breast milk.' Ibuprofen được coi là tương đối an toàn trong thời kỳ cho con bú. Lượng bài tiết vào sữa rất nhỏ, ít nguy cơ cho trẻ bú. Tuy nhiên, nên dùng liều thấp nhất hiệu quả và trong thời gian ngắn nhất. Rutter 2026 cũng xác nhận: 'can be used in breastfeeding.'",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NICE 2022 (NG226) khuyến cáo glucosamine sulfate 1 500 mg/ngày là lựa chọn điều trị đầu tay cho viêm khớp thoái hóa đầu gối.",
            "ans": false,
            "exp": "NICE 2022 (NG226) rõ ràng KHÔNG khuyến cáo glucosamine cho OA, trái ngược với một số hướng dẫn cũ hơn. Blenkinsopp 2025: 'The 2022 NICE guideline on osteoarthritis (NG226) advises not to offer glucosamine.' Đây là thay đổi quan trọng so với một số hướng dẫn trước đây. Điều trị đầu tay cho OA theo NICE: tập thể dục, giảm cân, paracetamol/topical NSAID.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Methyl salicylate bôi ngoài da có cơ chế ức chế COX trực tiếp tại khớp, tương đương với topical diclofenac.",
            "ans": false,
            "exp": "Methyl salicylate là rubefacient/counterirritant — cơ chế chính là kích thích thần kinh cảm giác bề mặt da (gate control) chứ không phải ức chế COX tại khớp. Khác với diclofenac gel (topical NSAID thực sự — ức chế COX tại mô). Bằng chứng hiệu quả của methyl salicylate hạn chế hơn topical NSAID. Rutter 2026: 'current evidence does not support the use of salicylate-containing rubefacients' (cho đau mạn tính).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "NCT bị đau khớp mạn tính, ibuprofen uống là lựa chọn ưu tiên hơn paracetamol vì hiệu quả chống viêm tốt hơn.",
            "ans": false,
            "exp": "Rutter 2026: 'NSAIDs are best avoided in certain patient groups, such as older adults, because they are more prone to gastrointestinal bleeds and have reduced renal function.' Paracetamol được ưu tiên cho NCT đau khớp mạn tính vì hồ sơ an toàn tốt hơn. Nếu cần tác dụng chống viêm, topical NSAID (gel) là lựa chọn thay thế an toàn hơn oral NSAID ở NCT. Blenkinsopp 2025: 'paracetamol may be a better choice in these cases.'",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen uống nên được dùng sau bữa ăn hoặc kèm thức ăn để giảm kích thích dạ dày.",
            "ans": true,
            "exp": "Blenkinsopp 2025 và Rutter 2026 đều khuyến cáo rõ: 'it is best to advise patients to take NSAIDs with or after food to minimise GI problems.' Dùng cùng thức ăn làm chậm hấp thu nhẹ nhưng giảm tiếp xúc trực tiếp của thuốc với niêm mạc dạ dày, giảm kích thích tại chỗ. Không hoàn toàn ngăn được tác dụng phụ GI do cơ chế toàn thân (ức chế prostaglandin bảo vệ niêm mạc) nhưng giảm khó chịu dạ dày.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Glucosamine sulfate có thể gây tác dụng phụ tiêu hóa như khó chịu bụng, ợ chua và tiêu chảy ở một số BN.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Adverse effects are uncommon, but include abdominal discomfort and tenderness, heartburn, diarrhoea and nausea.' Mặc dù tỷ lệ tác dụng phụ thấp, DS cần thông báo cho BN để không nhầm với triệu chứng bệnh tiêu hóa mới. Ngoài ra, glucosamine từ giáp xác có thể gây phản ứng dị ứng ở BN mẫn cảm.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 55t kể đau khớp ngón tay, khớp gối cả 2 bên từ vài tháng nay. Đau tăng khi vận động, giảm khi nghỉ; cứng khớp buổi sáng thường hết trong 15–20 phút. DS nghi ngờ chẩn đoán nào và xử trí thế nào?",
            "opts": [
                "Viêm khớp dạng thấp (RA) — chuyển BS ngay để bắt đầu DMARD sớm",
                "Viêm khớp thoái hóa (OA) — phù hợp tuổi, vị trí, tính chất đau; có thể tư vấn OTC và lối sống",
                "Bệnh gout — cần xét nghiệm acid uric máu trước khi tư vấn bất kỳ thuốc gì"
            ],
            "ans": 1,
            "exp": "OA điển hình: đau khớp chịu lực (đầu gối, háng, ngón tay), tăng khi vận động, giảm khi nghỉ; cứng sáng <30 phút (Blenkinsopp 2025 — Figure 6.1). Khác với RA: cứng sáng >30 phút, khớp đối xứng bàn tay nhỏ, kèm mệt mỏi toàn thân, có viêm (sưng, nóng). Gout: cơn cấp tính đột ngột, nóng đỏ một khớp. BN này phù hợp OA — có thể tư vấn OTC phù hợp.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 42t đến nhà thuốc kể các khớp ngón tay sưng, đau, cứng buổi sáng kéo dài hơn 1 giờ, kèm mệt mỏi và sốt nhẹ từ 3 tuần nay. DS xử trí thế nào?",
            "opts": [
                "Bán ibuprofen và paracetamol kết hợp để giảm đau và hạ sốt, theo dõi thêm 2 tuần",
                "Chuyển khám BS khẩn — cứng sáng >30 phút + sưng khớp đối xứng + triệu chứng toàn thân gợi ý RA, cần DMARD sớm tránh tổn thương khớp vĩnh viễn",
                "Tư vấn chườm nóng và nghỉ ngơi, không cần dùng thuốc vội vì có thể tự khỏi"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'It is important to be aware of the symptoms of RA and refer quickly to the GP surgery if this condition is suspected. Delay in receiving DMARDs can result in permanent joint damage and disability.' Red flag RA: cứng sáng >30 phút, viêm khớp đối xứng nhỏ (bàn tay, bàn chân), sưng nóng, kèm triệu chứng toàn thân (mệt, sốt, sút cân). Không điều trị OTC đơn thuần với nghi ngờ RA.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 60t, tiền sử gout, đột ngột đau dữ dội ngón chân cái từ sáng nay, khớp đỏ, nóng, sưng to, không chịu được khi chăn ga chạm vào. DS xử trí thế nào?",
            "opts": [
                "Bán colchicine OTC vì là first-line điều trị cơn gout cấp",
                "Bán ibuprofen và hướng dẫn nâng cao chân, chườm lạnh trong khi chờ khám BS",
                "Tư vấn uống nhiều nước và kiêng purine, không dùng thuốc vì cơn sẽ tự qua"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: với BN đã có chẩn đoán gout trước đây, 'ibuprofen (if tolerated) is a highly effective treatment that can be used while waiting for a GP surgery appointment. Elevation and cooling with an icepack may also help.' Colchicine là ETC tại VN, không bán OTC. Cơn gout cấp cần thuốc — chỉ kiêng ăn và uống nước không đủ điều trị cơn cấp. DS vẫn nên khuyên khám BS để xác nhận và điều trị dự phòng.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS nhận diện đặc điểm nào phân biệt VIÊM KHỚP TỰ MIỄN (RA) với VIÊM KHỚP THOÁI HÓA (OA) trên lâm sàng tại nhà thuốc?",
            "opts": [
                "RA: thoái hóa sụn không đối xứng, đau tăng khi vận động. OA: viêm màng hoạt dịch đối xứng, đau tăng khi nghỉ",
                "RA: viêm màng hoạt dịch đối xứng khớp nhỏ, cứng sáng >30 phút, kèm mệt mỏi toàn thân. OA: thoái hóa sụn không đối xứng, đau khi vận động, cứng sáng <30 phút",
                "Hai bệnh không thể phân biệt tại nhà thuốc, đều cần xét nghiệm RF và X-quang"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 (Figure 6.1): OA — thoái hóa sụn, đau khi vận động/chịu lực, cứng sáng <30 phút, tổn thương không đối xứng. RA — viêm tự miễn màng hoạt dịch, khớp đối xứng (bàn tay, bàn chân), cứng sáng >30 phút, khớp sưng 'boggy' (đặc trưng), kèm triệu chứng toàn thân (mệt, sốt, sút cân). Phân biệt này quyết định: OA có thể tư vấn OTC; RA cần chuyển BS khẩn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đang dùng OTC cho đau khớp gối thoái hóa được 3 tuần, đau không giảm, ảnh hưởng đến sinh hoạt hàng ngày. Sau bao lâu không đáp ứng OTC thì DS nên khuyên tái khám BS?",
            "opts": [
                "Tiếp tục thêm 2–3 tháng vì OA mạn tính cần thời gian dài để thuốc có hiệu quả",
                "Sau 1–2 tuần dùng đúng liều không cải thiện, hoặc khi triệu chứng ảnh hưởng đáng kể đến sinh hoạt",
                "Chỉ khi xuất hiện biến dạng khớp nhìn thấy rõ mới cần khám BS"
            ],
            "ans": 1,
            "exp": "Hướng dẫn thực hành tại nhà thuốc: nếu dùng OTC đúng liều 1–2 tuần mà không cải thiện đáng kể, hoặc triệu chứng ảnh hưởng rõ đến chất lượng cuộc sống, cần chuyển BS để đánh giá toàn diện (X-quang khớp, xét nghiệm phân biệt RA/gout, xem xét thuốc kê đơn, vật lý trị liệu, hoặc chuyên khoa cơ xương khớp). Không nên để BN tự dùng OTC kéo dài không kiểm soát.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên phi dùng thuốc nào có bằng chứng tốt nhất giúp giảm đau và cải thiện chức năng khớp trong OA đầu gối và háng?",
            "opts": [
                "Nghỉ ngơi hoàn toàn, tránh mọi vận động để bảo vệ sụn khớp khỏi hao mòn thêm",
                "Tập thể dục thường xuyên (aerobic + tăng cường cơ quanh khớp) và giảm cân nếu thừa cân",
                "Xoa bóp vùng khớp bằng dầu nóng hàng ngày để tăng lưu thông và tái tạo sụn"
            ],
            "ans": 1,
            "exp": "Bằng chứng mạnh nhất cho OA đầu gối và háng: (1) Tập thể dục — aerobic (đi bộ, bơi lội, xe đạp) + tăng cường cơ quanh khớp giúp giảm đau, tăng chức năng; (2) Giảm cân — mỗi 1 kg giảm cân giảm 4 kg lực tác động lên đầu gối khi đi bộ. NICE 2022 (NG226) đưa tập thể dục và giảm cân là can thiệp cốt lõi cho OA. Nghỉ ngơi tuyệt đối không có lợi và làm yếu cơ hỗ trợ khớp.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đau khớp hỏi: 'Tôi nên chườm nóng hay chườm lạnh?' DS tư vấn thế nào cho trường hợp OA mạn tính không có viêm cấp tính?",
            "opts": [
                "Chỉ chườm lạnh vì bất kỳ nguồn nhiệt nào đều làm tăng viêm tại khớp",
                "Chườm nóng (ấm) có thể giúp giảm cứng khớp mạn tính và thư giãn cơ; chườm lạnh phù hợp hơn khi có viêm cấp hoặc sau vận động",
                "Chườm lạnh và nóng đều CCĐ với OA — chỉ nên dùng thuốc đơn thuần"
            ],
            "ans": 1,
            "exp": "Thực hành lâm sàng: chườm nóng (ấm) — giảm cứng khớp, thư giãn cơ, tăng lưu lượng máu — phù hợp cho OA mạn tính không có viêm cấp; đặc biệt buổi sáng khi cứng khớp. Chườm lạnh — giảm phù nề và đau — phù hợp hơn cho viêm khớp cấp (gout, chấn thương) hoặc sau vận động nặng. Cả hai đều là biện pháp hỗ trợ an toàn, không thay thế thuốc.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 55t có khớp gối sưng, nóng đỏ bất thường, kèm sốt 38.5°C. Không có tiền sử gout hay chấn thương. DS xử trí thế nào?",
            "opts": [
                "Bán ibuprofen + chườm lạnh vì nghi gout cấp",
                "Chuyển cấp cứu hoặc khám BS ngay trong ngày — khớp sưng nóng đỏ kèm sốt nghi nhiễm khuẩn khớp (septic arthritis), cần chọc dịch khớp cấp cứu",
                "Tư vấn nghỉ ngơi và uống paracetamol hạ sốt, tái khám nếu không đỡ sau 3 ngày"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'A joint infection is rare, but serious and occasionally fatal.' Viêm khớp nhiễm khuẩn (septic arthritis): sưng nóng đỏ một khớp + sốt là red flag cấp cứu — cần chọc dịch khớp cấp cứu, kháng sinh tiêm tĩnh mạch, có thể phẫu thuật dẫn lưu. Điều trị chậm trễ → phá hủy sụn khớp và tử vong. Không phân biệt được với gout tại nhà thuốc → ưu tiên chuyển khám khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khớp nào thường bị tổn thương sớm nhất và phổ biến nhất trong viêm khớp thoái hóa (OA)?",
            "opts": [
                "Khớp bàn ngón tay nhỏ và cổ tay — đặc trưng của OA giai đoạn sớm",
                "Khớp gối, khớp háng và các khớp ngón tay xa (DIP) — các khớp chịu lực và sử dụng nhiều",
                "Khớp vai và khuỷu tay — hay gặp nhất do lao động thể chất"
            ],
            "ans": 1,
            "exp": "OA phổ biến nhất tại: khớp gối (knee), khớp háng (hip), đốt sống thắt lưng và cổ, các khớp ngón tay xa (DIP) và khớp ngón tay cái (CMC). Đây là các khớp chịu lực lớn hoặc sử dụng nhiều. Blenkinsopp 2025: 'This often affects the knees and hips, especially in the older population.' Khớp bàn ngón tay nhỏ và cổ tay là đặc trưng của RA, không phải OA.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm khớp thoái hóa (OA) là bệnh mạn tính tiến triển — triệu chứng không tự khỏi hoàn toàn như cảm cúm hay đau cơ cấp tính.",
            "ans": true,
            "exp": "OA là bệnh thoái hóa sụn khớp mạn tính, tiến triển theo tuổi. Một khi sụn đã bị mòn, không thể tái tạo hoàn toàn. Mục tiêu điều trị là kiểm soát triệu chứng (đau, cứng khớp), duy trì chức năng và làm chậm tiến triển. OA không có thuốc chữa khỏi (disease-modifying cho OA) như DMARDs cho RA. Giáo dục BN về tính mạn tính của bệnh là quan trọng để tăng tuân thủ điều trị.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tập thể dục thường xuyên có thể làm nặng thêm OA vì gây thêm hao mòn sụn khớp.",
            "ans": false,
            "exp": "Quan niệm sai lầm phổ biến nhưng sai về mặt bằng chứng. Tập thể dục phù hợp (aerobic nhẹ như bơi lội, đi bộ, xe đạp; tăng cường cơ bắp) được chứng minh giúp giảm đau, cải thiện chức năng và chất lượng cuộc sống ở BN OA. Cơ bắp khỏe hỗ trợ và giảm tải cho khớp. NICE 2022 xếp tập thể dục là can thiệp cốt lõi không thể thiếu trong OA. Nghỉ ngơi quá mức làm yếu cơ và xấu hơn.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN nghi ngờ viêm khớp dạng thấp (RA) có thể tự điều trị bằng ibuprofen OTC dài hạn thay cho DMARD vì RA và OA có cùng cơ chế bệnh sinh.",
            "ans": false,
            "exp": "RA và OA hoàn toàn khác nhau về cơ chế: OA là thoái hóa cơ học; RA là bệnh tự miễn — viêm màng hoạt dịch do hệ miễn dịch tấn công khớp. NSAID chỉ điều trị triệu chứng cho RA, không ngăn tiến triển tổn thương khớp. Blenkinsopp 2025: DMARD là bắt buộc sớm trong RA để ngăn tổn thương khớp vĩnh viễn. Tự điều trị NSAID OTC kéo dài che lấp RA và làm chậm bắt đầu DMARD — gây hậu quả nghiêm trọng.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Thừa cân/béo phì làm tăng nguy cơ và nặng hơn OA khớp gối và háng thông qua tăng lực tải lên sụn khớp.",
            "ans": true,
            "exp": "Mỗi kg trọng lượng thêm tạo thêm ~4 kg lực tác động lên khớp gối khi đi bộ (quan hệ đòn bẩy sinh cơ học). BMI cao → tăng lực tải mạn tính → đẩy nhanh hao mòn sụn. Ngược lại, giảm cân có lợi rõ rệt: giảm 5–10% trọng lượng cơ thể giảm đau khớp gối đáng kể và cải thiện chức năng. NICE 2022 xếp giảm cân là can thiệp ưu tiên cho OA đầu gối/háng ở BN thừa cân.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Diuretics như bendroflumethiazide có thể làm tăng nguy cơ cơn gout cấp thông qua cơ chế tăng nồng độ acid uric máu.",
            "ans": true,
            "exp": "Blenkinsopp 2025: gout 'is sometimes associated with the use of diuretics, such as bendroflumethiazide or indapamide.' Cơ chế: thiazide và loop diuretics tăng tái hấp thu acid uric tại ống thận → tăng uric máu → tăng nguy cơ lắng đọng tinh thể urate trong khớp. DS cần khai thác thuốc đang dùng khi BN đến hỏi về đau khớp cấp tính.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "RA thường gặp ở phụ nữ nhiều hơn nam giới và khởi phát phổ biến nhất ở độ tuổi 30–40.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'RA is a common condition affecting more women than men and affecting 1% of the population. It most commonly arises in people in their 30s and 40s.' Tỷ lệ nữ:nam khoảng 2–3:1, liên quan đến hormonal factor. Trái với OA phổ biến hơn ở người lớn tuổi (>50), RA có thể xuất hiện ở người trẻ và trung niên, thậm chí trẻ em (juvenile idiopathic arthritis).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 48t, đau khớp cổ chân và bàn chân sau chấn thương nhẹ. DS muốn gợi ý topical NSAID. Những lưu ý nào cần kiểm tra trước khi tư vấn?",
            "opts": [
                "Tuổi, có mang thai không, tiền sử nhạy cảm aspirin/NSAID — vì topical NSAID vẫn có hấp thu toàn thân và có thể gây phản ứng dị ứng chéo",
                "Chỉ cần hỏi về dị ứng tá dược (hương liệu, paraben) vì thuốc bôi ngoài không ảnh hưởng hệ thống",
                "Không cần hỏi gì thêm vì topical NSAID là OTC và an toàn tuyệt đối"
            ],
            "ans": 0,
            "exp": "Blenkinsopp 2025: topical NSAID 'should not be used by patients who experience adverse reactions to aspirin, such as asthma, rhinitis or urticaria.' Dù hấp thu thấp, phản ứng dị ứng chéo aspirin-NSAID đã được báo cáo với topical NSAID. Cần hỏi: tiền sử nhạy cảm aspirin/NSAID, hen phế quản. Với phụ nữ trong độ tuổi sinh đẻ: hỏi có thai không (tránh dùng thai kỳ). Tuổi >12 tuổi mới dùng đa số sản phẩm.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol là thuốc không có tác dụng chống viêm đáng kể tại khớp, nên kém hiệu quả hơn ibuprofen khi OA có biểu hiện viêm rõ (sưng, nóng).",
            "ans": true,
            "exp": "Paracetamol có cơ chế chủ yếu tại trung ương (ức chế COX trung ương, hệ cannabinoid nội sinh) — không có tác dụng chống viêm tại khớp đáng kể như ibuprofen (ức chế COX ngoại biên). Với OA thuần túy đau không viêm: paracetamol hiệu quả tương đương NSAID ở nhiều BN và an toàn hơn. Khi OA có viêm hoạt động (tràn dịch, sưng nóng): NSAID hoặc topical NSAID ưu việt hơn paracetamol.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi về các sản phẩm bôi ngoài da chứa nicotinate (ethyl nicotinate, hexyl nicotinate) — nhóm này khác với NSAID và methyl salicylate ở điểm gì?",
            "opts": [
                "Nicotinate ức chế COX tại chỗ mạnh hơn methyl salicylate nhưng yếu hơn diclofenac gel",
                "Nicotinate gây giãn mạch da, tăng lưu lượng máu tại chỗ và cảm giác ấm nóng (rubefacient) — không ức chế COX; bất lợi là có thể gây hạ huyết áp nhẹ do giãn mạch toàn thân",
                "Nicotinate là dạng tiền chất niacin, cung cấp vitamin B3 tại chỗ để tái tạo sụn khớp"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: Nicotinate (ethyl/methyl/hexyl nicotinate) là rubefacient — được hấp thu qua da và gây giãn mạch bề mặt, tăng lưu lượng máu da → cảm giác ấm nóng. Cơ chế counterirritant chứ không phải ức chế COX. Blenkinsopp cảnh báo: 'Occasional reports of systemic adverse effects following absorption of nicotinates, such as dizziness or feelings of faintness, which are due to a drop in blood pressure following vasodilatation.'",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen OTC ngắn hạn (3–5 ngày) có thể dùng an toàn cho BN suy tim đang kiểm soát tốt, miễn là theo dõi cân nặng hàng ngày.",
            "ans": false,
            "exp": "Blenkinsopp 2025: 'Sodium and water retention may be caused by ibuprofen and other NSAIDs, and they are therefore best avoided in patients with congestive heart failure.' NSAID giữ natri và nước → làm nặng thêm suy tim (tăng tiền tải, tăng hậu tải) và tương tác với ACE inhibitor/lợi tiểu. Không có ngưỡng thời gian 'ngắn hạn an toàn' cho BN suy tim. Paracetamol là lựa chọn thay thế.",
            "icon": "⛔"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 65t bị OA đầu gối cả 2 bên, BMI 32, đang dùng metformin cho ĐTĐ týp 2, hỏi DS cách kiểm soát đau hiệu quả lâu dài. DS ưu tiên tư vấn chiến lược nào?",
            "opts": [
                "Dùng ibuprofen 400 mg × 3 lần/ngày liên tục và bổ sung glucosamine sulfate 1 500 mg/ngày",
                "Ưu tiên: giảm cân (BMI cao làm nặng OA gối), tập cơ đùi và aerobic nhẹ; dùng paracetamol khi cần và/hoặc diclofenac gel tại chỗ thay vì NSAID uống dài hạn",
                "Bổ sung omega-3 liều cao + vitamin D3 hàng ngày thay thế hoàn toàn thuốc giảm đau"
            ],
            "ans": 1,
            "exp": "Chiến lược tối ưu cho BN này: (1) Giảm cân — BMI 32 là yếu tố nặng thêm OA gối chính có thể can thiệp; (2) Tập thể dục phù hợp (bơi lội, xe đạp — ít tải gối); (3) Paracetamol + topical diclofenac gel ưu tiên hơn ibuprofen uống dài hạn ở NCT (nguy cơ GI, thận). NICE 2022 không khuyến cáo glucosamine. Omega-3 không đủ bằng chứng cho OA để thay thế thuốc.",
            "icon": "🏆"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN bị nghi ngờ nhiễm khuẩn khớp (septic arthritis) có thể tự điều trị bằng ibuprofen OTC trong 2–3 ngày trước khi đến viện.",
            "ans": false,
            "exp": "Blenkinsopp 2025: 'A joint infection is rare, but serious and occasionally fatal.' Nhiễm khuẩn khớp cần cấp cứu: chọc dịch khớp để cấy khuẩn, kháng sinh đường tĩnh mạch (cefazolin, vancomycin), đôi khi phẫu thuật dẫn lưu. Trì hoãn điều trị >24–48 giờ có thể dẫn đến phá hủy sụn khớp không hồi phục và nhiễm khuẩn huyết nguy hiểm tính mạng. Ibuprofen chỉ che lấp triệu chứng, không điều trị nhiễm khuẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 38t đau khớp vai phải, giảm biên độ vận động, xuất hiện từ từ trong 3 tháng, không có chấn thương, không sốt. DS khai thác tiền sử và gợi ý thêm điều gì?",
            "opts": [
                "Ngay lập tức bán ibuprofen gel và dặn xoa lên vai 4 lần/ngày",
                "Hỏi thêm: nghề nghiệp, vận động lặp đi lặp lại, tiền sử ĐTĐ (hay gặp với frozen shoulder); tư vấn OTC cho đau cơ xương khớp và khuyên khám BS nếu không đỡ sau 1–2 tuần",
                "Tư vấn nghỉ ngơi hoàn toàn vai trong 6 tuần, sau đó mới vận động trở lại"
            ],
            "ans": 1,
            "exp": "Đau vai giảm biên độ vận động tiến triển từ từ không do chấn thương có thể là frozen shoulder (viêm bao khớp dính — thường gặp ở ĐTĐ), hội chứng chèn ép (impingement syndrome) hoặc viêm gân chóp xoay. Nghề nghiệp và vận động lặp đều là yếu tố nguy cơ. DS khai thác tiền sử kỹ, tư vấn OTC hỗ trợ triệu chứng và khuyên khám BS nếu không cải thiện. Nghỉ ngơi hoàn toàn kéo dài thường không có lợi cho tình trạng này.",
            "icon": "🏥"
        }
    ],
    "dysmenorrhea": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích cho học viên: tại sao NSAIDs là lựa chọn đầu tay cho đau bụng kinh nguyên phát?",
            "opts": [
                "NSAIDs gây co mạch tử cung → giảm lượng máu kinh → giảm đau do áp lực",
                "NSAIDs ức chế enzyme cyclooxygenase → giảm tổng hợp prostaglandin E2 và F2α — tác nhân trực tiếp gây co thắt tử cung và đau",
                "NSAIDs có tác dụng an thần nhẹ → ức chế nhận thức cơn đau tại vỏ não"
            ],
            "ans": 1,
            "exp": "Cơ chế bệnh sinh đau bụng kinh nguyên phát: progesterone giảm trước kỳ kinh → tăng tổng hợp prostaglandin E2 và F2α tại nội mạc tử cung → co thắt cơ trơn tử cung, thiếu máu cục bộ → đau. NSAIDs ức chế COX-1/COX-2 → giảm tổng hợp prostaglandin → giảm co thắt và đau. Đây là cơ sở sinh lý rõ ràng cho việc dùng NSAIDs theo Rutter 2026 và Blenkinsopp 2025.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Theo tổng quan Cochrane 2015 (80 RCTs, n=5820) về NSAIDs trong đau bụng kinh, kết luận chính là gì?",
            "opts": [
                "NSAIDs không hiệu quả hơn paracetamol trong giảm đau bụng kinh khi dùng đúng liều",
                "NSAIDs hiệu quả hơn đáng kể so với giả dược và paracetamol, nhưng không có bằng chứng ưu thế rõ giữa các NSAIDs với nhau",
                "Ibuprofen vượt trội hơn tất cả NSAIDs khác với bằng chứng mạnh từ nhiều thử nghiệm đối đầu"
            ],
            "ans": 1,
            "exp": "Rutter 2026 trích dẫn Cochrane 2015 (Marjoribanks et al.) — 80 RCTs so sánh 20 NSAIDs khác nhau với giả dược, paracetamol và nhau: NSAIDs 'very effective' với dysmenorrhoea và 'significantly more effective than placebo and paracetamol, there was little evidence of superiority of any individual NSAID.' NSAIDs hiệu quả ở 80–85% phụ nữ. NNT ibuprofen là 2.4 vs 10 cho paracetamol (Blenkinsopp 2025).",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phác đồ ibuprofen OTC chuẩn cho đau bụng kinh ở người ≥12 tuổi là gì, và khi nào nên bắt đầu liều đầu tiên?",
            "opts": [
                "200 mg × 1 lần/ngày; bắt đầu khi đau dữ dội mới uống để tránh dùng thuốc không cần thiết",
                "200–400 mg × 3 lần/ngày, uống sau ăn; bắt đầu ngay khi đau bắt đầu hoặc khi kinh ra, uống đều đặn không chờ đau nặng",
                "400 mg × 6 lần/ngày; bắt đầu 1 tuần trước kỳ kinh để ngăn prostaglandin tích lũy"
            ],
            "ans": 1,
            "exp": "Rutter 2026: liều ibuprofen 200–400 mg × 3 lần/ngày, hầu hết cần liều 400 mg × 3. Blenkinsopp 2025 tư vấn BN: 'Take the first dose as soon as your pain begins or as soon as the bleeding starts, whichever comes first.' Dùng đều đặn 2–3 ngày thay vì chỉ khi đau dữ dội giúp duy trì nồng độ thuốc ổn định và hiệu quả hơn. Một nghiên cứu cho thấy bắt đầu sớm 1 ngày trước kỳ kinh cũng hiệu quả như bắt đầu khi đau.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Naproxen sodium OTC được chỉ định cho đau bụng kinh nguyên phát. Phác đồ dùng theo Blenkinsopp 2025 là gì?",
            "opts": [
                "500 mg × 2 lần/ngày × 7 ngày trong suốt kỳ kinh",
                "Uống 2 viên (500 mg) ban đầu, sau đó 1 viên (250 mg) sau 6–8 giờ nếu cần; tối đa 750 mg/ngày, tối đa 3 ngày",
                "250 mg × 4 lần/ngày, không giới hạn thời gian dùng"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 mô tả phác đồ naproxen sodium OTC cho đau bụng kinh nguyên phát: 'Two tablets (500 mg) are taken initially and then one tablet 6–8h later if needed. Maximum daily dose is 750 mg and maximum treatment time is 3 days.' Thời gian dùng ngắn hạn 3 ngày phù hợp với thời gian đau thường gặp trong đau bụng kinh nguyên phát. CCĐ tương tự ibuprofen (loét dạ dày, hen nhạy cảm aspirin).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 19t bị đau bụng kinh, đang dùng ibuprofen 400 mg × 3 lần/ngày nhưng đau vẫn còn nhiều. Theo CKS, DS có thể tư vấn thêm gì?",
            "opts": [
                "Tăng liều ibuprofen lên 600 mg × 4 lần/ngày tự ý để kiểm soát tốt hơn",
                "Thêm paracetamol vào phác đồ song song với ibuprofen — CKS khuyến cáo phối hợp nếu NSAID đơn thuần không đủ",
                "Đổi hoàn toàn sang paracetamol vì có thể BN không đáp ứng với NSAID"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 trích dẫn CKS: 'Offer paracetamol if NSAIDs are contraindicated or not tolerated, or in addition to an NSAID, if the response is insufficient.' Và trong tư vấn thực hành: 'Adding paracetamol can also help.' Phối hợp ibuprofen + paracetamol cho tác dụng giảm đau theo cơ chế khác nhau — bổ sung lẫn nhau mà không tăng nguy cơ NSAID. Tự tăng liều ibuprofen vượt 1 200 mg/ngày OTC là không được phép.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao aspirin ít được khuyến cáo hơn ibuprofen cho đau bụng kinh, dù cùng nhóm NSAID?",
            "opts": [
                "Aspirin không ức chế được prostaglandin tại tử cung vì không vượt qua được hàng rào sinh học vùng xương chậu",
                "Aspirin kém hiệu quả hơn (NNT 10 vs 2.4 của ibuprofen) và làm nặng hơn lượng kinh do tác dụng kháng tiểu cầu mạnh",
                "Aspirin gây nghiện và phụ thuộc nếu dùng đều đặn mỗi chu kỳ kinh nguyệt"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Aspirin also inhibits the synthesis of prostaglandins, but it is less effective in relieving the symptoms of dysmenorrhoea compared with ibuprofen. It also has the drawback that as an antiplatelet it can make menstrual bleeding heavier. One review found the number needed to treat for pain relief was 10 for aspirin compared with 2.4 for ibuprofen.' NNT cao hơn và tác dụng phụ làm nặng kinh nguyệt là lý do aspirin không phải first-line.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị đau bụng kinh kèm buồn nôn và nôn nhiều, không dung nạp được NSAID lúc đó. Lựa chọn giảm đau OTC phù hợp nhất là gì?",
            "opts": [
                "Aspirin vì dạng sủi bọt không kích thích dạ dày khi BN đang buồn nôn",
                "Paracetamol — không kích thích dạ dày, an toàn hơn khi BN có buồn nôn và nôn",
                "Ibuprofen gel bôi bụng để tránh đường uống khi đang buồn nôn"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Paracetamol is a useful treatment when the patient cannot take NSAIDs or aspirin. It is also useful when the patient is suffering with nausea and vomiting, as well as pain, since it does not irritate the stomach.' Paracetamol là lựa chọn an toàn với dạ dày trong trường hợp BN đang có buồn nôn. Ibuprofen gel không có chỉ định cho đau nội tạng (co thắt tử cung). Aspirin dạng sủi cũng vẫn gây ảnh hưởng dạ dày và làm nặng kinh.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Hyoscine butylbromide được dùng cho đau bụng kinh theo cơ chế nào và hiệu quả lâm sàng thực tế ra sao?",
            "opts": [
                "Kháng muscarinic → giãn cơ trơn tử cung; bằng chứng lâm sàng mạnh từ nhiều RCT chứng minh hiệu quả rõ ràng hơn NSAIDs",
                "Kháng muscarinic → giãn cơ trơn tử cung; tuy nhiên nghiên cứu RCT không chứng minh được lợi ích rõ hơn giả dược, và liều OTC quá thấp để có hiệu quả chống co thắt đáng kể",
                "Ức chế PDE (phosphodiesterase) → tăng cAMP → giãn cơ trơn; hiệu quả tương đương ibuprofen theo Cochrane"
            ],
            "ans": 1,
            "exp": "Rutter 2026: RCT với hyoscine butylbromide 'failed to demonstrate a significant effect compared with placebo or the comparator drug, aspirin.' Blenkinsopp 2025: 'the dose is so low (0.1 mg) that such an effect is unlikely.' Hyoscine OTC có liều kháng muscarinic tại tử cung quá thấp để có hiệu quả chống co thắt rõ ràng. NSAIDs vượt trội về bằng chứng. Hyoscine thích hợp hơn cho co thắt đường tiêu hóa.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau bụng kinh đang dùng amitriptyline (TCA) điều trị trầm cảm, muốn mua hyoscine butylbromide thêm. DS cảnh báo tương tác nào?",
            "opts": [
                "Amitriptyline làm giảm hấp thu hyoscine do cạnh tranh tại transporter đường ruột",
                "TCA + hyoscine butylbromide: tăng cộng hưởng tác dụng kháng cholinergic — khô miệng, táo bón, bí tiểu, mờ mắt",
                "Không có tương tác đáng kể vì hyoscine tác dụng chọn lọc tại cơ trơn tử cung, không phải hệ thần kinh trung ương"
            ],
            "ans": 1,
            "exp": "Rutter 2026 (Table 7.10): hyoscine butylbromide 'anticholinergic effects are potentiated if given with tricyclic antidepressants, antihistamines, butyrophenones, phenothiazines and disopyramide.' Blenkinsopp 2025: 'hyoscine is best avoided if any other drug with anticholinergic/antimuscarinic effects (e.g. tricyclic antidepressants) is being taken.' Cộng hưởng anticholinergic: khô miệng nặng, táo bón, bí tiểu, tim đập nhanh, lú lẫn ở NCT.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Alverine khác với hyoscine butylbromide ở điểm gì về tương tác thuốc và an toàn?",
            "opts": [
                "Alverine có thêm tác dụng kháng histamine H1 làm giảm đau tốt hơn, đồng thời tương tác ít hơn với TCA",
                "Alverine không có tương tác thuốc đáng kể và tác dụng phụ ít được ghi nhận hơn hyoscine — ưu thế khi BN đang dùng TCA hoặc thuốc kháng cholinergic khác",
                "Cả hai đều có tương tác tương tự với TCA vì đều là kháng muscarinic cùng nhóm"
            ],
            "ans": 1,
            "exp": "Rutter 2026 (Table 7.10): Alverine — 'None' (không có tương tác thuốc đáng kể). Hyoscine — tương tác với TCA, antihistamine, butyrophenone, phenothiazine. Blenkinsopp 2025 cũng xác nhận: alverine không kháng cholinergic điển hình mà là chất giãn cơ trơn qua cơ chế phức tạp hơn. Ưu điểm: an toàn hơn về tương tác. Nhược điểm: ít bằng chứng hiệu quả hơn NSAIDs.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 16t bị đau bụng kinh hỏi về drotaverin — cơ chế tác động khác với hyoscine butylbromide như thế nào?",
            "opts": [
                "Drotaverin ức chế thụ thể muscarinic M3 → giãn cơ trơn; hyoscine kích hoạt thụ thể adrenergic beta → giãn cơ",
                "Drotaverin ức chế phosphodiesterase (PDE) → tăng cAMP và cGMP nội bào → giãn cơ trơn không qua cơ chế muscarinic; hyoscine là kháng muscarinic trực tiếp",
                "Hai thuốc có cùng cơ chế ức chế muscarinic, chỉ khác về tốc độ khởi đầu tác dụng"
            ],
            "ans": 1,
            "exp": "Drotaverin ức chế enzyme PDE (đặc biệt PDE4) → tăng nồng độ cAMP nội bào tế bào cơ trơn → ức chế co rút cơ trơn không qua thụ thể muscarinic. Cơ chế không anticholinergic này cho phép drotaverin dùng cho BN glaucoma góc hẹp và phì đại tiền liệt tuyến — không có CCĐ anticholinergic của hyoscine. Drotaverin OTC tại Việt Nam, dùng cho co thắt đường tiêu hóa và cơ trơn tử cung (đau bụng kinh).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau bụng kinh kèm đau quặn dạ dày ruột, hỏi về drotaverin vs hyoscine butylbromide. DS tư vấn thế nào nếu BN có glaucoma góc hẹp?",
            "opts": [
                "Cả hai đều CCĐ với glaucoma góc hẹp vì đều là thuốc giãn cơ trơn gây giãn đồng tử",
                "Ưu tiên drotaverin — không có tác dụng anticholinergic, không ảnh hưởng đến nhãn áp; hyoscine CCĐ glaucoma góc hẹp",
                "Ưu tiên hyoscine vì có thể uống cùng thuốc nhỏ mắt pilocarpine để trung hòa tác dụng giãn đồng tử"
            ],
            "ans": 1,
            "exp": "Hyoscine butylbromide CCĐ glaucoma góc hẹp (Rutter 2026, Blenkinsopp 2025) vì tác dụng anticholinergic gây giãn đồng tử → nguy cơ tăng nhãn áp cấp. Drotaverin ức chế PDE, không có tác dụng anticholinergic → không ảnh hưởng nhãn áp → an toàn hơn cho BN glaucoma. DS nên ưu tiên drotaverin và kết hợp ibuprofen (nếu không có CCĐ) cho BN này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc tránh thai kết hợp (COC) giảm đau bụng kinh qua cơ chế nào — và tình trạng OTC/ETC tại Việt Nam là gì?",
            "opts": [
                "COC ức chế COX-2 tại nội mạc → giảm tổng hợp prostaglandin trực tiếp; OTC tại Việt Nam với đơn mua đầu tiên",
                "COC ức chế phóng noãn → giảm nội mạc tử cung → giảm thể tích kinh và tổng hợp prostaglandin → giảm đau; ETC tại Việt Nam, cần kê đơn BS",
                "COC gây teo nội mạc tử cung hoàn toàn → vô kinh, loại bỏ hoàn toàn cơn đau; OTC cho phụ nữ từ 18 tuổi"
            ],
            "ans": 1,
            "exp": "Rutter 2026: COC 'by inhibiting ovulation, they lessen the endometrial lining of the uterus, reducing menstrual fluid volume and prostaglandin production.' Blenkinsopp 2025: 'Women taking COCs usually find that the symptoms of dysmenorrhoea are reduced or eliminated altogether.' Cochrane 2023 (Schroll et al.): hiệu quả hơn giả dược. COC là ETC tại Việt Nam — cần kê đơn, đánh giá tiền sử bệnh (huyết khối, migraine, THA). DS tư vấn BN gặp BS nếu OTC không đủ hiệu quả.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 17t đau bụng kinh nặng, đã dùng ibuprofen 2 chu kỳ không giảm đáng kể. DS nên tư vấn thế nào?",
            "opts": [
                "Tăng liều ibuprofen lên 800 mg × 4 lần/ngày và theo dõi thêm 3 chu kỳ",
                "Chuyển khám BS — không đáp ứng NSAID sau 2 chu kỳ là dấu hiệu cần đánh giá nguyên nhân thứ phát (endometriosis, adenomyosis)",
                "Đổi sang aspirin vì có thể BN kháng với ibuprofen nhưng sẽ đáp ứng với aspirin"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'If the pain of primary dysmenorrhoea is not improved after two cycles of treatment with an NSAID, referral to the doctor would be advisable.' Không đáp ứng NSAID đúng liều sau 2 chu kỳ gợi ý nguyên nhân thứ phát (endometriosis là nguyên nhân thứ phát phổ biến nhất — chiếm đến 50% trường hợp) cần chẩn đoán xác định (có thể cần laparoscopy). Aspirin kém hiệu quả hơn ibuprofen — không phải giải pháp thay thế.",
            "icon": "🔄"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Acid mefenamic (mefenamic acid) — DS giải thích cho BN về tình trạng OTC/ETC tại Việt Nam và lý do phân loại này:",
            "opts": [
                "Acid mefenamic là OTC tại Việt Nam trong danh mục NSAIDs không kê đơn",
                "Acid mefenamic là ETC tại Việt Nam — cần kê đơn BS; dù thuộc nhóm NSAIDs nhưng hồ sơ an toàn và tác dụng phụ GI và huyết học cần theo dõi chặt hơn ibuprofen",
                "Acid mefenamic là OTC liều thấp (250 mg) và ETC liều cao (500 mg) tại Việt Nam"
            ],
            "ans": 0,
            "exp": "Acid mefenamic (fenamate NSAID) là OTC tại Việt Nam theo Danh mục thuốc không kê đơn của Cục QLD (cập nhật 2013 và các lần sửa đổi). Đây là điểm khác biệt quan trọng so với Anh quốc (POM) và một số nước châu Âu. Tại VN, DS có thể tư vấn và bán acid mefenamic không cần đơn BS — thường dùng cho đau bụng kinh (dysmenorrhea) và đau nhẹ-vừa. Liều chuẩn OTC: 500 mg liều đầu, sau đó 250–500 mg × mỗi 6–8h, sau ăn. Cơ chế kép: ức chế COX + đối kháng thụ thể prostaglandin → hiệu quả cao trong đau bụng kinh. Lưu ý: tối đa 7 ngày liên tiếp; thận trọng loét dạ dày, suy thận.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "TENS (Transcutaneous Electrical Nerve Stimulation) được nhắc đến trong điều trị đau bụng kinh. Bằng chứng và cách tiếp cận thực hành thế nào?",
            "opts": [
                "TENS không hiệu quả trong dysmenorrhea; Cochrane kết luận không nên dùng",
                "High-frequency TENS có bằng chứng hỗ trợ tốt nhất trong các can thiệp phi dùng thuốc cho dysmenorrhea; thiết bị có thể mua OTC",
                "TENS chỉ hiệu quả khi phối hợp với NSAIDs và không có giá trị độc lập"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'A systematic review of evidence found that high-frequency TENS may be of benefit.' Rutter 2026 (trích Proctor et al., Cochrane 2002): 'high-frequency TENS has the strongest body of evidence to support its use' trong các can thiệp phi dùng thuốc cho dysmenorrhea. Blenkinsopp 2025 cũng đề cập: 'Results from one study showed that the addition of TENS to ibuprofen significantly reduced time to noticeable pain relief.' TENS mua được OTC, dùng độc lập hoặc kết hợp NSAIDs.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau bụng kinh nặng, đang mang thai tuần 30 (không biết mình có thai) mua ibuprofen OTC. DS phát hiện và tư vấn thế nào?",
            "opts": [
                "Ibuprofen an toàn trong 3 tháng cuối thai kỳ vì dùng ngắn hạn 2–3 ngày",
                "CCĐ ibuprofen từ tuần 28 trở đi — nguy cơ đóng sớm ống động mạch thai nhi và suy thận thai nhi; cần hỏi BS ngay",
                "Dùng liều thấp 200 mg × 1 lần/ngày là đủ an toàn trong 3 tháng cuối"
            ],
            "ans": 1,
            "exp": "Rutter 2026: 'NSAIDs can be used in pregnancy but may delay labour, and their use, particularly in the last trimester, should be under medical supervision.' Thực tế, NSAIDs đặc biệt CCĐ từ tam cá nguyệt 3 (tuần 28+): ức chế PGE2 gây đóng sớm ductus arteriosus (tăng áp phổi thai nhi), giảm nước ối, suy thận thai. Phụ nữ mang thai 30 tuần không nên dùng ibuprofen OTC — cần BS chỉ định paracetamol và đánh giá nguyên nhân đau.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Magne B6 (magnesium + pyridoxine) có bằng chứng gì trong hỗ trợ đau bụng kinh, và DS nên tư vấn thế nào về kỳ vọng hiệu quả?",
            "opts": [
                "Bằng chứng mạnh từ nhiều RCT lớn: magie giảm đau bụng kinh hiệu quả tương đương ibuprofen, DS có thể tư vấn thay thế NSAIDs hoàn toàn",
                "Bằng chứng còn hạn chế — một số nghiên cứu nhỏ gợi ý magie có thể giảm co thắt tử cung qua ức chế kênh canxi; có thể dùng như bổ sung hỗ trợ nhưng không thay thế NSAID đầu tay",
                "Không có bằng chứng nào hỗ trợ magie trong dysmenorrhea; tuyệt đối không khuyến cáo"
            ],
            "ans": 1,
            "exp": "Rutter 2026 về các bổ sung dinh dưỡng: 'Most trials were conducted with low patient numbers and have reported inconsistent results or no benefit.' Không có thực phẩm bổ sung nào có bằng chứng chất lượng cao thay thế NSAID trong dysmenorrhea. Tuy nhiên, magie có cơ chế lý thuyết hợp lý (ức chế co thắt cơ trơn qua kênh Ca), có thể dùng như bổ sung an toàn. Tư vấn BN: không phải first-line, nhưng có thể thử hỗ trợ thêm.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bằng chứng về Omega-3 (EPA/DHA) trong điều trị đau bụng kinh theo Rutter 2026 là gì?",
            "opts": [
                "Omega-3 có bằng chứng mạnh tương đương NSAIDs — cạnh tranh với arachidonic acid giảm tổng hợp prostaglandin viêm",
                "Bằng chứng còn hạn chế và không nhất quán — không đủ dữ liệu chất lượng cao để khuyến cáo thay thế NSAID; có thể dùng như bổ sung an toàn",
                "Omega-3 CCĐ trong dysmenorrhea vì làm tăng prostaglandin series 3 gây đau nhiều hơn"
            ],
            "ans": 1,
            "exp": "Rutter 2026 (Pattanittum et al., Cochrane 2016): 'Limited evidence was found for fenugreek, fish oil, ginger, valerian and vitamin B1. The authors concluded there was currently no high-quality evidence to support any dietary supplements for dysmenorrhoea.' Omega-3 (fish oil) có cơ chế lý thuyết — thay thế arachidonic acid → giảm sản xuất prostaglandin PGE2/F2α — nhưng bằng chứng lâm sàng chưa đủ. An toàn khi dùng nhưng không phải first-line.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Naproxen sodium được phân loại là thuốc OTC tại Việt Nam và có trong danh sách 85 hoạt chất OTC của hệ thống.",
            "ans": true,
            "exp": "Naproxen sodium được liệt kê trong danh sách 85 hoạt chất OTC của hệ thống phần mềm. Tại Việt Nam, naproxen sodium ở một số dạng bào chế và liều lượng được phân loại OTC. Blenkinsopp 2025 mô tả phác đồ naproxen sodium OTC cho đau bụng kinh nguyên phát. Tuy nhiên, DS cần xác nhận danh mục OTC hiện hành của Cục QLD vì phân loại có thể thay đổi. Các CCĐ tương tự ibuprofen áp dụng cho naproxen.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hyoscine butylbromide là CCĐ với BN glaucoma góc hẹp và myasthenia gravis khi dùng cho đau bụng kinh.",
            "ans": true,
            "exp": "Rutter 2026: 'It (hyoscine hydrobromide) is contraindicated in patients with narrow-angle glaucoma and myasthenia gravis.' Blenkinsopp 2025: 'hyoscine is contraindicated in women with closed-angle glaucoma.' Tác dụng anticholinergic của hyoscine gây giãn đồng tử (nguy cơ glaucoma góc hẹp) và có thể làm nặng thêm yếu cơ trong myasthenia gravis (nơi dẫn truyền thần kinh cơ đã bị suy giảm). DS cần hỏi tiền sử hai bệnh này trước khi bán hyoscine.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen uống sau ăn được khuyến cáo để giảm kích thích dạ dày trong điều trị đau bụng kinh.",
            "ans": true,
            "exp": "Blenkinsopp 2025 và Rutter 2026 đều khuyến cáo NSAIDs 'should take with or after food to minimise GI problems.' Uống sau ăn giảm tiếp xúc trực tiếp của thuốc với niêm mạc dạ dày, giảm khó chịu GI tại chỗ. Tuy nhiên, không hoàn toàn ngăn được tác dụng phụ GI do cơ chế toàn thân (ức chế COX-1 → giảm prostaglandin bảo vệ niêm mạc). Trong dysmenorrhea, ibuprofen chỉ dùng vài ngày mỗi chu kỳ nên tác dụng phụ GI thường ít gặp.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol hiệu quả tương đương ibuprofen trong điều trị đau bụng kinh nguyên phát theo bằng chứng lâm sàng.",
            "ans": false,
            "exp": "Bằng chứng từ Cochrane 2015 (Marjoribanks et al.) và NNT: ibuprofen hiệu quả 'significantly more effective than placebo and paracetamol' với NNT 2.4 so với NNT 10 của aspirin (và paracetamol còn kém hơn ibuprofen vì không có tác dụng chống viêm tại tử cung). Blenkinsopp 2025: 'Paracetamol has little effect on the levels of prostaglandins involved in pain and inflammation; therefore, it is theoretically less effective in the treatment of dysmenorrhoea than NSAIDs.' Paracetamol là second-line khi CCĐ NSAIDs.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alverine có bằng chứng lâm sàng mạnh từ nhiều RCTs chứng minh hiệu quả vượt trội so với NSAIDs trong đau bụng kinh.",
            "ans": false,
            "exp": "Rutter 2026 về alverine: 'there is a lack of published evidence regarding its efficacy.' Alverine được cấp phép cho đau bụng kinh nguyên phát nhưng bằng chứng lâm sàng còn rất hạn chế — không có nhiều RCTs so sánh đầu với NSAIDs. NSAIDs có bằng chứng mạnh nhất với 80 RCTs trong Cochrane 2015. Alverine có thể là lựa chọn thay thế khi CCĐ NSAIDs và hyoscine, nhưng không phải do bằng chứng vượt trội.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc tránh thai kết hợp đường uống (COC) cần được kê đơn BS và không được bán OTC tại Việt Nam.",
            "ans": true,
            "exp": "COC là thuốc ETC tại Việt Nam, cần kê đơn BS. Tại Anh, COC cũng là POM (prescription-only). Lý do cần kê đơn: cần đánh giá tiền sử huyết khối, migraine có aura, THA nặng, hút thuốc ≥35 tuổi, bệnh gan, ung thư hormone-sensitive trước khi chỉ định. Blenkinsopp 2025: BN đang dùng COC vẫn còn đau → gặp BS (có thể thay đổi loại thuốc tránh thai hoặc xem xét nguyên nhân thứ phát). DS tư vấn OTC không thể kê COC.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Drotaverin có tác dụng kháng muscarinic, do đó cũng CCĐ với BN glaucoma góc hẹp tương tự hyoscine butylbromide.",
            "ans": false,
            "exp": "Drotaverin ức chế PDE (phosphodiesterase) → tăng cAMP nội bào → giãn cơ trơn theo cơ chế KHÔNG phụ thuộc muscarinic. Không phải kháng cholinergic → không gây giãn đồng tử → không làm tăng nhãn áp ở glaucoma góc hẹp. Đây là ưu điểm quan trọng của drotaverin so với hyoscine: an toàn hơn cho BN glaucoma, phì đại tiền liệt tuyến, và các CCĐ anticholinergic khác.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Aspirin dùng đều đặn trong kỳ kinh có thể làm lượng máu kinh nhiều hơn do tác dụng kháng tiểu cầu.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Aspirin also has the drawback that as an antiplatelet it can make menstrual bleeding heavier.' Aspirin ức chế COX-1 tiểu cầu không hồi phục → giảm thromboxane A2 → giảm kết tập tiểu cầu → kéo dài thời gian chảy máu. Tác dụng kháng tiểu cầu của aspirin không hồi phục suốt đời tiểu cầu (7–10 ngày) — khác với ibuprofen (hồi phục trong 24 giờ). Đây là lý do quan trọng không dùng aspirin thường xuyên cho dysmenorrhea.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Naproxen sodium OTC cho đau bụng kinh nguyên phát có thể dùng liên tục tối đa 7 ngày mỗi chu kỳ.",
            "ans": false,
            "exp": "Blenkinsopp 2025 quy định: naproxen sodium OTC cho đau bụng kinh nguyên phát có thời gian dùng tối đa là 3 ngày, không phải 7 ngày. Đau bụng kinh nguyên phát thường tự giảm sau 2-3 ngày theo sinh lý prostaglandin giảm dần. Nếu đau kéo dài trên 3 ngày mỗi chu kỳ, cần đánh giá nguyên nhân thứ phát.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Theo CKS, khi NSAID chưa đủ hiệu quả cho đau bụng kinh, nên tăng liều ibuprofen lên tối đa thay vì thêm paracetamol.",
            "ans": false,
            "exp": "CKS khuyến cáo: khi NSAID chưa đủ hiệu quả, nên THÊM PARACETAMOL song song, không phải tăng liều NSAID vượt ngưỡng OTC. Blenkinsopp 2025 trích CKS: offer paracetamol in addition to an NSAID if the response is insufficient. Phối hợp ibuprofen cộng paracetamol tận dụng cơ chế bổ sung mà không tăng nguy cơ GI của NSAID.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alverine được chỉ định cho trẻ từ 6 tuổi trở lên với liều 1 viên × 2 lần/ngày.",
            "ans": false,
            "exp": "Rutter 2026: alverine dành cho trẻ từ trên 12 tuổi trở lên, không phải 6 tuổi. Liều là 1 viên × 3 lần/ngày, không phải 2 lần/ngày. Hai điểm chính xác cần nhớ khi tư vấn alverine: giới hạn tuổi tối thiểu 12 tuổi và tần suất 3 lần mỗi ngày.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 17t bị đau bụng kinh lần đầu. Đau co thắt vùng bụng dưới bắt đầu cùng lúc với kinh ra, kèm buồn nôn nhẹ và đau lưng, kéo dài 2 ngày. Kinh đều. DS đánh giá thế nào?",
            "opts": [
                "Nhiều khả năng là đau bụng kinh thứ phát do endometriosis — cần chuyển BS ngay để làm laparoscopy",
                "Phù hợp với đau bụng kinh nguyên phát điển hình — bắt đầu đồng thời với kinh, co thắt, kèm triệu chứng toàn thân, kinh đều; có thể tư vấn OTC phù hợp",
                "Đây là triệu chứng PMS (hội chứng tiền kinh nguyệt) — đau xảy ra trước kỳ kinh 2 tuần"
            ],
            "ans": 1,
            "exp": "Rutter 2026: 'A typical presentation of primary dysmenorrhoea is of lower abdominal cramping pains shortly before (6 hours) and for 2 or possibly 3 days after the onset of bleeding. Commonly associated symptoms include fatigue, back pain, nausea or vomiting and diarrhoea. It is typically associated with young females who have recently started having regular periods.' BN này khớp hoàn toàn với mô tả nguyên phát. DS có thể tư vấn ibuprofen OTC và chỉ chuyển BS nếu không đáp ứng sau 2 chu kỳ.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 32t đến nhà thuốc kể đau bụng kinh xuất hiện từ 2–3 ngày TRƯỚC khi kinh ra, tiếp tục trong suốt kỳ kinh và đau ngày càng nặng hơn. Kèm đau khi quan hệ. DS đánh giá thế nào?",
            "opts": [
                "Đau bụng kinh nguyên phát nặng — tăng liều ibuprofen và theo dõi thêm 2–3 chu kỳ",
                "Đặc điểm gợi ý đau bụng kinh thứ phát (đau trước kỳ kinh + đau khi quan hệ + tuổi >30) — chuyển BS để loại trừ endometriosis và các nguyên nhân khác",
                "Hội chứng tiền kinh nguyệt (PMS) nặng — tư vấn dùng Magne B6 và nghỉ ngơi"
            ],
            "ans": 1,
            "exp": "Rutter 2026 red flags: 'Pain experienced days before menses' và 'pain that increases at the onset of menses' là dấu hiệu nghi ngờ thứ phát. Dyspareunia (đau khi quan hệ) gợi ý endometriosis, adenomyosis hoặc PID. Blenkinsopp 2025: đau bắt đầu trước kỳ kinh và tiếp tục trong toàn bộ kỳ kinh, kinh không đều → gợi ý thứ phát. Endometriosis thường chẩn đoán ở phụ nữ 30–40 tuổi. Cần chuyển BS khẩn.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 25t đau bụng kinh, kèm khí hư xanh vàng bất thường, sốt nhẹ 38°C và đau vùng xương chậu. DS xử trí thế nào?",
            "opts": [
                "Bán ibuprofen và metronidazole OTC để điều trị đồng thời viêm nhiễm vùng chậu",
                "Chuyển khám BS ngay trong ngày — sốt + khí hư bất thường gợi ý viêm vùng chậu (PID), cần kháng sinh theo kê đơn và đánh giá chuyên khoa",
                "Tư vấn vệ sinh phụ khoa và bán dung dịch vệ sinh âm đạo OTC"
            ],
            "ans": 1,
            "exp": "Rutter 2026 red flags: 'Fever and malaise — suggests possible infection or PID.' Blenkinsopp 2025 'When to refer': 'Presence of abnormal vaginal discharge' và 'Presence of fever.' PID (pelvic inflammatory disease) là nguyên nhân thứ phát gây đau bụng kinh cần kháng sinh đặc hiệu (thường phối hợp ceftriaxone + doxycycline + metronidazole theo phác đồ ETC). Tự điều trị OTC không đủ và có thể làm chậm điều trị, tăng nguy cơ biến chứng (vô sinh).",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 23t bị đau bụng kinh kèm kinh trễ 10 ngày, đau vùng hông phải và chảy ít máu âm đạo. DS nhận định red flag nào cần xử trí khẩn cấp nhất?",
            "opts": [
                "Đây là đau bụng kinh nặng do căng thẳng — bán ibuprofen và tư vấn nghỉ ngơi",
                "Nghi thai ngoài tử cung (ectopic pregnancy) — chuyển cấp cứu ngay; chậm trễ có thể gây vỡ vòi trứng và nguy hiểm tính mạng",
                "Nhiều khả năng là u nang buồng trứng — chuyển BS khám trong tuần"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 'When to refer': 'Pain with a late period (possibility of an ectopic pregnancy).' Rutter 2026 red flags: 'Ectopic pregnancy — symptoms include abdominal and pelvic pain, vaginal bleeding, shoulder tip pain and urinary and GI symptoms.' Bộ ba: kinh trễ + đau vùng xương chậu một bên + chảy máu âm đạo bất thường là triệu chứng kinh điển của thai ngoài tử cung — cấp cứu sản khoa. Không được trì hoãn để điều trị OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Theo Rutter 2026, phụ nữ >30 tuổi có triệu chứng đau bụng kinh MỚI xuất hiện hoặc ngày càng NẶNG hơn cần được chuyển BS trong khung thời gian nào?",
            "opts": [
                "Theo dõi OTC 3–4 chu kỳ trước khi quyết định chuyển BS",
                "Trong ngày (same-day referral) — gợi ý nguyên nhân có thể nghiêm trọng hơn bao gồm ác tính",
                "Trong vòng 1 tuần để BS có thể sắp xếp siêu âm"
            ],
            "ans": 1,
            "exp": "Rutter 2026 red flags: 'Females older than 30 years with new or worsening symptoms — suggests potentially a more sinister cause, such as malignancy — same-day referral.' Đau bụng kinh nguyên phát thường bắt đầu từ thanh thiếu niên và cải thiện theo tuổi. Khi phụ nữ >30 tuổi mới xuất hiện đau bụng kinh hoặc đau ngày càng nặng → phải loại trừ ung thư cổ tử cung, ung thư buồng trứng và các nguyên nhân thứ phát nghiêm trọng. Không được tự điều trị OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Điểm phân biệt quan trọng nhất giữa đau bụng kinh nguyên phát và PMS (hội chứng tiền kinh nguyệt) về thời điểm triệu chứng là gì?",
            "opts": [
                "PMS xảy ra trong kỳ kinh và mất sau 1–2 ngày; nguyên phát kéo dài suốt chu kỳ",
                "Nguyên phát: đau bắt đầu cùng lúc hoặc ngay trước khi kinh ra, mất trong 2–3 ngày. PMS: triệu chứng xuất hiện trong pha hoàng thể (sau rụng trứng, 2 tuần trước kinh) và hết khi kinh ra",
                "Hai bệnh không thể phân biệt được về thời điểm; chỉ phân biệt bằng xét nghiệm hormone"
            ],
            "ans": 1,
            "exp": "Rutter 2026: 'Symptoms occur between ovulation and menstruation' (PMS). 'Key distinguishing features between PMS and primary dysmenorrhoea are the lack of behavioural and mood symptoms in primary dysmenorrhoea and the difference in the timing of symptoms in relation to the menstrual cycle.' Nguyên phát: đau bắt đầu ≤6 giờ trước hoặc khi kinh ra, mất sau 2–3 ngày. PMS: triệu chứng cảm xúc/thể chất 2 tuần trước kinh, hết ngay khi kinh xuất hiện.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên phi dùng thuốc nào có bằng chứng hỗ trợ tốt nhất trong giảm đau bụng kinh nguyên phát?",
            "opts": [
                "Chườm đá lạnh lên bụng và nghỉ ngơi hoàn toàn trên giường",
                "Chườm ấm tại bụng dưới (heat pad/túi nước nóng) và tập thể dục nhẹ (bơi lội, đi bộ, yoga)",
                "Nhịn ăn hoàn toàn trong kỳ kinh để giảm co thắt tử cung do thức ăn"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Locally applied low-level heat may also help pain relief. Putting a heat pad or hot water bottle (wrapped in a tea towel) on the abdomen may help reduce pain.' Về tập thể dục: 'Although exercise might seem unattractive with period pain, keeping active can help to reduce pain, probably by raising endorphin levels and promoting a feeling of well-being. Gentle swimming, walking, cycling, yoga and Pilates may help.' Chườm NÓNG (không lạnh) và vận động nhẹ là hai biện pháp phi dùng thuốc được khuyến cáo.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Endometriosis là nguyên nhân thứ phát phổ biến nhất của đau bụng kinh và có thể ảnh hưởng đến 50% phụ nữ có kinh nguyệt.",
            "ans": true,
            "exp": "Rutter 2026: 'Endometriosis is the most common cause of secondary dysmenorrhoea; the exact incidence is unclear, but it may affect up to 50% of menstruating females. Many are asymptomatic.' Endometriosis xảy ra khi mô nội mạc tử cung phát triển ngoài tử cung (vòi trứng, buồng trứng, phúc mạc vùng chậu) → đau trước và trong kỳ kinh, đau khi quan hệ, triệu chứng tiêu hóa/tiết niệu theo chu kỳ. Thường chẩn đoán ở phụ nữ 30–40 tuổi.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau bụng kinh nguyên phát thường xảy ra ngay từ chu kỳ đầu tiên sau khi có kinh lần đầu (menarche).",
            "ans": false,
            "exp": "Rutter 2026: 'It is typically associated with young females who have recently (6–12 months) started having regular periods. However, there may be a gap of months or years between menarche and the onset of symptoms. This is because as many as 50% of females are anovulatory in the first year (and still 10% of females 8 years after the menarche). This is important to know because anovulatory cycles are usually pain free.' Đau bụng kinh chỉ xảy ra ở chu kỳ phóng noãn — vì chỉ chu kỳ phóng noãn mới có progesterone cao sau đó giảm → tăng prostaglandin.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Chườm lạnh (ice pack) là biện pháp phi dùng thuốc được khuyến cáo để giảm đau bụng kinh nguyên phát.",
            "ans": false,
            "exp": "Không đúng — biện pháp phi dùng thuốc được khuyến cáo cho đau bụng kinh nguyên phát là chườm ẤM (heat therapy), không phải chườm lạnh. Blenkinsopp 2025: 'Locally applied low-level heat may also help pain relief. Putting a heat pad or hot water bottle on the abdomen may help reduce pain. Warm baths or showers may help relieve pain.' Chườm lạnh phù hợp với viêm khớp cấp (gout, chấn thương) — không phải co thắt cơ trơn tử cung.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN đang dùng thuốc tránh thai kết hợp (COC) mà vẫn còn đau bụng kinh nặng nên được chuyển BS để đánh giá lại.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Women taking COCs usually find that the symptoms of dysmenorrhoea are reduced or eliminated altogether, and so any woman presenting with the symptoms of dysmenorrhoea and who is taking these pills is probably best referred to the GP surgery for further investigation (or change of pill).' COC thường giảm hoặc loại bỏ hoàn toàn đau bụng kinh. Nếu vẫn đau dù đang dùng COC → gợi ý nguyên nhân thứ phát (endometriosis, adenomyosis) cần đánh giá chuyên khoa.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Adenomyosis thường gặp hơn ở phụ nữ >35 tuổi và phụ nữ đã sinh nhiều con (increased parity).",
            "ans": true,
            "exp": "Rutter 2026: 'Adenomyosis tends to occur in females older than 35 years of age and in those with increased parity.' Adenomyosis xảy ra khi mô nội mạc tử cung phát triển vào trong cơ tử cung (myometrium) → tử cung lớn hơn, đau bụng kinh dữ dội, kinh nhiều, đau khi quan hệ, đầy bụng vùng xương chậu. Khác endometriosis (mô phát triển ngoài tử cung). Cần phân biệt vì cách điều trị khác nhau.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau bụng kinh nguyên phát điển hình thường giảm dần và tự khỏi sau khi phụ nữ sinh con lần đầu.",
            "ans": true,
            "exp": "Đây là quan sát lâm sàng được ghi nhận rộng rãi: nhiều phụ nữ báo cáo đau bụng kinh nguyên phát giảm đáng kể hoặc biến mất sau khi sinh con đầu tiên. Cơ chế đề xuất: sau sinh thường (vaginal delivery), cổ tử cung giãn rộng hơn → ít cản trở lưu thông máu kinh hơn; thay đổi thần kinh và cơ tử cung sau sinh cũng có thể đóng vai trò. Ngoài ra, đau bụng kinh nguyên phát cũng có xu hướng giảm theo tuổi ngay cả khi không sinh con.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tập thể dục nhẹ (đi bộ, bơi lội, yoga) trong kỳ kinh có thể giúp giảm đau bụng kinh qua cơ chế tăng endorphin.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'Although exercise might seem unattractive with period pain, keeping active can help to reduce pain, probably by raising endorphin levels and promoting a feeling of well-being. Gentle swimming, walking, cycling, yoga and Pilates may help.' Rutter 2026 cũng dẫn Cochrane (Armour et al., 2019): tập thể dục 3 lần/tuần × 1 giờ có thể hiệu quả (bằng chứng từ thấp đến trung bình). Tập thể dục an toàn và được khuyến cáo dù BN có thể cảm thấy không muốn vận động khi đau.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 20t bị hen phế quản kiểm soát tốt, hỏi mua ibuprofen cho đau bụng kinh. Chưa từng dùng NSAID bao giờ. DS tư vấn thế nào?",
            "opts": [
                "CCĐ tuyệt đối ibuprofen và mọi NSAID cho tất cả BN hen phế quản",
                "Thận trọng — hen phế quản tăng nguy cơ nhạy cảm aspirin/NSAID; hỏi BN đã từng dùng aspirin hay ibuprofen chưa và có phản ứng không; nếu chưa từng, bắt đầu thận trọng liều thấp",
                "Ibuprofen an toàn hoàn toàn vì hen phế quản chỉ phản ứng với aspirin không phải ibuprofen"
            ],
            "ans": 1,
            "exp": "Rutter 2026: 'bronchospasm can be triggered in people with asthma who have a history of hypersensitivity to aspirin or NSAIDs.' Blenkinsopp 2025: NSAIDs 'should be used with caution in anyone who is asthmatic because such patients are more likely to be sensitive to NSAIDs. The pharmacist can check if a person with asthma has used an NSAID before. If they have done so without problems, they can continue.' Ước tính ~4–10% BN hen có nhạy cảm NSAID (aspirin-exacerbated respiratory disease). Nếu chưa từng dùng → thận trọng, không phải CCĐ tuyệt đối.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi: 'Tôi bắt đầu uống ibuprofen ngay khi đau hay đợi đau nặng rồi mới uống?' DS tư vấn thế nào theo hướng dẫn thực hành?",
            "opts": [
                "Đợi đến khi đau nặng nhất rồi uống liều cao hơn sẽ hiệu quả hơn là uống sớm liều thường",
                "Bắt đầu ngay khi đau xuất hiện hoặc khi kinh ra (tùy cái nào đến trước); dùng đều đặn không đợi đau tái lại",
                "Uống 1 ngày trước kỳ kinh mỗi tháng để ngăn prostaglandin tích lũy hoàn toàn"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 tư vấn BN dùng NSAID: 'Take the first dose as soon as your pain begins or as soon as the bleeding starts, whichever comes first. This may prevent the pain from building up. Take the tablets regularly, for 2–3 days each period, rather than now and then when pain builds up.' Chiến lược chủ động (ngay khi đau hoặc kinh ra) hiệu quả hơn đợi đau nặng. Không khuyến cáo dùng phòng ngừa trước kỳ kinh thường quy theo OTC.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tập thể dục cường độ cao (chạy bộ nặng, gym nặng) trong kỳ kinh là biện pháp được Rutter 2026 khuyến cáo để giảm đau bụng kinh hiệu quả nhất.",
            "ans": false,
            "exp": "Khuyến cáo là tập thể dục NHẸ NHÀNG — không phải cường độ cao. Blenkinsopp 2025 đề cập: 'Gentle swimming, walking, cycling, yoga and Pilates may help.' Rutter 2026 dẫn Cochrane: 'Exercise performed three times a week for up to 1 hour may be effective.' Tập nặng trong kỳ kinh đau có thể làm tăng đau và mệt mỏi. Nguyên tắc: vận động nhẹ giúp tăng endorphin và tuần hoàn; không có bằng chứng tập nặng hiệu quả hơn.",
            "icon": "🏃"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hyoscine butylbromide là lựa chọn ưu tiên hơn NSAIDs trong đau bụng kinh nguyên phát vì hiệu quả vượt trội và ít tác dụng phụ hơn.",
            "ans": false,
            "exp": "Hoàn toàn ngược lại. NSAIDs (ibuprofen) là first-line với bằng chứng mạnh từ Cochrane 2015 (80 RCTs, 80–85% hiệu quả). Hyoscine butylbromide: Rutter 2026 dẫn RCT (Kemp 1972) 'failed to demonstrate a significant effect compared with placebo.' Blenkinsopp 2025: liều OTC hyoscine 'so low (0.1 mg) that such an effect is unlikely.' Hyoscine là lựa chọn thay thế thứ yếu khi CCĐ NSAIDs, không phải ưu tiên hơn.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS gặp BN nữ 15t bị đau bụng kinh nặng từ chu kỳ đầu tiên. Kinh đều, không có các triệu chứng bất thường khác. Xử trí OTC nào phù hợp nhất?",
            "opts": [
                "Chuyển BS ngay vì phụ nữ <16 tuổi không được dùng NSAID",
                "Tư vấn ibuprofen 200–400 mg × 3 lần/ngày (≥12 tuổi được dùng), bắt đầu khi đau, dùng sau ăn; kết hợp chườm ấm bụng",
                "Chỉ tư vấn paracetamol vì NSAIDs CCĐ cho thiếu niên"
            ],
            "ans": 1,
            "exp": "Rutter 2026 (Table 7.10): ibuprofen 'older than 12 years' — phù hợp với BN 15 tuổi. Naproxen sodium: 'older than 15 years.' Hyoscine và alverine cũng phù hợp với trẻ ≥12 tuổi. Paracetamol ít hiệu quả hơn NSAIDs cho dysmenorrhea. Đây là đau bụng kinh nguyên phát điển hình (tuổi trẻ, từ chu kỳ đầu sau khi kinh đều) — tư vấn ibuprofen OTC là phù hợp và hiệu quả nhất.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 28t đau bụng kinh kèm xuất huyết kinh nặng bất thường (thấm băng vệ sinh >1 giờ/miếng, kéo dài >7 ngày). DS xử trí thế nào?",
            "opts": [
                "Bán ibuprofen vì NSAID cũng giảm lượng kinh; theo dõi thêm 1–2 tháng",
                "Chuyển khám BS trong vòng thời gian hợp lý (as soon as practicable) — xuất huyết kinh nặng gợi ý nguyên nhân thứ phát (u xơ, polyp, adenomyosis, bệnh đông máu) cần đánh giá",
                "Tư vấn bổ sung sắt và không cần khám BS vì kinh nhiều ở phụ nữ trẻ là bình thường"
            ],
            "ans": 1,
            "exp": "Rutter 2026 red flags: 'Heavy or unexplained bleeding — more likely to be a secondary cause — as soon as practicable referral.' Blenkinsopp 2025 'When to refer': 'Abnormal bleeding.' Kinh ra nhiều bất thường gợi ý: u xơ tử cung (fibroids), polyp nội mạc, adenomyosis, rối loạn đông máu (von Willebrand), hoặc bệnh lý khác. Mặc dù NSAIDs có thể giảm lượng kinh nhẹ, không thể bán OTC mà không đánh giá nguyên nhân xuất huyết nặng.",
            "icon": "🏥"
        }
    ],
    "gout": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích cho BN: cơn gout cấp xảy ra do cơ chế nào gây đau và viêm tại khớp?",
            "opts": [
                "Thoái hóa sụn khớp tiến triển do chịu lực quá mức, giải phóng mảnh sụn vào dịch khớp",
                "Lắng đọng tinh thể monosodium urate (MSU) trong khớp kích hoạt đáp ứng viêm cấp tính do bạch cầu trung tính thực bào tinh thể",
                "Nhiễm vi khuẩn từ đường máu vào khớp gây phản ứng viêm màng hoạt dịch"
            ],
            "ans": 1,
            "exp": "Cơ chế bệnh sinh gout: tăng acid uric máu (hyperuricemia) → lắng đọng tinh thể monosodium urate (MSU) trong khớp và mô quanh khớp → bạch cầu trung tính nhận diện và thực bào tinh thể → phóng thích cytokine viêm (IL-1β, TNF-α) và enzym lysosome → viêm cấp tính dữ dội. Đây là viêm do tinh thể (crystal-induced arthritis), không phải nhiễm khuẩn hay thoái hóa.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Colchicine giảm viêm trong cơn gout cấp theo cơ chế nào — khác với NSAID?",
            "opts": [
                "Ức chế enzyme xanthine oxidase → giảm tổng hợp acid uric tại chỗ → giải phóng tinh thể dần dần",
                "Ức chế polymerization vi ống (microtubule) → ức chế di chuyển bạch cầu trung tính vào ổ viêm → cắt vòng viêm do tinh thể",
                "Ức chế COX-1 và COX-2 mạnh hơn ibuprofen → giảm prostaglandin tại khớp"
            ],
            "ans": 1,
            "exp": "Colchicine gắn vào tubulin, ức chế polymerization vi ống → bạch cầu trung tính mất khả năng di chuyển hóa học (chemotaxis) và thực bào tinh thể MSU → gián đoạn vòng viêm cấp. Không hạ uric acid, không ức chế COX. Tác dụng chọn lọc trên bạch cầu trung tính ở liều điều trị giải thích hiệu quả đặc hiệu trong viêm do tinh thể (gout, giả gout). Khác hoàn toàn với NSAID.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi có thể tự mua colchicine tại nhà thuốc mà không cần đơn BS không. DS giải thích thế nào?",
            "opts": [
                "Colchicine là OTC tại Việt Nam vì có nguồn gốc dược liệu tự nhiên (Colchicum autumnale)",
                "Colchicine là thuốc ETC tại Việt Nam — cần kê đơn BS; phổ điều trị hẹp và nguy cơ ngộ độc nghiêm trọng",
                "Colchicine OTC với liều 0.5 mg, ETC với liều 1 mg trở lên"
            ],
            "ans": 1,
            "exp": "Colchicine là ETC tại Việt Nam và hầu hết các quốc gia. Lý do: phổ điều trị hẹp (khoảng cách giữa liều điều trị và liều độc nhỏ); ngộ độc colchicine gây tiêu chảy nặng, ức chế tủy xương (giảm bạch cầu), suy đa cơ quan và tử vong. Cần kê đơn để kiểm soát liều chính xác và tương tác thuốc. Nguồn gốc dược liệu không ảnh hưởng phân loại OTC/ETC.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout đang dùng colchicine được BS kê, nay BS nội trú kê thêm clarithromycin điều trị viêm phổi. DS cần cảnh báo điều gì?",
            "opts": [
                "Clarithromycin làm giảm nồng độ colchicine qua cảm ứng CYP3A4 — cần tăng liều colchicine",
                "Clarithromycin ức chế CYP3A4 và P-glycoprotein → tăng nồng độ colchicine trong máu → nguy cơ ngộ độc colchicine nghiêm trọng",
                "Không có tương tác lâm sàng đáng kể giữa colchicine và kháng sinh nhóm macrolide"
            ],
            "ans": 1,
            "exp": "Clarithromycin (và erythromycin) ức chế mạnh CYP3A4 và P-glycoprotein — hai cơ chế chính chuyển hóa và thải trừ colchicine → nồng độ colchicine trong máu tăng gấp nhiều lần → ngộ độc: tiêu chảy nặng mất nước, giảm bạch cầu trung tính, tiêu cơ vân, suy thận, suy đa cơ quan. Nhiều ca tử vong đã được báo cáo. Cần thông báo BS để điều chỉnh hoặc dùng kháng sinh thay thế (doxycycline không ức chế CYP3A4).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng colchicine cho gout và atorvastatin 40 mg/ngày cho rối loạn lipid máu. DS lưu ý tương tác nào?",
            "opts": [
                "Atorvastatin làm giảm hấp thu colchicine qua cạnh tranh tại receptor đường ruột",
                "Colchicine + statin tăng nguy cơ độc tính cơ (myopathy, rhabdomyolysis) — cả hai ảnh hưởng đến chuyển hóa cơ",
                "Hai thuốc an toàn hoàn toàn khi phối hợp vì chuyển hóa qua các enzyme hoàn toàn khác nhau"
            ],
            "ans": 1,
            "exp": "Colchicine ức chế polymerization vi ống tế bào cơ → khi phối hợp với statin (vốn đã có nguy cơ gây myopathy qua ức chế tổng hợp CoQ10 và isoprenoid cơ) → tăng cộng hưởng độc cơ (myopathy) và nguy cơ rhabdomyolysis. Nguy cơ tăng cao hơn khi colchicine ở nồng độ cao (ví dụ do tương tác CYP3A4). Cần theo dõi triệu chứng đau cơ, yếu cơ, nước tiểu màu nâu.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phác đồ colchicine liều thấp hiện đại cho cơn gout cấp (theo hướng dẫn Anh/EULAR) là gì — và tại sao ưu tiên hơn liều cao truyền thống?",
            "opts": [
                "1 mg ngay khi khởi phát, sau đó 0.5 mg 1 giờ sau (tổng 1.5 mg đợt đầu) — hiệu quả tương đương liều cao nhưng ít tiêu chảy và tác dụng phụ GI hơn",
                "0.5 mg × 3 lần/ngày × 7 ngày — liều trải đều để duy trì nồng độ ổn định trong máu",
                "3 mg liều nạp đầu tiên, sau đó 0.5 mg × 3 lần/ngày — cần liều cao vì tinh thể MSU rất khó phân giải"
            ],
            "ans": 0,
            "exp": "Phác đồ colchicine liều thấp hiện đại (EULAR, ACR): 1 mg ngay lập tức + 0.5 mg 1 giờ sau. Nghiên cứu RCT (AGREE trial) cho thấy liều thấp hiệu quả tương đương phác đồ liều cao cũ (1 mg mỗi 2 giờ đến khi tiêu chảy hoặc hết đau) nhưng ít tác dụng phụ GI hơn đáng kể. Phác đồ liều cao cũ gây tiêu chảy dữ dội ở ~80% BN. Phác đồ liều thấp an toàn và dễ tuân thủ hơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao aspirin (ngay cả liều thấp 75–150 mg/ngày dùng tim mạch) bị khuyến cáo tránh dùng thêm ở BN gout?",
            "opts": [
                "Aspirin gây dị ứng chéo với colchicine, làm tăng nguy cơ phản ứng phản vệ",
                "Aspirin liều thấp cạnh tranh với urate tại cơ chế bài tiết ống thận → giảm thải urate → tăng acid uric máu → dễ kích hoạt hoặc kéo dài cơn gout",
                "Aspirin liều thấp làm tăng hòa tan tinh thể MSU trong ổ khớp, gây phóng thích đột ngột làm cơn đau nặng hơn"
            ],
            "ans": 1,
            "exp": "Aspirin tại liều thấp (<300 mg/ngày) ức chế bài tiết urate tại ống thận lượn gần qua ức chế transporter URAT1 → giảm thải urate niệu → tăng acid uric máu. Blenkinsopp 2025: 'It should not be used for gout or where there is history of gout, as it will aggravate the condition.' Paradox: aspirin liều cao (>3 g/ngày) lại có tác dụng uricosuric nhưng không dùng lâm sàng vì nguy cơ GI. DS không bán aspirin thêm cho BN gout.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ibuprofen OTC có vai trò gì trong xử trí gout cấp tại nhà thuốc, và giới hạn thực hành của DS là gì?",
            "opts": [
                "DS có thể tự chẩn đoán và bán ibuprofen cho mọi BN đau ngón chân bất kể tiền sử",
                "Với BN ĐÃ được BS chẩn đoán gout và tái phát quen thuộc, DS có thể tư vấn ibuprofen OTC trong khi chờ khám BS; lần đầu phải chuyển BS",
                "Ibuprofen CCĐ hoàn toàn với gout vì NSAID làm tăng tổng hợp acid uric"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'In patients who have had previous episodes, the diagnosis is clearer and ibuprofen (if tolerated) is a highly effective treatment that can be used while waiting for a GP surgery appointment.' Lần đầu nghi gout: phải chuyển BS để xác định chẩn đoán và loại trừ viêm khớp nhiễm khuẩn. Ibuprofen không làm tăng acid uric — đây là vai trò của aspirin. NSAID (ibuprofen) là điều trị chống viêm chuẩn cho cơn gout cấp.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout cấp có tiền sử suy thận mạn (eGFR 38 mL/phút) muốn dùng ibuprofen OTC. DS tư vấn thế nào?",
            "opts": [
                "Ibuprofen 200 mg × 2 lần/ngày an toàn vì liều thấp không ảnh hưởng thận",
                "Tránh ibuprofen vì NSAID giảm lưu lượng máu thận, làm nặng thêm suy thận; cần chuyển BS để chọn phương pháp thay thế",
                "Dùng ibuprofen bình thường nhưng uống nhiều nước 3 lít/ngày để bảo vệ thận"
            ],
            "ans": 1,
            "exp": "Suy thận là CCĐ của NSAID: ức chế PGE2 và PGI2 thận → giảm giãn mạch afferent → giảm lọc cầu thận → suy thận cấp trên nền mạn tính. Đặc biệt nguy hiểm ở BN suy thận đang có cơn gout (cơn gout đã tăng nguy cơ suy thận cấp do thận phải xử lý lượng urate lớn). Colchicine (ETC) cũng cần giảm liều khi suy thận nặng. Cần chuyển BS chọn corticosteroid hoặc colchicine liều điều chỉnh.",
            "icon": "🫘"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Allopurinol hoạt động theo cơ chế nào và tại sao KHÔNG được bắt đầu trong cơn gout cấp?",
            "opts": [
                "Ức chế xanthine oxidase → giảm tổng hợp uric acid; không bắt đầu trong cơn cấp vì làm thay đổi nồng độ urate đột ngột → tinh thể tái cơ cấu → kéo dài hoặc kích hoạt cơn mới",
                "Hòa tan trực tiếp tinh thể MSU tại khớp; không dùng trong cơn cấp vì gây kết tủa tinh thể hòa tan bất ngờ trong khớp",
                "Tăng bài tiết urate qua thận; không dùng trong cơn cấp vì gây sỏi thận cấp tính"
            ],
            "ans": 0,
            "exp": "Allopurinol ức chế enzyme xanthine oxidase → giảm chuyển hóa hypoxanthine và xanthine thành uric acid → giảm uric acid máu. Khi bắt đầu trong cơn gout cấp: thay đổi nồng độ urate đột ngột làm tinh thể MSU hiện có trong khớp tái cơ cấu (dissolution-reprecipitation) → kích hoạt cơn viêm mới và kéo dài cơn. Hướng dẫn (ACR, EULAR): bắt đầu allopurinol sau khi cơn cấp đã dịu (thường 2–4 tuần) và thường kết hợp colchicine dự phòng 3–6 tháng đầu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng allopurinol 300 mg/ngày phòng ngừa gout tái phát. Hôm nay lại bị cơn gout cấp ở mắt cá chân. BN hỏi có cần ngưng allopurinol không. DS trả lời thế nào?",
            "opts": [
                "Ngưng allopurinol ngay vì thuốc đang gây ra cơn gout cấp hiện tại",
                "KHÔNG ngưng allopurinol — ngưng đột ngột làm uric acid tăng trở lại nhanh và kéo dài cơn; tiếp tục liều cũ, thêm điều trị chống viêm cơn cấp và gặp BS",
                "Tăng liều allopurinol lên 600 mg/ngày để hạ uric acid nhanh hơn, kết thúc cơn sớm hơn"
            ],
            "ans": 1,
            "exp": "Ngưng allopurinol đột ngột trong cơn gout cấp làm uric acid máu tăng trở lại nhanh → kéo dài/trầm trọng thêm cơn hiện tại và tăng nguy cơ cơn tiếp theo. Hướng dẫn ACR 2020 và EULAR: tiếp tục allopurinol trong cơn cấp, thêm điều trị chống viêm (NSAIDs, colchicine, corticosteroid). Nguyên tắc: dùng thuốc hạ uric ổn định một mức nồng độ, đột ngột thay đổi (dù tăng hay giảm) đều có thể kích hoạt cơn gout.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS được hỏi về losartan (ARB điều trị THA) và gout. Thông tin nào đúng về tác dụng của losartan trên acid uric?",
            "opts": [
                "Losartan làm tăng acid uric máu như các ARB khác vì ức chế thụ thể AT1 tại ống thận",
                "Losartan có tác dụng uricosuric nhẹ (tăng thải urate qua thận) — trong số các ARB, losartan là lựa chọn ưu tiên hơn cho BN THA có gout",
                "Mọi ARB đều có tác dụng uricosuric tương đương nhau vì cùng cơ chế ức chế AT1"
            ],
            "ans": 1,
            "exp": "Losartan có tác dụng uricosuric độc lập với tác dụng ARB — ức chế URAT1 (urate transporter) tại ống thận gần → tăng bài tiết urate niệu → giảm uric acid máu nhẹ. Đây là tính chất duy nhất của losartan, không có ở các ARB khác (valsartan, irbesartan, telmisartan). Với BN THA cần điều trị gout dài hạn, lựa chọn losartan thay vì ARB khác hoặc thiazide (gây tăng uric acid) là có lợi hơn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout cấp không thể dùng ibuprofen (loét dạ dày) và chưa được BS kê colchicine. DS có thể tư vấn gì trong khi BN chờ gặp BS?",
            "opts": [
                "Bán aspirin 300 mg vì ít ảnh hưởng dạ dày hơn ibuprofen",
                "Paracetamol hỗ trợ giảm đau nhất định, kết hợp chườm đá + nâng cao chân; chuyển BS trong ngày để được kê colchicine hoặc corticosteroid",
                "Bán naproxen sodium OTC vì ít ảnh hưởng dạ dày hơn ibuprofen"
            ],
            "ans": 1,
            "exp": "Khi CCĐ NSAID và chưa có colchicine: paracetamol có thể giảm đau một phần (không chống viêm nên kém hiệu quả hơn với gout) kết hợp biện pháp phi dùng thuốc (chườm lạnh, nâng cao chân). Aspirin CCĐ gout tuyệt đối (làm tăng acid uric). Naproxen sodium cũng là NSAID — CCĐ với tiền sử loét dạ dày tương tự ibuprofen. Cần chuyển BS khẩn để được colchicine hoặc corticosteroid ngắn hạn — hai lựa chọn thay thế NSAID khi có CCĐ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thuốc nhóm nào là lựa chọn điều trị khi BN gout cấp có CCĐ với cả NSAID và colchicine?",
            "opts": [
                "Paracetamol liều tối đa 4 g/ngày — đủ chống viêm để kiểm soát cơn gout cấp",
                "Corticosteroid ngắn hạn (prednisolone uống hoặc triamcinolone tiêm khớp) — ETC, cần kê đơn BS",
                "Kháng sinh fluoroquinolone vì cơn gout cấp thực chất là phản ứng viêm nhiễm khuẩn"
            ],
            "ans": 1,
            "exp": "ACR 2020 và EULAR: khi CCĐ cả NSAID (loét, suy thận, suy tim) và colchicine (suy thận nặng, tương tác nghiêm trọng): corticosteroid ngắn hạn là lựa chọn thay thế — prednisolone 30–35 mg/ngày × 3–5 ngày uống hoặc triamcinolone tiêm nội khớp. Đây là ETC, cần BS kê đơn. Paracetamol không đủ chống viêm cho gout. Kháng sinh không có chỉ định (gout không phải nhiễm khuẩn).",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thiazide diuretics (bendroflumethiazide, hydrochlorothiazide) làm tăng nguy cơ gout qua cơ chế nào?",
            "opts": [
                "Tăng phân giải ATP → tăng sản xuất hypoxanthine và xanthine → tăng acid uric",
                "Cạnh tranh bài tiết urate tại ống thận gần qua cùng transporter OAT → giảm thải urate → tăng acid uric máu",
                "Tăng hấp thu purine từ thức ăn tại ruột non thông qua cơ chế chưa rõ"
            ],
            "ans": 1,
            "exp": "Thiazide và loop diuretics cạnh tranh với urate tại transporter OAT1/OAT3 ở ống thận gần (bài tiết) và tăng tái hấp thu urate qua URAT1 → giảm thải urate niệu → tăng acid uric máu → tăng nguy cơ gout. Blenkinsopp 2025: 'Gout is sometimes associated with the use of diuretics, such as bendroflumethiazide or indapamide.' DS phải khai thác thuốc đang dùng của BN gout.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout đang dùng cyclosporine (thuốc ức chế miễn dịch sau ghép thận) bị cơn gout cấp. DS cần lưu ý đặc biệt điều gì về colchicine?",
            "opts": [
                "Cyclosporine không tương tác với colchicine — có thể dùng liều chuẩn an toàn",
                "Cyclosporine ức chế P-glycoprotein và CYP3A4 → tăng nồng độ colchicine lên gấp nhiều lần → nguy cơ ngộ độc colchicine nghiêm trọng — cần BS điều chỉnh liều nghiêm ngặt",
                "Colchicine làm giảm hiệu quả cyclosporine do cảm ứng enzyme chuyển hóa"
            ],
            "ans": 1,
            "exp": "Cyclosporine là chất ức chế P-gp và CYP3A4 mạnh → nồng độ colchicine tăng gấp đáng kể → nguy cơ ngộ độc nghiêm trọng. Đây là tương tác đặc biệt nguy hiểm ở BN ghép tạng: colchicine gây myopathy, rhabdomyolysis, ức chế tủy xương. Với BN này, DS tuyệt đối không tự ý tư vấn OTC; phải thông báo BS để lựa chọn thuốc thay thế an toàn (có thể corticosteroid tiêm khớp thay vì colchicine uống).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout đang dùng furosemide 40 mg/ngày cho suy tim. Cơn gout cấp xuất hiện. Ibuprofen bị CCĐ (suy tim + suy thận nhẹ). Thuốc OTC nào DS có thể gợi ý trong khi chờ BS?",
            "opts": [
                "Aspirin 600 mg để giảm đau và chống viêm tạm thời",
                "Paracetamol 1 000 mg × 3 lần/ngày kết hợp chườm lạnh — hỗ trợ giảm đau trong khi chuyển BS khẩn",
                "Ibuprofen gel bôi tại khớp — an toàn hoàn toàn vì không hấp thu vào máu"
            ],
            "ans": 1,
            "exp": "Aspirin CCĐ gout (làm tăng uric acid). Ibuprofen CCĐ suy tim và suy thận (ngay cả topical vẫn có hấp thu toàn thân nhỏ — thận trọng với BN suy tim/thận). Paracetamol là lựa chọn an toàn nhất: không ảnh hưởng tim mạch, thận (ở liều điều trị chuẩn, không suy gan), không tương tác furosemide. Giảm đau hỗ trợ trong khi BN được chuyển BS để kê colchicine liều điều chỉnh hoặc corticosteroid.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao paracetamol kém hiệu quả hơn ibuprofen trong cơn gout cấp, dù có thể dùng giảm đau?",
            "opts": [
                "Paracetamol bị phân giải nhanh bởi môi trường acid trong ổ viêm gout, giảm hấp thu tại chỗ",
                "Paracetamol hầu như không có tác dụng chống viêm tại khớp — không ức chế đáng kể COX ngoại biên; trong khi gout là viêm do tinh thể cần thuốc chống viêm mạnh",
                "Paracetamol làm tăng nhẹ acid uric máu qua cạnh tranh bài tiết ở ống thận"
            ],
            "ans": 1,
            "exp": "Gout cấp là phản ứng viêm dữ dội do tinh thể MSU — cần thuốc chống viêm mạnh (NSAID ức chế COX ngoại biên, colchicine ức chế bạch cầu trung tính, corticosteroid). Paracetamol tác dụng chủ yếu trung ương, hầu như không có tác dụng chống viêm tại khớp → giảm đau nhất định nhưng không cắt viêm. Chỉ dùng paracetamol khi không có lựa chọn khác, và nhấn mạnh đây chỉ là hỗ trợ tạm thời.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Colchicine là thuốc OTC tại Việt Nam vì có nguồn gốc từ thực vật tự nhiên (Colchicum autumnale).",
            "ans": false,
            "exp": "Colchicine là thuốc ETC tại Việt Nam bất kể nguồn gốc tự nhiên hay tổng hợp. Phân loại OTC/ETC không dựa trên nguồn gốc mà dựa trên hồ sơ an toàn. Colchicine có phổ điều trị hẹp: liều điều trị 1–2 mg/ngày gần với liều gây độc; ngộ độc colchicine cấp (tiêu chảy nặng, ức chế tủy, suy đa cơ quan, tử vong) đã được ghi nhận ngay cả ở liều tương đối thấp khi có tương tác thuốc.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Aspirin liều thấp (75 mg/ngày) dùng phòng ngừa tim mạch làm tăng acid uric máu và có thể kích hoạt cơn gout.",
            "ans": true,
            "exp": "Aspirin liều thấp ức chế bài tiết urate tại ống thận lượn gần qua transporter URAT1 và OAT → giảm thải urate niệu → tăng acid uric máu. Blenkinsopp 2025 cảnh báo: aspirin 'should not be used for gout or where there is history of gout.' Tuy nhiên, trong thực tế, BN có bệnh tim mạch cần aspirin phòng ngừa thứ phát — BS sẽ cân nhắc lợi ích/nguy cơ và có thể phối hợp với allopurinol.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen là lựa chọn chống viêm OTC hữu ích cho BN gout cấp tái phát đã được BS chẩn đoán, miễn là không có CCĐ với NSAID.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'In patients who have had previous episodes, the diagnosis is clearer and ibuprofen (if tolerated) is a highly effective treatment that can be used while waiting for a GP surgery appointment.' Ibuprofen 400 mg × 3 lần/ngày là NSAID OTC hiệu quả trong gout cấp — giảm viêm do ức chế COX. Điều kiện: phải có tiền sử được BS chẩn đoán gout; không có CCĐ NSAID (loét dạ dày, suy thận, suy tim, đang dùng warfarin).",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Allopurinol nên được bắt đầu ngay trong cơn gout cấp để hạ uric acid nhanh và kết thúc cơn sớm hơn.",
            "ans": false,
            "exp": "Không — bắt đầu allopurinol trong cơn gout cấp là sai. Thay đổi nồng độ urate đột ngột khi bắt đầu allopurinol làm tinh thể MSU tái cơ cấu (partial dissolution followed by re-precipitation) → kích hoạt hoặc kéo dài cơn viêm. Hướng dẫn ACR 2020 và EULAR: bắt đầu allopurinol ít nhất 2–4 tuần sau khi cơn cấp đã dịu hoàn toàn, thường kèm colchicine prophylaxis 3–6 tháng đầu để giảm nguy cơ flare khi bắt đầu ULT.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Colchicine tác dụng phụ tiêu chảy và buồn nôn phổ biến là do kích thích thụ thể muscarinic đường ruột.",
            "ans": false,
            "exp": "Tác dụng phụ GI của colchicine (tiêu chảy, buồn nôn, đau bụng) không phải do kích thích muscarinic mà do tác dụng cơ học của thuốc trên vi ống tế bào biểu mô ruột — ức chế polymerization vi ống → giảm chức năng tế bào biểu mô → giảm hấp thu nước và điện giải tại ruột. Đây cũng là lý do tại sao tác dụng phụ GI tỷ lệ thuận với liều — phác đồ liều thấp hiện đại ít gây tiêu chảy hơn đáng kể.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Furosemide (lợi tiểu quai) là yếu tố nguy cơ gây tăng acid uric và thúc đẩy cơn gout.",
            "ans": true,
            "exp": "Furosemide (loop diuretic) làm giảm thể tích dịch ngoại bào → tăng tái hấp thu urate tại ống thận (cơ chế gian tiếp qua kích hoạt hệ renin-angiotensin) và cạnh tranh trực tiếp với urate tại OAT → giảm thải urate → tăng acid uric máu → nguy cơ gout. Các BN suy tim dùng furosemide thường có nồng độ uric acid cao hơn bình thường. DS cần lưu ý khi BN dùng furosemide bị đau khớp đột ngột.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Corticosteroid ngắn hạn (prednisolone uống) là lựa chọn điều trị thay thế hợp lý cho BN gout cấp có CCĐ với cả NSAID và colchicine.",
            "ans": true,
            "exp": "ACR 2020 và EULAR xác nhận corticosteroid ngắn hạn là lựa chọn thứ ba cho gout cấp khi CCĐ NSAID và colchicine. Prednisolone 30–35 mg/ngày × 3–5 ngày hoặc tiêm triamcinolone nội khớp. Hiệu quả chống viêm tốt, không ảnh hưởng acid uric. Cần BS kê đơn. Lưu ý: không dùng kéo dài vì nguy cơ tăng đường huyết (đặc biệt BN ĐTĐ), loãng xương, nhiễm trùng.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 52t đến nhà thuốc lúc 8 giờ sáng, chưa ngủ được vì đau dữ dội ngón chân cái trái từ nửa đêm qua, khớp đỏ bóng, nóng, sưng to, không chịu đựng được khi chăn ga chạm vào. Không có tiền sử bệnh khớp nào. DS xử trí thế nào?",
            "opts": [
                "Bán ibuprofen 400 mg và colchicine OTC, điều trị tại nhà trong 2–3 ngày rồi mới đánh giá",
                "Bán ibuprofen OTC và chuyển BN khám BS trong ngày — đây là lần đầu, cần chẩn đoán xác định và loại trừ nhiễm khuẩn khớp",
                "Chuyển cấp cứu ngay vì bất kỳ khớp nào sưng đỏ đột ngột đều là cấp cứu"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'It is probably best that all patients with suspected acute gout are referred to the GP surgery for assessment. It may be necessary to exclude infection as the cause.' Lần đầu nghi gout: không tự chẩn đoán tại nhà thuốc; cần loại trừ viêm khớp nhiễm khuẩn (septic arthritis — cùng triệu chứng nhưng nguy hiểm tính mạng). DS có thể cho ibuprofen OTC hỗ trợ trong khi BN chờ khám, nhưng phải khuyến cáo khám BS trong ngày.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Vị trí khớp điển hình nhất bị ảnh hưởng trong cơn gout cấp đầu tiên là gì?",
            "opts": [
                "Khớp gối (cả hai bên đồng thời)",
                "Khớp bàn ngón chân cái thứ nhất (metatarsophalangeal — MTP1) — còn gọi là podagra",
                "Các khớp ngón tay nhỏ (khớp PIP cả hai bàn tay)"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'The most usual presentation is sudden severe pain in the metatarsal–phalangeal joint (base) of the big toe.' Vị trí này (MTP1) gọi là podagra — gặp trong 50–70% cơn gout cấp đầu tiên vì nhiệt độ thấp hơn (xa tim) thuận lợi lắng đọng tinh thể MSU. Gout cũng có thể gặp ở mắt cá chân, đầu gối, cổ tay, khuỷu tay nhưng ít phổ biến hơn ở đợt đầu.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Đặc điểm lâm sàng nào KHÔNG điển hình cho gout cấp và gợi ý cần loại trừ viêm khớp nhiễm khuẩn?",
            "opts": [
                "Khớp sưng nóng đỏ dữ dội, đau dữ dội khi chạm nhẹ",
                "Khởi phát đột ngột ban đêm, đau đạt đỉnh trong 12–24 giờ",
                "Sốt cao 39.5°C + run lạnh, không có tiền sử gout, không dùng thuốc liên quan uric acid"
            ],
            "ans": 2,
            "exp": "Sốt cao + run lạnh ở BN không có tiền sử gout làm tăng nghi ngờ viêm khớp nhiễm khuẩn (septic arthritis). Gout cấp có thể kèm sốt nhẹ nhưng thường không cao và không có run lạnh. Khi không thể phân biệt lâm sàng giữa gout và nhiễm khuẩn khớp → bắt buộc chọc dịch khớp để phân tích tinh thể và cấy khuẩn. Nhiễm khuẩn khớp cấp cứu: kháng sinh IV khẩn cấp, đôi khi phẫu thuật.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Nếu không điều trị, cơn gout cấp điển hình thường kéo dài bao lâu rồi tự giới hạn?",
            "opts": [
                "1–2 ngày — cơn rất ngắn và tự khỏi nhanh",
                "7–14 ngày — tự giới hạn nhưng đau dữ dội trong giai đoạn đầu",
                "3–6 tuần — kéo dài đến khi tinh thể hòa tan hoàn toàn"
            ],
            "ans": 1,
            "exp": "Cơn gout cấp không điều trị thường tự giới hạn trong 7–14 ngày. Cơ chế: cơ thể dần phân giải tinh thể MSU và giảm đáp ứng viêm. Tuy nhiên, đau trong 24–72 giờ đầu cực kỳ dữ dội (BN thường mô tả như 'đốt cháy' hoặc 'không thể chịu đựng') — điều trị thuốc rút ngắn cơn và giảm mức độ đau đáng kể. Không điều trị cũng có nguy cơ gout mạn tính và tophus nếu tái phát nhiều.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN gout tiền sử 5 lần trong 3 năm, BS vừa bắt đầu allopurinol và dặn theo dõi. BN thắc mắc: 'Tại sao tôi vẫn bị cơn gout ngay tuần đầu uống allopurinol?' DS giải thích thế nào?",
            "opts": [
                "Allopurinol bị kháng thuốc vì dùng quá nhiều colchicine trước đó",
                "Khi bắt đầu allopurinol, thay đổi nồng độ urate đột ngột có thể kích hoạt cơn gout ngắn hạn — đây là phản ứng bình thường, tiếp tục allopurinol và điều trị cơn cấp song song",
                "Allopurinol không phù hợp với BN này, cần đổi sang febuxostat ngay lập tức"
            ],
            "ans": 1,
            "exp": "Paradox của ULT (urate-lowering therapy): khi bắt đầu allopurinol, uric acid máu giảm đột ngột → tinh thể MSU hiện diện trong các ổ lắng đọng tái cơ cấu (partial dissolution) → giải phóng các tinh thể nhỏ vào dịch khớp → kích hoạt cơn gout. Phản ứng này phổ biến trong 3–6 tháng đầu dùng ULT. Giải pháp: tiếp tục allopurinol không ngưng + colchicine prophylaxis 3–6 tháng đầu để phòng các cơn flare.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên chế độ ăn nào quan trọng nhất DS cần tư vấn cho BN gout?",
            "opts": [
                "Tránh hoàn toàn mọi loại rau củ vì tất cả đều chứa purine",
                "Hạn chế thịt đỏ, nội tạng động vật, hải sản có vỏ và bia; tăng sản phẩm sữa ít béo và uống đủ nước",
                "Ăn chay hoàn toàn và tránh mọi protein động vật để loại bỏ hoàn toàn nguồn purine"
            ],
            "ans": 1,
            "exp": "Thức ăn cao purine cần hạn chế: nội tạng (gan, thận, óc, tim), thịt đỏ, một số hải sản (tôm, cua, cá hồi, sardine, cá thu). Bia đặc biệt nguy hiểm vì chứa cả ethanol và guanosine (purine). Rượu vang đỏ ít ảnh hưởng hơn bia. Rau củ có purine (đậu Hà Lan, măng tây, nấm) KHÔNG làm tăng nguy cơ gout theo nghiên cứu hiện đại — không cần kiêng. Sữa ít béo và sữa chua có tác dụng bảo vệ nhẹ.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN gout hỏi: 'Bia hay rượu mạnh, cái nào nguy hiểm hơn cho gout của tôi?' DS giải thích thế nào?",
            "opts": [
                "Rượu mạnh nguy hiểm hơn vì nồng độ ethanol cao hơn gây nhiều lắng đọng urate hơn",
                "Bia nguy hiểm hơn rượu mạnh — ngoài ethanol, bia còn chứa guanosine (purine nucleoside) tạo ra uric acid khi chuyển hóa",
                "Cả hai như nhau vì cùng lượng ethanol, tác dụng trên acid uric như nhau"
            ],
            "ans": 1,
            "exp": "Bia nguy hiểm hơn rượu mạnh cho gout theo nghiên cứu dịch tễ vì hai cơ chế: (1) Ethanol trong mọi loại rượu làm tăng sản xuất lactate → cạnh tranh với urate tại thận → giảm thải urate; (2) Bia chứa guanosine (purine nucleoside) — chuyển hóa thành xanthine và cuối cùng thành uric acid. Rượu vang đỏ ít nguy cơ hơn bia đáng kể. Tuy nhiên lý tưởng nhất là hạn chế tất cả rượu bia.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khi nào DS nên hướng dẫn BN gout cấp gặp BS để xem xét điều trị dự phòng dài hạn bằng allopurinol?",
            "opts": [
                "Ngay sau cơn gout đầu tiên, bất kể tần suất tái phát",
                "Khi cơn gout tái phát thường xuyên, có tophus, bệnh thận mạn liên quan urate, hoặc có sỏi thận urate",
                "Chỉ khi BN có xét nghiệm acid uric máu >600 µmol/L (>10 mg/dL)"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: 'Patients with repeated episodes should be on a preventative treatment, such as allopurinol.' Chỉ định xem xét ULT (allopurinol ETC): (1) ≥2 cơn gout/năm; (2) Tophus; (3) Sỏi thận urate; (4) Bệnh thận mạn giai đoạn ≥2 do urate; (5) Gout đa khớp mạn tính. ACR 2020 mở rộng hơn: xem xét ULT sau cơn gout đầu tiên ở BN có bệnh thận mạn hoặc sỏi thận. DS tư vấn BN báo cáo tần suất cơn để BS quyết định.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Cơn gout cấp điển hình thường khởi phát đột ngột và thường bắt đầu vào ban đêm hoặc sáng sớm.",
            "ans": true,
            "exp": "Cơn gout cấp đặc trưng bởi khởi phát đột ngột, thường về đêm hoặc sáng sớm khi bệnh nhân thức dậy. Lý giải sinh lý: nhiệt độ cơ thể giảm nhẹ khi ngủ → giảm độ hòa tan MSU → thuận lợi lắng đọng tinh thể; ngoài ra, nồng độ cortisol (chống viêm) thấp nhất lúc nửa đêm → ngưỡng khởi phát viêm thấp hơn. Đau đạt đỉnh trong 12–24 giờ đầu và cực kỳ dữ dội.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Gout là bệnh chỉ gặp ở nam giới, phụ nữ không bị gout.",
            "ans": false,
            "exp": "Gout gặp ở cả nam và nữ, nhưng nam nhiều hơn nữ đáng kể (tỷ lệ khoảng 3–4:1 trước mãn kinh). Ở phụ nữ trẻ, estrogen có tác dụng uricosuric (tăng bài tiết urate) → bảo vệ khỏi gout. Sau mãn kinh, nồng độ estrogen giảm → nguy cơ gout tăng lên đáng kể, tiệm cận nam giới. Blenkinsopp 2025: 'more common in older people' — không phân biệt giới tính tuyệt đối.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Uống đủ nước (2–3 lít/ngày) giúp hỗ trợ thải acid uric qua thận và giảm nguy cơ tái phát cơn gout.",
            "ans": true,
            "exp": "Uống đủ nước tăng thể tích nước tiểu → tăng thải urate qua thận (tăng mức lọc cầu thận và giảm tái hấp thu ống thận) → giảm acid uric máu. Đồng thời giảm nguy cơ sỏi thận urate (cần nước tiểu đủ loãng). Khuyến cáo trong gout: uống 2–3 lít nước/ngày, ưu tiên nước lọc. Dehydration là yếu tố thúc đẩy cơn gout (tăng nồng độ urate trong dịch khớp). Đặc biệt quan trọng sau bia rượu và tập thể dục.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Giảm cân ở BN thừa cân/béo phì có thể giúp giảm nồng độ acid uric máu và tần suất cơn gout.",
            "ans": true,
            "exp": "Thừa cân/béo phì liên quan chặt chẽ với tăng uric acid máu qua nhiều cơ chế: (1) Mô mỡ tăng sản xuất uric acid; (2) Đề kháng insulin → giảm bài tiết urate qua thận. Giảm cân ở BN béo phì → giảm đề kháng insulin → tăng bài tiết urate → giảm acid uric. Tuy nhiên, cần giảm cân từ từ (<0.5 kg/tuần): giảm cân nhanh (fasting, crash diet) gây tăng acid lactic và cetone → cạnh tranh với urate → kích hoạt cơn gout cấp.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Sản phẩm sữa ít béo (sữa tươi, sữa chua) được ghi nhận có tác dụng bảo vệ nhẹ chống lại gout.",
            "ans": true,
            "exp": "Nghiên cứu dịch tễ (Choi et al., NEJM 2004 và các nghiên cứu sau) cho thấy tiêu thụ sản phẩm sữa ít béo liên quan đến giảm nguy cơ gout và giảm acid uric máu. Cơ chế đề xuất: casein và lactalbumin trong sữa tăng bài tiết urate qua thận (uricosuric effect); orotic acid trong sữa giảm tổng hợp purine nội sinh. Đây là một trong số ít thực phẩm có bằng chứng bảo vệ chống gout — khác với sữa nguyên béo (ít bằng chứng hơn).",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN gout cấp nên nâng cao chân bị đau và tránh tỳ nặng lên khớp trong cơn cấp.",
            "ans": true,
            "exp": "Blenkinsopp 2025 khuyến cáo: 'Elevation and cooling with an icepack may also help' trong gout cấp. Nâng cao chân giảm phù nề do trọng lực và giảm áp lực tại khớp viêm. Tránh tỳ nặng (đi lại nhiều) làm tăng áp lực cơ học tại ổ viêm → tăng đau và kéo dài cơn. Nghỉ ngơi tương đối + nâng cao chân + chườm đá là bộ ba phi dùng thuốc đơn giản và hiệu quả.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Gout thường gặp ở 2.5% dân số và phổ biến hơn ở người lớn tuổi — tần suất tăng dần theo tuổi.",
            "ans": true,
            "exp": "Blenkinsopp 2025: 'This is more common in older people and may affect as many as 2.5% of the population.' Tần suất gout tăng theo tuổi vì: (1) Chức năng thận giảm → thải urate kém; (2) Phụ nữ sau mãn kinh mất tác dụng bảo vệ của estrogen; (3) Tích lũy lắng đọng MSU theo thời gian; (4) Dùng nhiều thuốc gây tăng uric acid (thiazide, aspirin) hơn khi lớn tuổi.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Chế độ ăn kiêng rau củ (đặc biệt rau giàu purine như đậu Hà Lan, măng tây) làm tăng nguy cơ gout tương đương thịt đỏ.",
            "ans": false,
            "exp": "Nghiên cứu dịch tễ lớn (Choi et al.) cho thấy purine từ thực vật (rau củ, đậu) KHÔNG làm tăng nguy cơ gout, ngay cả ở mức tiêu thụ cao. Chỉ purine từ nguồn động vật (thịt đỏ, nội tạng, hải sản) mới liên quan đến tăng nguy cơ. Cơ chế đề xuất: purine từ thực vật có sinh khả dụng thấp hơn hoặc có các chất chống oxy hóa kèm theo ảnh hưởng trao đổi chất uric acid khác. BN gout không cần kiêng rau củ.",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol là thuốc chống viêm mạnh, phù hợp làm thuốc đầu tay trong cơn gout cấp để thay thế hoàn toàn ibuprofen.",
            "ans": false,
            "exp": "Paracetamol hầu như không có tác dụng chống viêm tại khớp (không ức chế COX ngoại biên đáng kể). Cơn gout cấp do viêm dữ dội gây ra bởi tinh thể MSU — cần thuốc chống viêm mạnh (NSAID, colchicine, corticosteroid). Paracetamol chỉ là hỗ trợ giảm đau tạm thời khi không có lựa chọn khác, không thay thế được NSAID. Việc dùng paracetamol đơn thuần trong gout cấp không kiểm soát được viêm và kéo dài cơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Allopurinol được phân loại là thuốc OTC tại Việt Nam, DS có thể tư vấn bán trực tiếp cho BN gout tái phát.",
            "ans": false,
            "exp": "Allopurinol là ETC tại Việt Nam — cần kê đơn BS. Lý do: cần xét nghiệm acid uric để xác định chỉ định và theo dõi; cần điều chỉnh liều theo chức năng thận (eGFR); tác dụng phụ nghiêm trọng có thể gặp: phát ban nặng (hội chứng Stevens-Johnson — SJS, đặc biệt ở người mang gen HLA-B*5801 phổ biến ở người châu Á); phải khởi đầu liều thấp và tăng dần. BS phải đánh giá trước khi bắt đầu.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chườm nóng (heat pack) trực tiếp lên khớp đang bị cơn gout cấp là biện pháp phi dùng thuốc phù hợp để giảm đau.",
            "ans": false,
            "exp": "Trong gout cấp: chườm LẠNH (ice pack bọc khăn) mới được khuyến cáo — giảm viêm, co mạch, giảm phù nề. Blenkinsopp 2025: 'cooling with an icepack may also help.' Chườm nóng trong viêm cấp (gout, viêm khớp nhiễm khuẩn) làm giãn mạch → tăng phù nề và tăng hoạt động tế bào viêm → có thể làm nặng hơn cơn. Chườm nóng phù hợp cho đau cơ mạn tính, cứng khớp OA mạn — không phải gout cấp.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Rau củ giàu purine (đậu Hà Lan, măng tây, nấm) làm tăng nguy cơ gout tương đương thịt đỏ và nội tạng động vật, vì vậy BN gout phải kiêng hoàn toàn.",
            "ans": false,
            "exp": "Nghiên cứu dịch tễ lớn (Choi et al., NEJM 2004) cho thấy purine từ rau củ KHÔNG làm tăng nguy cơ gout và không liên quan đến tăng acid uric máu. Chỉ purine từ nguồn động vật (thịt đỏ, nội tạng, hải sản có vỏ) mới làm tăng nguy cơ rõ ràng. BN gout không cần kiêng rau củ — kiêng không cần thiết và làm mất nguồn dinh dưỡng quan trọng. Tư vấn sai có thể ảnh hưởng chất lượng dinh dưỡng của BN.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Colchicine có thể phối hợp an toàn với clarithromycin ở liều điều trị chuẩn mà không cần điều chỉnh.",
            "ans": false,
            "exp": "Clarithromycin ức chế mạnh CYP3A4 và P-glycoprotein → tăng nồng độ colchicine trong máu lên nhiều lần → ngộ độc colchicine nghiêm trọng: tiêu chảy nặng, ức chế tủy xương (giảm bạch cầu trung tính), tiêu cơ vân, suy thận, suy đa cơ quan, tử vong. Nhiều ca tử vong đã được báo cáo với phối hợp colchicine + macrolide. Tuyệt đối không phối hợp hoặc phải giảm liều colchicine đáng kể dưới giám sát BS.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN gout 60t hỏi: 'Tôi có thể uống bia 1–2 lon vào cuối tuần được không?' DS tư vấn cụ thể thế nào?",
            "opts": [
                "1–2 lon bia là lượng vừa phải, không ảnh hưởng đến gout nếu uống cách cơn vài ngày",
                "Bia đặc biệt không phù hợp cho BN gout vì chứa cả ethanol và guanosine (purine) cùng lúc; nên hạn chế tối đa, tốt nhất bỏ hẳn trong giai đoạn kiểm soát gout",
                "Chỉ bia đen (stout) mới có nguy cơ vì màu tối của bia chứa purine, bia vàng nhạt an toàn"
            ],
            "ans": 1,
            "exp": "Bia nguy hiểm nhất với gout trong các loại rượu vì hai cơ chế cộng hưởng: (1) Ethanol → tăng sản xuất lactate → cạnh tranh với urate tại thận → giảm thải urate; (2) Guanosine (purine có trong men bia và mạch nha) → chuyển hóa thành xanthine → uric acid. Nghiên cứu dịch tễ: mỗi lon bia/ngày tăng nguy cơ cơn gout 49%. Không có ngưỡng 'an toàn' cho BN gout. Tư vấn kiêng hoàn toàn trong giai đoạn kiểm soát bệnh.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 48t, lần đầu tiên bị sưng đau đột ngột khớp MTP1 chân phải từ tối qua. Đang dùng hydrochlorothiazide 25 mg/ngày cho THA. DS nhận định yếu tố nguy cơ nào đáng chú ý nhất ở BN này?",
            "opts": [
                "Tuổi 48 — gout chủ yếu gặp ở người >65 tuổi nên không liên quan thuốc",
                "Hydrochlorothiazide (thiazide diuretic) làm giảm thải urate qua thận → tăng acid uric máu — yếu tố nguy cơ thuốc quan trọng cần báo BS để đánh giá đổi thuốc hạ áp",
                "THA — tăng huyết áp trực tiếp gây lắng đọng tinh thể MSU tại khớp"
            ],
            "ans": 1,
            "exp": "Hydrochlorothiazide (thiazide) là yếu tố nguy cơ gout do thuốc quan trọng: cạnh tranh và giảm bài tiết urate tại ống thận → tăng acid uric máu mạn tính → tích lũy lắng đọng MSU → cơn gout. Blenkinsopp 2025 xác nhận: diuretics như bendroflumethiazide, indapamide làm tăng nguy cơ gout. DS cần tư vấn BN báo BS xem xét đổi thiazide sang losartan (ARB có tính uricosuric) hoặc amlodipine (không ảnh hưởng uric acid).",
            "icon": "🔍"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN gout cấp 65t đang dùng warfarin (INR 2.5) hỏi mua ibuprofen OTC để giảm đau. DS từ chối vì lý do gì?",
            "opts": [
                "Ibuprofen làm giảm hiệu quả warfarin qua cảm ứng CYP2C9, dẫn đến đông máu quá mức",
                "Ibuprofen + warfarin: tăng nguy cơ xuất huyết nghiêm trọng — NSAID ức chế tiểu cầu và gây loét dạ dày; warfarin tuyệt đối CCĐ phối hợp NSAID",
                "Ibuprofen an toàn với warfarin nếu dùng ngắn hạn ≤3 ngày OTC"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025: ibuprofen 'should not be used at all if the patient is on warfarin.' Cơ chế kép: (1) NSAID ức chế tiểu cầu + tổn thương niêm mạc dạ dày → tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng trên nền chống đông; (2) Ibuprofen có thể ức chế nhẹ CYP2C9 → tăng nồng độ warfarin → tăng INR. Paracetamol là lựa chọn an toàn hơn (thận trọng ở liều cao). Chuyển BS khẩn để được colchicine hoặc corticosteroid.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tại sao không nên bắt đầu allopurinol đồng thời trong cơn gout cấp, mà phải chờ cơn dịu ít nhất 2–4 tuần?",
            "opts": [
                "Allopurinol bị NSAID phân giải và mất tác dụng khi dùng đồng thời",
                "Thay đổi nồng độ urate đột ngột khi bắt đầu allopurinol làm tinh thể MSU tái cơ cấu trong khớp, kích hoạt hoặc kéo dài cơn viêm",
                "Dạ dày BN đang bị kích thích bởi NSAID nên không hấp thu được allopurinol"
            ],
            "ans": 1,
            "exp": "Cơ chế paradox của ULT trong cơn cấp: khi uric acid huyết thanh giảm đột ngột do allopurinol, tinh thể MSU đang lắng đọng trong khớp bắt đầu tan một phần (partial dissolution) → giải phóng các tinh thể nhỏ hơn vào dịch khớp → bạch cầu trung tính nhận diện tinh thể mới → kích hoạt hoặc kéo dài cơn viêm. Hướng dẫn ACR 2020 và EULAR khuyến cáo: chờ 2–4 tuần sau khi cơn hoàn toàn dịu, thường kèm colchicine prophylaxis 3–6 tháng đầu ULT.",
            "icon": "🧬"
        }
    ],
    "vertigo": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích cho sinh viên thực tập: cinnarizine có hai cơ chế tác động phân biệt với kháng histamine thế hệ 1 thông thường là gì?",
            "opts": [
                "Kháng histamine H1 tại tiền đình + ức chế kênh canxi tại tế bào cơ trơn mạch máu tai trong",
                "Kháng histamine H1 tại tiền đình + kích thích thụ thể histamine H3 tại não",
                "Ức chế acetylcholinesterase + kháng histamine H1 tại kết mạc"
            ],
            "ans": 0,
            "exp": "Cinnarizine là kháng histamine H1 thế hệ 1 đồng thời ức chế kênh canxi (calcium channel blocker) tại cơ trơn mạch máu tai trong và tiền đình. Cơ chế kép giải thích tác dụng giảm co mạch labyrinthine và ổn định chức năng tiền đình, hữu ích hơn so với antihistamine đơn thuần trong rối loạn tiền đình và say tàu xe.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 62t, bệnh Parkinson đang điều trị bằng levodopa–carbidopa, bị chóng mặt thoáng qua. Phụ huynh muốn mua cinnarizine. DS xử trí thế nào?",
            "opts": [
                "Bán cinnarizine liều thấp vì lợi ích kiểm soát chóng mặt lớn hơn nguy cơ",
                "CCĐ cinnarizine với Parkinson — thuốc ức chế dopamine ngoại biên, có thể làm nặng thêm triệu chứng Parkinson và giảm hiệu quả levodopa",
                "Bán cinnarizine nhưng dặn dùng cách xa levodopa ít nhất 4 giờ"
            ],
            "ans": 1,
            "exp": "Cinnarizine ức chế thụ thể dopamine D2 (tác dụng phụ ngoài kháng histamine và kháng canxi) → CCĐ với bệnh Parkinson vì làm giảm dẫn truyền dopamine tại thể vân, làm nặng thêm triệu chứng ngoại tháp. Dùng dài hạn có thể gây hội chứng Parkinson do thuốc (drug-induced parkinsonism). Không thể khắc phục bằng cách chia giờ uống.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phác đồ cinnarizine chuẩn OTC cho người lớn bị say tàu xe/rối loạn tiền đình là gì?",
            "opts": [
                "25 mg × 3 lần/ngày; uống trước khi đi 30 phút nếu dùng phòng ngừa say xe",
                "75 mg × 1 lần/ngày (buổi tối trước khi ngủ)",
                "12.5 mg × 6 lần/ngày cho hiệu quả liên tục"
            ],
            "ans": 0,
            "exp": "Cinnarizine OTC người lớn: 25 mg × 3 lần/ngày cho rối loạn tiền đình; với say tàu xe, uống 25 mg trước khi lên tàu/xe 30 phút, sau đó 25 mg mỗi 8 giờ khi cần. Liều tối đa thông thường 75 mg/ngày. Dùng sau ăn để giảm buồn nôn do thuốc.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 75t bị chóng mặt tư thế, muốn dùng cinnarizine dài hạn để phòng ngừa. DS cần cảnh báo điều gì quan trọng nhất?",
            "opts": [
                "Cinnarizine an toàn hoàn toàn cho NCT, không cần điều chỉnh liều hay theo dõi đặc biệt",
                "Dùng cinnarizine dài hạn ở NCT có nguy cơ gây hội chứng Parkinson do thuốc (drug-induced parkinsonism) và trầm cảm",
                "Cần giảm liều xuống 50% vì thận NCT lọc thuốc chậm hơn"
            ],
            "ans": 1,
            "exp": "Cinnarizine dài hạn ở NCT có nguy cơ đặc biệt: (1) Drug-induced parkinsonism — run tay, cứng cơ, chậm chạp, dễ nhầm với Parkinson thực sự; (2) Trầm cảm và buồn ngủ quá mức. WHO và nhiều hướng dẫn cảnh báo thận trọng khi dùng kéo dài ở người cao tuổi. Nên đánh giá lại chỉ định định kỳ thay vì dùng liên tục vô thời hạn.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN tài xế xe tải bị chóng mặt nhẹ, hỏi DS: 'Tôi có thể uống cinnarizine trước khi chạy xe không?' DS trả lời phù hợp nhất là gì?",
            "opts": [
                "Được, vì cinnarizine thế hệ 1 có thể gây buồn ngủ nhưng chỉ nhẹ, không ảnh hưởng tài xế chuyên nghiệp",
                "CCĐ điều khiển phương tiện khi dùng cinnarizine vì thuốc gây buồn ngủ và ảnh hưởng phản xạ",
                "Uống liều thấp (12.5 mg) là đủ an toàn để lái xe"
            ],
            "ans": 1,
            "exp": "Cinnarizine là kháng histamine H1 thế hệ 1 (sedating antihistamine) — vượt qua hàng rào máu-não, gây buồn ngủ có ý nghĩa lâm sàng và giảm phản xạ. CCĐ lái xe và vận hành máy móc nguy hiểm. Tờ hướng dẫn sử dụng cảnh báo rõ ràng. Không có liều thấp nào được coi là hoàn toàn an toàn khi lái xe.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Dimenhydrinate có cấu trúc phân tử gồm 2 thành phần. Đây là điểm khác biệt với cinnarizine về bản chất dược lý. Hai thành phần đó là gì?",
            "opts": [
                "Diphenhydramine + 8-chlorotheophylline",
                "Cinnarizine + caffeine",
                "Promethazine + theophylline"
            ],
            "ans": 0,
            "exp": "Dimenhydrinate là muối của diphenhydramine (antihistamine H1 + anticholinergic mạnh) và 8-chlorotheophylline (dẫn xuất xanthine, giảm phần nào tác dụng an thần của diphenhydramine). Thành phần anticholinergic của diphenhydramine giải thích các CCĐ đặc trưng: glaucoma góc hẹp, phì đại tiền liệt tuyến, bí tiểu, táo bón nặng.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 68t, phì đại tiền liệt tuyến lành tính đang điều trị, bị say tàu xe và muốn mua dimenhydrinate. DS cần tư vấn thế nào?",
            "opts": [
                "Bán bình thường vì dimenhydrinate nhỏ hơn prostaglandin và không ảnh hưởng tiền liệt tuyến",
                "CCĐ dimenhydrinate với phì đại tiền liệt tuyến — thành phần anticholinergic làm giảm co bóp cơ bàng quang, nguy cơ bí tiểu cấp",
                "Giảm liều dimenhydrinate xuống 25 mg thay vì 50 mg là đủ an toàn"
            ],
            "ans": 1,
            "exp": "Dimenhydrinate chứa diphenhydramine có tác dụng anticholinergic mạnh → giảm trương lực cơ bàng quang → nguy cơ bí tiểu cấp ở BN phì đại tiền liệt tuyến. CCĐ rõ ràng trong tờ hướng dẫn. Giảm liều không khắc phục được tác dụng anticholinergic. DS nên tư vấn phương án thay thế như cinnarizine (ít anticholinergic hơn).",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 52t, glaucoma góc hẹp đang nhỏ pilocarpine, bị chóng mặt muốn dùng dimenhydrinate. DS xử trí thế nào?",
            "opts": [
                "Bán dimenhydrinate vì pilocarpine đã bù trừ tác dụng anticholinergic",
                "CCĐ tuyệt đối — tác dụng anticholinergic của dimenhydrinate làm giãn đồng tử, giảm góc thoát thủy dịch, có thể kích hoạt cơn glaucoma góc hẹp cấp",
                "Chỉ CCĐ nếu dùng dimenhydrinate đường tiêm, còn đường uống thì ổn"
            ],
            "ans": 1,
            "exp": "Tác dụng anticholinergic của dimenhydrinate/diphenhydramine: ức chế cơ vòng mống mắt → giãn đồng tử (mydriasis) → thu hẹp góc tiền phòng → tăng nhãn áp cấp tính ở mắt glaucoma góc hẹp. Pilocarpine (co đồng tử) đang dùng để kiểm soát nhãn áp, nhưng không thể đảm bảo đủ để đối kháng hoàn toàn. CCĐ cho mọi dạng đường dùng.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "So sánh cinnarizine và dimenhydrinate về tác dụng anticholinergic: thông tin nào đúng?",
            "opts": [
                "Cả hai có tác dụng anticholinergic tương đương nhau vì cùng nhóm kháng histamine H1 thế hệ 1",
                "Dimenhydrinate có tác dụng anticholinergic mạnh hơn cinnarizine; cinnarizine chủ yếu tác dụng qua kháng histamine H1 và kênh canxi",
                "Cinnarizine có tác dụng anticholinergic mạnh hơn dimenhydrinate do thêm cơ chế ức chế kênh canxi"
            ],
            "ans": 1,
            "exp": "Dimenhydrinate (chứa diphenhydramine) có tác dụng anticholinergic mạnh hơn cinnarizine — đây là lý do CCĐ glaucoma góc hẹp và phì đại tiền liệt tuyến nổi bật hơn với dimenhydrinate. Cinnarizine chủ yếu tác dụng qua kháng H1 và kháng canxi, ít tác dụng anticholinergic hơn — phù hợp hơn cho các BN có CCĐ với anticholinergic.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phụ huynh muốn mua dimenhydrinate cho trẻ 18 tháng bị say xe. DS tư vấn thế nào?",
            "opts": [
                "Bán dimenhydrinate siro dành cho trẻ em, an toàn từ 1 tuổi",
                "CCĐ dimenhydrinate cho trẻ <2 tuổi; thận trọng cao với trẻ <6 tuổi — nguy cơ phản ứng nghịch thường (kích thích, co giật)",
                "Giảm liều 1/4 người lớn là đủ an toàn cho trẻ 18 tháng"
            ],
            "ans": 1,
            "exp": "Dimenhydrinate CCĐ cho trẻ <2 tuổi theo tờ hướng dẫn và khuyến cáo của nhiều cơ quan quản lý (FDA, Health Canada). Antihistamine thế hệ 1 ở trẻ nhỏ có thể gây phản ứng nghịch thường (paradoxical excitation): kích thích thần kinh trung ương, mất ngủ, kích động, co giật — thay vì an thần. Ở trẻ 2–6 tuổi cần thận trọng và tư vấn BS nhi.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang điều trị trầm cảm bằng amitriptyline, bị say tàu xe hỏi mua dimenhydrinate. DS cần lo ngại gì nhất?",
            "opts": [
                "Tương tác dược động học: amitriptyline ức chế chuyển hóa dimenhydrinate qua CYP2D6",
                "Tăng cộng hưởng tác dụng anticholinergic và ức chế thần kinh trung ương — nguy cơ bí tiểu, lú lẫn, tụt HA tư thế",
                "Không có tương tác đáng kể vì dimenhydrinate chỉ tác dụng tại tiền đình ngoại biên"
            ],
            "ans": 1,
            "exp": "Amitriptyline (TCA) có tác dụng anticholinergic và ức chế thần kinh trung ương mạnh. Phối hợp với dimenhydrinate (chứa diphenhydramine — anticholinergic + ức chế TKTW) → tăng cộng hưởng: khô miệng, bí tiểu, táo bón nặng, lú lẫn (đặc biệt ở NCT), hạ HA tư thế, an thần quá mức. Tương tác dược lực học, không phải dược động học.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi DS: 'Betahistine có bán OTC không? Bác sĩ trước từng kê cho tôi điều trị Ménière.' Giải thích phù hợp nhất là?",
            "opts": [
                "Betahistine là OTC tại Việt Nam, DS có thể bán mà không cần kê đơn",
                "Betahistine là thuốc ETC tại Việt Nam — cần kê đơn BS; hơn nữa bằng chứng hiệu quả còn hạn chế theo tổng quan Cochrane",
                "Betahistine OTC ở liều thấp (8 mg) và ETC ở liều cao (16–24 mg)"
            ],
            "ans": 1,
            "exp": "Betahistine là ETC tại Việt Nam — DS không được bán không có kê đơn. Về bằng chứng: tổng quan Cochrane 2001 (James & Burton) kết luận dữ liệu thử nghiệm lâm sàng chưa đủ kết luận betahistine hiệu quả với bệnh Ménière. Các hướng dẫn điều trị Ménière (antihistamine, prochlorperazine, betahistine) đều là ETC. DS nên hướng dẫn BN tái khám để được kê đơn.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 33t đang cho con bú bị say tàu xe, hỏi có thể dùng dimenhydrinate không. DS tư vấn thế nào?",
            "opts": [
                "Dimenhydrinate an toàn hoàn toàn trong thời kỳ cho con bú",
                "Thận trọng — diphenhydramine đi vào sữa mẹ và có thể gây an thần ở trẻ bú; nên tư vấn BS trước",
                "CCĐ tuyệt đối khi cho con bú, không có lựa chọn nào an toàn cho mẹ bú"
            ],
            "ans": 1,
            "exp": "Diphenhydramine (thành phần của dimenhydrinate) bài tiết vào sữa mẹ; có thể gây an thần ở trẻ bú, đặc biệt trẻ sơ sinh và trẻ sinh non do thải trừ thuốc kém. LactMed khuyến cáo thận trọng. Không phải CCĐ tuyệt đối nhưng nên tư vấn ngắn hạn với liều thấp nhất có hiệu quả và theo dõi trẻ bú. Với cinnarizine dữ liệu cho con bú cũng hạn chế.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN uống rượu bia, hỏi DS có thể dùng cinnarizine sau khi uống 2 lon bia để giảm chóng mặt không. DS phải cảnh báo điều gì?",
            "opts": [
                "Bia nhẹ không ảnh hưởng đến cinnarizine vì hai chất chuyển hóa theo con đường khác nhau",
                "Phối hợp cinnarizine với rượu bia tăng cộng hưởng ức chế thần kinh trung ương — an thần sâu hơn, nguy cơ ngã/tai nạn",
                "Chỉ CCĐ khi uống rượu mạnh (>2 đơn vị chuẩn), bia nhẹ thì chấp nhận được"
            ],
            "ans": 1,
            "exp": "Cinnarizine (sedating antihistamine H1) + rượu bia (ức chế TKTW) → cộng hưởng ức chế TKTW: buồn ngủ sâu hơn, phản xạ chậm hơn, tăng nguy cơ ngã và tai nạn. CCĐ phối hợp với mọi dạng đồ uống có cồn, không phụ thuộc liều rượu. Cảnh báo này áp dụng cho tất cả antihistamine thế hệ 1.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi về Rotundin (alkaloid từ Bình vôi — Stephania rotunda): đây là thuốc OTC được dùng trong trường hợp nào tại nhà thuốc?",
            "opts": [
                "Kháng histamine mạnh, điều trị viêm kết mạc dị ứng và viêm mũi dị ứng",
                "Thuốc an thần nhẹ từ dược liệu, dùng hỗ trợ mất ngủ và chóng mặt nhẹ",
                "Kháng cholinergic mạnh, điều trị co thắt đường tiêu hóa"
            ],
            "ans": 1,
            "exp": "Rotundin (L-tetrahydropalmatine, L-THP) là alkaloid từ củ Bình vôi — thuốc OTC từ dược liệu Việt Nam, có tác dụng an thần nhẹ, giảm lo âu. Dùng hỗ trợ mất ngủ nhẹ và chóng mặt do căng thẳng/lo âu tại nhà thuốc. Không có hiệu quả rõ ràng với chóng mặt do tiền đình thực sự. CCĐ lái xe và vận hành máy móc vì gây buồn ngủ.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 28t mang thai tuần 10 bị say tàu xe nặng khi đi xe khách. Hỏi về cinnarizine OTC. DS tư vấn thế nào?",
            "opts": [
                "Cinnarizine an toàn hoàn toàn trong 3 tháng đầu thai kỳ",
                "Thận trọng — thông tin an toàn trong thai kỳ hạn chế; nên tư vấn BS sản và ưu tiên biện pháp không dùng thuốc trước",
                "CCĐ tuyệt đối mọi antihistamine trong toàn thai kỳ"
            ],
            "ans": 1,
            "exp": "Cinnarizine chưa có đủ dữ liệu kiểm soát trên thai phụ, đặc biệt 3 tháng đầu (organogenesis). Không phải CCĐ tuyệt đối nhưng khuyến cáo thận trọng và ưu tiên biện pháp phi dùng thuốc: ngồi ghế trước, nhìn ra xa, thông thoáng xe, vòng đeo cổ tay áp lực huyệt P6. Nếu cần dùng thuốc, cần đánh giá lợi ích/nguy cơ với BS sản.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị chóng mặt tư thế lành tính (BPPV) muốn dùng cinnarizine dài hạn để phòng ngừa tái phát. DS tư vấn gì là đúng nhất về chiến lược điều trị?",
            "opts": [
                "Cinnarizine là thuốc điều trị triệu chứng — dùng khi có cơn cấp; phòng ngừa BPPV tốt nhất bằng thủ thuật tái định vị otolith (Epley manoeuvre) không phải thuốc",
                "Dùng cinnarizine 25 mg hàng ngày liên tục 6 tháng để ngăn otolith rơi vào bán khuyên",
                "Betahistine OTC hàng ngày là lựa chọn phòng ngừa BPPV được chứng minh tốt hơn cinnarizine"
            ],
            "ans": 0,
            "exp": "BPPV thường tự khỏi trong vài tuần và đáp ứng tốt với thủ thuật tái định vị otolith (Epley manoeuvre) — can thiệp phi dùng thuốc hiệu quả nhất. Thuốc (cinnarizine, dimenhydrinate) chỉ là điều trị triệu chứng cấp tính, không ngăn tái phát. Dùng thuốc kéo dài không được khuyến cáo cho BPPV. Betahistine không có bằng chứng mạnh cho BPPV.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị bệnh Ménière hỏi DS mua betahistine và cinnarizine cùng lúc để điều trị. Về mặt dược lý, phối hợp này có tiềm năng tương tác gì đáng lo ngại?",
            "opts": [
                "Betahistine (đồng vận histamine H3, đối kháng H1) có thể đối kháng tác dụng kháng H1 của cinnarizine — giảm hiệu quả cả hai",
                "Phối hợp hai thuốc làm tăng cộng hưởng ức chế tiền đình, gây điếc ốc tai vĩnh viễn",
                "Không có tương tác đáng kể, có thể dùng song song an toàn"
            ],
            "ans": 0,
            "exp": "Betahistine có tác dụng đồng vận histamine H1 yếu và đối kháng H3 mạnh, gián tiếp làm tăng phóng thích histamine tại tiền đình. Cinnarizine kháng H1 tại tiền đình. Về lý thuyết, betahistine tăng histamine trong khi cinnarizine chặn tác dụng histamine — tương tác đối kháng dược lực học. Đây cũng là lý do lâm sàng hiếm khi phối hợp hai thuốc này. Tuy nhiên, betahistine là ETC — BN không thể tự mua cả hai.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS được hỏi về dimenhydrinate dạng sủi bọt (effervescent): ưu điểm của dạng bào chế này so với viên nén thông thường trong điều trị say xe là gì?",
            "opts": [
                "Khởi đầu tác dụng nhanh hơn do hấp thu tốt hơn — phù hợp khi cần giảm triệu chứng cấp tính nhanh",
                "Ít gây buồn ngủ hơn viên nén do có thêm caffeine trong công thức sủi bọt",
                "Không chứa anticholinergic nên an toàn hơn cho BN glaucoma và phì đại tiền liệt tuyến"
            ],
            "ans": 0,
            "exp": "Dạng sủi bọt hòa tan nhanh → hấp thu qua đường tiêu hóa nhanh hơn viên nén nguyên → tốc độ đạt nồng độ đỉnh trong máu nhanh hơn. Phù hợp khi cần tác dụng nhanh (đã lên xe, bắt đầu có triệu chứng). Không thay đổi bản chất dược lý (anticholinergic vẫn còn nguyên) và không giảm buồn ngủ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN cao tuổi 80t đang dùng nhiều thuốc (đa thuốc — polypharmacy ≥5 thuốc) trong đó có thuốc hạ áp và thuốc điều trị Parkinson, bị chóng mặt tư thế nhẹ. DS nên làm gì?",
            "opts": [
                "Bán cinnarizine 25 mg × 3 lần/ngày vì an toàn hơn dimenhydrinate ở NCT",
                "Không tự tư vấn OTC thuốc tiền đình; chuyển BS đánh giá nguyên nhân chóng mặt (polypharmacy, hạ HA tư thế, Parkinson) trước khi dùng thuốc",
                "Bán nửa liều dimenhydrinate và dặn uống buổi tối để tránh buồn ngủ ban ngày"
            ],
            "ans": 1,
            "exp": "BN này có nhiều yếu tố nguy cơ: (1) Polypharmacy → hạ HA tư thế do thuốc là nguyên nhân chóng mặt phổ biến; (2) Parkinson → CCĐ cinnarizine tuyệt đối; (3) Thuốc hạ áp có thể gây chóng mặt tư thế. Tự dùng OTC che lấp nguyên nhân có thể điều trị được (điều chỉnh thuốc). DS nên từ chối bán và chuyển BS đánh giá toàn diện.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine có thể gây ra hội chứng giống Parkinson (drug-induced parkinsonism) khi dùng dài hạn, đặc biệt ở người cao tuổi.",
            "ans": true,
            "exp": "Cinnarizine ức chế thụ thể dopamine D2 tại thể vân (ngoài tác dụng kháng H1 và kháng Ca) → dùng kéo dài có thể gây triệu chứng ngoại tháp: run, cứng cơ, chậm chạp — khó phân biệt với Parkinson thực sự. Ở NCT, đào thải thuốc chậm hơn làm tăng nguy cơ. WHO Anatomical Therapeutic Chemical classification phân loại cinnarizine là calcium antagonist với cảnh báo này.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dimenhydrinate được phép dùng cho trẻ dưới 2 tuổi với liều điều chỉnh theo cân nặng.",
            "ans": false,
            "exp": "Dimenhydrinate CCĐ cho trẻ <2 tuổi theo khuyến cáo của FDA, Health Canada và hầu hết cơ quan quản lý dược. Antihistamine thế hệ 1 ở trẻ nhỏ có thể gây phản ứng nghịch thường (kích thích, mất ngủ, co giật) và an thần quá mức. Không có liều nào được coi là an toàn cho trẻ <2 tuổi bất kể cân nặng.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine CCĐ với bệnh nhân Parkinson vì thuốc ức chế dẫn truyền dopamine tại thể vân.",
            "ans": true,
            "exp": "Cinnarizine ức chế thụ thể D2 dopamine — CCĐ rõ ràng với bệnh Parkinson. Thuốc làm nặng triệu chứng ngoại tháp và đối kháng tác dụng của levodopa/carbidopa. Bán cinnarizine cho BN Parkinson là sai sót nghiêm trọng tại nhà thuốc. Lưu ý: prochlorperazine (ETC điều trị chóng mặt cấp tính) cũng CCĐ với Parkinson cùng cơ chế.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Betahistine có bằng chứng mạnh từ thử nghiệm lâm sàng đối chứng ngẫu nhiên trong điều trị bệnh Ménière theo tổng quan Cochrane.",
            "ans": false,
            "exp": "Tổng quan Cochrane (James & Burton, 2001 — được Rutter 2026 trích dẫn) kết luận dữ liệu thử nghiệm lâm sàng về betahistine trong bệnh Ménière còn 'không thuyết phục' (inconclusive). Mặc dù betahistine được dùng rộng rãi trong thực hành lâm sàng, bằng chứng chất lượng cao vẫn còn hạn chế. Đây là ví dụ về khoảng cách bằng chứng-thực hành trong dược học lâm sàng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Rượu bia có thể dùng cùng với cinnarizine mà không cần lo ngại tương tác đáng kể vì cả hai đều chuyển hóa qua gan theo con đường riêng biệt.",
            "ans": false,
            "exp": "Rượu bia + cinnarizine gây tăng cộng hưởng ức chế thần kinh trung ương: buồn ngủ sâu hơn, phản xạ chậm hơn, giảm khả năng phán đoán. Cơ chế là dược lực học (additive CNS depression), không phụ thuộc vào con đường chuyển hóa. CCĐ phối hợp rõ ràng trong tờ hướng dẫn sử dụng của cinnarizine. Áp dụng cho tất cả antihistamine thế hệ 1.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dimenhydrinate CCĐ với BN glaucoma góc hẹp vì thành phần anticholinergic có thể làm giãn đồng tử và kích hoạt cơn tăng nhãn áp cấp.",
            "ans": true,
            "exp": "Thành phần diphenhydramine trong dimenhydrinate có tác dụng anticholinergic (antimuscarinic) → ức chế cơ vòng mống mắt → giãn đồng tử (mydriasis) → thu hẹp góc thoát thủy dịch → tăng nhãn áp cấp ở mắt có cấu trúc góc hẹp. CCĐ quan trọng cần khai thác tiền sử trước khi tư vấn dimenhydrinate cho NCT.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine và dimenhydrinate đều là thuốc OTC tại Việt Nam, có thể dùng cho rối loạn tiền đình và phòng ngừa say tàu xe.",
            "ans": true,
            "exp": "Tại Việt Nam, cả cinnarizine và dimenhydrinate đều được phân loại OTC và có thể bán tại nhà thuốc mà không cần kê đơn. Tuy nhiên, DS vẫn cần hỏi tiền sử (Parkinson, glaucoma, phì đại tiền liệt tuyến, đang dùng MAOI, thai kỳ, tuổi) để xác định CCĐ trước khi bán. Betahistine và prochlorperazine là ETC.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine chỉ tác dụng qua cơ chế kháng histamine H1, giống như cetirizine hay loratadine.",
            "ans": false,
            "exp": "Cinnarizine khác với cetirizine và loratadine (antihistamine H1 thế hệ 2 thuần túy): cinnarizine là thế hệ 1 có thêm tác dụng ức chế kênh canxi (calcium channel blocking) tại mạch máu tai trong và tế bào tiền đình. Cơ chế kép này cho tác dụng điều trị rối loạn tiền đình và say tàu xe vượt trội so với antihistamine H1 đơn thuần. Cetirizine và loratadine không có hiệu quả với rối loạn tiền đình.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Rotundin (Bình vôi) được chỉ định điều trị đặc hiệu rối loạn tiền đình có cơ chế giống betahistine.",
            "ans": false,
            "exp": "Rotundin (L-tetrahydropalmatine) là alkaloid an thần nhẹ từ Stephania rotunda — tác dụng qua ức chế nhẹ TKTW và hệ dopaminergic, không có cơ chế đặc hiệu trên tiền đình. Khác hoàn toàn với betahistine (đồng vận H1/đối kháng H3, tăng lưu lượng máu tai trong). Rotundin được dùng chủ yếu hỗ trợ mất ngủ và lo âu nhẹ tại nhà thuốc Việt Nam, không phải điều trị tiền đình đặc hiệu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dimenhydrinate có thể phối hợp an toàn với amitriptyline để tăng hiệu quả an thần trong rối loạn tiền đình kèm mất ngủ.",
            "ans": false,
            "exp": "Phối hợp dimenhydrinate (anticholinergic + ức chế TKTW) + amitriptyline (anticholinergic mạnh + ức chế TKTW) → tăng cộng hưởng nghiêm trọng: an thần quá mức, bí tiểu, lú lẫn (đặc biệt NCT), hạ HA tư thế nguy hiểm. Không được phối hợp. Nếu cần điều trị đồng thời, cần BS đánh giá và theo dõi chặt chẽ.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 55t đến nhà thuốc kể chóng mặt, kèm nói khó, nhìn đôi, tê liệt nửa mặt xuất hiện đột ngột cách đây 1 giờ. DS phải xử trí thế nào?",
            "opts": [
                "Bán cinnarizine và gợi ý nằm nghỉ, nếu không đỡ sau 2 giờ thì mới đến bệnh viện",
                "Gọi cấp cứu 115 hoặc đưa ngay đến cấp cứu — đây là red flag nghi thiếu máu não thân não/tiểu não cấp tính",
                "Bán dimenhydrinate để ổn định tiền đình và theo dõi thêm 24 giờ"
            ],
            "ans": 1,
            "exp": "Chóng mặt + dấu hiệu thần kinh khu trú (nói khó, nhìn đôi, tê liệt mặt) khởi phát đột ngột = hội chứng thân não/tiểu não cấp, nghi đột quỵ thiếu máu não (vertebrobasilar stroke) hoặc TIA. Đây là red flag tuyệt đối của Rutter 2026 — cần cấp cứu ngay, không được tự điều trị OTC. Mỗi phút trì hoãn tăng nguy cơ tàn phế vĩnh viễn ('time is brain').",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Đặc điểm lâm sàng nào giúp DS phân biệt BPPV (chóng mặt tư thế lành tính) với viêm thần kinh tiền đình (vestibular neuronitis)?",
            "opts": [
                "BPPV: cơn kéo dài >30 phút, xuất hiện tự phát không theo tư thế. Viêm thần kinh tiền đình: cơn ngắn <1 phút, theo tư thế đầu",
                "BPPV: cơn ngắn <1 phút, kích hoạt bởi thay đổi tư thế đầu, không mất thính lực. Viêm thần kinh tiền đình: khởi phát cấp tính nặng, không liên quan tư thế, thường có tiền sử nhiễm virus",
                "BPPV: kèm mất thính lực một bên và ù tai. Viêm thần kinh tiền đình: hoàn toàn không có chóng mặt thực sự, chỉ cảm giác lâng lâng"
            ],
            "ans": 1,
            "exp": "Rutter 2026: BPPV — cơn chóng mặt ngắn (<1 phút điển hình), kích hoạt bởi thay đổi tư thế đầu (nằm xuống, quay đầu), không mất thính lực, không buồn nôn nặng, tuổi >50. Vestibular neuronitis — khởi phát cấp tính, nặng, không liên quan tư thế, có buồn nôn/nôn, không mất thính lực (khác labyrinthitis), thường sau nhiễm virus đường hô hấp.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 45t bị chóng mặt dữ dội kèm mất thính lực một bên đột ngột, ù tai, buồn nôn nhiều. DS nghi ngờ bệnh lý gì và xử trí ra sao?",
            "opts": [
                "BPPV điển hình — bán cinnarizine và hướng dẫn thủ thuật Epley",
                "Say tàu xe nặng — bán dimenhydrinate và dặn uống nhiều nước",
                "Nghi bệnh Ménière hoặc labyrinthitis — chuyển khám BS trong ngày; mất thính lực một bên là dấu hiệu cần đánh giá chuyên khoa"
            ],
            "ans": 2,
            "exp": "Bộ ba triệu chứng: chóng mặt dữ dội + mất thính lực một bên + ù tai gợi ý bệnh Ménière (nếu tái phát) hoặc labyrinthitis (lần đầu, cấp tính). Rutter 2026 phân loại mất thính lực một bên là red flag cần chuyển khám — có thể gặp trong u thần kinh thính giác (acoustic neuroma) và perilymphatic fistula. DS không tự điều trị OTC.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Bệnh Ménière điển hình khác với BPPV ở những điểm nào quan trọng nhất trên lâm sàng?",
            "opts": [
                "Ménière chỉ gặp ở người >70 tuổi và luôn gây mù lòa tạm thời",
                "Ménière: cơn chóng mặt kéo dài 30 phút đến vài giờ, kèm mất thính lực một bên và ù tai, không liên quan tư thế. BPPV: cơn <1 phút, theo tư thế, không mất thính lực",
                "Ménière và BPPV đều kích hoạt bởi thay đổi tư thế nhưng Ménière cơn dài hơn"
            ],
            "ans": 1,
            "exp": "Rutter 2026: Ménière — cơn chóng mặt nặng 30 phút đến vài giờ, không theo tư thế, kèm mất thính lực một bên, ù tai, đầy tai (aural fullness), có thể gây té ngã (drop attacks). Gặp nhiều nhất ở 20–60 tuổi. BPPV — cơn <1 phút, theo tư thế đầu, không mất thính lực. Phân biệt đúng quan trọng vì Ménière cần BS điều trị (betahistine ETC), không phải BPPV OTC.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN chóng mặt nặng kèm nôn mửa nhiều lần, không giữ được nước uống từ sáng đến chiều. DS xử trí thế nào?",
            "opts": [
                "Bán cinnarizine + domperidone uống, theo dõi tại nhà thêm 24 giờ",
                "Chuyển khám BS trong ngày (same day referral) — nôn mửa nhiều không giữ được nước uống có nguy cơ mất nước và rối loạn điện giải",
                "Hướng dẫn uống Oresol từ từ từng ngụm nhỏ và nằm nghỉ, theo dõi thêm 2 ngày"
            ],
            "ans": 1,
            "exp": "Rutter 2026 phân loại nôn mửa nặng kèm rối loạn tiền đình là red flag cần chuyển khám trong ngày (same-day referral) vì nguy cơ mất nước và rối loạn điện giải đe dọa tính mạng, đặc biệt NCT. BN có thể cần truyền dịch và thuốc chống nôn đường tiêm/hậu môn. Thuốc OTC đường uống không hiệu quả khi BN đang nôn nhiều.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên phi dùng thuốc nào được khuyến cáo cho BN bị BPPV nhẹ tại nhà?",
            "opts": [
                "Nằm yên hoàn toàn trên giường liên tục 3–5 ngày để otolith ổn định",
                "Thực hiện thủ thuật tái định vị Epley (Epley manoeuvre) hoặc các bài tập thích nghi tiền đình (vestibular rehabilitation exercises)",
                "Xoa bóp vùng cổ-gáy mạnh để giải phóng áp lực động mạch đốt sống"
            ],
            "ans": 1,
            "exp": "Thủ thuật Epley (canalith repositioning) được chứng minh hiệu quả cho BPPV ống bán khuyên sau — thao tác đầu theo tuần tự làm otolith di chuyển ra khỏi ống bán khuyên. Bài tập Brandt–Daroff cũng có hiệu quả. Nằm bất động không có lợi và làm chậm hồi phục. Xoa bóp mạnh vùng cổ không được khuyến cáo và có thể gây chấn thương.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN chóng mặt kèm khó thở, đau ngực và tim đập nhanh không đều. DS phải xử trí thế nào?",
            "opts": [
                "Bán cinnarizine và dặn ngồi nghỉ, nếu không đỡ sau 30 phút thì gọi cấp cứu",
                "Gọi cấp cứu 115 ngay lập tức — khó thở + đau ngực + loạn nhịp kèm chóng mặt gợi ý nguyên nhân tim mạch cấp tính",
                "Hướng dẫn hít thở sâu để giảm lo âu, sau đó bán dimenhydrinate"
            ],
            "ans": 1,
            "exp": "Rutter 2026: chóng mặt kèm khó thở gợi ý nguyên nhân tim mạch (arrhythmia, aortic stenosis, sick sinus syndrome) hoặc ngộ độc CO (carbon monoxide poisoning). Đây là red flag cần cấp cứu ngay. Nguyên nhân tim mạch gây chóng mặt thường kèm: nhịp tim không đều, đánh trống ngực, đau ngực, khó thở khi gắng sức. Không được điều trị OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 55t hút thuốc lá, THA, rối loạn lipid máu đến nhà thuốc kể chóng mặt thoáng qua đột ngột, không liên quan đến tư thế, kèm nhìn mờ thoáng qua. DS phân tích thế nào?",
            "opts": [
                "BPPV điển hình ở người trung niên — bán cinnarizine và hướng dẫn thủ thuật Epley",
                "Nghi thiếu máu hệ đốt sống-nền (vertebrobasilar insufficiency) — có nhiều yếu tố nguy cơ xơ vữa động mạch; chuyển BS ngay để đánh giá đột quỵ/TIA",
                "Hạ đường huyết do bỏ bữa — hướng dẫn ăn nhẹ và theo dõi"
            ],
            "ans": 1,
            "exp": "Rutter 2026: vertebrobasilar insufficiency (VBI) xảy ra khi xơ vữa gây hẹp/tắc động mạch đốt sống-nền, nuôi dưỡng thân não, tiểu não và tai trong. BN này có đủ yếu tố nguy cơ xơ vữa (hút thuốc, THA, rối loạn lipid máu, tuổi trung niên). Chóng mặt đột ngột không theo tư thế + rối loạn thị giác = red flag VBI/TIA. Cần đánh giá khẩn.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS tư vấn BN về biện pháp phi dùng thuốc để phòng ngừa say tàu xe. Khuyến cáo nào được có bằng chứng hỗ trợ tốt nhất?",
            "opts": [
                "Nhắm mắt suốt hành trình và đeo bịt tai để giảm kích thích giác quan",
                "Ngồi ghế trước (gần trọng tâm phương tiện), nhìn ra xa về phía trước, tránh đọc sách, đảm bảo thông thoáng",
                "Ăn thật no trước khi đi xe để giảm kích thích dạ dày"
            ],
            "ans": 1,
            "exp": "Phòng ngừa say xe phi dùng thuốc: (1) Ngồi ghế trước (ít chuyển động nhất); (2) Nhìn ra xa về phía trước để thị giác đồng bộ với tiền đình; (3) Tránh đọc sách/nhìn màn hình (tăng xung đột cảm giác); (4) Thông thoáng, tránh mùi hắc; (5) Ăn nhẹ trước khi đi (không nhịn đói, không ăn quá no); (6) Kẹo gừng — có bằng chứng hạn chế nhưng an toàn.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN chóng mặt đến hỏi DS: 'Tôi bị chóng mặt mỗi khi đứng dậy, thường hết sau 1–2 phút.' Nguyên nhân khả năng nhất và tư vấn phi dùng thuốc phù hợp là gì?",
            "opts": [
                "BPPV — hướng dẫn thủ thuật Epley khi đứng dậy",
                "Hạ huyết áp tư thế (postural hypotension) — hướng dẫn đứng dậy từ từ, nắm tay vào vật bền chắc, uống đủ nước",
                "Thiếu máu não cấp — chuyển cấp cứu ngay"
            ],
            "ans": 1,
            "exp": "Chóng mặt khi đứng dậy, tự hết trong 1–2 phút = hạ HA tư thế (orthostatic hypotension) điển hình — HA giảm bất thường khi đổi tư thế từ nằm/ngồi sang đứng. Rutter 2026: phổ biến ở NCT, người dùng thuốc hạ áp, lợi tiểu. Tư vấn phi dùng thuốc: đứng dậy từ từ theo 3 bước (nằm → ngồi → đứng), giữ vật bền chắc, uống đủ nước, tránh đứng lâu.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BPPV là nguyên nhân phổ biến nhất gây rối loạn tiền đình, chiếm phần lớn các ca chóng mặt gặp tại nhà thuốc cộng đồng.",
            "ans": true,
            "exp": "Rutter 2026 xác nhận: BPPV là nguyên nhân phổ biến nhất của rối loạn tiền đình ngoại biên, được ghi nhận trong nhiều nghiên cứu dịch tễ. Vestibular neuronitis là nguyên nhân phổ biến thứ hai. Bệnh Ménière ít gặp hơn BPPV khoảng 10 lần. Chóng mặt nói chung ảnh hưởng 15–20% người trưởng thành, vestibular vertigo chiếm ~25% trong đó.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm thần kinh tiền đình (vestibular neuronitis) thường kèm mất thính lực một bên — đây là triệu chứng phân biệt với BPPV.",
            "ans": false,
            "exp": "Viêm thần kinh tiền đình (vestibular neuronitis) KHÔNG gây mất thính lực — đây là đặc điểm phân biệt với labyrinthitis (có mất thính lực). Rutter 2026: vestibular neuronitis — khởi phát cấp tính nặng, nôn buồn nôn, có nystagmus, KHÔNG có triệu chứng thính giác. Mất thính lực một bên gặp trong: Ménière, labyrinthitis, u thần kinh thính giác.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN chóng mặt đột ngột xuất hiện mà không liên quan đến thay đổi tư thế đầu là dấu hiệu đòi hỏi đánh giá BS sớm vì gợi ý nguyên nhân không phải tiền đình ngoại biên.",
            "ans": true,
            "exp": "Rutter 2026: 'sudden onset not provoked by positional change' là red flag — gợi ý nguyên nhân không phải tiền đình ngoại biên (non-vestibular cause). Có thể là: đột quỵ thiếu máu thân não/tiểu não, TIA, rối loạn tim mạch. BPPV điển hình luôn có liên quan đến thay đổi tư thế. Chóng mặt tự phát đột ngột không theo tư thế cần đánh giá khẩn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "DS nên khuyên BN bị chóng mặt do tiền đình ngừng lái xe và thông báo cho nơi làm việc nếu công việc có nguy cơ liên quan đến chóng mặt.",
            "ans": true,
            "exp": "Rutter 2026 nhấn mạnh: 'There is an obvious risk to the person themselves and others they interact with if they experience dizziness or vertigo. Advise the person to avoid driving, and the workplace should be informed when it may pose risk.' DS có trách nhiệm tư vấn an toàn này, đặc biệt với BN làm việc trên cao, vận hành máy móc hoặc lái xe nghề nghiệp.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Rối loạn tiền đình tư thế lành tính (BPPV) thường tự khỏi trong vài tuần và thủ thuật tái định vị otolith có thể đẩy nhanh hồi phục.",
            "ans": true,
            "exp": "Rutter 2026: 'BPPV and vestibular neuronitis often spontaneously resolve but can take weeks.' Thủ thuật Epley (canalith repositioning) di chuyển otolith ra khỏi ống bán khuyên, giải quyết nguyên nhân cơ học của BPPV. Thủ thuật này có bằng chứng hiệu quả tốt (meta-analysis) và là can thiệp đầu tay được khuyến cáo trong hướng dẫn điều trị quốc tế.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Hạ đường huyết (hypoglycemia) có thể gây chóng mặt và cần được loại trừ ở BN đái tháo đường dùng insulin hoặc sulfonylurea đến nhà thuốc với triệu chứng chóng mặt.",
            "ans": true,
            "exp": "Rutter 2026 liệt kê hạ đường huyết là nguyên nhân chóng mặt 'unlikely' nhưng cần loại trừ ở BN ĐTĐ. Triệu chứng hạ đường huyết: chóng mặt, lâng lâng, vã mồ hôi, run tay, đói, tim đập nhanh, khó tập trung, tê môi. DS nên hỏi: 'Anh/chị có bị ĐTĐ không, có đang dùng insulin không, hôm nay ăn uống thế nào?' và kiểm tra đường huyết mao mạch nếu có máy.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đa thuốc (polypharmacy — dùng ≥5 thuốc) được ghi nhận là yếu tố nguy cơ quan trọng gây chóng mặt và hạ huyết áp tư thế ở người cao tuổi.",
            "ans": true,
            "exp": "Rutter 2026: 'Polypharmacy (taking more than five medicines) is probably more of a contributory factor to causes of hypotension and dizziness.' Nhiều nhóm thuốc gây hạ HA tư thế: thuốc hạ áp, lợi tiểu, nitrate, alpha-blocker, antidepressant. Ở NCT, tổng tác dụng của đa thuốc cộng gộp và chuyển hóa chậm làm tăng đáng kể nguy cơ. DS nên review danh sách thuốc khi gặp NCT chóng mặt.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cetirizine và loratadine (kháng histamine H1 thế hệ 2) có hiệu quả tương đương cinnarizine trong điều trị rối loạn tiền đình và say tàu xe.",
            "ans": false,
            "exp": "Kháng histamine H1 thế hệ 2 (cetirizine, loratadine, fexofenadine) không thấm qua hàng rào máu-não đáng kể và không có tác dụng ức chế kênh canxi — hai cơ chế chính của cinnarizine tại tiền đình. Thế hệ 2 hiệu quả cho dị ứng nhưng không có chỉ định cho rối loạn tiền đình hay say tàu xe. Chỉ antihistamine thế hệ 1 (cinnarizine, dimenhydrinate, diphenhydramine, scopolamine) có hiệu quả với tiền đình.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cinnarizine 25 mg × 3 lần/ngày an toàn để dùng liên tục dài hạn (>6 tháng) ở người cao tuổi mà không cần tái đánh giá chỉ định.",
            "ans": false,
            "exp": "Cinnarizine dài hạn ở NCT tiềm ẩn nhiều nguy cơ: (1) Drug-induced parkinsonism tích lũy theo thời gian — khó phân biệt với Parkinson thực sự; (2) An thần kéo dài tăng nguy cơ ngã; (3) Trầm cảm. Hướng dẫn lâm sàng khuyến cáo đánh giá lại chỉ định định kỳ và dùng thời gian ngắn nhất cần thiết. Không có bằng chứng ủng hộ dùng liên tục >6 tháng không tái đánh giá.",
            "icon": "👴"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 38t có tiền sử đau nửa đầu migraine, đến nhà thuốc kể chóng mặt, buồn nôn, nhạy cảm ánh sáng kèm đau đầu một bên. DS nghi ngờ điều gì và xử trí thế nào?",
            "opts": [
                "BPPV điển hình — bán cinnarizine và hướng dẫn thủ thuật Epley tại nhà",
                "Migraine tiền đình (vestibular migraine) — chuyển BS đánh giá; đây không phải rối loạn tiền đình ngoại biên đơn thuần",
                "Viêm thần kinh tiền đình cấp tính — bán dimenhydrinate và chườm lạnh vùng cổ gáy"
            ],
            "ans": 1,
            "exp": "Rutter 2026 mô tả migraine tiền đình: BN có tiền sử migraine + cơn chóng mặt/lâng lâng kèm triệu chứng migraine điển hình (đau đầu một bên, sợ ánh sáng, sợ tiếng động, buồn nôn). BPPV không kèm đau đầu nặng và sợ ánh sáng. Vestibular migraine cần đánh giá BS và chiến lược điều trị riêng (thay đổi lối sống, thuốc dự phòng migraine ETC) — không phải OTC tiền đình đơn thuần.",
            "icon": "🔍"
        }
    ],
    "coldsore": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích với sinh viên thực tập: acyclovir cream 5% tác động lên HSV theo cơ chế nào?",
            "opts": [
                "Phá hủy thành tế bào virus bằng cách ức chế tổng hợp peptidoglycan",
                "Ức chế DNA polymerase của virus sau khi được phosphoryl hóa bởi thymidine kinase đặc hiệu của HSV",
                "Ngăn chặn virus gắn vào thụ thể glycoprotein trên bề mặt tế bào chủ"
            ],
            "ans": 1,
            "exp": "Acyclovir là tiền dược không hoạt động. Thymidine kinase (TK) đặc hiệu của HSV phosphoryl hóa acyclovir → acyclovir monophosphate; kinase tế bào chủ tiếp tục tạo acyclovir triphosphate — dạng hoạt động ức chế cạnh tranh DNA polymerase virus và gây kết thúc chuỗi DNA sớm. Tính chọn lọc cao do bước đầu phụ thuộc TK của virus, không phải của tế bào lành.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi cách dùng acyclovir cream 5% đúng chuẩn. DS hướng dẫn tần suất và thời gian điều trị là gì?",
            "opts": [
                "Bôi 2 lần/ngày × 7 ngày",
                "Bôi 5 lần/ngày (cách ~4 giờ trong khi thức) × 4 ngày",
                "Bôi mỗi 2 giờ trong khi thức × 4 ngày"
            ],
            "ans": 1,
            "exp": "Phác đồ chuẩn acyclovir cream 5%: 5 lần/ngày, cách nhau ~4 giờ trong thời gian thức (không cần dùng ban đêm), trong 4 ngày. Tần suất mỗi 2 giờ là phác đồ của penciclovir cream 1% — không áp dụng cho acyclovir.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 28t, không có bệnh nền, xuất hiện mụn nước môi từ sáng nay. Lựa chọn OTC đầu tay phù hợp nhất là gì?",
            "opts": [
                "Fusidic acid cream 2%",
                "Hydrocortisone cream 1%",
                "Acyclovir cream 5%"
            ],
            "ans": 2,
            "exp": "Acyclovir cream 5% là antiviral OTC đầu tay cho herpes môi chưa biến chứng ở người lớn khỏe mạnh. Fusidic acid là kháng sinh tại chỗ không có tác dụng kháng virus. Hydrocortisone (corticosteroid) CCĐ trong nhiễm herpes vì ức chế miễn dịch tại chỗ, có thể làm nặng thêm tổn thương và phát tán virus.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN báo cảm thấy ngứa, châm chích ở môi dưới từ sáng nay nhưng chưa thấy mụn. Để tối ưu hiệu quả điều trị, nên bắt đầu acyclovir cream vào lúc nào?",
            "opts": [
                "Chờ đến khi mụn nước hình thành rõ ràng mới bôi",
                "Bắt đầu ngay trong giai đoạn tiền triệu (prodrome)",
                "Chờ đến khi mụn nước vỡ và tạo vết loét"
            ],
            "ans": 1,
            "exp": "Giai đoạn tiền triệu — ngứa, châm chích, rát bỏng tại chỗ trước khi mụn xuất hiện — là thời điểm lý tưởng nhất để bắt đầu antiviral. Khởi đầu điều trị sớm ở giai đoạn này có thể rút ngắn thời gian bệnh đáng kể và đôi khi ngăn mụn nước hình thành hoàn toàn.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 26t mang thai tuần 22, herpes môi tái phát nhẹ không biến chứng. DS nên tư vấn về acyclovir cream thế nào?",
            "opts": [
                "CCĐ tuyệt đối trong toàn thai kỳ, không dùng bất kỳ antiviral tại chỗ nào",
                "Dùng thận trọng, ưu tiên thảo luận với BS sản khoa để cân nhắc lợi ích/nguy cơ",
                "An toàn hoàn toàn, dùng bình thường không cần thông báo BS"
            ],
            "ans": 1,
            "exp": "Acyclovir cream 5% có hấp thu toàn thân qua da <1%, nên phơi nhiễm của thai nhi rất thấp. Tuy nhiên, chưa có đủ nghiên cứu kiểm soát trên thai phụ. Hầu hết hướng dẫn lâm sàng cho phép dùng thận trọng với sự đồng ý của BS sản, đặc biệt không tự quyết ở 3 tháng đầu.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phụ huynh muốn mua acyclovir cream OTC cho trẻ 10 tuổi bị mụn nước môi. DS nên tư vấn thế nào?",
            "opts": [
                "Bán bình thường vì acyclovir cream OTC an toàn với mọi lứa tuổi từ 2 tuổi trở lên",
                "Acyclovir cream OTC khuyến cáo cho người ≥12 tuổi; với trẻ 10 tuổi nên hỏi ý kiến BS trước",
                "Tuyệt đối CCĐ dưới 18 tuổi, không có antiviral nào phù hợp ngoài bệnh viện"
            ],
            "ans": 1,
            "exp": "Tờ hướng dẫn sử dụng acyclovir cream 5% OTC (FDA, EMA) khuyến cáo cho người ≥12 tuổi. Với trẻ <12 tuổi, không phải CCĐ tuyệt đối nhưng thiếu dữ liệu lâm sàng đầy đủ — nên tham khảo BS nhi, đặc biệt nếu đây là đợt đầu tiên. Acyclovir kê đơn đường uống có thể được BS chỉ định cho trẻ <12 tuổi khi cần thiết.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 35t báo herpes môi tái phát >6 lần trong năm nay, acyclovir cream ngày càng kém hiệu quả. DS nên tư vấn hướng nào?",
            "opts": [
                "Tăng tần suất bôi lên 8 lần/ngày để cải thiện hiệu quả",
                "Khuyên khám BS để xem xét antiviral đường uống dự phòng dài hạn (suppressive therapy)",
                "Chuyển sang docosanol 10% cream vì cơ chế khác, không bị đề kháng"
            ],
            "ans": 1,
            "exp": "Tái phát ≥6 lần/năm là ngưỡng xem xét suppressive therapy: acyclovir 400 mg × 2 lần/ngày hoặc valacyclovir 500 mg/ngày đường uống (ETC, cần kê đơn). Liệu pháp này giảm tần suất tái phát ~70–80%. Tăng liều cream không có bằng chứng lâm sàng hỗ trợ.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "So sánh acyclovir cream 5% và penciclovir cream 1% trong điều trị herpes môi, điểm khác biệt lâm sàng đáng chú ý nhất là gì?",
            "opts": [
                "Penciclovir bôi 5 lần/ngày như acyclovir nhưng thời gian điều trị kéo dài hơn (7 ngày)",
                "Acyclovir bôi 5 lần/ngày; penciclovir bôi mỗi 2 giờ khi thức (~8 lần/ngày)",
                "Acyclovir không cần phosphoryl hóa, còn penciclovir cần thymidine kinase của virus để hoạt hóa"
            ],
            "ans": 1,
            "exp": "Penciclovir cream 1% bôi mỗi 2 giờ trong khi thức (~8 lần/ngày) × 4 ngày — tần suất dày hơn acyclovir (5 lần/ngày). Bù lại, penciclovir có thời gian bán hủy nội bào dài hơn (~10–20 giờ so với <1 giờ của acyclovir triphosphate). Cả hai đều cần TK của HSV để hoạt hóa và có thể gặp đề kháng chéo.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đã dùng acyclovir cream đúng cách được 4 ngày. Vết thương còn hồng nhẹ, mụn nước đã khô, BN muốn tiếp tục thêm 2 tuần cho chắc. DS tư vấn thế nào?",
            "opts": [
                "Được, dùng thêm đến khi hoàn toàn không còn vết hồng trên da",
                "Phác đồ chuẩn là 4–5 ngày; nếu không lành sau 10 ngày từ khi khởi phát, cần khám BS",
                "Dừng ngay và thêm corticosteroid tại chỗ để giảm viêm còn lại"
            ],
            "ans": 1,
            "exp": "Acyclovir cream chuẩn dùng 4–5 ngày. Kéo dài không cải thiện thêm hiệu quả và có thể gây kích ứng da. Giai đoạn da hồng sau crusting là bình thường. Nếu tổn thương không lành sau 10 ngày tổng cộng, cần khám BS loại trừ bội nhiễm vi khuẩn hoặc đề kháng antiviral. Corticosteroid tại chỗ CCĐ với herpes.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 44t đang dùng thuốc ức chế miễn dịch sau ghép thận, đến nhà thuốc với mụn nước môi lan rộng sang má. DS xử trí phù hợp nhất là gì?",
            "opts": [
                "Bán acyclovir cream OTC và hướng dẫn bôi nhiều hơn 5 lần/ngày",
                "Không bán gì vì CCĐ tuyệt đối antiviral với người dùng thuốc ức chế miễn dịch",
                "Không tự điều trị OTC; chuyển khám BS ngay vì cần antiviral toàn thân, nguy cơ biến chứng cao"
            ],
            "ans": 2,
            "exp": "BN suy giảm miễn dịch (ghép tạng, HIV/AIDS, hóa trị liệu) với herpes lan rộng có nguy cơ cao bị herpes nội tạng, viêm não HSV. OTC tại chỗ không đủ hiệu quả. Cần antiviral toàn thân (acyclovir IV hoặc valacyclovir uống kê đơn) dưới giám sát BS chuyên khoa. Không phải CCĐ dùng antiviral — CCĐ tự điều trị OTC.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Docosanol 10% cream có cơ chế tác động khác hoàn toàn với acyclovir. Điểm khác biệt chính là gì?",
            "opts": [
                "Ức chế thymidine kinase của HSV thay vì DNA polymerase",
                "Ngăn chặn sự hợp nhất màng virus–tế bào chủ (membrane fusion), tức ngăn virus xâm nhập vào tế bào",
                "Kích hoạt đáp ứng interferon tại chỗ để tiêu diệt virus"
            ],
            "ans": 1,
            "exp": "Docosanol là alcohol no mạch dài (C22), tác động bên ngoài tế bào bằng cách ngăn cản bước hợp nhất màng lipid của virus với màng tế bào chủ, ngăn HSV xâm nhập. Khác với acyclovir (ức chế DNA polymerase nội bào). Vì hoạt động ở bước trước khi vào tế bào, docosanol không có đề kháng chéo với acyclovir.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 74t, suy thận nhẹ (eGFR 55 mL/phút), cần dùng acyclovir cream 5% cho herpes môi không biến chứng. Có cần điều chỉnh gì không?",
            "opts": [
                "Giảm tần suất bôi xuống 2 lần/ngày để tránh tích lũy thuốc",
                "Không cần chỉnh liều; dạng cream có hấp thu toàn thân rất thấp, ít bị ảnh hưởng bởi chức năng thận",
                "CCĐ dùng acyclovir cream ở NCT có suy thận, cần đổi sang docosanol"
            ],
            "ans": 1,
            "exp": "Acyclovir cream 5% có hấp thu toàn thân qua da <1%, nên chức năng thận không ảnh hưởng đến liều bôi tại chỗ. Chỉnh liều theo thận áp dụng cho acyclovir đường uống/tiêm (giảm liều khi eGFR <50 mL/phút). NCT nên lưu ý da mỏng hơn, có thể kích ứng nhẹ hơn, nhưng không cần thay đổi phác đồ.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN có mụn nước ở môi trên, lo lắng tổn thương lan lên mắt và muốn bôi acyclovir cream quanh mi mắt để phòng ngừa. DS cảnh báo thế nào?",
            "opts": [
                "Có thể bôi một lớp rất mỏng quanh mi mắt để phòng ngừa",
                "Pha loãng acyclovir cream với kem dưỡng ẩm trước khi bôi gần mắt là an toàn",
                "Acyclovir cream CCĐ vùng mắt; nếu có triệu chứng mắt (đỏ, đau, chảy nước mắt), phải khám BS mắt ngay"
            ],
            "ans": 2,
            "exp": "Acyclovir cream 5% CCĐ tuyệt đối vùng mắt và niêm mạc. Herpetic keratitis (viêm giác mạc herpes) là red flag cần chuyên khoa mắt khẩn cấp, có thể gây mù nếu điều trị chậm. Dạng nhỏ mắt acyclovir 3% ophthalmic ointment là chế phẩm riêng biệt, ETC, chỉ BS mắt mới chỉ định.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang bôi tacrolimus 0.1% ointment cho viêm da vùng quanh miệng, nay xuất hiện herpes môi. DS tư vấn thế nào?",
            "opts": [
                "Dùng đồng thời cả hai tại cùng vùng da vì không có tương tác dược động học trực tiếp",
                "Bôi xen kẽ: sáng acyclovir cream, tối tacrolimus để tránh tương tác",
                "Dừng tacrolimus, dùng acyclovir cream và chuyển khám BS để đánh giá lại"
            ],
            "ans": 2,
            "exp": "Tacrolimus ointment (calcineurin inhibitor tại chỗ) ức chế đáp ứng miễn dịch tế bào T tại chỗ, có thể làm nặng thêm và phát tán nhiễm HSV. FDA cảnh báo không dùng tacrolimus/pimecrolimus tại chỗ khi có nhiễm trùng da đang hoạt động, bao gồm herpes. Cần BS đánh giá lại phác đồ viêm da.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS được hỏi tại sao valacyclovir đường uống không thể mua tự do tại nhà thuốc. Giải thích phù hợp nhất là gì?",
            "opts": [
                "Valacyclovir gây nghiện nên phải kiểm soát kê đơn tương tự như opioid",
                "Valacyclovir là ETC tại Việt Nam vì cần chẩn đoán xác định và có thể gây tác dụng phụ toàn thân nghiêm trọng",
                "Valacyclovir chỉ được phép bán ở bệnh viện, không qua nhà thuốc tư nhân"
            ],
            "ans": 1,
            "exp": "Valacyclovir là ETC tại Việt Nam. Tác dụng phụ toàn thân tiềm tàng: suy thận (đặc biệt khi không uống đủ nước, NCT), giảm tiểu cầu, tác động hệ thần kinh trung ương ở liều cao. Cần chẩn đoán để tránh nhầm với bệnh khác. Famciclovir cũng là ETC.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi cách bôi acyclovir cream đúng để vừa hiệu quả vừa tránh lây nhiễm. Hướng dẫn nào là phù hợp nhất?",
            "opts": [
                "Xoa mạnh vào tổn thương để thuốc thấm sâu, không cần rửa tay vì thuốc OTC không lây",
                "Dùng tăm bông hoặc ngón tay sạch, bôi nhẹ nhàng phủ toàn bộ tổn thương, rửa tay kỹ trước và sau khi bôi",
                "Bôi một lớp dày tạo hàng rào vật lý, thay mới mỗi 30 phút"
            ],
            "ans": 1,
            "exp": "Dùng tăm bông hoặc ngón tay đã rửa sạch. Bôi nhẹ nhàng, không xoa mạnh gây vỡ mụn nước và phát tán virus. Rửa tay trước và sau khi bôi để tránh tự lây sang vùng khác (autoinoculation — đặc biệt nguy hiểm nếu chạm mắt) và tránh lây cho người khác.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trường hợp nào sau đây phù hợp nhất để dùng acyclovir cream 5% OTC mà không cần chuyển BS?",
            "opts": [
                "BN 40t, lần đầu bị herpes môi, lan rộng sang vùng má, kèm sốt và hạch cổ to",
                "BN 30t, tiền sử tái phát herpes môi, vừa xuất hiện tiền triệu (ngứa, châm chích) hôm nay",
                "BN 65t đang dùng thuốc ức chế miễn dịch, herpes môi kèm vết loét rộng"
            ],
            "ans": 1,
            "exp": "Acyclovir cream OTC phù hợp nhất cho herpes môi tái phát không biến chứng ở người khỏe mạnh, bắt đầu sớm ở giai đoạn tiền triệu. Lần đầu phát bệnh (primary infection) thường nặng hơn và cần đánh giá BS. Lan rộng, sốt, hạch to hoặc suy giảm miễn dịch đều là red flag cần chuyển khám.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Acyclovir cream 5% được phép bôi lên vùng nào trong điều trị herpes môi?",
            "opts": [
                "Môi và cả bên trong khoang miệng nếu có vết loét",
                "Chỉ bôi lên vùng da và môi bên ngoài; không bôi vào niêm mạc miệng hoặc mắt",
                "Môi, niêm mạc má trong và lưỡi vì cùng là tổn thương do HSV-1"
            ],
            "ans": 1,
            "exp": "Acyclovir cream 5% chỉ có chỉ định ngoài da và môi. CCĐ bôi vào niêm mạc (trong miệng, mắt, âm đạo). Herpetic stomatitis (viêm miệng do herpes trong khoang miệng) thường tự khỏi và được điều trị hỗ trợ; nếu nặng cần acyclovir đường uống theo kê đơn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đến nhà thuốc với mụn nước ở mi mắt, đau mắt, nhạy cảm ánh sáng và thị lực hơi mờ. DS xử trí thuốc thế nào?",
            "opts": [
                "Bán acyclovir cream 5% và hướng dẫn bôi cẩn thận tránh để thuốc vào mắt",
                "Bán acyclovir ophthalmic ointment 3% để bôi trực tiếp vào mắt",
                "Không bán bất kỳ antiviral OTC nào; chuyển khám BS mắt khẩn cấp"
            ],
            "ans": 2,
            "exp": "Herpetic keratitis (viêm giác mạc do herpes) là cấp cứu nhãn khoa — nguyên nhân hàng đầu gây mù do nhiễm trùng ở các nước phát triển. Acyclovir ophthalmic ointment 3% là ETC, chỉ BS mắt mới chỉ định. Acyclovir cream tuyệt đối không dùng vùng mắt. Không trì hoãn chuyển viện.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN HIV đang điều trị ARV, herpes môi không đáp ứng sau 10 ngày acyclovir đường uống đúng liều. Nguyên nhân khả năng nhất và hướng xử trí là gì?",
            "opts": [
                "Tăng liều acyclovir gấp đôi thêm 2 tuần vì có thể chưa đủ liều",
                "Chuyển sang valacyclovir uống vì cùng cơ chế nhưng sinh khả dụng cao hơn nhiều",
                "Nghi đề kháng acyclovir do đột biến thymidine kinase; chuyển BS để xem xét foscarnet hoặc cidofovir"
            ],
            "ans": 2,
            "exp": "Đề kháng acyclovir gặp chủ yếu ở BN suy giảm miễn dịch nặng (HIV, cấy ghép), xảy ra qua đột biến gen TK hoặc DNA polymerase của HSV. Valacyclovir (tiền chất acyclovir) sẽ cho kết quả tương tự — không khắc phục được đề kháng. Foscarnet không phụ thuộc TK để hoạt hóa, là lựa chọn thay thế. Đây là tình huống bệnh viện.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dùng acyclovir cream đúng liều ngay từ giai đoạn tiền triệu có thể loại bỏ hoàn toàn virus HSV ra khỏi cơ thể, không còn tái phát.",
            "ans": false,
            "exp": "Acyclovir và mọi antiviral hiện có chỉ ức chế sao chép virus trong giai đoạn tái hoạt động, không tiêu diệt được HSV đang ở trạng thái tiềm ẩn (latency) trong hạch thần kinh cảm giác (hạch sinh ba). Virus tồn tại vĩnh viễn và có thể tái hoạt khi gặp trigger. Đây là lý do herpes tái phát suốt đời dù điều trị đúng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Penciclovir cream 1% được bôi mỗi 2 giờ trong khi thức, trong 4 ngày là phác đồ điều trị chuẩn.",
            "ans": true,
            "exp": "Phác đồ chuẩn penciclovir cream 1%: bôi mỗi 2 giờ trong khi thức (~8 lần/ngày) × 4 ngày. Tần suất dày hơn acyclovir nhưng penciclovir có thời gian bán hủy nội bào dài hơn (~10–20 giờ so với <1 giờ của acyclovir triphosphate). Nghiên cứu cho thấy penciclovir rút ngắn thời gian lành vết thương trung bình ~0.7 ngày so với giả dược.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acyclovir cream 5% có thể bôi vào trong khoang miệng để điều trị vết loét do herpes.",
            "ans": false,
            "exp": "Acyclovir cream 5% chỉ dùng ngoài da và môi. CCĐ bôi vào khoang miệng do không được thiết kế và thử nghiệm cho mục đích này. Herpetic stomatitis nguyên phát thường tự khỏi 10–14 ngày với điều trị hỗ trợ; nếu nặng cần acyclovir uống theo kê đơn, không phải cream.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Valacyclovir là tiền dược (prodrug) của acyclovir, được chuyển hóa thành acyclovir sau khi hấp thu qua đường tiêu hóa.",
            "ans": true,
            "exp": "Valacyclovir (L-valine ester của acyclovir) có sinh khả dụng đường uống ~55% so với ~15–30% của acyclovir. Sau khi hấp thu, valacyclovirase ở ruột non và gan thủy phân nhanh thành acyclovir và L-valine. Đây là lý do valacyclovir có thể dùng ít lần hơn (2–3 lần/ngày) so với acyclovir đường uống (5 lần/ngày).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Docosanol 10% cream tác động bằng cách ức chế trực tiếp DNA polymerase của virus HSV.",
            "ans": false,
            "exp": "Docosanol (C22 alcohol no mạch dài) không tác động lên DNA polymerase mà ngăn chặn bước hợp nhất màng (membrane fusion) giữa vỏ lipid của HSV và màng tế bào chủ, ngăn virus xâm nhập vào tế bào. Cơ chế ngoại bào này hoàn toàn khác với acyclovir và không có đề kháng chéo.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dùng acyclovir cream kéo dài 10–14 ngày giúp tăng hiệu quả điều trị và giảm nguy cơ tái phát so với phác đồ 4–5 ngày.",
            "ans": false,
            "exp": "Không có bằng chứng lâm sàng chứng minh kéo dài thời gian dùng cream cải thiện kết quả hoặc giảm tái phát. Acyclovir cream chuẩn là 4–5 ngày. Dùng quá dài có thể gây kích ứng, viêm da tiếp xúc tại chỗ. Để giảm tái phát, cần antiviral toàn thân dự phòng (ETC), không phải kéo dài cream.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acyclovir cream 5% có thể dùng thận trọng khi đang cho con bú vì hấp thu toàn thân qua da rất thấp.",
            "ans": true,
            "exp": "Do hấp thu toàn thân <1%, lượng acyclovir đi vào sữa mẹ từ dạng cream là không đáng kể. LactMed và UK Medicines in Lactation Database cho phép dùng acyclovir cream khi cho con bú với thận trọng. Lưu ý quan trọng: không bôi tại vùng ngực/núm vú vì trẻ có thể tiếp xúc trực tiếp.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Famciclovir đường uống được phép bán OTC tại Việt Nam mà không cần kê đơn.",
            "ans": false,
            "exp": "Famciclovir là ETC tại Việt Nam và hầu hết các quốc gia. Famciclovir là tiền chất của penciclovir, dùng trong herpes zoster, herpes sinh dục và dự phòng herpes môi tái phát — các chỉ định này cần chẩn đoán và theo dõi chuyên khoa. Cùng với valacyclovir, đây là ETC không được bán tự do tại nhà thuốc.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acyclovir cần được phosphoryl hóa 3 lần mới tạo thành dạng hoạt động (acyclovir triphosphate) ức chế DNA polymerase của virus.",
            "ans": true,
            "exp": "Acyclovir → acyclovir monophosphate (bởi TK đặc hiệu của HSV) → acyclovir diphosphate → acyclovir triphosphate (bởi kinase tế bào chủ). Bước đầu tiên phụ thuộc TK của virus giải thích tính chọn lọc cao: chỉ hoạt động trong tế bào nhiễm virus, ít ảnh hưởng tế bào lành. Đột biến gen TK là cơ chế đề kháng acyclovir phổ biến nhất.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Bôi acyclovir cream trực tiếp bằng ngón tay trần (không rửa tay sau khi bôi) không có nguy cơ lây nhiễm đáng kể.",
            "ans": false,
            "exp": "Bôi thuốc bằng ngón tay có thể lây virus từ tổn thương sang đầu ngón tay (herpetic whitlow — nhiễm herpes ngón tay) hoặc lây sang vùng khác (autoinoculation). Đặc biệt nguy hiểm nếu chạm mắt sau đó (nguy cơ herpetic keratitis). Khuyến cáo: dùng tăm bông hoặc rửa tay kỹ trước và sau khi bôi.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hiệu quả của acyclovir cream tương đương nhau dù bắt đầu ở giai đoạn tiền triệu hay giai đoạn đóng vảy, miễn là dùng đúng liều.",
            "ans": false,
            "exp": "Hiệu quả acyclovir tối ưu khi dùng sớm ở giai đoạn tiền triệu — sao chép virus đang ở đỉnh cao. Ở giai đoạn đóng vảy (crusting), sao chép virus đã giảm đáng kể, thuốc ít tác dụng hơn rõ rệt. Nghiên cứu lâm sàng cho thấy điều trị trong 24–48 giờ đầu rút ngắn thời gian bệnh đáng kể; điều trị muộn ở giai đoạn loét/đóng vảy có lợi ích hạn chế.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Acyclovir cream 5% ít gây tác dụng phụ toàn thân vì hấp thu qua da rất thấp.",
            "ans": true,
            "exp": "Acyclovir cream có hấp thu qua da nguyên vẹn <1%, qua da tổn thương herpes cũng rất thấp. Tác dụng phụ chủ yếu là tại chỗ: ngứa nhẹ, rát, khô da thoáng qua. Tác dụng phụ toàn thân như suy thận, giảm bạch cầu trung tính — chỉ gặp với acyclovir đường uống liều cao hoặc tiêm tĩnh mạch, không áp dụng cho dạng cream.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 32t đến nhà thuốc với mụn nước môi trên, kèm đau mắt phải, sợ ánh sáng và thị lực mờ nhẹ từ sáng nay. DS xử trí thế nào?",
            "opts": [
                "Bán acyclovir cream và dặn bôi tránh vùng mắt, theo dõi thêm 3 ngày",
                "Chuyển khám BS mắt khẩn cấp — đây là dấu hiệu nghi herpetic keratitis, nguy cơ mù nếu chậm trễ",
                "Bán nước mắt nhân tạo kết hợp acyclovir cream, tái khám nếu không đỡ sau 5 ngày"
            ],
            "ans": 1,
            "exp": "Herpetic keratitis là nguyên nhân hàng đầu gây mù do nhiễm trùng ở các nước phát triển. Bộ ba cảnh báo: đau mắt + sợ ánh sáng + giảm thị lực, kèm mụn nước quanh mắt. Cần khám nhãn khoa khẩn — không được trì hoãn tự điều trị OTC.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN hỏi: 'Nếu không dùng thuốc gì, herpes môi của tôi sẽ tự khỏi sau bao lâu?' DS trả lời đúng nhất là?",
            "opts": [
                "2–3 ngày",
                "4–6 ngày",
                "7–10 ngày"
            ],
            "ans": 2,
            "exp": "Herpes môi không điều trị thường tự khỏi trong 7–10 ngày, qua 5 giai đoạn: tiền triệu → sẩn → mụn nước → loét → đóng vảy → lành da. Một số trường hợp kéo dài đến 14 ngày. Điều trị antiviral sớm ở giai đoạn tiền triệu có thể rút ngắn 1–2 ngày và giảm mức độ tổn thương.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Giai đoạn nào của herpes môi có tải lượng virus (viral load) cao nhất và nguy cơ lây HSV cho người khác là lớn nhất?",
            "opts": [
                "Giai đoạn đóng vảy (crusting) — vảy bong ra phát tán virus",
                "Giai đoạn mụn nước (vesicular) — khi mụn còn nguyên hoặc vừa vỡ",
                "Giai đoạn lành da hoàn toàn — virus thoát ra để chuẩn bị lần tái phát sau"
            ],
            "ans": 1,
            "exp": "Dịch trong mụn nước chứa tải lượng virus cao nhất. Giai đoạn vesicular–ulcerative có nguy cơ lây cao nhất qua tiếp xúc trực tiếp (hôn, dùng chung ly). Tuy nhiên, HSV-1 còn lây qua asymptomatic shedding bất kỳ lúc nào, kể cả khi không có mụn. Giai đoạn crusting vẫn có khả năng lây, giảm dần khi da lành.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trong số các yếu tố sau, yếu tố nào KHÔNG được ghi nhận là trigger gây tái hoạt HSV-1 trong y văn?",
            "opts": [
                "Tia UV từ ánh nắng mặt trời",
                "Uống đủ nước và ngủ đủ giấc đều đặn hàng ngày",
                "Stress tâm lý cấp tính hoặc sốt cao do bệnh nhiễm trùng"
            ],
            "ans": 1,
            "exp": "Các trigger tái phát herpes môi gồm: tia UV, stress tâm lý, sốt/bệnh cấp tính, kinh nguyệt, chấn thương môi, phẫu thuật nha khoa, suy giảm miễn dịch, mất ngủ kéo dài. Uống đủ nước và ngủ đủ giấc giúp duy trì hệ miễn dịch — ngược lại, có tác dụng bảo vệ phòng tái phát.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nữ 35t, herpes môi tái phát ít nhất 8 lần trong năm nay. DS nên tư vấn thêm gì ngoài bán acyclovir cream?",
            "opts": [
                "Tăng thời gian dùng cream lên 2 tuần mỗi đợt để dự phòng tái phát",
                "Gợi ý bổ sung lysine và vitamin C liều cao hàng ngày thay thế antiviral",
                "Khuyên khám BS để đánh giá liệu pháp antiviral đường uống dự phòng dài hạn"
            ],
            "ans": 2,
            "exp": "Tái phát ≥6 lần/năm là ngưỡng xem xét suppressive therapy: acyclovir 400 mg × 2 lần/ngày hoặc valacyclovir 500 mg/ngày (ETC, kê đơn). Giảm tần suất tái phát ~70–80%. Lysine bổ sung có bằng chứng yếu, không đủ thay thế antiviral. Tăng thời gian cream không có bằng chứng dự phòng tái phát.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên phi dùng thuốc nào được khuyến cáo nhất để giảm nguy cơ tái phát herpes môi?",
            "opts": [
                "Chườm đá trực tiếp lên môi mỗi ngày để ức chế virus bằng lạnh",
                "Dùng son dưỡng môi có SPF ≥30 thường xuyên khi tiếp xúc ánh nắng",
                "Súc miệng nước muối 3 lần/ngày để giữ môi trường kiềm ngăn virus"
            ],
            "ans": 1,
            "exp": "Tia UV là trigger tái phát quan trọng và có thể phòng được. Son dưỡng môi có SPF ≥30 (chứa zinc oxide hoặc titanium dioxide) bôi trước khi ra nắng có bằng chứng giảm tần suất tái phát liên quan đến ánh nắng. Chườm đá trực tiếp không có bằng chứng và có thể gây kích thích. Nước muối không diệt được HSV.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Mẹ bỉm sữa vừa sinh con 4 ngày tuổi, đang bị herpes môi tái phát. DS cần cảnh báo điều gì quan trọng nhất?",
            "opts": [
                "Không sao, herpes môi chỉ nguy hiểm khi mẹ bị lần đầu, không phải tái phát",
                "Không hôn mặt trẻ, rửa tay kỹ trước khi chăm sóc; nếu trẻ có dấu hiệu bất thường (sốt, bỏ bú), đưa khám BS ngay",
                "Ngưng cho con bú hoàn toàn cho đến khi herpes lành hẳn"
            ],
            "ans": 1,
            "exp": "Neonatal herpes có tỷ lệ tử vong đến 60% nếu không điều trị và để lại di chứng thần kinh nặng nề. Lây qua tiếp xúc trực tiếp (hôn mặt), không qua sữa mẹ. Không cần ngưng cho bú trừ khi có tổn thương herpes ở vú. Cả đợt tái phát lẫn lần đầu đều nguy hiểm như nhau cho trẻ sơ sinh.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN có vết loét nhỏ, bờ trắng-vàng, đau khi ăn, nằm bên trong niêm mạc má, chưa từng có mụn nước bao giờ. DS nhận định thế nào?",
            "opts": [
                "Đây là herpes môi điển hình, cần acyclovir cream bôi ngay",
                "Nhiều khả năng là aphthous ulcer (nhiệt miệng); herpes môi điển hình ở môi ngoài, bắt đầu bằng mụn nước",
                "Không phân biệt được tại nhà thuốc, cần làm PCR trước khi tư vấn"
            ],
            "ans": 1,
            "exp": "Herpes môi: tổn thương ở MÔI NGOÀI và quanh miệng, tiền triệu ngứa/châm chích, bắt đầu bằng sẩn → mụn nước → loét → đóng vảy. Aphthous ulcer: trong khoang miệng (niêm mạc, lưỡi), không có mụn nước, bờ vàng/trắng, không do virus, không lây. Phân biệt đúng để tránh dùng antiviral không cần thiết.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS tư vấn BN herpes môi về phòng ngừa lây cho người thân. Khuyến cáo nào KHÔNG đúng?",
            "opts": [
                "Tránh hôn và tiếp xúc da mặt trực tiếp tại vùng có tổn thương",
                "Không dùng chung ly, muỗng, khăn mặt khi tổn thương đang tiến triển",
                "Khi tổn thương đã đóng vảy hoàn toàn, có thể hôn bình thường vì không còn nguy cơ lây"
            ],
            "ans": 2,
            "exp": "Viral shedding của HSV-1 tiếp tục trong giai đoạn đóng vảy và một thời gian sau khi da lành. Hơn nữa, asymptomatic shedding xảy ra bất kỳ lúc nào giữa các đợt tái phát. Khuyến cáo: kiêng tiếp xúc trực tiếp đến khi da lành hoàn toàn, không chỉ đến khi 'đóng vảy'.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN dùng acyclovir cream đúng cách 5 ngày nhưng tổn thương vẫn lan rộng hơn và kèm sốt nhẹ 37.8°C. DS nên làm gì?",
            "opts": [
                "Tiếp tục thêm 5 ngày vì herpes môi thường cần 10 ngày tổng cộng để lành",
                "Thêm kháng sinh tại chỗ để phòng bội nhiễm, tự theo dõi thêm 3 ngày",
                "Chuyển khám BS — không đáp ứng OTC sau 5 ngày kèm triệu chứng toàn thân là dấu hiệu cần đánh giá lại"
            ],
            "ans": 2,
            "exp": "Không đáp ứng OTC đúng cách sau 5 ngày + triệu chứng toàn thân (sốt, hạch) + tổn thương lan rộng là red flag chuyển BS. Nguyên nhân có thể: bội nhiễm vi khuẩn (cần kháng sinh toàn thân, không tại chỗ), suy giảm miễn dịch chưa phát hiện, đề kháng acyclovir. Không tự ý dùng kháng sinh tại chỗ khi chưa đánh giá.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN nam 28t đang điều trị herpes môi, hôm nay thêm sốt 39.5°C, đau đầu dữ dội và cứng cổ. DS phải làm gì ngay lập tức?",
            "opts": [
                "Thêm ibuprofen hạ sốt và theo dõi tại nhà 24 giờ",
                "Khuyên uống nhiều nước, bổ sung điện giải và chườm mát",
                "Gọi cấp cứu hoặc đưa ngay đến cơ sở y tế — nghi hội chứng màng não hoặc viêm não do HSV"
            ],
            "ans": 2,
            "exp": "Sốt cao + đau đầu dữ dội + cứng cổ là bộ ba triệu chứng cổ điển của hội chứng màng não. Ở BN đang có herpes môi hoạt động, phải nghĩ đến herpes encephalitis/meningitis — cấp cứu thần kinh với tỷ lệ tử vong >70% nếu không điều trị bằng acyclovir IV kịp thời. Tuyệt đối không trì hoãn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "HSV-1 gây herpes môi chỉ có khả năng lây lan khi mụn nước đang vỡ, không lây trong các giai đoạn còn lại.",
            "ans": false,
            "exp": "HSV-1 có thể lây từ giai đoạn tiền triệu (trước khi mụn xuất hiện) và kéo dài qua giai đoạn đóng vảy. Quan trọng hơn, asymptomatic viral shedding — phóng thích virus vào nước bọt mà không có triệu chứng — có thể xảy ra bất kỳ lúc nào. Ước tính ~15–25% số ngày trong năm, người mang HSV-1 có shed virus không triệu chứng.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "HSV-1 (Herpes Simplex Virus type 1) là nguyên nhân gây ra hơn 90% các ca herpes môi.",
            "ans": true,
            "exp": "HSV-1 là tác nhân chính của herpes môi (herpes labialis). HSV-2 chủ yếu gây herpes sinh dục nhưng ngày càng được tìm thấy gây herpes môi nhiều hơn do quan hệ miệng-sinh dục. Huyết thanh học cho thấy ~50–80% người trưởng thành ở các nước đang phát triển có kháng thể IgG anti-HSV-1, phần lớn lây qua tiếp xúc thông thường từ nhỏ.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Phơi nắng kéo dài mà không bảo vệ môi là yếu tố kích hoạt tái phát herpes môi được ghi nhận trong y văn.",
            "ans": true,
            "exp": "Tia UV là trigger tái phát được ghi nhận rõ nhất của herpes môi. Cơ chế đề xuất: UV ức chế miễn dịch tế bào tại chỗ (giảm hoạt động tế bào Langerhans trong da) và có thể kích hoạt trực tiếp gen HSV tiềm ẩn. Son dưỡng môi SPF ≥30 được nghiên cứu cho thấy giảm tần suất tái phát liên quan đến ánh nắng.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Herpes môi thông thường tự khỏi sau 3–5 ngày mà không cần điều trị.",
            "ans": false,
            "exp": "Herpes môi không điều trị thường kéo dài 7–10 ngày (một số trường hợp đến 14 ngày), trải qua đầy đủ 5 giai đoạn. Khoảng 3–5 ngày ngắn hơn thực tế đáng kể. Điều trị antiviral sớm ở giai đoạn tiền triệu có thể rút ngắn ~1–2 ngày nhưng không rút ngắn xuống còn 3–5 ngày.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN bị herpes môi đang hoạt động không nên hôn hoặc tiếp xúc da-mặt trực tiếp với trẻ sơ sinh.",
            "ans": true,
            "exp": "Neonatal herpes cực kỳ nguy hiểm: tỷ lệ tử vong 60–85% nếu không điều trị; di chứng thần kinh nặng (mù, điếc, chậm phát triển) ở trẻ sống sót. Trẻ sơ sinh chưa có miễn dịch với HSV và hàng rào miễn dịch chưa hoàn thiện. Tuyệt đối không hôn mặt trẻ sơ sinh khi đang có herpes môi hoạt động.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Người mang HSV-1 có thể phóng thích virus vào nước bọt và lây cho người khác ngay cả khi không có bất kỳ mụn nước hay triệu chứng nào.",
            "ans": true,
            "exp": "Asymptomatic viral shedding của HSV-1 được ghi nhận rõ ràng trong y văn. Nghiên cứu PCR nước bọt cho thấy HSV-1 DNA phát hiện được ở ~15–25% số ngày ở người mang HSV-1 không có triệu chứng. Đây là lý do HSV-1 lây lan rộng trong cộng đồng, ước tính >50–80% dân số nhiều quốc gia đang phát triển có kháng thể HSV-1.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Aphthous ulcer (nhiệt miệng) và herpes môi đều do virus HSV-1 gây ra, chỉ khác nhau ở vị trí tổn thương.",
            "ans": false,
            "exp": "Aphthous ulcer (canker sore) KHÔNG do virus HSV gây ra. Nguyên nhân chưa hoàn toàn rõ — liên quan đến rối loạn miễn dịch tại chỗ, thiếu vi chất (B12, sắt, folate), stress, nhưng bản chất không phải nhiễm trùng virus và không lây. Aphthous nằm trong khoang miệng, không có giai đoạn mụn nước. Nhầm hai bệnh dẫn đến dùng antiviral không cần thiết.",
            "icon": "🔍"
        }
    ],
    "conjunctivitis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS giải thích cho BN: sodium cromoglicate 2% nhỏ mắt ngăn triệu chứng viêm kết mạc dị ứng theo cơ chế nào?",
            "opts": [
                "Ức chế trực tiếp thụ thể histamine H1 tại mô kết mạc",
                "Ổn định màng tế bào mast, ngăn giải phóng histamine và các chất trung gian gây viêm khi tiếp xúc dị nguyên",
                "Gây co mạch máu kết mạc, giảm xung huyết và ngứa tại chỗ"
            ],
            "ans": 1,
            "exp": "Sodium cromoglicate là mast cell stabilizer — gắn vào màng tế bào mast, ngăn IgE/dị nguyên phức hợp kích hoạt tế bào, ức chế giải phóng histamine, leukotrienes và các chất trung gian gây viêm. Không phải kháng histamine và không gây co mạch. Vì tác dụng dự phòng, cần dùng liên tục trước khi tiếp xúc dị nguyên.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ketotifen nhỏ mắt được đánh giá cao hơn sodium cromoglicate trong điều trị viêm kết mạc dị ứng cấp tính nhờ điểm gì?",
            "opts": [
                "Ketotifen có thêm tác dụng kháng khuẩn giúp phòng bội nhiễm",
                "Ketotifen vừa kháng histamine H1 vừa ổn định tế bào mast — tác dụng kép cho khởi đầu nhanh hơn",
                "Ketotifen gây co mạch kết mạc mạnh hơn sodium cromoglicate"
            ],
            "ans": 1,
            "exp": "Ketotifen có cơ chế kép: (1) kháng histamine H1 trực tiếp — giảm triệu chứng ngứa và đỏ mắt nhanh; (2) ổn định tế bào mast — ngăn giải phóng histamine khi tiếp xúc dị nguyên. Sodium cromoglicate chỉ có cơ chế dự phòng (ổn định mast cell) nên hiệu quả chậm hơn khi triệu chứng đã xuất hiện. Phác đồ ketotifen: 1 giọt × 2 lần/ngày.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nữ 28t mỗi năm đến mùa phấn hoa thường bị ngứa mắt, chảy nước mắt cả 2 mắt. Triệu chứng vừa bắt đầu hôm nay. Lựa chọn OTC đầu tay nào phù hợp nhất?",
            "opts": [
                "Naphazoline nhỏ mắt",
                "Nước mắt nhân tạo (HA/CMC)",
                "Sodium cromoglicate 2% hoặc ketotifen nhỏ mắt"
            ],
            "ans": 2,
            "exp": "Sodium cromoglicate 2% và ketotifen nhỏ mắt là lựa chọn đầu tay cho viêm kết mạc dị ứng. Naphazoline chỉ giảm đỏ tạm thời bằng co mạch, không điều trị nguyên nhân dị ứng. Nước mắt nhân tạo chỉ là hỗ trợ bôi trơn. Với triệu chứng dị ứng điển hình (ngứa, chảy nước mắt cả 2 mắt, theo mùa), mast cell stabilizer hoặc antihistamine nhỏ mắt là lựa chọn phù hợp.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 30t, mắt đỏ hoe, ghèn xanh vàng đặc từ sáng nay, mi mắt dính khi thức dậy. BN muốn mua naphazoline nhỏ mắt để giảm đỏ. DS tư vấn thế nào?",
            "opts": [
                "Naphazoline giảm đỏ nhanh và đủ để điều trị viêm kết mạc mủ nhẹ tại nhà",
                "Naphazoline chỉ giảm đỏ tạm thời bằng co mạch, không có tác dụng kháng khuẩn; cần hướng dẫn vệ sinh mắt và chuyển BS kê kháng sinh phù hợp",
                "Phối hợp naphazoline và nước muối rửa mắt đủ hiệu quả điều trị viêm kết mạc vi khuẩn nhẹ"
            ],
            "ans": 1,
            "exp": "Naphazoline là thuốc giao cảm (alpha-1 agonist) gây co mạch tại chỗ — chỉ giảm đỏ về triệu chứng, hoàn toàn không có tác dụng kháng khuẩn. Ghèn xanh vàng đặc, mi dính buổi sáng là dấu hiệu gợi ý viêm kết mạc vi khuẩn cần kháng sinh nhỏ mắt kê đơn. Dùng naphazoline che khuất triệu chứng, làm chậm điều trị đúng.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi: 'Tôi nên bắt đầu nhỏ sodium cromoglicate từ khi nào để đạt hiệu quả tốt nhất trong mùa dị ứng?' DS trả lời đúng nhất là?",
            "opts": [
                "Chờ đến khi triệu chứng dị ứng xuất hiện rõ rồi mới bắt đầu",
                "Bắt đầu ít nhất 1 tuần trước khi vào mùa dị ứng và dùng liên tục trong suốt mùa",
                "Chỉ dùng khi triệu chứng nghiêm trọng, không nên dùng phòng ngừa vì gây quen thuốc"
            ],
            "ans": 1,
            "exp": "Sodium cromoglicate là thuốc dự phòng (prophylactic agent): cần thời gian để đạt nồng độ ổn định tại mô và ổn định màng mast cell. Bắt đầu ít nhất 1 tuần trước mùa dị ứng và dùng liên tục trong suốt mùa cho hiệu quả tối đa. Nếu bắt đầu muộn (sau khi triệu chứng đã có), hiệu quả kém hơn và cần phối hợp với ketotifen.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phác đồ chuẩn của sodium cromoglicate 2% nhỏ mắt cho viêm kết mạc dị ứng là gì?",
            "opts": [
                "1–2 giọt × 1 lần/ngày (buổi sáng)",
                "1–2 giọt × 4 lần/ngày",
                "2 giọt × 6–8 lần/ngày"
            ],
            "ans": 1,
            "exp": "Sodium cromoglicate 2% nhỏ mắt: 1–2 giọt × 4 lần/ngày cho trẻ ≥6 tuổi và người lớn. Dùng liên tục trong suốt thời gian tiếp xúc dị nguyên. Không nên bỏ liều vì tác dụng dự phòng cần nồng độ ổn định tại chỗ. Khác với ketotifen (1 giọt × 2 lần/ngày).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đến nhà thuốc với mắt đỏ, phân tiết mủ vàng xanh, mi mắt dính nhau buổi sáng. Tại nhà thuốc không có kháng sinh nhỏ mắt OTC. DS xử trí phù hợp nhất là gì?",
            "opts": [
                "Bán naphazoline nhỏ mắt và dặn nhỏ 4 lần/ngày cho đến khi hết triệu chứng",
                "Hướng dẫn vệ sinh mắt bằng nước muối sinh lý và chuyển BS kê kháng sinh nhỏ mắt ETC",
                "Tư vấn mua kháng sinh uống (amoxicillin) vì hiệu quả toàn thân cao hơn nhỏ mắt"
            ],
            "ans": 1,
            "exp": "Tại Việt Nam, toàn bộ kháng sinh nhỏ mắt (tobramycin, gentamicin, ciprofloxacin, chloramphenicol) đều là ETC — DS không được bán OTC. Xử trí tại nhà thuốc: vệ sinh mắt bằng nước muối 0.9%, chườm khăn sạch lạnh, sau đó chuyển BS kê đơn. Kháng sinh uống không phải chỉ định đầu tay cho viêm kết mạc vi khuẩn không biến chứng.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang điều trị trầm cảm bằng phenelzine (ức chế MAO), bị mắt đỏ do dị ứng và muốn mua naphazoline nhỏ mắt. DS cần biết gì?",
            "opts": [
                "Naphazoline nhỏ mắt an toàn vì hấp thu toàn thân từ mắt quá thấp, không có tương tác thực tế",
                "CCĐ phối hợp naphazoline với MAOI — nguy cơ cơn tăng huyết áp kịch phát (hypertensive crisis)",
                "Chỉ CCĐ với MAOI khi dùng naphazoline đường uống hoặc nhỏ mũi, còn nhỏ mắt thì ổn"
            ],
            "ans": 1,
            "exp": "Nguyên tắc an toàn với thuốc giao cảm (sympathomimetic): CCĐ phối hợp với MAOI và trong vòng 14 ngày sau khi ngưng MAOI — áp dụng cho MỌI đường dùng (uống, nhỏ mũi, nhỏ mắt). Dù hấp thu toàn thân từ mắt thấp, nguy cơ cơn tăng HA kịch phát vẫn được ghi nhận. Rutter 2026 khuyến cáo tránh tất cả sympathomimetic (kể cả nhỏ mắt) với MAOI.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 62t, tiền sử glaucoma góc hẹp, đến nhà thuốc hỏi mua thuốc nhỏ mắt cho mắt đỏ ngứa. DS cần tránh tư vấn thuốc nào?",
            "opts": [
                "Sodium cromoglicate 2% nhỏ mắt",
                "Nước mắt nhân tạo HA",
                "Naphazoline phối hợp kháng histamine (antazoline–xylometazoline)"
            ],
            "ans": 2,
            "exp": "Dạng phối hợp naphazoline + antazoline (antihistamine) CCĐ với glaucoma góc hẹp vì thành phần kháng histamine (anticholinergic nhẹ) có thể làm giãn đồng tử → giảm góc thoát thủy dịch → tăng nhãn áp. Naphazoline đơn thuần cũng thận trọng ở BN glaucoma. Sodium cromoglicate và nước mắt nhân tạo không có tương tác này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN vừa bị cảm cúm 3 ngày, nay thêm mắt đỏ, chảy nước mắt nhiều, không có ghèn mủ, sờ thấy hạch nhỏ trước tai. Không có antiviral OTC nhỏ mắt. DS tư vấn thuốc hỗ trợ gì phù hợp nhất?",
            "opts": [
                "Sodium cromoglicate 2% vì có tác dụng chống viêm tại kết mạc",
                "Nước mắt nhân tạo để giảm khó chịu, kết hợp vệ sinh mắt và chườm lạnh",
                "Naphazoline để giảm đỏ và co hạch trước tai"
            ],
            "ans": 1,
            "exp": "Viêm kết mạc virus (nước mắt nhiều, không ghèn mủ, hạch trước tai — hallmark của adenovirus) chỉ điều trị hỗ trợ vì không có antiviral OTC nhỏ mắt. Nước mắt nhân tạo giảm khó chịu; chườm lạnh giảm phù mi; vệ sinh mắt sạch. Sodium cromoglicate không có chỉ định cho viêm kết mạc virus. Naphazoline chỉ che lấp triệu chứng, không điều trị nguyên nhân.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thai phụ tuần 18 bị viêm kết mạc dị ứng nhẹ, đang vào mùa phấn hoa. Lựa chọn OTC an toàn nhất tại nhà thuốc là gì?",
            "opts": [
                "Naphazoline nhỏ mắt vì chưa có bằng chứng gây hại trong thai kỳ",
                "Sodium cromoglicate 2% nhỏ mắt — được ghi nhận là an toàn trong thai kỳ qua kinh nghiệm lâm sàng rộng rãi",
                "Ketotifen nhỏ mắt — an toàn hoàn toàn mọi giai đoạn thai kỳ"
            ],
            "ans": 1,
            "exp": "Sodium cromoglicate nhỏ mắt được kinh nghiệm lâm sàng ghi nhận là an toàn trong thai kỳ và cho con bú (Rutter 2026, Blenkinsopp 2025). Naphazoline: 'chưa được nghiên cứu đầy đủ, chưa thấy gây hại nhưng thận trọng'. Ketotifen nhỏ mắt: dữ liệu thai kỳ còn hạn chế hơn cromoglicate. Hấp thu toàn thân từ nhỏ mắt thấp ở cả 3 loại.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Phụ huynh muốn mua sodium cromoglicate 2% nhỏ mắt cho trẻ 4 tuổi bị viêm kết mạc dị ứng. DS tư vấn thế nào?",
            "opts": [
                "Bán bình thường vì sodium cromoglicate an toàn từ 1 tuổi với mọi sản phẩm",
                "CCĐ tuyệt đối dưới 12 tuổi, không có thuốc dị ứng mắt OTC nào phù hợp",
                "Tờ hướng dẫn sử dụng nhiều sản phẩm khuyến cáo từ ≥6 tuổi; trẻ 4 tuổi nên tham khảo ý kiến BS nhi trước"
            ],
            "ans": 2,
            "exp": "Theo Rutter 2026: sodium cromoglicate nhỏ mắt khuyến cáo cho trẻ ≥6 tuổi (với sản phẩm GSL/P tại Anh). Một số sản phẩm cho phép từ ≥1 tuổi theo SPC. Trẻ 4 tuổi: không phải CCĐ tuyệt đối nhưng nên có đánh giá của BS nhi để xác định chẩn đoán (viêm kết mạc dị ứng vs nhiễm trùng) và chọn sản phẩm phù hợp.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN viêm kết mạc dị ứng đang đeo kính áp tròng mềm muốn dùng sodium cromoglicate nhỏ mắt. DS cần lưu ý gì?",
            "opts": [
                "Không có vấn đề gì, nhỏ thuốc bình thường trong khi đang đeo kính",
                "Bỏ kính ra trước khi nhỏ thuốc; chờ ít nhất 15 phút trước khi đeo lại",
                "CCĐ hoàn toàn khi đang đeo kính áp tròng, phải ngưng đeo trong suốt đợt điều trị dị ứng"
            ],
            "ans": 1,
            "exp": "Hầu hết thuốc nhỏ mắt đa liều (bao gồm sodium cromoglicate) chứa benzalkonium chloride (BKC) làm chất bảo quản. BKC có ái lực với polymer kính áp tròng mềm — tích lũy gây mờ/ố kính và kích ứng mắt kéo dài. Khuyến cáo theo Blenkinsopp 2025: bỏ kính ra trước khi nhỏ, chờ ≥15 phút trước khi đeo lại. Không áp dụng cho kính cứng.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đã dùng sodium cromoglicate 2% nhỏ mắt 4 lần/ngày được 2 tuần nhưng vẫn còn ngứa mắt nhiều trong ngày. DS có thể gợi ý đổi sang thuốc nào và vì sao?",
            "opts": [
                "Đổi sang naphazoline vì tác dụng co mạch nhanh hơn",
                "Đổi sang nước mắt nhân tạo vì ít tác dụng phụ hơn",
                "Xem xét đổi sang ketotifen nhỏ mắt vì tác dụng kép kháng H1 + ổn định mast cell cho hiệu quả nhanh và toàn diện hơn"
            ],
            "ans": 2,
            "exp": "Khi sodium cromoglicate không kiểm soát đủ triệu chứng ngứa, ketotifen là lựa chọn thay thế hợp lý: thành phần kháng H1 giảm ngứa nhanh hơn (tác dụng ngay), trong khi thành phần ổn định mast cell duy trì hiệu quả dự phòng. Phác đồ đơn giản hơn (2 lần/ngày thay vì 4 lần/ngày) giúp tăng tuân thủ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nhỏ naphazoline mắt để giảm đỏ đã được 2 tuần, nhận thấy ngày càng phải nhỏ nhiều hơn thì mắt mới bớt đỏ. Đây là dấu hiệu của gì?",
            "opts": [
                "BN đang phát triển đề kháng thuốc, cần tăng liều để duy trì hiệu quả",
                "BN cần bổ sung kháng sinh vì có bội nhiễm vi khuẩn",
                "Rebound hyperemia (giãn mạch phản hồi) do dùng naphazoline quá thời gian khuyến cáo"
            ],
            "ans": 2,
            "exp": "Tương tự rhinitis medicamentosa với xylometazoline nhỏ mũi, naphazoline nhỏ mắt dùng >5–7 ngày gây hiện tượng mạch máu kết mạc đáp ứng bằng cách giãn ra nhiều hơn (receptor upregulation) khi vắng mặt thuốc. Kết quả: phụ thuộc thuốc và mắt đỏ hơn khi ngừng. Cần dừng naphazoline dần, thay bằng nước mắt nhân tạo và điều trị nguyên nhân.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 67t đến nhà thuốc xin mua thuốc nhỏ mắt cho đỡ đỏ. DS cần hỏi thêm tiền sử gì quan trọng nhất trước khi tư vấn naphazoline?",
            "opts": [
                "Tiền sử dị ứng thức ăn",
                "Tiền sử glaucoma góc hẹp hoặc đang dùng MAOI",
                "Tiền sử đái tháo đường"
            ],
            "ans": 1,
            "exp": "Glaucoma góc hẹp là CCĐ quan trọng nhất của naphazoline (đặc biệt dạng phối hợp với antihistamine). Bệnh phổ biến hơn ở người >50 tuổi và người viễn thị. MAOI là CCĐ do nguy cơ hypertensive crisis. Cần hỏi cả hai trước khi tư vấn. Đái tháo đường không có CCĐ đặc hiệu với naphazoline nhỏ mắt.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi cách nhỏ mắt đúng để thuốc tác dụng tốt nhất. Hướng dẫn nào là phù hợp nhất?",
            "opts": [
                "Nhỏ thẳng lên giác mạc (con ngươi) và nhắm mắt ngay lập tức",
                "Kéo nhẹ mí mắt dưới tạo túi kết mạc, nhỏ 1 giọt vào túi, nhắm mắt nhẹ ~1 phút; rửa tay trước và sau khi nhỏ",
                "Nhỏ 3–4 giọt mỗi lần để đảm bảo đủ thuốc thấm vào mắt"
            ],
            "ans": 1,
            "exp": "Kỹ thuật đúng: rửa tay → kéo nhẹ mí dưới tạo túi kết mạc → nhỏ 1 giọt vào túi (không chạm đầu nhỏ vào mắt) → nhắm mắt nhẹ và ấn nhẹ góc trong mắt (điểm lệ) ~1 phút để giảm hấp thu toàn thân. Nhỏ >1 giọt lãng phí vì dung tích túi kết mạc chỉ ~7–10 µL. Nhỏ lên giác mạc gây chớp mắt phản xạ, thuốc chảy ra ngoài.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN bị viêm kết mạc dị ứng quanh năm (perennial) do dị ứng bụi nhà. Đã dùng kháng histamine nhỏ mắt ngắt quãng nhưng không kiểm soát tốt. DS gợi ý hướng nào?",
            "opts": [
                "Dùng naphazoline liên tục để kiểm soát đỏ mắt",
                "Chuyển sang sodium cromoglicate dùng liên tục vì phù hợp cho tiếp xúc dị nguyên kéo dài",
                "Tăng tần suất kháng histamine nhỏ mắt lên 6 lần/ngày"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 khuyến cáo: khi tiếp xúc dị nguyên kéo dài (perennial allergic conjunctivitis), dùng kháng histamine ngắt quãng không phù hợp — nên chuyển sang mast cell stabilizer (sodium cromoglicate) dùng liên tục. Bản chất dự phòng của cromoglicate phù hợp hơn cho tiếp xúc mãn tính. Naphazoline liên tục gây rebound, không phải lựa chọn.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS được hỏi: 'Tại sao ở một số nước chloramphenicol nhỏ mắt bán không cần kê đơn nhưng tại Việt Nam thì không?' Giải thích phù hợp nhất là gì?",
            "opts": [
                "Chloramphenicol nhỏ mắt độc hơn ở khí hậu nhiệt đới do biến đổi cấu trúc phân tử",
                "Tại Việt Nam, chloramphenicol nhỏ mắt được phân loại là thuốc ETC — mỗi quốc gia có quy định phân loại OTC/ETC riêng theo chính sách quản lý dược",
                "Chloramphenicol bị cấm hoàn toàn tại Việt Nam do nguy cơ aplastic anemia từ nhỏ mắt"
            ],
            "ans": 1,
            "exp": "Tại Anh, chloramphenicol nhỏ mắt là OTC (pharmacy medicine). Tại Việt Nam, toàn bộ kháng sinh nhỏ mắt (bao gồm chloramphenicol, tobramycin, gentamicin, ciprofloxacin) được phân loại ETC theo danh mục Cục QLD. Không phải do độc tính khác nhau mà do chính sách quản lý dược. DS Việt Nam phải chuyển khám để kê đơn.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS kiểm tra thuốc đang dùng của BN trước khi bán naphazoline nhỏ mắt, phát hiện BN đang dùng phenelzine. Điều gì đáng lo ngại nhất?",
            "opts": [
                "Phenelzine làm giảm hiệu quả co mạch của naphazoline, cần tăng liều bù lại",
                "Phối hợp naphazoline với MAOI có thể gây cơn tăng huyết áp kịch phát — CCĐ trong và trong vòng 14 ngày sau khi ngưng MAOI",
                "Chỉ cần nhỏ naphazoline cách xa giờ uống phenelzine ít nhất 2 giờ là đủ an toàn"
            ],
            "ans": 1,
            "exp": "Naphazoline (sympathomimetic) + MAOI (phenelzine, tranylcypromine, moclobemide): nguy cơ tích lũy norepinephrine → cơn tăng HA kịch phát (hypertensive crisis). CCĐ tuyệt đối trong và trong 14 ngày sau khi ngưng MAOI — không thể khắc phục bằng cách chia giờ uống. DS phải từ chối bán và gợi ý giải pháp thay thế (nước mắt nhân tạo, sodium cromoglicate).",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Naphazoline nhỏ mắt có thể điều trị viêm kết mạc vi khuẩn vì làm giảm xung huyết, tạo môi trường bất lợi cho vi khuẩn phát triển.",
            "ans": false,
            "exp": "Naphazoline là thuốc giao cảm gây co mạch tại chỗ — chỉ giảm đỏ về triệu chứng, hoàn toàn không có tác dụng kháng khuẩn. Dùng naphazoline trong viêm kết mạc nhiễm khuẩn che khuất triệu chứng, làm chậm điều trị đúng (kháng sinh nhỏ mắt ETC) và tăng nguy cơ biến chứng.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium cromoglicate 2% nhỏ mắt được ghi nhận là an toàn trong thai kỳ và cho con bú dựa trên kinh nghiệm lâm sàng rộng rãi.",
            "ans": true,
            "exp": "Blenkinsopp et al. (2025) và Rutter (2026) đều xác nhận: sodium cromoglicate nhỏ mắt an toàn trong thai kỳ và cho con bú. Hấp thu toàn thân qua nhỏ mắt rất thấp. Không có tương tác thuốc đáng kể. Đây là ưu điểm so với naphazoline (chưa đủ dữ liệu) và một số kháng histamine (thận trọng trong thai kỳ).",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ketotifen nhỏ mắt có thể nhỏ trực tiếp khi đang đeo kính áp tròng mềm vì nồng độ thuốc thấp không gây tổn hại.",
            "ans": false,
            "exp": "Ketotifen nhỏ mắt (và hầu hết thuốc nhỏ mắt đa liều) chứa benzalkonium chloride (BKC). BKC tích lũy trên kính áp tròng mềm (soft contact lens), gây mờ/ố kính và kích ứng mắt kéo dài. Khuyến cáo: bỏ kính ra trước khi nhỏ thuốc, chờ ít nhất 15 phút trước khi đeo lại. Áp dụng cho cả sodium cromoglicate và nước mắt nhân tạo có BKC.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nước mắt nhân tạo không chứa hoạt chất (HA, CMC) có thể nhỏ nhiều lần/ngày mà không lo ngại về tác dụng phụ đáng kể.",
            "ans": true,
            "exp": "Nước mắt nhân tạo là chất bôi trơn không có tác dụng dược lý toàn thân, an toàn khi nhỏ nhiều lần/ngày. Lưu ý thực tế: chế phẩm đa liều có BKC không nên dùng >4–6 lần/ngày kéo dài (BKC tích lũy gây độc tế bào giác mạc). Khi cần >4 lần/ngày trong thời gian dài, ưu tiên lọ đơn liều không có chất bảo quản.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Dùng naphazoline nhỏ mắt liên tục >5–7 ngày có thể gây hiện tượng giãn mạch phản hồi (rebound hyperemia), làm mắt đỏ hơn khi ngừng thuốc.",
            "ans": true,
            "exp": "Tương tự rhinitis medicamentosa với xylometazoline nhỏ mũi: dùng naphazoline kéo dài gây upregulation thụ thể adrenergic → mạch máu kết mạc giãn nhiều hơn khi vắng thuốc. BN phụ thuộc thuốc và mắt đỏ hơn mỗi khi ngừng. Naphazoline nhỏ mắt chỉ dùng ngắn hạn để giảm đỏ, không dùng quá 5–7 ngày theo Rutter 2026.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tobramycin nhỏ mắt được phép bán OTC tại Việt Nam mà không cần kê đơn.",
            "ans": false,
            "exp": "Tại Việt Nam, tobramycin nhỏ mắt và toàn bộ kháng sinh nhỏ mắt (gentamicin, ciprofloxacin, ofloxacin, chloramphenicol) đều là thuốc ETC theo danh mục Cục QLD. Khác với một số quốc gia (Anh: chloramphenicol nhỏ mắt là OTC). DS phải chuyển BN đến BS khi nghi viêm kết mạc vi khuẩn cần kháng sinh.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium cromoglicate nhỏ mắt thể hiện hiệu quả điều trị tối đa ngay từ ngày đầu sử dụng.",
            "ans": false,
            "exp": "Sodium cromoglicate là thuốc dự phòng (prophylactic) — cần thời gian để đạt nồng độ ổn định và ổn định màng mast cell. Nếu bắt đầu muộn (triệu chứng đã xuất hiện), hiệu quả giảm đáng kể. Blenkinsopp 2025 khuyến cáo bắt đầu ≥1 tuần trước mùa dị ứng và dùng liên tục. Khác với ketotifen có thành phần kháng H1 cho tác dụng nhanh hơn.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ketotifen nhỏ mắt có tác dụng kép: vừa ức chế thụ thể histamine H1 vừa ổn định tế bào mast.",
            "ans": true,
            "exp": "Đây là đặc điểm phân biệt ketotifen với sodium cromoglicate (chỉ ổn định mast cell). Thành phần kháng H1 giảm ngứa và đỏ mắt nhanh (tác dụng ngay lập tức); thành phần ổn định mast cell ngăn giải phóng histamine khi tiếp xúc dị nguyên (tác dụng dự phòng). Phác đồ đơn giản: 1 giọt × 2 lần/ngày, thuận tiện hơn cromoglicate (4 lần/ngày).",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Viêm kết mạc virus nên được điều trị bằng kháng sinh nhỏ mắt để ngăn ngừa bội nhiễm vi khuẩn cho người miễn dịch bình thường.",
            "ans": false,
            "exp": "Không có chỉ định dùng kháng sinh nhỏ mắt dự phòng cho viêm kết mạc virus ở người miễn dịch bình thường. Kháng sinh không tác dụng với virus và dùng không cần thiết làm tăng nguy cơ đề kháng kháng sinh. Rutter 2026 trích dẫn Cochrane review 2023 và hướng dẫn hiện hành: thận trọng khi dùng kháng sinh, chỉ dành cho trường hợp nặng hoặc cần phục hồi nhanh.",
            "icon": "💉"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Sodium cromoglicate nhỏ mắt nên được bắt đầu ít nhất 1 tuần trước khi vào mùa dị ứng để đạt hiệu quả phòng ngừa tối đa.",
            "ans": true,
            "exp": "Do cơ chế dự phòng của sodium cromoglicate (ổn định mast cell cần thời gian), Blenkinsopp et al. và Rutter đều khuyến cáo bắt đầu ít nhất 1 tuần trước mùa dị ứng và dùng liên tục. Dùng liên tục xuyên suốt mùa hiệu quả hơn đáng kể so với dùng ngắt quãng theo triệu chứng.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Naphazoline nhỏ mắt CCĐ với BN đang dùng MAOI hoặc trong vòng 14 ngày sau khi ngưng MAOI.",
            "ans": true,
            "exp": "Naphazoline (sympathomimetic) + MAOI: nguy cơ cơn tăng huyết áp kịch phát do tích lũy norepinephrine tại synapse. Rutter 2026 xác nhận: tất cả thuốc sympathomimetic (bao gồm naphazoline nhỏ mũi và nhỏ mắt) CCĐ với MAOI và trong 14 ngày sau khi ngưng. Dù hấp thu toàn thân từ nhỏ mắt thấp, nguyên tắc an toàn này vẫn được áp dụng tuyệt đối.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thuốc nhỏ mắt đa liều chứa benzalkonium chloride (BKC) làm chất bảo quản có thể nhỏ khi đang đeo kính áp tròng mềm vì nồng độ BKC rất thấp.",
            "ans": false,
            "exp": "BKC tích lũy trên polymer kính áp tròng mềm (soft/hydrogel lens), gây mờ/ố kính và kích ứng mắt kéo dài — không phụ thuộc nồng độ BKC thấp hay cao. Blenkinsopp 2025 khuyến cáo rõ: 'Drops containing benzalkonium should not be used at the same time as wearing soft contact lenses.' Không áp dụng cho kính cứng và kính không thấm nước (hard lens).",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đến nhà thuốc với mắt đỏ và đau nhức sâu bên trong mắt (true pain), kèm thị lực mờ và nhạy cảm ánh sáng mạnh. DS phân loại tình huống này thế nào?",
            "opts": [
                "Viêm kết mạc thông thường, có thể điều trị OTC bằng nước mắt nhân tạo",
                "Red flag cần chuyển BS mắt khẩn cấp — đau thực sự trong mắt kèm giảm thị lực gợi ý bệnh lý mắt nghiêm trọng",
                "Viêm kết mạc dị ứng nặng, cần sodium cromoglicate liều cao hơn"
            ],
            "ans": 1,
            "exp": "Theo Rutter 2026: đau thực sự trong mắt (true pain, phân biệt với khó chịu/cộm do viêm kết mạc) kèm giảm thị lực gợi ý các bệnh nghiêm trọng: uveitis, keratitis, scleritis, glaucoma cấp. Đây là red flag tuyệt đối — không được tự điều trị OTC, chuyển BS mắt khẩn cấp ngay. Viêm kết mạc đơn thuần gây khó chịu/cộm, không gây đau thực sự.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS đang hỏi bệnh để phân loại viêm kết mạc. Đặc điểm nào gợi ý viêm kết mạc VI KHUẨN nhiều hơn viêm kết mạc VIRUS?",
            "opts": [
                "Chảy nước mắt nhiều, không có ghèn, kèm sưng hạch trước tai và triệu chứng cảm cúm",
                "Phân tiết mủ vàng xanh đặc, mi mắt dính nhau buổi sáng, không kèm triệu chứng hô hấp",
                "Ngứa mắt dữ dội cả 2 mắt, tiết dịch trong loãng, tiền sử dị ứng theo mùa"
            ],
            "ans": 1,
            "exp": "Phân biệt theo Rutter 2026: Virus — chảy nước mắt/tiết dịch loãng, thường bắt đầu 1 mắt, có thể có hạch trước tai (hallmark adenovirus), kèm URTI. Vi khuẩn — phân tiết mủ (purulent/mucopurulent), vàng xanh đặc, mi dính sáng, thường ảnh hưởng 2 mắt. Dị ứng — ngứa dữ dội cả 2 mắt, tiết dịch trong, tiền sử dị ứng.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN bị viêm kết mạc virus hỏi: 'Nếu không dùng kháng sinh, bao lâu thì tự khỏi?' DS trả lời đúng nhất là?",
            "opts": [
                "2–3 ngày",
                "7–14 ngày — thường tự khỏi, điều trị chủ yếu là hỗ trợ triệu chứng",
                "4–6 tuần nếu không dùng kháng sinh"
            ],
            "ans": 1,
            "exp": "Viêm kết mạc virus (adenovirus, enterovirus) thường tự giới hạn trong 7–14 ngày. Điều trị hỗ trợ: nước mắt nhân tạo, chườm lạnh, vệ sinh tay tốt. Không có antiviral OTC. Cần khám BS nếu không cải thiện sau 1 tuần hoặc có triệu chứng toàn thân/mắt nặng hơn.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Phụ huynh đưa trẻ 12 ngày tuổi đến nhà thuốc, trẻ có mắt đỏ và phân tiết mủ nhiều từ hôm qua. DS xử trí thế nào?",
            "opts": [
                "Bán sodium cromoglicate nhỏ mắt vì an toàn với trẻ nhỏ",
                "Bán nước mắt nhân tạo và hướng dẫn vệ sinh mắt bằng nước muối, theo dõi tại nhà",
                "Không bán bất kỳ thuốc OTC nào; chuyển khám BS ngay — viêm kết mạc sơ sinh có thể do lậu cầu hoặc chlamydia, nguy cơ mù nếu chậm điều trị"
            ],
            "ans": 2,
            "exp": "Ophthalmia neonatorum (viêm kết mạc sơ sinh — trong 28 ngày đầu) luôn là red flag. Neisseria gonorrhoeae (hyperacute, 2–5 ngày sau sinh) gây nguy cơ mù rất cao nếu chậm điều trị ceftriaxone IM/IV. Chlamydia trachomatis (5–14 ngày sau sinh) cần azithromycin đường toàn thân. Không được tự điều trị OTC dù trẻ có vẻ ổn.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đang đeo kính áp tròng bị viêm kết mạc mủ, đến nhà thuốc hỏi mua thuốc. DS tư vấn về kính áp tròng như thế nào?",
            "opts": [
                "Tiếp tục đeo kính bình thường, chỉ cần nhỏ thêm nước mắt nhân tạo để bôi trơn",
                "Ngưng đeo kính ngay lập tức; không đeo lại cho đến khi hết hẳn nhiễm trùng và ít nhất 24 giờ sau khi hoàn thành điều trị",
                "Chuyển sang kính dùng 1 ngày (daily disposable) là đủ, không cần ngưng đeo"
            ],
            "ans": 1,
            "exp": "Kính áp tròng có thể bị nhiễm vi khuẩn và tạo môi trường ấm ẩm thuận lợi cho vi khuẩn sinh sôi — tăng nguy cơ loét giác mạc (corneal ulcer) nghiêm trọng. Blenkinsopp 2025: 'Contact lenses should not be worn until the infection has completely cleared and until 24h after any treatment has been completed.' Kính bị nhiễm cần bỏ (disposable) hoặc vệ sinh kỹ.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "DS tư vấn BN viêm kết mạc virus về phòng ngừa lây lan trong gia đình. Khuyến cáo nào KHÔNG đúng?",
            "opts": [
                "Rửa tay thường xuyên, đặc biệt sau khi chạm vào mắt",
                "Không dùng chung khăn mặt, gối, mỹ phẩm mắt",
                "Có thể đi làm/học bình thường vì đeo khẩu trang đủ để ngăn lây"
            ],
            "ans": 2,
            "exp": "Viêm kết mạc virus (đặc biệt adenovirus) lây chủ yếu qua tiếp xúc trực tiếp (tay-mắt) và bề mặt, không qua đường hô hấp — đeo khẩu trang KHÔNG đủ. Adenovirus tồn tại trên bề mặt nhiều giờ. Các biện pháp phòng ngừa: rửa tay nghiêm ngặt, không dùng chung đồ dùng cá nhân, tránh chạm tay vào mắt, hạn chế tiếp xúc.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Triệu chứng nào là đặc trưng nhất của viêm kết mạc DỊ ỨNG, giúp phân biệt với viêm kết mạc nhiễm trùng?",
            "opts": [
                "Phân tiết mủ vàng xanh đặc, mi mắt dính, thường một mắt trước",
                "Ngứa dữ dội cả 2 mắt, tiết dịch trong loãng, kèm triệu chứng dị ứng khác (hắt hơi, chảy mũi)",
                "Đau mắt thực sự, sợ ánh sáng, giảm thị lực rõ ràng"
            ],
            "ans": 1,
            "exp": "Ngứa (itching) là triệu chứng chủ đạo và đặc trưng nhất của viêm kết mạc dị ứng theo y văn (Rutter, Blenkinsopp). Thường 2 mắt đồng thời, tiết dịch trong loãng, kèm viêm mũi dị ứng. Vi khuẩn: mủ đặc, mi dính. Đau + sợ sáng + giảm thị lực là red flag bệnh lý mắt nghiêm trọng hơn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Sau bao lâu không cải thiện khi dùng OTC đúng cách, BN viêm kết mạc nên được tư vấn đến khám BS?",
            "opts": [
                "Sau 3 ngày không đỡ",
                "Sau 1 tuần triệu chứng vẫn còn hoặc sớm hơn nếu có dấu hiệu nặng hơn",
                "Chỉ khi có đau mắt thực sự; đỏ mắt đơn thuần có thể theo dõi vô thời hạn"
            ],
            "ans": 1,
            "exp": "Blenkinsopp 2025 khuyến cáo: nếu triệu chứng viêm kết mạc không cải thiện sau 1 tuần, cần chuyển khám BS. Cần khám sớm hơn (không cần đợi 1 tuần) nếu: đau mắt tăng, giảm thị lực, ánh sáng gây đau, triệu chứng lan rộng, BN suy giảm miễn dịch, trẻ sơ sinh hoặc trẻ rất nhỏ.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN đến nhà thuốc với mắt đỏ, phân tiết mủ vàng xanh, mi dính sáng nay, không đeo kính áp tròng, không có tiền sử bệnh mắt. DS nên làm gì?",
            "opts": [
                "Bán naphazoline nhỏ mắt để giảm đỏ và dặn theo dõi thêm 1 tuần",
                "Hướng dẫn vệ sinh mắt bằng nước muối 0.9%, chườm khăn sạch, và chuyển BS để kê kháng sinh nhỏ mắt ETC",
                "Bán nước mắt nhân tạo liều cao kết hợp uống amoxicillin 500 mg × 3 lần/ngày"
            ],
            "ans": 1,
            "exp": "Viêm kết mạc vi khuẩn (ghèn mủ, mi dính) cần kháng sinh nhỏ mắt — tất cả đều là ETC tại Việt Nam. DS tại nhà thuốc: (1) vệ sinh mắt bằng nước muối 0.9% từng mắt bằng bông/khăn riêng; (2) tư vấn rửa tay thường xuyên; (3) chuyển BS kê đơn kháng sinh. Kháng sinh uống không phải chỉ định đầu tay cho viêm kết mạc vi khuẩn không biến chứng.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Lời khuyên phi dùng thuốc nào phù hợp nhất để giảm khó chịu trong viêm kết mạc virus?",
            "opts": [
                "Chườm khăn ấm để tăng lưu thông máu và đẩy nhanh phục hồi",
                "Chườm khăn sạch lạnh giảm phù nề mi mắt và cảm giác nóng rát tạm thời",
                "Nhỏ mật ong pha loãng vào mắt vì có tính kháng khuẩn tự nhiên"
            ],
            "ans": 1,
            "exp": "Chườm lạnh (cold compress) giảm phù nề mi mắt, giảm cảm giác nóng rát và khó chịu — biện pháp phi dùng thuốc hữu ích nhất cho viêm kết mạc virus theo khuyến cáo của Blenkinsopp 2025. Không có tác dụng diệt virus nhưng cải thiện triệu chứng. Mật ong không được khuyến cáo và có thể gây nhiễm khuẩn thêm.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Trẻ 6 tuổi bị viêm kết mạc virus, mắt đỏ chảy nước mắt nhưng vẫn khỏe, không sốt. Phụ huynh hỏi có cần cho con nghỉ học không. DS trả lời đúng nhất theo hướng dẫn hiện hành?",
            "opts": [
                "Phải nghỉ học hoàn toàn cho đến khi hết hẳn viêm kết mạc để tránh lây cho bạn",
                "Có thể tiếp tục đi học trừ khi có bùng phát dịch trong trường; nhấn mạnh rửa tay đúng cách là biện pháp quan trọng nhất",
                "Không cần lo ngại vệ sinh gì thêm vì trẻ em có sức đề kháng cao hơn người lớn với adenovirus"
            ],
            "ans": 1,
            "exp": "Rutter 2026 trích dẫn hướng dẫn Anh: trẻ bị viêm kết mạc virus vẫn có thể đến trường trừ khi có bùng phát dịch. Biện pháp kiểm soát lây: rửa tay thường xuyên, không dùng chung khăn/gối, tránh chạm tay vào mắt. Nghỉ học hoàn toàn không cần thiết và gây gián đoạn học tập. Hướng dẫn này tương tự nhiều quốc gia khác.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm kết mạc virus (đặc biệt do adenovirus) rất dễ lây qua tiếp xúc trực tiếp với dịch mắt hoặc bề mặt bị nhiễm.",
            "ans": true,
            "exp": "Adenovirus — nguyên nhân phổ biến nhất của viêm kết mạc virus — có thể tồn tại trên bề mặt vô sinh nhiều giờ đến nhiều ngày. Lây chủ yếu qua đường tay-mắt, dùng chung khăn/gối/mỹ phẩm mắt. Đây là lý do vệ sinh tay nghiêm ngặt là biện pháp phòng ngừa quan trọng nhất. Viêm kết mạc adenovirus đôi khi xảy ra thành dịch (epidemic keratoconjunctivitis).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Mọi trường hợp mắt đỏ đến nhà thuốc đều cần kháng sinh nhỏ mắt để điều trị đúng nguyên nhân.",
            "ans": false,
            "exp": "Mắt đỏ có nhiều nguyên nhân với cách điều trị khác nhau: dị ứng → mast cell stabilizer/antihistamine; virus → hỗ trợ triệu chứng; vi khuẩn → kháng sinh ETC; khô mắt → nước mắt nhân tạo; uveitis/keratitis/glaucoma cấp → chuyển BS khẩn cấp. Kháng sinh chỉ có chỉ định cho viêm kết mạc vi khuẩn được xác định, không dùng đại trà.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ngứa mắt dữ dội là triệu chứng đặc trưng của viêm kết mạc dị ứng, thường ảnh hưởng cả 2 mắt đồng thời.",
            "ans": true,
            "exp": "Ngứa mắt là triệu chứng chủ đạo và đặc trưng nhất của viêm kết mạc dị ứng — được ghi nhận nhất quán trong y văn (Rutter, Blenkinsopp). Viêm kết mạc dị ứng thường ảnh hưởng cả 2 mắt cùng lúc, kèm tiết dịch trong loãng, có thể kèm viêm mũi dị ứng. Viêm kết mạc virus thường bắt đầu 1 mắt với cảm giác cộm hơn là ngứa.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ sơ sinh dưới 4 tuần tuổi bị mắt đỏ và tiết mủ có thể theo dõi tại nhà bằng vệ sinh mắt và nước muối sinh lý.",
            "ans": false,
            "exp": "Ophthalmia neonatorum (viêm kết mạc sơ sinh trong 28 ngày đầu) luôn là red flag cần khám BS khẩn cấp. Neisseria gonorrhoeae: siêu cấp tính trong 2–5 ngày đầu, nguy cơ thủng giác mạc và mù nếu không điều trị ceftriaxone kịp thời. Chlamydia trachomatis: 5–14 ngày sau sinh, cần azithromycin toàn thân. Không tự điều trị OTC trong bất kỳ tình huống nào.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Chườm khăn lạnh sạch lên mắt giúp giảm khó chịu tạm thời trong viêm kết mạc virus.",
            "ans": true,
            "exp": "Chườm lạnh (cold compress) là biện pháp phi dùng thuốc được khuyến cáo trong viêm kết mạc virus: giảm phù nề mi mắt, giảm cảm giác nóng rát và khó chịu. Không có tác dụng diệt virus nhưng cải thiện triệu chứng rõ ràng. Lưu ý: dùng khăn sạch riêng cho mỗi mắt để tránh lây chéo từ mắt này sang mắt kia.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm kết mạc vi khuẩn điển hình có phân tiết loãng, trong, không màu — tương tự viêm kết mạc dị ứng.",
            "ans": false,
            "exp": "Viêm kết mạc vi khuẩn điển hình có phân tiết MỦ (purulent hoặc mucopurulent): vàng xanh, đặc, mi mắt dính nhau khi thức dậy là dấu hiệu đặc trưng. Phân tiết trong loãng gặp trong viêm kết mạc virus và dị ứng. Phân biệt đúng loại phân tiết là bước quan trọng trong hỏi bệnh tại nhà thuốc để định hướng xử trí.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN viêm kết mạc nhiễm trùng không nên đeo kính áp tròng cho đến khi hết hẳn triệu chứng và ít nhất 24 giờ sau khi kết thúc điều trị.",
            "ans": true,
            "exp": "Blenkinsopp 2025 khuyến cáo rõ: không đeo kính áp tròng trong suốt quá trình nhiễm trùng và chờ ít nhất 24 giờ sau khi hoàn thành điều trị. Kính áp tròng có thể bị nhiễm vi khuẩn/virus và làm tăng nguy cơ loét giác mạc (corneal ulceration) nghiêm trọng. Kính đã dùng trong đợt nhiễm trùng nên bỏ (nếu dùng 1 ngày) hoặc vệ sinh kỹ trước khi dùng lại.",
            "icon": "🔍"
        }
    ],
    "scabies": [
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🏆",
            "q": "BN nam 28 tuổi bị ghẻ ngứa, không có dị ứng thuốc, không có bệnh nền. Hoạt chất OTC nào được ưu tiên first-line theo hướng dẫn quốc tế?",
            "opts": [
                "Permethrin 5% kem",
                "Sulfur 6% kem",
                "Benzyl benzoate 25%"
            ],
            "ans": 0,
            "exp": "Permethrin 5% là lựa chọn first-line được WHO, CDC và hầu hết hướng dẫn quốc tế ưu tiên cho ghẻ ở người lớn và trẻ ≥2 tháng tuổi. Hiệu quả >90% sau 1–2 lần bôi, an toàn và dung nạp tốt. Sulfur và benzyl benzoate là lựa chọn thay thế khi không có permethrin hoặc có CCĐ."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Permethrin 5% tiêu diệt Sarcoptes scabiei chủ yếu qua cơ chế nào?",
            "opts": [
                "Ức chế kênh natri thần kinh cơ, gây liệt và chết ký sinh trùng",
                "Ức chế tổng hợp chitin vỏ trứng, ngăn trứng nở",
                "Đối kháng thụ thể GABA của ký sinh trùng, gây co giật rồi chết"
            ],
            "ans": 0,
            "exp": "Permethrin là pyrethroid tổng hợp, ức chế kênh natri phụ thuộc điện áp ở màng tế bào thần kinh cơ của ký sinh trùng — kênh mở kéo dài → khử cực liên tục → liệt và chết. Cơ chế này đặc hiệu hơn với côn trùng/ký sinh trùng so với động vật có vú (kênh natri ở người ít nhạy cảm)."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🤰",
            "q": "Thai phụ 20 tuần bị ghẻ. Lựa chọn điều trị nào an toàn nhất trong thai kỳ?",
            "opts": [
                "Sulfur 6–10% trong vaseline",
                "Permethrin 5% kem",
                "Ivermectin uống 200 mcg/kg"
            ],
            "ans": 0,
            "exp": "Sulfur 6–10% pha trong vaseline được xem là lựa chọn an toàn nhất trong thai kỳ — không hấp thu đáng kể qua da, có hồ sơ an toàn lâu đời. Permethrin 5% là Category B (FDA) và có thể cân nhắc, nhưng dữ liệu ít hơn sulfur. Ivermectin uống là Category C — tránh trong thai kỳ do thiếu dữ liệu an toàn đầy đủ."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "👶",
            "q": "Trẻ sơ sinh 6 tuần tuổi bị ghẻ. DS nên tư vấn thuốc nào?",
            "opts": [
                "Sulfur 5–6% pha trong kem nền dịu nhẹ",
                "Permethrin 5% kem",
                "Ivermectin dạng hỗn dịch uống"
            ],
            "ans": 0,
            "exp": "Permethrin 5% chống chỉ định cho trẻ <2 tháng tuổi do hàng rào da chưa hoàn thiện → hấp thu toàn thân nhiều hơn, nguy cơ độc tính thần kinh. Sulfur 5–6% là lựa chọn an toàn cho sơ sinh và trẻ <2 tháng. Ivermectin uống chưa được phê duyệt cho trẻ <15 kg."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⛔",
            "q": "BN nữ 35 tuổi cho biết dị ứng nặng với hoa cúc (chrysanthemum) và pyrethrum. Hoạt chất nào CCĐ cho BN này?",
            "opts": [
                "Sulfur 10% kem",
                "Permethrin 5% kem",
                "Benzyl benzoate 10%"
            ],
            "ans": 1,
            "exp": "Permethrin là pyrethroid tổng hợp có cấu trúc tương tự pyrethrum (chiết từ hoa cúc). Dị ứng chéo với hoa cúc/pyrethrum là CCĐ thực sự của permethrin. Sulfur và benzyl benzoate không thuộc nhóm này, có thể sử dụng thay thế."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⏱️",
            "q": "Hướng dẫn chuẩn khi bôi Permethrin 5% điều trị ghẻ là để trên da bao lâu trước khi rửa sạch?",
            "opts": [
                "8–12 giờ (thường bôi tối, rửa sáng)",
                "2–3 giờ sau khi khô",
                "30 phút là đủ để thấm vào da"
            ],
            "ans": 0,
            "exp": "Permethrin 5% cần tiếp xúc với da ít nhất 8–10 giờ (một số hướng dẫn nói tối thiểu 8, tối đa 12 giờ) để đảm bảo diệt đủ ký sinh trùng. Thực hành: bôi buổi tối trước ngủ, tắm rửa sáng hôm sau. Rửa sớm sau 30 phút hay 2–3 giờ sẽ không đủ thời gian tiếp xúc hiệu quả."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "Khi bôi Permethrin 5% điều trị ghẻ, vùng cơ thể nào cần được bôi thuốc?",
            "opts": [
                "Toàn bộ cơ thể từ cổ xuống đến gót chân, kể cả kẽ ngón tay/chân và dưới móng",
                "Chỉ bôi vùng ngứa và các kẽ ngón tay — nơi ký sinh trùng trú ẩn",
                "Từ cổ xuống nhưng bỏ qua mặt trong đùi và bộ phận sinh dục"
            ],
            "ans": 0,
            "exp": "Phải bôi permethrin toàn bộ da từ cổ xuống gót chân, kể cả kẽ ngón tay, kẽ ngón chân, dưới móng, rốn, nếp gấp mông và bộ phận sinh dục. Bỏ sót bất kỳ vùng nào có thể khiến điều trị thất bại. Ở trẻ nhỏ và NCT, có thể cần bôi thêm cả vùng da đầu và mặt (trừ mắt, miệng)."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "📋",
            "q": "Ivermectin uống (200 mcg/kg) dùng trong ghẻ ngứa tại Việt Nam có phân loại nào?",
            "opts": [
                "Thuốc kê đơn (ETC) — bắt buộc phải có đơn BS",
                "Thuốc OTC — DS có thể bán không cần đơn",
                "Thuốc thực phẩm chức năng, không cần kê đơn"
            ],
            "ans": 0,
            "exp": "Ivermectin uống là thuốc kê đơn (ETC) tại Việt Nam. Ngoài ra, thuốc chưa được Cục Quản lý Dược cấp phép chỉ định ghẻ chính thức — thường được BS kê theo chỉ định mở rộng (off-label). DS không được bán ivermectin không có đơn. Permethrin 5% và sulfur là lựa chọn OTC phù hợp."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "Tại sao khuyến cáo lặp lại liều Permethrin 5% sau 7–14 ngày (tổng 2 lần)?",
            "opts": [
                "Permethrin không diệt được trứng ghẻ — lần 2 diệt ấu trùng nở từ trứng sót",
                "Permethrin tạo đề kháng sau lần 1, cần tăng liều",
                "Lần 1 chỉ có tác dụng ức chế sinh sản, cần lần 2 để diệt toàn bộ"
            ],
            "ans": 0,
            "exp": "Trứng Sarcoptes scabiei không bị tiêu diệt hoàn toàn bởi permethrin — chúng nở sau 3–4 ngày thành ấu trùng có thể tiếp xúc với thuốc còn lại. Lần bôi thứ hai sau 7–14 ngày nhằm mục đích tiêu diệt thế hệ ấu trùng mới nở này trước khi chúng trưởng thành và sinh sản. Đây là lý do không chữa khỏi bằng 1 lần duy nhất."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "BN bị ghẻ đóng vảy (crusted/Norwegian scabies) với hàng triệu ký sinh trùng trên da. Phác đồ nào được khuyến cáo?",
            "opts": [
                "Ivermectin uống + Permethrin 5% tại chỗ — phối hợp",
                "Permethrin 5% đơn trị liệu 2 lần",
                "Sulfur 10% đơn trị liệu liên tục 1 tháng"
            ],
            "ans": 0,
            "exp": "Ghẻ đóng vảy là dạng nặng ở người suy giảm miễn dịch, tải lượng ký sinh trùng cực cao. Hướng dẫn CDC và WHO khuyến cáo phối hợp ivermectin uống (nhiều liều) + permethrin 5% tại chỗ (nhiều lần) để tăng hiệu quả diệt ký sinh trùng ở lớp vảy dày khó thấm thuốc. Đây là trường hợp BS chuyên khoa phải quản lý."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "👴",
            "q": "NCT 78 tuổi, suy thận nhẹ, bị ghẻ. Lý do nào khiến cần thận trọng hơn khi dùng Permethrin?",
            "opts": [
                "Da NCT mỏng và kém toàn vẹn hơn → hấp thu permethrin nhiều hơn qua da",
                "Permethrin bị thải qua thận và tích lũy trong suy thận",
                "NCT cần liều gấp đôi do chuyển hoá da chậm hơn"
            ],
            "ans": 0,
            "exp": "Da NCT mỏng hơn, chức năng hàng rào lipid yếu hơn → hấp thu permethrin qua da cao hơn so với người trẻ. Không cần chỉnh liều do suy thận vì permethrin được chuyển hoá chủ yếu ở gan. Tuy nhiên, cần chú ý kỹ hơn về kích ứng da và tiếp xúc thuốc. Sulfur cũng là lựa chọn an toàn."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Vì sao Sulfur 6–10% dù kém ưu thế hơn Permethrin vẫn có vị trí quan trọng trong điều trị ghẻ?",
            "opts": [
                "An toàn cho nhóm đặc biệt: thai phụ, trẻ <2 tháng, sơ sinh — nơi Permethrin CCĐ",
                "Chi phí rẻ hơn và hiệu quả cao hơn Permethrin ở người trưởng thành",
                "Sulfur có tác dụng cả trên vi khuẩn thứ phát — điều trị kép"
            ],
            "ans": 0,
            "exp": "Ưu điểm cốt lõi của sulfur là hồ sơ an toàn lâu đời ở các nhóm đặc biệt: thai phụ (mọi tam cá nguyệt), trẻ sơ sinh, trẻ <2 tháng. Nhược điểm: mùi khó chịu (hydrogen sulphide), bôi 3 đêm liên tiếp bất tiện, dính và gây ố vàng quần áo. Hiệu quả kém hơn permethrin nhưng chấp nhận được khi không có lựa chọn tốt hơn."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⚠️",
            "q": "Tại sao Lindane từng dùng điều trị ghẻ nhưng nay bị hạn chế hoặc cấm ở nhiều quốc gia?",
            "opts": [
                "Gây độc thần kinh (co giật, tử vong) — đặc biệt nguy hiểm ở trẻ em và NCT",
                "Gây kháng thuốc nhanh chóng sau 5 năm sử dụng rộng rãi",
                "Không hiệu quả hơn sulfur nhưng đắt hơn nhiều"
            ],
            "ans": 0,
            "exp": "Lindane (gamma-hexachlorocyclohexane) là chất độc thần kinh — ức chế GABA receptor cả ở côn trùng lẫn người. Hấp thu qua da → tích luỹ trong mô mỡ, gây co giật và tử vong ở trẻ em, NCT và người suy giảm miễn dịch. FDA hạn chế nghiêm ngặt, nhiều nước cấm hoàn toàn. Permethrin và ivermectin thay thế hoàn toàn."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🧬",
            "q": "Sulfur bôi tại chỗ tác động lên ký sinh trùng ghẻ qua cơ chế nào?",
            "opts": [
                "Chuyển hoá thành pentathionic acid và hydrogen sulfide — độc trực tiếp với ký sinh trùng",
                "Kiềm hoá pH da, ức chế enzyme tiêu hoá của ký sinh trùng",
                "Tạo màng vật lý ngăn ký sinh trùng đào hang mới"
            ],
            "ans": 0,
            "exp": "Sulfur bôi tại chỗ được chuyển hoá bởi vi sinh vật da thành pentathionic acid và hydrogen sulfide — các chất này độc trực tiếp với ký sinh trùng Sarcoptes scabiei. Ngoài ra, sulfur còn có tác dụng keratolytic (bong vảy), hỗ trợ trong ghẻ đóng vảy. Không phải cơ chế vật lý đơn thuần."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "DS phát hiện BN đang dùng Warfarin kháng đông, bị ghẻ và muốn dùng Ivermectin uống. DS cần tư vấn gì?",
            "opts": [
                "Báo BS kê đơn về tương tác — Ivermectin có thể tăng tác dụng Warfarin, cần theo dõi INR",
                "Ivermectin và Warfarin không tương tác — có thể dùng bình thường",
                "Tăng liều Warfarin 20% khi dùng cùng Ivermectin để bù đắp"
            ],
            "ans": 0,
            "exp": "Ivermectin có báo cáo ca lâm sàng về tăng tác dụng kháng đông của warfarin (tăng INR), có thể qua cơ chế ức chế nhẹ CYP3A4. Tuy bằng chứng chưa đủ cho RCT, hướng dẫn kê đơn khuyến cáo theo dõi INR chặt khi phối hợp. DS cần thông báo BS kê đơn trước khi phát thuốc."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "Benzyl benzoate 25% trong điều trị ghẻ cần lưu ý gì đặc biệt khi dùng ở trẻ em?",
            "opts": [
                "Pha loãng còn 12.5% (trẻ em) hoặc 6.25% (trẻ nhỏ) — nồng độ gốc gây kích ứng mạnh",
                "Dùng nồng độ đầy đủ 25% để đảm bảo hiệu quả — trẻ em không nhạy cảm hơn người lớn",
                "Benzyl benzoate chống chỉ định hoàn toàn cho mọi trẻ dưới 18 tuổi"
            ],
            "ans": 0,
            "exp": "Benzyl benzoate 25% (nồng độ người lớn) gây kích ứng da nghiêm trọng ở trẻ em. Hướng dẫn pha loãng: trẻ em dùng 12.5%, trẻ nhỏ/sơ sinh dùng 6.25%. Nhược điểm khác: mùi hắc, kích ứng niêm mạc và mắt, cần tránh vùng mặt. Permethrin và sulfur ưu tiên hơn ở trẻ em."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "⏰",
            "q": "DS tư vấn BN bôi Permethrin buổi tối trước khi ngủ. BN hỏi 'Có cần tắm trước khi bôi không?'. Câu trả lời đúng là gì?",
            "opts": [
                "Tắm trước bôi, để da khô hoàn toàn rồi mới bôi thuốc — tránh da còn ẩm làm loãng thuốc",
                "Không cần tắm — bôi trực tiếp lên da có dầu giúp thuốc thấm tốt hơn",
                "Tắm xong bôi ngay khi da còn ẩm để thuốc trải đều hơn"
            ],
            "ans": 0,
            "exp": "Nên tắm sạch trước khi bôi permethrin để loại bỏ dầu da và vi khuẩn bề mặt có thể cản trở hấp thu. Quan trọng: để da khô hoàn toàn trước khi bôi — da ẩm làm loãng thuốc và giảm nồng độ tiếp xúc hiệu quả. Bôi đều lên toàn bộ da từ cổ xuống và để 8–12 giờ."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "💊",
            "q": "Sau điều trị ghẻ thành công, ngứa có thể kéo dài thêm bao lâu và DS nên tư vấn xử trí thế nào?",
            "opts": [
                "2–4 tuần — do phản ứng quá mẫn với xác ký sinh trùng, kháng histamine giảm ngứa",
                "3–5 ngày — nếu còn ngứa sau đó phải điều trị lại ngay",
                "Ngứa dứt ngay sau lần bôi đầu tiên nếu điều trị đúng cách"
            ],
            "ans": 0,
            "exp": "Ngứa sau điều trị thành công (post-scabetic itch) có thể kéo dài 2–4 tuần do phản ứng viêm và quá mẫn muộn của cơ thể với protein từ xác ký sinh trùng đã chết và phân. KHÔNG phải thất bại điều trị. DS tư vấn: kháng histamine thế hệ 1 (sedating) + corticosteroid nhẹ tại chỗ giảm ngứa, và giải thích rõ để BN không bôi thêm permethrin không cần thiết."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🏆",
            "q": "BN ghẻ có kèm viêm da thứ phát (chàm hoá sau gãi nhiều). DS nên tư vấn thêm gì ngoài điều trị ghẻ đặc hiệu?",
            "opts": [
                "Kẽm oxide kem hoặc hydrocortisone 1% tại chỗ để giảm viêm và ngứa sau điều trị",
                "Bôi thêm mupirocin toàn bộ vùng chàm hoá để phòng nhiễm khuẩn",
                "Uống kháng sinh ngay để điều trị dự phòng nhiễm trùng thứ phát"
            ],
            "ans": 0,
            "exp": "Sau điều trị ghẻ đặc hiệu, viêm da thứ phát (chàm hoá, lichen) có thể cần thêm kẽm oxide (dịu da, chống viêm nhẹ) hoặc hydrocortisone 1% tại chỗ ngắn hạn để giảm viêm và ngứa. Kháng sinh chỉ cần khi có bằng chứng nhiễm khuẩn thực sự (mủ, sốt, mô bào). Dùng kháng sinh phòng ngừa không có chỉ định."
        },
        {
            "cat": "drug",
            "type": "pick",
            "icon": "🔍",
            "q": "So sánh Permethrin 5% và Sulfur 6–10%: đặc điểm nào dưới đây mô tả ĐÚNG sự khác biệt?",
            "opts": [
                "Permethrin: 1–2 lần bôi, mùi nhẹ, không dùng <2 tháng. Sulfur: 3 đêm liên tiếp, mùi khó chịu, an toàn ở sơ sinh",
                "Permethrin: 5 lần bôi liên tiếp. Sulfur: 1 lần bôi duy nhất là đủ",
                "Cả hai đều an toàn như nhau cho mọi nhóm tuổi và thai kỳ"
            ],
            "ans": 0,
            "exp": "Permethrin: bôi 1–2 lần (cách 7–14 ngày), giữ 8–12h, CCĐ trẻ <2 tháng. Sulfur 6–10%: bôi 3 đêm liên tiếp, giữ 8–12h/đêm, an toàn cho sơ sinh và thai phụ nhưng mùi khó chịu và gây ố vàng vải. Đây là so sánh thực tiễn DS cần nắm để tư vấn từng đối tượng."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🏆",
            "q": "Permethrin 5% kem là lựa chọn điều trị ưu tiên cho ghẻ ở người trưởng thành khỏe mạnh, không dị ứng pyrethroid.",
            "ans": true,
            "exp": "WHO, CDC và hầu hết hướng dẫn quốc tế xếp permethrin 5% là first-line điều trị ghẻ ở người trưởng thành và trẻ ≥2 tháng. Hiệu quả >90%, ít độc tính toàn thân, bôi 1–2 lần thuận tiện. Đây là thông tin DS cần nắm chắc khi tư vấn."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "👶",
            "q": "Permethrin 5% an toàn và được phê duyệt để điều trị ghẻ cho trẻ sơ sinh dưới 2 tháng tuổi.",
            "ans": false,
            "exp": "Permethrin 5% chống chỉ định cho trẻ <2 tháng. Hàng rào da của sơ sinh chưa hoàn thiện, diện tích da/trọng lượng cao → hấp thu toàn thân nhiều hơn → nguy cơ độc thần kinh. Sulfur 5–6% là lựa chọn được chấp nhận cho nhóm này."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🤰",
            "q": "Sulfur 6–10% trong vaseline được xem là lựa chọn điều trị ghẻ an toàn trong thai kỳ, kể cả 3 tháng đầu.",
            "ans": true,
            "exp": "Sulfur bôi tại chỗ có lịch sử sử dụng lâu đời và an toàn trong thai kỳ. Hấp thu toàn thân thấp, không có dữ liệu gây quái thai. WHO và nhiều hướng dẫn ưu tiên sulfur cho thai phụ, đặc biệt 3 tháng đầu khi nhiều thuốc khác còn ít dữ liệu."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "💊",
            "q": "Chỉ cần bôi thuốc lên vùng da đang ngứa là đủ — không cần bôi toàn thân vì ký sinh trùng chỉ ở nơi có triệu chứng.",
            "ans": false,
            "exp": "Sai lầm điều trị phổ biến. Sarcoptes scabiei đào hang ở nhiều nơi trên cơ thể — kể cả ở da không có triệu chứng ngứa rõ ràng (ủ bệnh đến 6 tuần lần đầu). Bôi không đủ diện tích là nguyên nhân hàng đầu thất bại điều trị. Phải bôi toàn thân từ cổ xuống gót chân."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "Ngứa kéo dài 2–3 tuần sau khi đã điều trị ghẻ đúng cách thường là dấu hiệu điều trị thất bại và cần bôi thuốc thêm ngay.",
            "ans": false,
            "exp": "Post-scabetic itch (ngứa sau điều trị) là phản ứng quá mẫn muộn với protein xác ký sinh trùng chết và phân còn trong da — không phải thất bại điều trị. Có thể kéo dài 2–4 tuần. Bôi thêm permethrin không cần thiết, thậm chí gây kích ứng. Điều trị: kháng histamine ± hydrocortisone 1% tại chỗ."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "📋",
            "q": "Tại Việt Nam, Ivermectin uống điều trị ghẻ là thuốc kê đơn và DS không được bán không có đơn của BS.",
            "ans": true,
            "exp": "Ivermectin uống thuộc danh mục ETC (thuốc kê đơn) tại Việt Nam. Ngoài ra, chỉ định ghẻ của ivermectin còn là off-label tại VN. DS vi phạm quy định nếu bán không đơn. Permethrin 5% và sulfur là lựa chọn OTC phù hợp mà DS có thể tư vấn."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🔄",
            "q": "Việc lặp lại bôi Permethrin 5% lần 2 sau 7–14 ngày là cần thiết vì thuốc không diệt được trứng ghẻ.",
            "ans": true,
            "exp": "Đúng — trứng Sarcoptes scabiei có vỏ bảo vệ chống permethrin. Trứng nở sau 3–4 ngày thành ấu trùng nhạy cảm với thuốc. Lần bôi thứ 2 sau 7–14 ngày nhằm tiêu diệt thế hệ ấu trùng mới nở. Không lặp lại liều là nguyên nhân tái phát thường gặp."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "🧬",
            "q": "Lindane (hexachlorocyclohexane) vẫn được WHO khuyến cáo rộng rãi như một lựa chọn hàng đầu an toàn trong điều trị ghẻ hiện nay.",
            "ans": false,
            "exp": "Hoàn toàn sai. WHO đã loại lindane khỏi danh sách khuyến cáo. Lindane gây độc thần kinh nghiêm trọng (co giật, tử vong) qua hấp thu da, đặc biệt nguy hiểm ở trẻ em, thai phụ và NCT. Nhiều quốc gia cấm hoàn toàn. Permethrin và ivermectin thay thế hoàn toàn."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "💊",
            "q": "Benzyl benzoate 25% cần pha loãng còn 12.5% khi dùng cho trẻ em để tránh kích ứng da nặng.",
            "ans": true,
            "exp": "Benzyl benzoate 25% (nồng độ chuẩn người lớn) gây kích ứng da mạnh ở trẻ em. Hướng dẫn pha loãng: trẻ em 12.5%, trẻ nhỏ/sơ sinh 6.25%. Kích ứng niêm mạc và mắt cũng là vấn đề — cần tránh bôi vùng mặt. Permethrin và sulfur được ưu tiên hơn ở trẻ em."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "👴",
            "q": "Benzyl benzoate 25% nồng độ người lớn có thể bôi trực tiếp cho trẻ em mà không cần pha loãng vì da trẻ hấp thu hoạt chất tốt hơn nên hiệu quả cao hơn.",
            "ans": false,
            "exp": "Hoàn toàn ngược lại — da trẻ em mỏng hơn và hàng rào lipid chưa hoàn thiện nên hấp thu benzyl benzoate nhiều hơn, dễ gây kích ứng da nặng. Benzyl benzoate 25% bắt buộc pha loãng còn 12.5% cho trẻ em và 6.25% cho trẻ nhỏ/sơ sinh. Dùng nồng độ đầy đủ ở trẻ em là sai lầm nguy hiểm."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⚠️",
            "q": "BN dị ứng nặng với pyrethrum (hoa cúc) có thể dùng Permethrin 5% an toàn vì cấu trúc hoá học hoàn toàn khác.",
            "ans": false,
            "exp": "Permethrin là pyrethroid tổng hợp — cấu trúc tương tự pyrethrum chiết từ hoa cúc. Dị ứng chéo có thể xảy ra ở người dị ứng pyrethrum/chrysanthemum. Đây là CCĐ thực sự của permethrin. DS cần hỏi tiền sử dị ứng trước khi tư vấn và chọn sulfur hoặc benzyl benzoate thay thế."
        },
        {
            "cat": "drug",
            "type": "tf",
            "icon": "⏱️",
            "q": "Permethrin 5% cần giữ trên da ít nhất 8–10 giờ để đảm bảo hiệu quả điều trị tối ưu.",
            "ans": true,
            "exp": "Thời gian tiếp xúc tối thiểu 8 giờ là cần thiết để permethrin thâm nhập vào hang ký sinh trùng và diệt đủ. Thực hành chuẩn: bôi tối ngủ dậy tắm sáng (8–12 giờ). Rửa sớm sau 30 phút hay 2–3 giờ không đảm bảo hiệu quả và là nguyên nhân thường gặp của thất bại điều trị."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🚨",
            "q": "BN nữ 45 tuổi, HIV giai đoạn AIDS, đến nhà thuốc với da toàn thân phủ vảy dày, ngứa ít nhưng nhiều người trong gia đình cùng ngứa. DS nghĩ đến chẩn đoán nào và nên làm gì?",
            "opts": [
                "Nghi ghẻ đóng vảy (crusted scabies) — cực kỳ lây, cần chuyển BS da liễu khẩn cấp",
                "Chẩn đoán vảy nến — tư vấn corticosteroid tại chỗ",
                "Ghẻ thông thường — bôi Permethrin 5% cho cả gia đình là đủ"
            ],
            "ans": 0,
            "exp": "Ghẻ đóng vảy (Norwegian/crusted scabies) xảy ra ở người suy giảm miễn dịch (HIV/AIDS, dùng corticosteroid, ghép tạng). Da phủ vảy dày chứa hàng triệu ký sinh trùng — siêu lây, không cần tiếp xúc gần vẫn lây qua vảy bong. Không thể điều trị OTC đơn thuần — cần BS da liễu, cách ly và phác đồ phối hợp ivermectin + permethrin nhiều lần."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "Triệu chứng nào sau đây đặc trưng nhất và giúp phân biệt ghẻ với dị ứng da thông thường?",
            "opts": [
                "Ngứa dữ dội về đêm + nhiều người cùng ngứa trong gia đình + đường hang (burrow) ở kẽ ngón tay",
                "Nổi mề đay toàn thân cấp tính sau tiếp xúc dị nguyên",
                "Ngứa dai dẳng ban ngày, xuất hiện sau khi dùng thuốc mới"
            ],
            "ans": 0,
            "exp": "Tam chứng kinh điển của ghẻ: (1) ngứa về đêm dữ dội (ký sinh trùng hoạt động khi da ấm), (2) lây lan trong gia đình/nhóm tiếp xúc gần, (3) đường hang đặc trưng ở kẽ ngón tay, cổ tay, thắt lưng, bộ phận sinh dục. Mề đay cấp tính thường xuất hiện ban ngày sau dị nguyên rõ ràng — khác hoàn toàn."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "Tại sao ngứa trong ghẻ đặc biệt nặng về đêm?",
            "opts": [
                "Sarcoptes scabiei hoạt động mạnh hơn khi nhiệt độ da tăng trong chăn ấm ban đêm",
                "Phản ứng dị ứng của cơ thể tăng theo nhịp sinh học circadian về đêm",
                "Do BN ít bận rộn nên chú ý nhiều hơn đến ngứa về đêm"
            ],
            "ans": 0,
            "exp": "Ngứa về đêm là hậu quả trực tiếp của hoạt động ký sinh trùng: ban đêm trong chăn ấm, nhiệt độ da tăng kích thích Sarcoptes scabiei di chuyển và đào hang tích cực hơn. Phân, nước bọt và cơ học đào hang kích thích thần kinh cảm giác. Đây là đặc điểm sinh học của ký sinh trùng, không phải cơ chế dị ứng."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "Ghẻ ở trẻ sơ sinh và trẻ nhỏ (<2 tuổi) có phân bố tổn thương nào khác so với người lớn?",
            "opts": [
                "Tổn thương xuất hiện cả ở mặt, đầu, lòng bàn tay và lòng bàn chân — vùng thường không bị ở người lớn",
                "Tổn thương chỉ ở kẽ ngón tay và cổ tay giống người lớn",
                "Không có đường hang ở trẻ nhỏ — chỉ có mề đay toàn thân"
            ],
            "ans": 0,
            "exp": "Ở trẻ sơ sinh và trẻ <2 tuổi, Sarcoptes scabiei đào hang cả ở vùng đặc biệt: da đầu, mặt, lòng bàn tay, lòng bàn chân — những nơi thường không bị ở người lớn (do lớp da dày hơn). DS cần biết đặc điểm này để tư vấn bôi thuốc cho trẻ đúng vùng và không bỏ sót."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏥",
            "q": "Sau điều trị ghẻ đúng cách, BN quay lại sau 6 tuần với ngứa tái phát và tổn thương mới. Nguyên nhân nhiều khả năng nhất là gì?",
            "opts": [
                "Tái lây từ thành viên gia đình hoặc tiếp xúc chưa được điều trị đồng thời",
                "Đề kháng thuốc của Sarcoptes scabiei với Permethrin — cần đổi sang Ivermectin",
                "Ngứa sau điều trị kéo dài bất thường — bình thường và không cần điều trị lại"
            ],
            "ans": 0,
            "exp": "Nguyên nhân tái phát phổ biến nhất của ghẻ là điều trị không đồng bộ — người tiếp xúc gần (gia đình, bạn tình) không điều trị cùng ngày. Họ lây trở lại cho BN đã điều trị. Đây là lý do bắt buộc phải điều trị toàn bộ tiếp xúc gần cùng một ngày, kể cả người chưa có triệu chứng."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏃",
            "q": "DS tư vấn BN ghẻ về xử lý quần áo và ga giường. Nhiệt độ giặt tối thiểu là bao nhiêu để tiêu diệt Sarcoptes scabiei?",
            "opts": [
                "60°C trở lên — Sarcoptes scabiei chết sau vài phút ở nhiệt độ này",
                "40°C là đủ — giặt bình thường đã diệt ký sinh trùng",
                "Không cần giặt nóng — xịt thuốc diệt côn trùng lên vải là đủ"
            ],
            "ans": 0,
            "exp": "Sarcoptes scabiei sống sót 48–72 giờ ngoài cơ thể. Giặt ≥60°C trong ≥10 phút hoặc sấy nhiệt ≥60°C trong 30 phút tiêu diệt hoàn toàn. Với đồ không giặt được (thú bông, giày): cách ly trong túi nilon kín ≥72 giờ. Giặt 40°C không đủ diệt. Không cần xịt thuốc diệt côn trùng lên sàn nhà."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🚨",
            "q": "DS nhận thấy bé trai 3 tháng tuổi được mẹ đưa đến với nốt mụn nước ở lòng bàn tay và lòng bàn chân, ngứa nhiều về đêm. DS nên làm gì?",
            "opts": [
                "Chuyển BS nhi da liễu — trẻ <2 tháng không dùng permethrin, cần chẩn đoán và kê đơn đúng",
                "Tư vấn bôi Permethrin 5% — trẻ 3 tháng đã đủ tuổi",
                "Tư vấn kháng histamine loratadine siro để giảm ngứa"
            ],
            "ans": 0,
            "exp": "Trẻ 3 tháng dùng permethrin được (≥2 tháng), nhưng mụn nước ở lòng bàn tay/chân của trẻ nhỏ cần chẩn đoán phân biệt: ghẻ, chốc lở (impetigo), tay chân miệng, pemphigus sơ sinh. DS không đủ thẩm quyền chẩn đoán xác định và không nên tự ý kê permethrin mà không có BS thăm khám. Chuyển BS là đúng."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔍",
            "q": "Chốc lở (impetigo) do tụ cầu vàng có thể là biến chứng thứ phát của ghẻ. Dấu hiệu nào gợi ý bội nhiễm vi khuẩn trên nền ghẻ?",
            "opts": [
                "Mụn mủ vàng, đóng vảy mật ong, có thể kèm sốt và hạch bẹn sưng",
                "Ngứa tăng hơn bình thường về đêm sau điều trị",
                "Đường hang (burrow) rõ hơn và dài hơn so với ghẻ thông thường"
            ],
            "ans": 0,
            "exp": "Gãi nhiều gây tổn thương da → vi khuẩn (Staphylococcus aureus, Streptococcus) xâm nhập → chốc lở thứ phát. Đặc trưng: mụn mủ vàng, vảy mật ong (honey crust), đau nhức hơn ngứa, có thể sốt và hạch sưng. DS cần nhận biết và chuyển BS — cần kháng sinh đặc hiệu (fusidic acid topical hoặc kháng sinh uống tùy mức độ)."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "⏳",
            "q": "Người tiếp xúc lần đầu với Sarcoptes scabiei thường ủ bệnh bao lâu trước khi xuất hiện triệu chứng ngứa?",
            "opts": [
                "4–6 tuần — phản ứng quá mẫn cần thời gian nhạy cảm hoá lần đầu",
                "3–5 ngày — ký sinh trùng sinh sôi nhanh sau xâm nhập",
                "10–14 ngày — thời gian trứng nở và ấu trùng trưởng thành"
            ],
            "ans": 0,
            "exp": "Lần đầu tiếp xúc: ủ bệnh 4–6 tuần vì cơ thể cần thời gian để nhạy cảm hoá với protein ký sinh trùng (type IV hypersensitivity). Tái nhiễm lần sau: triệu chứng xuất hiện nhanh hơn (1–4 ngày) vì cơ thể đã có phản ứng miễn dịch từ trước. Đây giải thích tại sao BN nhiễm lần đầu có thể lây cho người khác nhiều tuần trước khi biết mình bị bệnh."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🔄",
            "q": "BN điều trị ghẻ đúng cách nhưng sau 4 tuần vẫn còn ngứa nhẹ. Khi nào DS nên khuyên tái khám BS?",
            "opts": [
                "Nếu xuất hiện tổn thương mới, ngứa tăng trở lại, hoặc có thêm người mới ngứa trong gia đình",
                "Ngay sau 2 tuần điều trị vì ngứa phải hết hoàn toàn sau đó",
                "Không cần tái khám — ngứa 4 tuần là bình thường, chờ thêm"
            ],
            "ans": 0,
            "exp": "Post-scabetic itch đến 4 tuần là bình thường. Nhưng DS cần hướng dẫn BN nhận biết dấu hiệu thất bại/tái nhiễm: tổn thương mới xuất hiện, ngứa tăng sau giai đoạn giảm, hoặc thành viên gia đình mới bắt đầu ngứa (lây chéo). Những trường hợp này cần BS đánh giá lại phác đồ."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "🏃",
            "q": "Lây truyền ghẻ chủ yếu xảy ra qua con đường nào?",
            "opts": [
                "Tiếp xúc da trực tiếp kéo dài (>10 phút) — bắt tay thoáng qua hiếm khi đủ để lây",
                "Dùng chung quần áo hoặc chăn ga — ký sinh trùng sống lâu ngoài cơ thể",
                "Không khí — ký sinh trùng lây qua giọt bắn như các bệnh hô hấp"
            ],
            "ans": 0,
            "exp": "Ghẻ lây chủ yếu qua tiếp xúc da trực tiếp kéo dài — bạn tình, người chăm sóc, ngủ chung giường. Bắt tay thoáng qua hiếm khi đủ để ký sinh trùng di chuyển. Lây gián tiếp qua đồ vật có thể xảy ra nhưng kém quan trọng hơn (ký sinh trùng sống 48–72h ngoài cơ thể). Không lây qua không khí."
        },
        {
            "cat": "clin",
            "type": "pick",
            "icon": "💉",
            "q": "Cha của BN ghẻ hỏi: 'Cả nhà phải uống kháng sinh để phòng nhiễm trùng da không?' DS trả lời thế nào?",
            "opts": [
                "Không — ghẻ do ký sinh trùng, không phải vi khuẩn. Kháng sinh không ngăn ghẻ lây; tất cả tiếp xúc gần cần bôi thuốc đặc hiệu cùng ngày",
                "Có — uống amoxicillin 7 ngày cho cả nhà để ngăn bội nhiễm",
                "Không — chỉ BN bị ngứa mới cần điều trị, người không ngứa không cần làm gì"
            ],
            "ans": 0,
            "exp": "Ghẻ là bệnh ký sinh trùng da — kháng sinh không có tác dụng ngăn lây hay điều trị ghẻ. Điều trị đúng: toàn bộ tiếp xúc gần (gia đình ngủ chung, bạn tình) phải bôi thuốc đặc hiệu (permethrin/sulfur) cùng một ngày, kể cả người chưa có triệu chứng. Kháng sinh chỉ dùng khi có bội nhiễm vi khuẩn thực sự."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🔍",
            "q": "Ngứa dữ dội về đêm, lan ra nhiều người trong gia đình cùng sống chung là đặc điểm gợi ý chẩn đoán ghẻ mạnh nhất.",
            "ans": true,
            "exp": "Tam chứng kinh điển của ghẻ — ngứa về đêm + lây lan gia đình + đường hang tại kẽ ngón tay — là cơ sở chẩn đoán lâm sàng đáng tin cậy ngay cả khi không soi da. Nhiều người cùng ngứa trong gia đình gần như loại trừ nguyên nhân dị ứng đơn thuần và hướng đến bệnh lây nhiễm như ghẻ."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🐾",
            "q": "Chó/mèo bị ghẻ (mange) do Sarcoptes scabiei var. canis có thể lây sang người và gây bệnh ghẻ mạn tính kéo dài ở người.",
            "ans": false,
            "exp": "Sarcoptes scabiei var. canis (từ chó/mèo) có thể lây sang người gây ngứa và phát ban, nhưng ký sinh trùng không thể hoàn thành vòng đời trên da người → tự khỏi sau vài tuần không cần điều trị ghẻ đặc hiệu. Điều trị nguồn lây (thú cưng) là quan trọng nhất. Ghẻ người mạn tính chỉ do Sarcoptes scabiei var. hominis."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🏃",
            "q": "Toàn bộ tiếp xúc gần (gia đình ngủ chung, bạn tình) cần được điều trị ghẻ đồng thời trong cùng một ngày, dù họ chưa có triệu chứng ngứa.",
            "ans": true,
            "exp": "Điều trị đồng bộ toàn bộ tiếp xúc là nguyên tắc bắt buộc vì: (1) ủ bệnh 4–6 tuần — người chưa ngứa có thể đã nhiễm; (2) điều trị lệch ngày → lây trở lại ngay. Không điều trị đồng bộ là nguyên nhân tái phát số 1 sau điều trị ghẻ."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🏃",
            "q": "Quần áo, khăn tắm và ga giường của BN ghẻ cần tiêu huỷ vì không thể tiệt khuẩn bằng giặt thông thường.",
            "ans": false,
            "exp": "Không cần tiêu huỷ — lãng phí và không cần thiết. Sarcoptes scabiei chết khi giặt ≥60°C hoặc sấy nhiệt ≥60°C trong 30 phút. Đồ không giặt được cách ly túi nilon kín 72 giờ là đủ (ký sinh trùng không sống quá 72h ngoài cơ thể). Thông tin này giúp BN không lo lắng quá mức."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🚨",
            "q": "Ghẻ đóng vảy (crusted/Norwegian scabies) ít lây hơn ghẻ thông thường vì BN quá yếu để tiếp xúc với người khác.",
            "ans": false,
            "exp": "Ghẻ đóng vảy LÂY NHIỀU HƠN ghẻ thông thường gấp bội — không phải ít hơn. Tải lượng ký sinh trùng hàng triệu con (so với vài chục con trong ghẻ thông thường). Vảy bong ra môi trường chứa ký sinh trùng sống — có thể lây qua tiếp xúc gián tiếp với đồ vật. Cần cách ly nghiêm ngặt và điều trị tích cực toàn bộ tiếp xúc."
        },
        {
            "cat": "clin",
            "type": "tf",
            "icon": "🍯",
            "q": "Cắt ngắn móng tay trước khi bôi thuốc điều trị ghẻ giúp giảm nguy cơ tái nhiễm và hỗ trợ hiệu quả điều trị.",
            "ans": true,
            "exp": "Sarcoptes scabiei thường tập trung dưới móng tay — nguồn ký sinh trùng dễ bị bỏ sót khi bôi thuốc. Cắt ngắn móng và bôi thuốc trực tiếp dưới móng (dùng bàn chải nhỏ) là bước quan trọng trong hướng dẫn điều trị. Ngoài ra, không gãi tránh vi khuẩn xâm nhập và lây ký sinh trùng lên các vùng da khác."
        }
    ],
    "ibs": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 35t nữ được BS chẩn đoán IBS và kê mebeverine hydrochloride 135 mg. DS hướng dẫn cách uống đúng là?",
            "opts": [
                "Uống ngay sau bữa ăn để giảm kích ứng dạ dày",
                "Uống 20 phút TRƯỚC bữa ăn, 3 × ngày",
                "Uống khi xuất hiện đau, không cần theo giờ cố định"
            ],
            "ans": 1,
            "exp": "Mebeverine 135 mg uống 3 × ngày, 20 phút TRƯỚC bữa ăn — để đạt nồng độ đỉnh trong lòng ruột trùng với thời điểm cơ trơn bị kích thích bởi thức ăn. Không dùng theo yêu cầu (prn) vì cần duy trì nồng độ ổn định.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS mua tinh dầu bạc hà (peppermint oil) viên nang bao tan trong ruột. DS cần dặn điều gì quan trọng nhất về cách dùng?",
            "opts": [
                "Nhai viên nang trước khi nuốt để thuốc hấp thu nhanh hơn",
                "Uống nguyên viên, không nhai, 15–30 phút trước bữa ăn",
                "Uống sau bữa ăn cùng nhiều nước để tránh kích ứng dạ dày"
            ],
            "ans": 1,
            "exp": "Peppermint oil được bào chế viên nang bao tan trong ruột (enteric-coated) — nếu nhai sẽ giải phóng tinh dầu ở miệng/thực quản gây kích ứng niêm mạc và mất tác dụng. Uống nguyên viên 15–30 phút trước ăn để thuốc đến ruột trước khi thức ăn kích hoạt co thắt.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 68t, IBS kèm phì đại tuyến tiền liệt lành tính. DS nên tránh tư vấn antispasmodic nào?",
            "opts": [
                "Alverine citrate",
                "Hyoscine butylbromide",
                "Mebeverine hydrochloride"
            ],
            "ans": 1,
            "exp": "Hyoscine butylbromide (kháng muscarinic) làm giảm trương lực cơ trơn cổ bàng quang → nguy cơ bí tiểu cấp ở BN phì đại tuyến tiền liệt. CCĐ thêm: glaucoma, nhược cơ. Alverine và mebeverine giãn cơ trơn trực tiếp, không có cơ chế kháng cholinergic này.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Giới hạn tuổi sử dụng của hyoscine butylbromide, alverine citrate và mebeverine hydrochloride lần lượt là?",
            "opts": [
                "Từ 6, 12 và 18 tuổi",
                "Từ 6, 15 và 18 tuổi",
                "Từ 6, 12 và 15 tuổi"
            ],
            "ans": 0,
            "exp": "Hyoscine butylbromide: từ 6 tuổi; alverine citrate: từ 12 tuổi; mebeverine hydrochloride: từ 18 tuổi (CCĐ trẻ <18 tuổi). Đây là điểm phân biệt thực hành quan trọng khi tư vấn cho BN IBS ở các nhóm tuổi khác nhau.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thai phụ 28t bị IBS đau bụng co thắt. Antispasmodic OTC nào phù hợp nhất trong thai kỳ?",
            "opts": [
                "Hyoscine butylbromide",
                "Mebeverine hydrochloride",
                "Alverine citrate"
            ],
            "ans": 2,
            "exp": "Alverine được xem là an toàn trong thai kỳ và cho con bú. Hyoscine: nhà sản xuất khuyến cáo tránh trong thai kỳ do dữ liệu hạn chế. Mebeverine: một số tài liệu khuyến cáo thận trọng ở thai phụ. Peppermint oil an toàn trong thai kỳ nhưng có thể ức chế tiết sữa mẹ.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 32t nữ, IBS đau bụng co thắt, đã được BS chẩn đoán xác định. DS tư vấn nhóm thuốc nào là lựa chọn dược lý đầu tay?",
            "opts": [
                "Kháng sinh đường ruột phổ rộng",
                "Thuốc chống co thắt (antispasmodic)",
                "Thuốc kháng acid nhóm PPI"
            ],
            "ans": 1,
            "exp": "Antispasmodic (mebeverine, alverine, hyoscine, peppermint oil) là lựa chọn dược lý đầu tay cho IBS đau bụng co thắt theo NICE CG61 và tổng quan hệ thống Cochrane (Ruepert et al., 2011). Kháng sinh không có vai trò trong IBS thông thường; PPI không phù hợp với triệu chứng đại tràng chức năng.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Hyoscine butylbromide kiểm soát đau co thắt IBS thông qua cơ chế nào?",
            "opts": [
                "Giãn cơ trơn trực tiếp qua ức chế kênh calci",
                "Phong bế thụ thể muscarinic → giảm co thắt cơ trơn đường tiêu hóa",
                "Ức chế tổng hợp prostaglandin tại niêm mạc ruột"
            ],
            "ans": 1,
            "exp": "Hyoscine butylbromide là kháng muscarinic (anticholinergic) — ức chế thụ thể M3 trên cơ trơn tiêu hóa → giãn cơ → giảm co thắt. Khác với mebeverine, alverine (giãn cơ trơn trực tiếp, không qua thụ thể), nên không gây tác dụng phụ kháng cholinergic toàn thân khi uống.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Loperamide OTC được khuyến cáo dùng cho IBS tiêu chảy (IBS-D) theo nguyên tắc nào?",
            "opts": [
                "Dùng hằng ngày liều duy trì để phòng ngừa tiêu chảy tái phát",
                "Chỉ dùng ngắn hạn, khi cần (prn) để giảm tiêu chảy cấp",
                "Phối hợp thường xuyên với antispasmodic để tăng hiệu quả kiểm soát IBS"
            ],
            "ans": 1,
            "exp": "OTC loperamide trong IBS-D chỉ phù hợp dùng không thường xuyên, ngắn hạn để giảm tiêu chảy cấp hoặc cảm giác buồn đại tiện khẩn cấp. Dùng dài hạn hằng ngày vượt ngoài phạm vi OTC và cần giám sát y tế.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS táo bón ưu thế (IBS-C) không đáp ứng với antispasmodic. DS nên tư vấn thêm loại laxative nào phù hợp nhất?",
            "opts": [
                "Bisacodyl (kích thích nhu động)",
                "Ispaghula husk (chất tạo khối, soluble fibre)",
                "Lactulose (thẩm thấu)"
            ],
            "ans": 1,
            "exp": "IBS-C ưu tiên bulking agent chứa soluble fibre như ispaghula husk — cải thiện tính chất phân, phù hợp sinh lý IBS. Bisacodyl (kích thích) có thể gây co thắt tăng thêm trong IBS. Lactulose gây lên men sinh khí → chướng bụng và đầy hơi nặng hơn — bất lợi cho IBS.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN được chẩn đoán porphyria cấp từng cơn, hỏi mua thuốc chống co thắt cho IBS. DS nên tránh tư vấn thuốc nào?",
            "opts": [
                "Alverine citrate",
                "Mebeverine hydrochloride",
                "Peppermint oil"
            ],
            "ans": 1,
            "exp": "Mebeverine CCĐ ở BN porphyria — rối loạn chuyển hóa porphyrin, thuốc có thể gây khởi phát cơn porphyria cấp tính. Alverine và peppermint oil không có CCĐ này, có thể cân nhắc thay thế sau khi xác nhận với BS điều trị.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS hỏi: 'Tôi nên uống tinh dầu bạc hà (peppermint oil) khi nào so với bữa ăn?' DS trả lời đúng là?",
            "opts": [
                "Uống ngay sau ăn để thuốc từ từ đi vào ruột cùng thức ăn",
                "Uống 15–30 phút trước bữa ăn, nuốt nguyên viên",
                "Uống lúc bụng đói hoàn toàn, cách bữa ăn ít nhất 2 giờ"
            ],
            "ans": 1,
            "exp": "Peppermint oil uống 15–30 phút trước bữa ăn — để thuốc đến ruột trước khi thức ăn kích hoạt co thắt cơ trơn. Nuốt nguyên viên (không nhai) để bao tan trong ruột giải phóng tinh dầu đúng vị trí, tránh kích ứng thực quản.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng hyoscine butylbromide 1 viên × 3 lần/ngày nhưng kiểm soát đau chưa đủ. Liều tối đa cho phép là?",
            "opts": [
                "2 viên × 3 lần/ngày (60 mg/ngày)",
                "2 viên × 4 lần/ngày (80 mg/ngày)",
                "3 viên × 3 lần/ngày (90 mg/ngày)"
            ],
            "ans": 1,
            "exp": "Hyoscine butylbromide 10 mg: khởi đầu 1 viên × 3 lần/ngày, có thể tăng tối đa 2 viên × 4 lần/ngày (80 mg/ngày). Liều cao làm tăng nguy cơ tác dụng phụ kháng cholinergic: khô miệng, bí tiểu, nhịp tim nhanh.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Theo khuyến cáo của British Dietetic Association (2016), khi BN IBS muốn thử probiotic, DS nên tư vấn thế nào?",
            "opts": [
                "Phối hợp nhiều chủng probiotic cùng lúc để tăng tác dụng",
                "Thử từng chủng một, duy trì tối thiểu 4 tuần trước khi đổi loại",
                "Probiotic đã có bằng chứng mạnh, nên dùng liên tục song song với antispasmodic"
            ],
            "ans": 1,
            "exp": "Kết luận BDA (2016): probiotic có thể mang lại lợi ích nhỏ trong IBS. Nếu BN muốn thử, nên dùng từng chủng một và duy trì tối thiểu 4 tuần để đánh giá đáp ứng trước khi đổi. Bằng chứng về hiệu quả tổng thể còn hạn chế.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS đang dùng amitriptyline 25 mg/ngày cho điều trị đau mạn tính. DS cần tránh tư vấn thêm antispasmodic nào?",
            "opts": [
                "Mebeverine hydrochloride",
                "Alverine citrate",
                "Hyoscine butylbromide"
            ],
            "ans": 2,
            "exp": "Amitriptyline (tricyclic antidepressant) + hyoscine butylbromide (kháng muscarinic) → cộng hưởng tác dụng kháng cholinergic: khô miệng nặng, bí tiểu, táo bón, nhịp tim nhanh. Mebeverine và alverine không qua cơ chế kháng muscarinic → an toàn khi phối hợp.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mebeverine hydrochloride giảm đau co thắt IBS thông qua cơ chế chính nào?",
            "opts": [
                "Ức chế thụ thể muscarinic M3 tại cơ trơn ruột",
                "Giãn cơ trơn trực tiếp, không qua hệ thần kinh tự chủ",
                "Ức chế tái hấp thu serotonin tại các synapse đường ruột"
            ],
            "ans": 1,
            "exp": "Mebeverine là smooth muscle relaxant trực tiếp — tác động trực tiếp lên cơ trơn đường tiêu hóa mà không cần qua thụ thể thần kinh → không gây tác dụng phụ kháng cholinergic (khô miệng, bí tiểu) như hyoscine. Đây là ưu điểm đặc biệt ở NCT.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Điểm khác nhau về độ tuổi được phép dùng giữa alverine citrate và mebeverine hydrochloride là?",
            "opts": [
                "Alverine từ 12 tuổi; mebeverine từ 18 tuổi",
                "Alverine từ 6 tuổi; mebeverine từ 15 tuổi",
                "Cả hai đều được dùng từ 12 tuổi trở lên"
            ],
            "ans": 0,
            "exp": "Alverine citrate được phép dùng từ 12 tuổi; mebeverine hydrochloride CCĐ ở trẻ <18 tuổi. Đây là điểm thực hành quan trọng: BN IBS từ 12–17 tuổi, alverine là lựa chọn phù hợp hơn mebeverine trong nhóm tuổi này.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ nào được ghi nhận thường gặp nhất khi dùng tinh dầu bạc hà (peppermint oil) đường uống?",
            "opts": [
                "Tiêu chảy và đau quặn bụng tăng thêm",
                "Ợ nóng (heartburn) và kích ứng vùng hậu môn",
                "Khô miệng, bí tiểu và nhìn mờ"
            ],
            "ans": 1,
            "exp": "Peppermint oil thường gây ợ nóng (do giãn cơ vòng thực quản dưới) và kích ứng vùng hậu môn-trực tràng khi thải trừ. Khô miệng/bí tiểu là tác dụng phụ đặc trưng của kháng muscarinic (hyoscine), không phải peppermint oil.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 72t dùng hyoscine butylbromide 10 mg cho IBS co thắt. Tác dụng phụ nào DS cần cảnh báo đặc biệt ở NCT?",
            "opts": [
                "Ợ nóng và trào ngược acid dạ dày",
                "Khô miệng, bí tiểu, nhìn mờ do tác dụng kháng muscarinic",
                "Tiêu chảy và mất điện giải"
            ],
            "ans": 1,
            "exp": "NCT nhạy cảm hơn với tác dụng kháng muscarinic: khô miệng nặng, bí tiểu (đặc biệt nguy hiểm ở nam có phì đại tuyến tiền liệt), nhìn mờ, lú lẫn. Hyoscine cần thận trọng đặc biệt ở NCT; cân nhắc thay thế bằng alverine hoặc mebeverine.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nam 55t, THA đang dùng perindopril, bị IBS co thắt đau bụng. DS tư vấn thuốc OTC nào phù hợp?",
            "opts": [
                "Alverine citrate",
                "Metoclopramide",
                "Domperidone"
            ],
            "ans": 0,
            "exp": "THA không phải CCĐ của antispasmodic OTC. Alverine phù hợp: không tương tác thuốc, không ảnh hưởng huyết áp, an toàn khi dùng cùng perindopril. Metoclopramide và domperidone là thuốc kê đơn (ETC) và không phải antispasmodic cho IBS.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN IBS nặng, không đáp ứng với nhiều tuần dùng antispasmodic OTC. Nhóm thuốc nào cần kê đơn (ETC) mà DS không thể bán OTC?",
            "opts": [
                "Mebeverine hydrochloride",
                "Peppermint oil",
                "Antidepressant liều thấp (amitriptyline, citalopram)"
            ],
            "ans": 2,
            "exp": "Antidepressant liều thấp được dùng trong IBS nặng không đáp ứng OTC — amitriptyline cho IBS-D, SSRI cho IBS-C — là thuốc kê đơn, nằm ngoài phạm vi OTC. DS cần chuyển khám BS khi IBS vượt phạm vi xử trí tại nhà thuốc.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN IBS đang dùng haloperidol (thuốc an thần kinh). DS có thể thêm hyoscine butylbromide để kiểm soát đau co thắt mà không cần lo tương tác thuốc.",
            "ans": false,
            "exp": "Hyoscine butylbromide + thuốc an thần kinh (neuroleptics như haloperidol) → cộng hưởng tác dụng kháng cholinergic: khô miệng nặng, bí tiểu, táo bón, lú lẫn. Đây là tương tác đã được ghi nhận, cần tránh. Ưu tiên thay thế bằng mebeverine hoặc alverine.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mebeverine hydrochloride không có tương tác thuốc đáng kể nào được ghi nhận trong thực hành lâm sàng.",
            "ans": true,
            "exp": "Mebeverine là smooth muscle relaxant trực tiếp, không qua thụ thể thần kinh → không có tương tác dược lực học đáng kể. Đây là ưu điểm so với hyoscine (kháng muscarinic) có nhiều tương tác với tricyclic antidepressant, neuroleptics và antihistamines.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN vừa bị GERD vừa IBS. DS có thể tư vấn tinh dầu bạc hà (peppermint oil) để kiểm soát đau bụng IBS mà không ảnh hưởng đến GERD.",
            "ans": false,
            "exp": "Peppermint oil giãn cơ vòng thực quản dưới → tăng nguy cơ trào ngược acid, gây hoặc làm nặng thêm ợ nóng — đặc biệt bất lợi ở BN GERD. Cần thay bằng antispasmodic không ảnh hưởng cơ vòng thực quản như mebeverine hoặc alverine.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tinh dầu bạc hà (peppermint oil) được xem là an toàn khi dùng trong thai kỳ.",
            "ans": true,
            "exp": "Peppermint oil an toàn trong thai kỳ theo các hướng dẫn hiện hành. Tuy nhiên, cần thận trọng khi cho con bú vì tinh dầu bạc hà có thể ức chế tiết sữa mẹ — nên cân nhắc tránh hoặc dùng ngắt quãng trong giai đoạn cho con bú.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alverine citrate an toàn cho thai phụ và không có CCĐ trong giai đoạn mang thai.",
            "ans": true,
            "exp": "Alverine được xem là an toàn trong thai kỳ và cho con bú — ưu điểm nổi bật so với hyoscine (nhà sản xuất khuyến cáo tránh) và mebeverine (một số tài liệu khuyến cáo thận trọng). Alverine cũng không có tương tác thuốc, phù hợp thai phụ dùng nhiều thuốc.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Trẻ 10 tuổi bị đau bụng co thắt tái phát có thể dùng tinh dầu bạc hà (peppermint oil) như một lựa chọn OTC hợp lý.",
            "ans": false,
            "exp": "Peppermint oil không được khuyến cáo cho trẻ <15 tuổi (Rutter, 2026). Ngoài ra, IBS hiếm gặp ở trẻ <16 tuổi — bất kỳ trẻ nào dưới độ tuổi này có triệu chứng giống IBS đều cần khám BS để loại trừ bệnh thực thể trước.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Alverine citrate không có tương tác thuốc đáng kể, có thể dùng an toàn kèm với hầu hết các thuốc khác.",
            "ans": true,
            "exp": "Alverine, tương tự mebeverine, không có tương tác thuốc được ghi nhận — khác với hyoscine butylbromide (kháng muscarinic) có tương tác với tricyclic antidepressant, neuroleptics, antihistamines và disopyramide. Đây là ưu điểm quan trọng trong thực hành.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN IBS mắc glaucoma góc đóng. DS có thể tư vấn hyoscine butylbromide an toàn vì dạng uống hấp thu toàn thân kém.",
            "ans": false,
            "exp": "Hyoscine butylbromide CCĐ ở BN glaucoma (đặc biệt glaucoma góc đóng) — tác dụng kháng muscarinic có thể giãn đồng tử, cản trở lưu thoát dịch nội nhãn → tăng nhãn áp đột ngột → cơn glaucoma cấp tính. Không dùng dù hấp thu toàn thân qua đường uống thấp.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Loperamide OTC có thể dùng hằng ngày liên tục hơn 4 tuần để kiểm soát IBS tiêu chảy mạn tính.",
            "ans": false,
            "exp": "OTC loperamide trong IBS chỉ phù hợp dùng ngắn hạn, không thường xuyên để giảm tiêu chảy cấp hoặc cảm giác buồn đại tiện khẩn cấp. Dùng dài hạn hằng ngày vượt phạm vi OTC, cần giám sát y tế; lạm dụng có thể gây táo bón và chướng bụng.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ispaghula husk dùng cho IBS táo bón cần uống cùng đủ lượng nước mỗi lần để phát huy tác dụng và tránh tắc nghẽn.",
            "ans": true,
            "exp": "Ispaghula husk tạo khối gel khi gặp nước trong lòng ruột → cần uống ≥200–300 mL nước mỗi lần. Uống thiếu nước có thể gây tắc nghẽn thực quản hoặc làm nặng thêm táo bón — đây là lưu ý bắt buộc khi tư vấn bulking agent.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Khi BN lần đầu trình bày triệu chứng IBS tại nhà thuốc, DS nên yêu cầu khám BS để xác nhận chẩn đoán trước khi tư vấn OTC antispasmodic.",
            "ans": true,
            "exp": "IBS là chẩn đoán loại trừ — tất cả antispasmodic OTC (mebeverine, peppermint oil, hyoscine) đều có khuyến cáo: nếu đây là lần đầu BN có triệu chứng, BS cần xác nhận chẩn đoán trước. Điều này giúp loại trừ bệnh thực thể nguy hiểm có triệu chứng tương tự.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mebeverine hydrochloride và hyoscine butylbromide đều có nguy cơ tương tác với các thuốc kháng cholinergic như tricyclic antidepressant.",
            "ans": false,
            "exp": "Chỉ hyoscine butylbromide (kháng muscarinic) mới có nguy cơ tương tác với các thuốc kháng cholinergic (tricyclic, neuroleptics, antihistamines, disopyramide). Mebeverine giãn cơ trơn trực tiếp — không qua thụ thể cholinergic → không có tương tác này.",
            "icon": "⚠️"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN IBS 42t đang điều trị OTC ổn định, nay kể thấy máu đỏ tươi lẫn trong phân. DS xử trí thế nào?",
            "opts": [
                "Thêm loperamide để giảm tần suất đại tiện và chờ thêm",
                "Chuyển khám BS sớm nhất có thể",
                "Tiếp tục antispasmodic và theo dõi thêm 1 tuần"
            ],
            "ans": 1,
            "exp": "Máu trong phân KHÔNG phải triệu chứng của IBS — đây là red flag cần loại trừ bệnh viêm ruột (IBD), polyp hoặc ung thư đại trực tràng. DS phải chuyển khám BS ngay, không tự ý xử lý OTC hay kéo dài theo dõi.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 48t nam đến nhà thuốc lần đầu với đau bụng dưới trái và thay đổi thói quen đại tiện kéo dài 4 tuần. DS xử trí đúng nhất?",
            "opts": [
                "Tư vấn IBS và bán antispasmodic OTC ngay",
                "Chuyển khám BS để loại trừ bệnh thực thể trước khi dùng OTC",
                "Tư vấn thay đổi chế độ ăn và theo dõi thêm 2 tuần"
            ],
            "ans": 1,
            "exp": "BN >45 tuổi với triệu chứng đường ruột lần đầu là red flag — nguy cơ bệnh thực thể (ung thư đại trực tràng, IBD) cao hơn rõ rệt so với người trẻ. Không tự chẩn đoán IBS; chuyển khám BS để loại trừ trước khi xem xét OTC.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Đặc điểm nào giúp phân biệt IBS với bệnh viêm ruột (IBD) tại nhà thuốc?",
            "opts": [
                "IBS thường có máu trong phân và sốt nhẹ; IBD hiếm khi có",
                "IBS không có máu trong phân, không sốt; IBD có thể có máu, sốt, giảm cân",
                "IBS chỉ gặp ở nữ giới trẻ; IBD gặp ở mọi độ tuổi và giới"
            ],
            "ans": 1,
            "exp": "IBS là rối loạn chức năng — không có máu trong phân, không sốt, không giảm cân. IBD (bệnh Crohn, viêm loét đại tràng) có thể gây máu/nhầy trong phân, sốt, giảm cân, tăng CRP/ESR. Bất kỳ dấu hiệu viêm hệ thống nào cần chuyển khám BS ngay.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN IBS tiêu chảy hỏi nên tránh thực phẩm/đồ uống nào theo khuyến cáo NICE CG61. DS tư vấn đúng nhất là?",
            "opts": [
                "Tránh tất cả trái cây và rau quả để giảm chất xơ",
                "Tránh kẹo không đường và đồ uống diet có chứa sorbitol",
                "Tránh thịt đỏ và tăng cường ngũ cốc nguyên hạt"
            ],
            "ans": 1,
            "exp": "Sorbitol (chất tạo ngọt nhân tạo) kháng hấp thu tại ruột non → lên ruột già → kéo nước vào lòng ruột → tiêu chảy và đầy hơi. Có trong kẹo không đường, nước ngọt diet, sản phẩm giảm cân. BN IBS-D cần chủ động tránh các sản phẩm này.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Vị trí và tính chất đau điển hình trong IBS là?",
            "opts": [
                "Đau thượng vị, lan ra sau lưng, tăng sau bữa ăn nhiều chất béo",
                "Đau hạ vị trái, tính co thắt, thường giảm sau đại tiện hoặc trung tiện",
                "Đau quanh rốn, tăng khi ăn, không liên quan đến thói quen đại tiện"
            ],
            "ans": 1,
            "exp": "IBS điển hình: đau hạ vị trái (left lower quadrant), tính chất co thắt, giảm sau đại tiện hoặc trung tiện. Đau thượng vị sau ăn nhiều mỡ gợi ý bệnh túi mật. Đau quanh rốn không liên quan đại tiện gợi ý nguồn gốc ruột non hoặc nguyên nhân khác.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Theo khuyến cáo dinh dưỡng NICE CG61 cho IBS, BN nên uống bao nhiêu chất lỏng mỗi ngày?",
            "opts": [
                "Ít nhất 4 cốc/ngày, kể cả cà phê và nước có gas",
                "Ít nhất 8 cốc/ngày, ưu tiên nước lọc hoặc trà thảo mộc",
                "Không giới hạn, uống càng nhiều càng tốt để hỗ trợ tiêu hóa"
            ],
            "ans": 1,
            "exp": "NICE CG61 khuyến cáo ≥8 cốc chất lỏng/ngày, ưu tiên nước lọc hoặc đồ uống không caffeine. Giới hạn cà phê/trà tối đa 3 cốc/ngày; giảm rượu và nước có gas vì gây đầy hơi và làm nặng triệu chứng IBS.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN IBS dùng antispasmodic OTC đúng cách trong 1 tuần, không cải thiện. DS xử trí phù hợp nhất?",
            "opts": [
                "Tiếp tục thêm 3–4 tuần cùng loại thuốc trước khi kết luận thất bại",
                "Thử đổi sang antispasmodic khác thêm 1 tuần; nếu vẫn không đáp ứng thì khám BS",
                "Ngay lập tức chuyển khám BS, không tiếp tục OTC"
            ],
            "ans": 1,
            "exp": "Nếu antispasmodic đầu tay không cải thiện sau 1 tuần, có thể thử đổi loại khác (VD: mebeverine → peppermint oil) thêm 1 tuần — vì các antispasmodic có cơ chế khác nhau, BN có thể đáp ứng với loại này mà không đáp ứng loại kia. Nếu vẫn thất bại → khám BS đánh giá lại.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 'IBS' 38t đến nhà thuốc với sốt 38,6°C, đau bụng dữ dội và nôn liên tục không cầm. DS xử trí đúng nhất?",
            "opts": [
                "Bán antispasmodic liều cao và yêu cầu quay lại nếu không đỡ",
                "Chuyển ngay đến cơ sở y tế khẩn cấp",
                "Bán thuốc hạ sốt và thuốc chống nôn OTC để kiểm soát triệu chứng"
            ],
            "ans": 1,
            "exp": "Sốt cao + đau bụng dữ dội + nôn liên tục = red flag cấp: gợi ý nguyên nhân ngoại khoa (viêm ruột thừa, viêm phúc mạc) hoặc nhiễm trùng nặng. Đây không thuộc phạm vi IBS, không xử trí OTC. Chuyển cơ sở y tế ngay lập tức.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 44t đến nhà thuốc vì phân màu vàng nhạt, mùi hôi khác thường, nổi váng trên mặt nước bồn cầu. DS nhận định đây là?",
            "opts": [
                "IBS táo bón xen tiêu chảy — tiếp tục OTC",
                "Steatorrhoea (phân nhiều mỡ) — gợi ý kém hấp thu, cần khám BS",
                "Rối loạn hệ vi sinh — dùng probiotic trong 4 tuần"
            ],
            "ans": 1,
            "exp": "Steatorrhoea (phân nhiều mỡ, màu nhạt, nổi váng, mùi hôi đặc trưng) là dấu hiệu kém hấp thu mỡ — gợi ý bệnh tụy ngoại tiết, bệnh celiac hoặc bệnh gan/mật. Đây là red flag cần chuyển khám BS, không phải triệu chứng IBS.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Mẹ đưa con 15 tuổi đến nhà thuốc, bé bị đau bụng co thắt tái phát nhiều lần trong 3 tháng. DS xử trí nào đúng nhất?",
            "opts": [
                "Bán alverine citrate vì được phép dùng từ 12 tuổi",
                "Tư vấn chế độ ăn và tinh dầu bạc hà (peppermint oil)",
                "Khuyên khám BS vì IBS hiếm gặp ở tuổi này, cần loại trừ bệnh thực thể"
            ],
            "ans": 2,
            "exp": "IBS hiếm gặp ở trẻ <16 tuổi — bất kỳ trẻ nào dưới độ tuổi này với triệu chứng giống IBS đều cần chuyển khám BS để loại trừ bệnh thực thể (bệnh Crohn, celiac, dị ứng thực phẩm...). Không tự chẩn đoán IBS và xử lý OTC.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "IBS là một chẩn đoán loại trừ, không có xét nghiệm sinh hóa hay hình ảnh học đặc hiệu để xác định bệnh.",
            "ans": true,
            "exp": "IBS là rối loạn chức năng (functional bowel disorder) — không có bất thường giải phẫu, sinh hóa hay vi sinh đặc hiệu. Chẩn đoán dựa trên tiêu chuẩn lâm sàng (Rome IV) kết hợp loại trừ bệnh thực thể. DS không nên tự chẩn đoán IBS cho BN lần đầu có triệu chứng.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "IBS phổ biến ở trẻ em dưới 16 tuổi và có thể xử trí OTC tương tự người lớn.",
            "ans": false,
            "exp": "IBS hiếm gặp ở trẻ <16 tuổi. Bất kỳ trẻ nào dưới độ tuổi này có triệu chứng giống IBS đều cần chuyển khám BS để loại trừ nguyên nhân thực thể. Không áp dụng phác đồ OTC người lớn cho trẻ em khi chưa có chẩn đoán xác định.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Căng thẳng tâm lý không ảnh hưởng đến mức độ nặng của triệu chứng IBS.",
            "ans": false,
            "exp": "Căng thẳng tâm lý là yếu tố làm nặng IBS đã được ghi nhận rõ ràng: BN có lo âu/trầm cảm cao báo cáo triệu chứng nghiêm trọng hơn, và các giai đoạn stress thường trùng với đợt bùng phát IBS. DS nên tư vấn kỹ thuật thư giãn bên cạnh điều trị dùng thuốc.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN IBS kéo dài 3 tuần yêu cầu kháng sinh vì 'ruột bị nhiễm khuẩn'. DS đồng ý bán kháng sinh là hành động hợp lý.",
            "ans": false,
            "exp": "IBS là rối loạn chức năng — không có nhiễm khuẩn, kháng sinh không có vai trò trong IBS thông thường. Bán kháng sinh không kê đơn vi phạm quy định pháp lý. Lạm dụng kháng sinh làm rối loạn hệ vi sinh đường ruột, có thể làm nặng thêm triệu chứng IBS.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Phân có chứa chất nhầy (mucus) là biểu hiện có thể gặp trong IBS và không nhất thiết là dấu hiệu nguy hiểm.",
            "ans": true,
            "exp": "Trong IBS, cường hoạt phó giao cảm kích thích tiết chất nhầy từ niêm mạc đại tràng → phân có nhầy là biểu hiện khá phổ biến của IBS, không phải red flag. Cần phân biệt rõ với máu lẫn nhầy — đây mới là red flag của IBD hoặc ung thư đại trực tràng.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Các triệu chứng IBS cần kéo dài ít nhất 6 tháng mới được xem xét trong tiêu chuẩn chẩn đoán.",
            "ans": true,
            "exp": "Theo tiêu chuẩn Rome IV, IBS được xem xét khi BN có đau bụng tái phát ≥1 ngày/tuần trong 3 tháng gần đây, với khởi phát ít nhất 6 tháng trước đó. Triệu chứng cấp tính ngắn hạn cần loại trừ nhiều nguyên nhân khác (nhiễm khuẩn, bệnh thực thể) trước.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nhu cầu đại tiện cấp nhiều lần vào buổi sáng sau khi thức dậy ('morning rush') là biểu hiện điển hình của IBS tiêu chảy ưu thế (IBS-D).",
            "ans": true,
            "exp": "'Morning rush' — đại tiện cấp nhiều lần ngay sau thức dậy và sau bữa sáng, sau đó ruột thường ổn định trong ngày — là đặc điểm điển hình của IBS-D. Cơ chế: tăng phản xạ dạ dày-đại tràng và cường phó giao cảm buổi sáng. Phân thường nhão/bán lỏng, có thể kèm nhầy.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Tập thể dục thường xuyên không có tác dụng cải thiện triệu chứng IBS và không nên được tư vấn như một biện pháp không dùng thuốc.",
            "ans": false,
            "exp": "Tổng quan Cochrane (Nunan et al., 2002) cho thấy can thiệp tập thể dục có thể cải thiện triệu chứng IBS so với chăm sóc thông thường, dù bằng chứng còn hạn chế do chất lượng nghiên cứu. DS nên tư vấn tập thể dục đều đặn như biện pháp không dùng thuốc hỗ trợ, cùng với thay đổi chế độ ăn và quản lý stress.",
            "icon": "🏃"
        }
    ],
    "helminthiasis": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mebendazole tiêu diệt giun kim (Enterobius vermicularis) thông qua cơ chế nào?",
            "opts": [
                "Liệt thần kinh cơ giun → bất động → đào thải theo phân",
                "Ức chế thu nạp glucose của giun → bất động và chết sau vài ngày",
                "Phá vỡ màng tế bào giun → ly giải trực tiếp"
            ],
            "ans": 1,
            "exp": "Mebendazole ức chế chọn lọc quá trình thu nạp glucose ở tế bào ruột của giun sán → cạn kiệt dự trữ glycogen → bất động và chết trong vài ngày. Thuốc hấp thu toàn thân rất thấp → tác dụng phụ hệ thống tối thiểu.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều mebendazole OTC đúng cho trẻ 5 tuổi bị giun kim là?",
            "opts": [
                "50 mg liều duy nhất (nửa viên)",
                "100 mg liều duy nhất (1 viên hoặc 5 mL hỗn dịch)",
                "200 mg liều duy nhất (2 viên)"
            ],
            "ans": 1,
            "exp": "Mebendazole 100 mg liều duy nhất áp dụng cho cả trẻ từ 2 tuổi và người lớn — không cần điều chỉnh liều theo cân nặng. Liều thứ hai 100 mg được khuyến cáo sau 14 ngày để diệt các giun trưởng thành từ trứng còn sót lại thời điểm uống liều đầu.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mebendazole được cấp phép dùng OTC tại nhà thuốc cho trẻ từ độ tuổi tối thiểu nào?",
            "opts": [
                "6 tháng tuổi",
                "2 tuổi",
                "6 tuổi"
            ],
            "ans": 1,
            "exp": "Mebendazole OTC tại nhà thuốc: từ 2 tuổi trở lên. Trẻ 6 tháng–2 tuổi: BNF có khuyến cáo dùng nhưng bắt buộc phải có đơn của BS/dược sĩ kê đơn. Trẻ <6 tháng: chỉ áp dụng biện pháp vệ sinh, không dùng thuốc.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN động kinh đang dùng phenytoin 300 mg/ngày, bị giun kim. DS tư vấn dùng mebendazole — cần lưu ý điều gì?",
            "opts": [
                "Phenytoin làm tăng nồng độ mebendazole → nguy cơ độc tính gan",
                "Phenytoin làm giảm nồng độ mebendazole → có thể cần tăng liều",
                "Không có tương tác đáng kể, dùng bình thường"
            ],
            "ans": 1,
            "exp": "Phenytoin (và carbamazepine) là các chất cảm ứng enzyme CYP gan mạnh → đẩy nhanh chuyển hóa mebendazole → giảm nồng độ huyết tương của thuốc → có thể làm giảm hiệu quả diệt giun. Trong trường hợp này, cân nhắc tăng liều hoặc phối hợp thêm liều sau 14 ngày và theo dõi kết quả điều trị.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng cimetidine cho loét dạ dày hỏi mua thêm mebendazole tẩy giun. DS cần biết điều gì về tương tác này?",
            "opts": [
                "Cimetidine giảm hấp thu mebendazole → nên uống cách nhau 2 giờ",
                "Cimetidine ức chế chuyển hóa mebendazole → tăng nồng độ huyết tương, ít ảnh hưởng lâm sàng",
                "Cimetidine tăng thải trừ mebendazole → cần tăng gấp đôi liều"
            ],
            "ans": 1,
            "exp": "Cimetidine ức chế CYP3A4 gan → làm chậm chuyển hóa mebendazole → tăng nồng độ huyết tương mebendazole. Tuy nhiên, tác dụng này ít có ý nghĩa lâm sàng do mebendazole hấp thu toàn thân vốn đã rất thấp. Không cần điều chỉnh liều thông thường.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Gia đình có 4 người: bố (35t), mẹ (33t), con trai (7t), bé gái (18 tháng). Con trai được xác nhận nhiễm giun kim. DS nên tư vấn điều trị cho ai?",
            "opts": [
                "Chỉ con trai vì chỉ con trai có triệu chứng",
                "Bố, mẹ và con trai — bỏ bé gái vì dưới 2 tuổi",
                "Cả 4 người, nhưng bé gái 18 tháng cần có đơn BS trước khi dùng mebendazole"
            ],
            "ans": 2,
            "exp": "Giun kim lây rất nhanh trong gia đình — tất cả thành viên phải uống thuốc cùng lúc, kể cả người không có triệu chứng. Bé 18 tháng (<2 tuổi) không được bán OTC — cần đơn BS/dược sĩ kê đơn. Điều trị đồng loạt toàn gia đình là yếu tố then chốt để phá vỡ chu kỳ tái nhiễm.",
            "icon": "👨‍👩‍👧‍👦"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Lý do tại sao khuyến cáo uống liều thứ hai mebendazole sau đúng 14 ngày kể từ liều đầu?",
            "opts": [
                "Vì liều đầu chỉ diệt giun trưởng thành, liều hai diệt giun non vừa nở từ trứng còn sót lại",
                "Vì mebendazole cần thời gian tích lũy trong mô để đạt nồng độ diệt giun đầy đủ",
                "Vì chu kỳ sống của giun kim là 14 ngày, cần phá vỡ hai chu kỳ liên tiếp"
            ],
            "ans": 0,
            "exp": "Liều đầu diệt giun trưởng thành. Nhưng trứng giun đã có trong môi trường có thể nở thành giun con trong ≈2 tuần. Liều thứ hai sau 14 ngày nhắm đến thế hệ giun non này trước khi chúng đạt giai đoạn sinh sản trưởng thành — hoàn tất vòng diệt.",
            "icon": "⏱️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Trẻ 4 tuổi không chịu nuốt viên thuốc mebendazole. DS tư vấn cách dùng phù hợp nhất?",
            "opts": [
                "Nghiền viên và pha vào sữa để che mùi",
                "Cho trẻ nhai viên (công thức hương cam) hoặc dùng dạng hỗn dịch (hương chuối)",
                "Trẻ nhỏ nên chờ đến khi biết nuốt viên mới dùng"
            ],
            "ans": 1,
            "exp": "Mebendazole được bào chế đặc biệt cho trẻ em: viên có hương cam (chewable) và hỗn dịch uống hương chuối. Trẻ có thể nhai viên hoặc dùng hỗn dịch — cả hai đều cho hiệu quả tương đương. Không cần nuốt nguyên viên.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Albendazole và mebendazole cùng nhóm benzimidazole, nhưng chúng khác nhau điểm gì quan trọng trong thực hành tại nhà thuốc Việt Nam?",
            "opts": [
                "Albendazole OTC, mebendazole phải kê đơn",
                "Mebendazole OTC cho giun kim; albendazole phổ rộng hơn (sán, giun lươn) và là thuốc kê đơn",
                "Cả hai đều OTC nhưng albendazole dùng cho người lớn, mebendazole cho trẻ em"
            ],
            "ans": 1,
            "exp": "Mebendazole: OTC, chủ yếu cho nhiễm giun đường ruột (giun kim, giun đũa, giun tóc, giun móc). Albendazole: phổ kháng giun rộng hơn — bao gồm cả nang sán (echinococcosis), giun lươn (strongyloidiasis), ấu trùng di chuyển — và thường là thuốc kê đơn. Nhầm lẫn hai thuốc có thể gây thiếu hoặc thừa điều trị.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ thường gặp nhất khi dùng mebendazole 100 mg liều đơn là?",
            "opts": [
                "Buồn ngủ và chóng mặt do tác dụng hệ thần kinh trung ương",
                "Đau và khó chịu bụng",
                "Phát ban da và ngứa toàn thân"
            ],
            "ans": 1,
            "exp": "Tác dụng phụ thường gặp nhất của mebendazole là đau bụng/khó chịu tiêu hóa (common: ≥1/100). Tiêu chảy ít gặp hơn (uncommon). Vì thuốc hấp thu toàn thân rất thấp nên tác dụng phụ hệ thống (thần kinh, gan) hiếm gặp với liều OTC.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN NCT 75t bị giun kim được xác nhận. DS cần lưu ý gì đặc biệt khi tư vấn mebendazole?",
            "opts": [
                "Giảm liều còn 50 mg vì NCT chuyển hóa chậm",
                "Không có lưu ý đặc biệt do hấp thu toàn thân thấp; tuy nhiên hỏi kỹ về thuốc đang dùng (phenytoin, carbamazepine)",
                "Tránh dùng hoàn toàn ở NCT vì nguy cơ suy gan"
            ],
            "ans": 1,
            "exp": "Mebendazole không có lưu ý đặc biệt riêng cho NCT vì hấp thu toàn thân tối thiểu. Điểm cần kiểm tra: tương tác với phenytoin/carbamazepine (thường dùng ở NCT có động kinh) và cimetidine. Không cần giảm liều; liều 100 mg áp dụng cho mọi người lớn.",
            "icon": "👴"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Pyrantel pamoate và mebendazole đều là thuốc tẩy giun OTC. Điểm khác biệt về cơ chế tác động là?",
            "opts": [
                "Mebendazole diệt giun qua ức chế tổng hợp tubulin; pyrantel gây liệt thần kinh cơ giun qua ức chế acetylcholinesterase",
                "Mebendazole ức chế glucose; pyrantel kích thích acetylcholine → co cứng cơ giun → bất động và đào thải",
                "Cả hai cùng cơ chế ức chế glucose nhưng pyrantel tác dụng nhanh hơn"
            ],
            "ans": 1,
            "exp": "Pyrantel là chất chủ vận nicotinic acetylcholine → gây co cứng cơ giun (spastic paralysis) và ức chế acetylcholinesterase → giun bất động và được đào thải. Khác với mebendazole (ức chế thu nạp glucose → chết chậm sau vài ngày). Pyrantel tác dụng nhanh hơn và có thể thấy giun trong phân sớm hơn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Mebendazole nên uống vào thời điểm nào trong ngày để đạt hiệu quả tốt nhất?",
            "opts": [
                "Nhịn ăn hoàn toàn ít nhất 2 giờ trước và sau khi uống",
                "Có thể uống bất kỳ thời điểm nào, không phụ thuộc vào bữa ăn",
                "Uống ngay sau bữa ăn có nhiều chất béo để tăng hấp thu"
            ],
            "ans": 1,
            "exp": "Mebendazole tác dụng tại chỗ trong lòng ruột — hấp thu toàn thân thấp là yếu tố tích cực (giảm độc tính hệ thống). Thuốc có thể uống bất kể thời điểm, không cần nhịn ăn hay phối hợp với bữa ăn nhiều mỡ. Đây là điểm thực hành đơn giản, thuận tiện cho BN.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tỷ lệ khỏi bệnh của mebendazole liều đơn 100 mg trong điều trị giun kim (Enterobius) theo các nghiên cứu lâm sàng là?",
            "opts": [
                "Gần 100%, rất hiệu quả với một liều duy nhất",
                "Khoảng 60–82%, không đảm bảo khỏi hoàn toàn sau một liều",
                "Dưới 40%, cần phối hợp với thuốc thứ hai"
            ],
            "ans": 1,
            "exp": "Mebendazole liều đơn cho giun kim: tỷ lệ khỏi bệnh chỉ đạt 60–82% (Rafi et al., 1997; Sorensen et al., 1996) — thấp hơn so với giun đũa. Đây là lý do bắt buộc phải kết hợp biện pháp vệ sinh song song và khuyến cáo liều nhắc sau 14 ngày để tăng tỷ lệ thành công.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đang dùng carbamazepine 400 mg/ngày (chống động kinh), cần tẩy giun kim. DS xử trí phù hợp nhất?",
            "opts": [
                "Tránh mebendazole hoàn toàn, chuyển sang pyrantel pamoate",
                "Bán mebendazole và lưu ý hiệu quả có thể giảm do tương tác; theo dõi sau 2–4 tuần",
                "Dùng mebendazole bình thường, carbamazepine không ảnh hưởng"
            ],
            "ans": 1,
            "exp": "Carbamazepine (như phenytoin) cảm ứng CYP3A4 → tăng chuyển hóa mebendazole → giảm hiệu quả. DS vẫn có thể bán mebendazole OTC nhưng cần thông báo tương tác, theo dõi hiệu quả và sẵn sàng chuyển BS nếu thất bại. Pyrantel là phương án thay thế hợp lý.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi: 'Nếu dùng mebendazole mà không kết hợp vệ sinh, có chữa khỏi giun kim không?' DS trả lời đúng là?",
            "opts": [
                "Có, mebendazole đủ mạnh để chữa dứt điểm mà không cần vệ sinh",
                "Không chắc — thuốc diệt giun hiện tại nhưng trứng trong môi trường có thể gây tái nhiễm ngay",
                "Không, cần thêm kháng sinh vì giun thường đi kèm bội nhiễm vi khuẩn"
            ],
            "ans": 1,
            "exp": "Điều trị giun kim theo nguyên tắc KÉP: mebendazole (diệt giun) + vệ sinh chặt chẽ (phá vỡ chu kỳ trứng). Trứng giun kim tồn tại ngoài môi trường đến 3 tuần và cực kỳ khó nhìn thấy — nếu không vệ sinh song song, tái nhiễm xảy ra rất nhanh dù đã uống thuốc.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 28t nữ, đang cho con bú 4 tháng, bị nhiễm giun kim. DS tư vấn đúng nhất?",
            "opts": [
                "CCĐ mebendazole khi cho con bú, chỉ áp dụng vệ sinh hoàn toàn",
                "Mebendazole an toàn khi cho con bú, hấp thu vào sữa mẹ không đáng kể",
                "Chuyển sang albendazole vì an toàn hơn mebendazole trong thời gian cho con bú"
            ],
            "ans": 1,
            "exp": "Mebendazole an toàn trong thời gian cho con bú — hấp thu toàn thân rất thấp nên lượng thuốc vào sữa mẹ không đáng kể. Phân biệt rõ: mebendazole CCĐ khi MANG THAI (gây dị tật bẩm sinh ở động vật) nhưng không CCĐ khi cho con bú.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Điều trị giun móc (hookworm) gây thiếu máu nhược sắc — sau khi dùng mebendazole, BN cần bổ sung thêm gì?",
            "opts": [
                "Vitamin B12 vì giun móc gây thiếu B12 hấp thu",
                "Sắt (iron supplement) vì giun móc hút máu gây mất sắt mạn tính",
                "Vitamin C để tăng đề kháng chống tái nhiễm"
            ],
            "ans": 1,
            "exp": "Giun móc (Ancylostoma/Necator) bám vào niêm mạc ruột non và hút máu — gây mất máu mạn tính dẫn đến thiếu máu thiếu sắt. Sau tẩy giun thành công, bổ sung sắt là cần thiết để phục hồi kho dự trữ sắt bị cạn kiệt. Đây là điểm thực hành khác biệt với giun kim (không gây thiếu máu đáng kể).",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN nghi nhiễm sán dây (Taenia saginata) sau chuyến du lịch. DS xử trí đúng nhất?",
            "opts": [
                "Bán mebendazole vì thuốc có phổ tác dụng đủ rộng cho sán dây",
                "Chuyển khám BS — sán dây không nằm trong phạm vi OTC, cần xét nghiệm và xử trí ETC",
                "Tư vấn pyrantel vì hiệu quả tốt hơn mebendazole trong sán dây"
            ],
            "ans": 1,
            "exp": "Sán dây (tapeworm) không thuộc phạm vi tự điều trị OTC — cần chẩn đoán xác định bằng xét nghiệm phân, định danh loài và điều trị bằng thuốc kê đơn (praziquantel hoặc niclosamide). Mebendazole OTC không đủ phổ cho sán. DS phải chuyển khám BS.",
            "icon": "📋"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bố mang 2 con (8t và 3t) đến nhà thuốc sau khi bác sĩ xác nhận cả hai cùng nhiễm giun kim. Đặt hàng mebendazole cho toàn gia đình gồm bố, mẹ đang mang thai 10 tuần, và 2 con. DS tư vấn đúng?",
            "opts": [
                "Bán mebendazole cho bố, 2 con; mẹ mang thai không được dùng, chỉ áp dụng vệ sinh 6 tuần",
                "Bán mebendazole cho cả 4 người, thai kỳ không phải CCĐ tuyệt đối",
                "Không cần điều trị bố và mẹ nếu họ không có triệu chứng"
            ],
            "ans": 0,
            "exp": "Mebendazole CCĐ trong thai kỳ (gây dị tật bẩm sinh ở động vật; ca ở người đã có báo cáo). Thai phụ phải áp dụng vệ sinh nghiêm ngặt trong 6 tuần (chu kỳ sống hoàn chỉnh của giun kim không có thuốc). Bố và 2 con dùng mebendazole 100 mg liều đơn, kết hợp vệ sinh 2 tuần.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Thai phụ 3 tháng bị nhiễm giun kim nên dùng mebendazole liều đơn 100 mg vì hấp thu toàn thân thấp, an toàn cho thai nhi.",
            "ans": false,
            "exp": "Mebendazole CCĐ trong thai kỳ — dù hấp thu thấp, đã có báo cáo dị tật bẩm sinh (đặc biệt tam cá nguyệt 1). Thai phụ chỉ áp dụng biện pháp vệ sinh nghiêm ngặt trong 6 tuần. Nếu vệ sinh đơn thuần thất bại, cần khám BS để được tư vấn thêm.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mebendazole an toàn cho phụ nữ đang cho con bú và không cần ngừng cho con bú sau khi uống thuốc.",
            "ans": true,
            "exp": "Mebendazole được phép dùng khi cho con bú. Hấp thu toàn thân rất thấp → lượng thuốc vào sữa mẹ không đáng kể → không ảnh hưởng đến trẻ bú. Đây là điểm cần phân biệt rõ với CCĐ trong thai kỳ — hai tình huống có khuyến cáo ngược chiều nhau.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Trẻ 18 tháng bị giun kim có thể mua mebendazole OTC tại nhà thuốc mà không cần đơn thuốc.",
            "ans": false,
            "exp": "Mebendazole OTC chỉ bán không cần đơn cho trẻ từ 2 tuổi trở lên. Trẻ 6 tháng–2 tuổi: BNF có khuyến cáo nhưng bắt buộc có đơn BS hoặc dược sĩ kê đơn. Trẻ <6 tháng: chỉ biện pháp vệ sinh, không dùng thuốc. DS không được bán OTC cho trường hợp này.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Điều trị giun kim bắt buộc phải cho tất cả thành viên gia đình uống thuốc cùng một thời điểm, kể cả người không có triệu chứng.",
            "ans": true,
            "exp": "Nguyên tắc điều trị đồng loạt toàn gia đình (family treatment) là bắt buộc vì giun kim lây cực kỳ nhanh. Người không có triệu chứng vẫn có thể đang mang trứng/giun và là nguồn tái nhiễm. Điều trị riêng một người trong gia đình gần như chắc chắn thất bại.",
            "icon": "👨‍👩‍👧‍👦"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Mebendazole hấp thu toàn thân cao nên tác dụng phụ toàn thân như chóng mặt và buồn ngủ rất thường gặp sau khi uống.",
            "ans": false,
            "exp": "Mebendazole hấp thu toàn thân RẤT THẤP sau uống đường miệng — đây là đặc điểm dược động học quan trọng giúp thuốc an toàn khi dùng đại trà. Tác dụng phụ chủ yếu tại chỗ (đau bụng). Không gây chóng mặt, buồn ngủ hay tác dụng phụ hệ thần kinh ở liều OTC thông thường.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Cimetidine làm tăng nồng độ mebendazole trong huyết tương nhưng tác động này ít có ý nghĩa lâm sàng vì hấp thu thuốc vốn đã thấp.",
            "ans": true,
            "exp": "Cimetidine ức chế chuyển hóa mebendazole → tăng nồng độ huyết tương, nhưng vì mebendazole hấp thu toàn thân vốn rất thấp nên mức tăng này không đủ gây độc tính lâm sàng đáng kể. Khác hoàn toàn với phenytoin/carbamazepine (giảm hiệu quả) — đây là chiều ngược lại của tương tác.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Pyrantel pamoate là lựa chọn thay thế mebendazole phù hợp ở BN động kinh đang dùng phenytoin vì không bị ảnh hưởng bởi tương tác dược động học này.",
            "ans": true,
            "exp": "Pyrantel không phụ thuộc vào CYP3A4 để chuyển hóa → không bị phenytoin/carbamazepine làm giảm nồng độ. Đây là phương án thực tế khi mebendazole có nguy cơ thất bại do tương tác thuốc chống động kinh. Pyrantel cũng hấp thu toàn thân thấp và tác dụng tại lòng ruột.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Pyrantel pamoate tác dụng chủ yếu tại chỗ trong lòng ruột, hấp thu toàn thân thấp — đây là đặc điểm an toàn tương tự mebendazole.",
            "ans": true,
            "exp": "Cả pyrantel và mebendazole đều hấp thu toàn thân thấp → tác dụng tập trung trong lòng ruột nơi giun ký sinh → tác dụng phụ hệ thống tối thiểu. Đây là lý do cả hai đều là lựa chọn OTC phù hợp cho cộng đồng. Sự khác biệt chính nằm ở cơ chế (pyrantel: liệt thần kinh cơ; mebendazole: ức chế glucose) và tương tác thuốc.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN đang dùng phenobarbital (chống động kinh) hỏi mua mebendazole — DS không cần lo ngại tương tác thuốc vì phenobarbital không ảnh hưởng đến mebendazole.",
            "ans": false,
            "exp": "Phenobarbital là chất cảm ứng enzyme gan mạnh (CYP3A4, CYP2C9) — tương tự phenytoin và carbamazepine — làm tăng chuyển hóa mebendazole → giảm nồng độ thuốc → giảm hiệu quả. DS cần hỏi về tất cả các thuốc chống động kinh, không chỉ phenytoin.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Nhiễm giun đũa (Ascaris lumbricoides) có thể gây biểu hiện ho khan và khó thở trong giai đoạn ấu trùng di chuyển qua phổi.",
            "ans": true,
            "exp": "Giai đoạn ấu trùng giun đũa (larvae) di chuyển qua phổi gây Löffler syndrome: ho khan, thở rít, tăng bạch cầu ái toan — dễ nhầm với viêm phổi hoặc hen phế quản. Sau vài tuần, ấu trùng di chuyển lên họng và được nuốt xuống ruột non → trưởng thành. Đây là điểm phân biệt quan trọng giữa giun đũa và giun kim.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Vệ sinh môi trường (giặt chăn gối, hút bụi, lau nhà vệ sinh) chỉ cần thực hiện 1 ngày đầu điều trị, sau đó không cần duy trì.",
            "ans": false,
            "exp": "Vệ sinh môi trường cần thực hiện vào ngày đầu điều trị (giặt chăn gối, hút bụi mattress, lau phòng tắm), NHƯNG phải duy trì các biện pháp vệ sinh cá nhân (rửa tay, cắt móng tay, mặc đồ ngủ kín) trong suốt 2 tuần (có thuốc) hoặc 6 tuần (chỉ vệ sinh). Trứng giun sống đến 3 tuần trong môi trường.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Trẻ dưới 6 tháng bị giun kim nên được điều trị bằng pyrantel pamoate liều thấp vì mebendazole không an toàn ở độ tuổi này.",
            "ans": false,
            "exp": "Trẻ <6 tháng: KHÔNG dùng bất kỳ thuốc tẩy giun nào (mebendazole hay pyrantel). Xử trí chỉ bằng vệ sinh: vệ sinh vùng hậu môn nhẹ nhàng ở mỗi lần thay tã, bố mẹ rửa tay kỹ trước và sau thay tã. Nếu vệ sinh đơn thuần thất bại, cần chuyển khám BS.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Triệu chứng điển hình nhất của nhiễm giun kim (Enterobius vermicularis) là?",
            "opts": [
                "Đau bụng quặn quanh rốn tăng sau bữa ăn sáng",
                "Ngứa hậu môn dữ dội về đêm, thường bùng phát lúc 21:00–23:00",
                "Tiêu chảy phân lỏng mỗi sáng kèm nhầy máu"
            ],
            "ans": 1,
            "exp": "Giun kim cái di chuyển ra ngoài hậu môn vào ban đêm để đẻ trứng trên nếp da quanh hậu môn — đây là lúc gây ngứa mạnh nhất. Dịch tiết quanh trứng có tính kích ứng gây phản ứng dị ứng tại chỗ. Ngứa về đêm gây mất ngủ, trẻ quấy khóc và mệt mỏi ban ngày.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Giun kim trưởng thành nhìn thấy trong phân có hình dạng đặc trưng là?",
            "opts": [
                "Sợi dài đỏ nâu, đường kính 2–3 mm, cuộn tròn",
                "Sợi trắng/kem, dài đến 13 mm, mảnh như sợi chỉ, có thể còn cử động",
                "Đốt dẹt trắng nhạt xếp thành chuỗi như hạt ngô"
            ],
            "ans": 1,
            "exp": "Giun kim (threadworm) màu trắng/kem, dài đến 13 mm, mảnh <0,5 mm — hình dáng như sợi chỉ (thread-like). Giun cái lớn hơn giun đực. Có thể còn nhìn thấy cử động ngay sau đại tiện. Đốt chuỗi là hình ảnh của sán dây (tapeworm) — khác hoàn toàn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Da quanh hậu môn trẻ bị giun kim bắt đầu trợt loét, chảy nước vàng. DS xử trí thế nào?",
            "opts": [
                "Bán thêm kem kháng nấm vì nhiều khả năng bội nhiễm nấm Candida",
                "Chuyển khám BS để đánh giá bội nhiễm vi khuẩn và xem xét kháng sinh tại chỗ",
                "Tiếp tục mebendazole và thêm kem dưỡng ẩm vùng hậu môn"
            ],
            "ans": 1,
            "exp": "Da trợt loét và chảy nước quanh hậu môn là red flag của bội nhiễm vi khuẩn thứ phát — vượt phạm vi OTC. DS phải chuyển khám BS để đánh giá và có thể cần kháng sinh tại chỗ hoặc toàn thân. Không tự xử lý bằng kem kháng nấm khi chưa xác định tác nhân.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN người lớn ngứa hậu môn kéo dài 3 tuần, không có trẻ em trong nhà, không nhìn thấy giun trong phân. DS cân nhắc chẩn đoán phân biệt nào trước khi bán mebendazole?",
            "opts": [
                "Bán mebendazole ngay vì ngứa hậu môn người lớn gần như chắc chắn là giun kim",
                "Ngứa hậu môn người lớn có thể do viêm da tiếp xúc, nấm hoặc ghẻ — hỏi thêm tiền sử trước khi quyết định",
                "Không cần phân biệt, tẩy giun định kỳ là tốt cho mọi người"
            ],
            "ans": 1,
            "exp": "Ở người lớn không có trẻ em trong nhà và không thấy giun, cần loại trừ: viêm da tiếp xúc/kích ứng (do xà phòng, khăn giấy), nhiễm nấm vùng hậu môn, ghẻ vùng sinh dục-hậu môn. Chỉ bán mebendazole khi có bằng chứng rõ ràng (thấy giun, tiền sử gia đình có người nhiễm).",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 30t vừa trở về từ vùng nông thôn Campuchia sau 3 tháng. Đến nhà thuốc kêu đau bụng mơ hồ, chán ăn, buồn nôn kéo dài. DS xử trí thế nào?",
            "opts": [
                "Bán mebendazole cho cả nhà vì nhiều khả năng nhiễm giun kim",
                "Chuyển khám BS — các triệu chứng này kèm tiền sử du lịch gợi ý nhiễm giun sán khác hoặc ký sinh trùng phức tạp",
                "Bán thuốc tiêu hóa và theo dõi thêm 2 tuần"
            ],
            "ans": 1,
            "exp": "Triệu chứng không đặc hiệu kèm tiền sử du lịch vùng dịch tễ cao là red flag: nghi ngờ giun đũa, giun móc, sán lá gan hoặc các ký sinh trùng nhiệt đới phức tạp. Chẩn đoán đúng cần xét nghiệm phân (tìm trứng/ký sinh trùng) hoặc xét nghiệm huyết thanh chuyên khoa. Không tự điều trị OTC.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Khi nào DS nên chuyển BN bị giun kim đến khám BS thay vì xử lý OTC?",
            "opts": [
                "Khi BN đã dùng mebendazole đúng cách 2 lần (cách nhau 14 ngày) nhưng triệu chứng vẫn còn",
                "Khi BN yêu cầu mebendazole nhưng không có thành viên gia đình nào cùng điều trị",
                "Khi BN có lịch sử dị ứng với hương cam trong viên nhai"
            ],
            "ans": 0,
            "exp": "Red flag thất bại điều trị: đã dùng mebendazole đúng cách 2 liều (cách 14 ngày) và vệ sinh nghiêm ngặt mà triệu chứng vẫn còn → cần khám BS để loại trừ chẩn đoán sai (có thể không phải giun kim) hoặc xem xét thuốc thay thế. Không tiếp tục bán OTC khi điều trị chuẩn đã thất bại.",
            "icon": "🔄"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Thời gian áp dụng vệ sinh nghiêm ngặt khác nhau như thế nào giữa người dùng mebendazole và người không thể dùng thuốc?",
            "opts": [
                "Cả hai đều cần 6 tuần để đảm bảo phá vỡ chu kỳ giun kim hoàn toàn",
                "Có thuốc: 2 tuần; không thuốc (thai phụ, trẻ <6 tháng): 6 tuần",
                "Có thuốc: 1 tuần; không thuốc: 3 tuần"
            ],
            "ans": 1,
            "exp": "Chu kỳ sống của giun kim từ trứng đến giun cái trưởng thành khoảng 4–6 tuần. Khi có mebendazole diệt giun trưởng thành, chỉ cần vệ sinh 2 tuần (diệt trứng còn lại và giun non mới nở). Khi không có thuốc, phải duy trì vệ sinh đủ 6 tuần để toàn bộ chu kỳ sinh học tự kết thúc.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Nhóm đối tượng nào có tỷ lệ nhiễm giun kim cao nhất trong cộng đồng?",
            "opts": [
                "NCT sống ở nhà dưỡng lão do hệ miễn dịch suy giảm",
                "Trẻ lứa tuổi mầm non và tiểu học do thói quen vệ sinh tay chưa tốt",
                "Người lao động làm vệ sinh môi trường, tiếp xúc nhiều với đất"
            ],
            "ans": 1,
            "exp": "Giun kim phổ biến nhất ở trẻ mầm non và tiểu học — nguyên nhân chính: thói quen mút ngón tay, không rửa tay sau toilet, cắn móng tay, tiếp xúc gần trong môi trường học đường. Nhiễm giun kim không liên quan đến mức sống hay vệ sinh nhà ở — gặp ở mọi tầng lớp xã hội.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Giun đũa (Ascaris lumbricoides) khác với giun kim về triệu chứng chính như thế nào?",
            "opts": [
                "Giun đũa gây ngứa hậu môn ban đêm; giun kim gây ho và khó thở",
                "Giun kim gây ngứa hậu môn đêm; giun đũa gây triệu chứng không đặc hiệu (đau bụng, chán ăn, buồn nôn) và đôi khi ho (giai đoạn ấu trùng di chuyển qua phổi)",
                "Cả hai đều gây ngứa hậu môn đêm nhưng giun đũa kèm vàng da"
            ],
            "ans": 1,
            "exp": "Giun đũa (Ascaris) không gây ngứa hậu môn. Triệu chứng chính: đau bụng mơ hồ, chán ăn, buồn nôn, đôi khi thấy giun trưởng thành trong phân. Giai đoạn ấu trùng di chuyển qua phổi có thể gây ho khan, khó thở (Löffler syndrome). Nhiễm nặng có thể gây tắc ruột — cần phân biệt rõ để không bỏ sót.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Ngứa hậu môn về đêm ở trẻ em gần như chắc chắn là do giun kim và DS có thể bán mebendazole mà không cần hỏi thêm.",
            "ans": false,
            "exp": "Ngứa hậu môn đêm ở trẻ rất gợi ý giun kim nhưng KHÔNG chẩn đoán tuyệt đối. Cần loại trừ: viêm da tiếp xúc (do xà phòng, khăn giấy), ghẻ vùng hậu môn, nhiễm nấm. DS nên hỏi: có thấy giun trong phân không, các thành viên gia đình khác có triệu chứng không, con có tiếp xúc với trẻ bị giun không?",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Nhiễm giun kim chỉ xảy ra ở gia đình sống trong điều kiện vệ sinh kém, nhà ở chật chội và thu nhập thấp.",
            "ans": false,
            "exp": "Giun kim (Enterobius vermicularis) lây qua đường phân-miệng và bụi không khí — không phân biệt tầng lớp xã hội hay điều kiện vệ sinh nhà ở. Trẻ em ở gia đình khá giả, học trường tư thục vẫn có thể nhiễm qua tiếp xúc bạn bè học đường. Nhiễm giun không phản ánh sự thiếu quan tâm của phụ huynh.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trứng giun kim (Enterobius) có thể tồn tại trên bề mặt đồ vật như đồ chơi, chăn gối lên đến 3 tuần ở nhiệt độ phòng.",
            "ans": true,
            "exp": "Trứng giun kim cực kỳ bền với môi trường — có thể sống sót đến 3 tuần trên quần áo, đồ chơi, chăn gối, bề mặt phòng tắm. Đây là lý do vệ sinh môi trường (giặt chăn gối, hút bụi, lau nhà tắm) vào ngày đầu điều trị là bắt buộc, không phải tùy chọn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Giun kim trưởng thành có thể nhìn thấy bằng mắt thường trong phân hoặc tại vùng hậu môn sau khi trẻ đại tiện.",
            "ans": true,
            "exp": "Giun kim trưởng thành dài đến 13 mm, trắng/kem như sợi chỉ — có thể nhìn thấy rõ bằng mắt thường trong phân hoặc đôi khi thấy nhô ra khỏi hậu môn. Đây là cách xác nhận chẩn đoán đơn giản nhất tại nhà thuốc — không cần xét nghiệm phân nếu đã quan sát thấy giun.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Sau khi điều trị mebendazole thành công, triệu chứng ngứa hậu môn sẽ hết ngay trong vòng vài giờ đầu.",
            "ans": false,
            "exp": "Mebendazole không diệt giun tức thì — thuốc ức chế thu nạp glucose → giun chết dần trong VÀI NGÀY. Trong thời gian đó, ngứa có thể vẫn còn. Phụ huynh cần được tư vấn trước để không lo lắng và không nghĩ thuốc thất bại khi triệu chứng chưa hết ngay ngày đầu.",
            "icon": "⏳"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Kháng sinh đường uống có vai trò trong điều trị nhiễm giun kim và nên được kết hợp với mebendazole để tăng hiệu quả.",
            "ans": false,
            "exp": "Giun kim là ký sinh trùng đa bào — kháng sinh không có tác dụng. Ngoại lệ duy nhất là khi da quanh hậu môn bị trợt loét, chảy nước do gãi nhiều → bội nhiễm vi khuẩn thứ phát → mới cần xem xét kháng sinh (thuộc phạm vi kê đơn BS). Tẩy giun chỉ cần mebendazole + vệ sinh.",
            "icon": "💉"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Theo hướng dẫn phòng bệnh, trẻ em nên được tẩy giun định kỳ 6 tháng một lần để phòng tái nhiễm giun đường ruột.",
            "ans": true,
            "exp": "Tổ chức Y tế Thế giới (WHO) và nhiều hướng dẫn quốc gia khuyến cáo tẩy giun định kỳ 6 tháng/lần cho trẻ em độ tuổi tiền học đường và học đường tại vùng lưu hành giun sán. Tại Việt Nam, Bộ Y tế cũng có chương trình tẩy giun định kỳ cho trẻ em. Không cần chờ có triệu chứng mới điều trị.",
            "icon": "🏃"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Trẻ gái bị nhiễm giun kim có thể xuất hiện thêm triệu chứng ngứa âm hộ, do giun cái có thể di lạc vào vùng sinh dục.",
            "ans": true,
            "exp": "Ở trẻ gái, giun kim cái đôi khi di lạc từ hậu môn vào âm hộ và đường sinh dục → gây ngứa âm hộ, tiết dịch âm đạo. Đây là biến chứng được ghi nhận của nhiễm giun kim ở trẻ gái (không gặp ở trẻ trai). Triệu chứng tự giải quyết sau điều trị mebendazole thành công.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Phụ huynh xấu hổ vì nghĩ 'con bị giun là do gia đình không sạch sẽ'. DS tư vấn trấn an đúng nhất là?",
            "opts": [
                "Xác nhận lo lắng của phụ huynh và hướng dẫn vệ sinh nhà cửa kỹ hơn",
                "Giải thích giun kim lây qua đường hô hấp, không liên quan vệ sinh nhà ở",
                "Trấn an rằng giun kim gặp ở mọi tầng lớp — nhiễm không phản ánh thiếu vệ sinh, vì trẻ em ở trường học đều có nguy cơ như nhau"
            ],
            "ans": 2,
            "exp": "Nhiễm giun kim không phải chỉ tiêu của điều kiện vệ sinh hay thu nhập. Trẻ em nhiễm chủ yếu qua tiếp xúc tay-miệng tại trường học — mọi trẻ đều có nguy cơ như nhau. DS có trách nhiệm xóa định kiến này để phụ huynh không ngần ngại báo cáo và xử lý sớm, tránh lây lan thêm trong gia đình.",
            "icon": "💉"
        }
    ],
    "motionsick": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN chuẩn bị đi tàu 4 tiếng, hay bị say tàu xe nặng. Hỏi mua thuốc phòng ngừa tốt nhất. DS tư vấn:",
            "opts": [
                "Loperamide 2 mg uống khi bắt đầu buồn nôn trên tàu",
                "Dimenhydrinate 50–100 mg uống 30–60 phút TRƯỚC KHI LÊN tàu",
                "Gừng bột 500 mg uống khi đã nôn trên tàu",
                "Paracetamol 500 mg khi đau đầu trên tàu"
            ],
            "ans": 1,
            "exp": "Nguyên tắc vàng say tàu xe: PHÒNG NGỪA trước, không điều trị khi đã nôn. Dimenhydrinate (kháng H1 + kháng cholinergic) ức chế xung động tiền đình-mê nhĩ → giảm say xe. Phải uống 30–60 phút TRƯỚC — khi đã nôn thì hấp thu đường uống kém. Loperamide cho tiêu chảy. Gừng hỗ trợ nhẹ, không đủ cho BN hay say nặng.",
            "icon": "🚢"
        },
        {
            "cat": "safety",
            "type": "pick",
            "q": "Mẹ hỏi con 4 tuổi hay say xe, có thể cho dùng dimenhydrinate không và liều bao nhiêu?",
            "opts": [
                "Không dùng dimenhydrinate cho trẻ dưới 12 tuổi",
                "Dùng được: trẻ 2–6 tuổi: 12,5–25 mg uống 30 phút trước khi đi; lưu ý gây buồn ngủ",
                "Liều người lớn 100 mg chia 2 là an toàn cho trẻ 4 tuổi",
                "Chỉ dùng patch dán sau tai cho trẻ dưới 6 tuổi"
            ],
            "ans": 1,
            "exp": "Dimenhydrinate OTC được dùng cho trẻ từ 2 tuổi. Liều: 2–6 tuổi: 12,5–25 mg; 6–12 tuổi: 25–50 mg; người lớn: 50–100 mg. Uống 30 phút trước khi đi. Tác dụng gây buồn ngủ thực ra là lợi thế ở trẻ em (ngủ trong xe = không say). Patch Scopolamine: ETC tại VN, không dùng cho trẻ dưới 12 tuổi. Không dùng cho trẻ dưới 2 tuổi.",
            "icon": "👶"
        },
        {
            "cat": "mechanism",
            "type": "pick",
            "q": "Vì sao dimenhydrinate có hiệu quả phòng ngừa say tàu xe? Cơ chế then chốt?",
            "opts": [
                "Ức chế COX tại tiền đình → giảm viêm nội tai",
                "Kháng histamine H1 + kháng muscarinic M1 tại nucleus vestibularis → giảm tín hiệu xung đột cảm giác từ tiền đình-mê nhĩ",
                "Ức chế dopamine D2 tại chemoreceptor trigger zone",
                "Kích hoạt GABA-A → an thần tiền đình"
            ],
            "ans": 1,
            "exp": "Say tàu xe = xung đột cảm giác (sensory conflict) giữa thị giác và tiền đình-mê nhĩ. Dimenhydrinate: (1) Kháng H1 tại nucleus vestibularis → giảm truyền tín hiệu tiền đình lên não; (2) Kháng muscarinic M1 → giảm tín hiệu phế vị → giảm buồn nôn. Scopolamine (patch) chủ yếu cơ chế antimuscarinic. Cơ chế (C) là của metoclopramide — không phải antihistamine.",
            "icon": "🧠"
        },
        {
            "cat": "counseling",
            "type": "pick",
            "q": "Phụ nữ có thai 10 tuần bị say xe nặng. DS tư vấn OTC nào an toàn nhất?",
            "opts": [
                "Dimenhydrinate 50 mg — OTC, an toàn trong T1",
                "Gừng (Zingiber officinale) 250 mg × 4 lần/ngày hoặc trà gừng tươi",
                "Diphenhydramine 50 mg — an toàn hơn dimenhydrinate trong thai kỳ",
                "Promethazine 25 mg — OTC và an toàn tại VN"
            ],
            "ans": 1,
            "exp": "Gừng là lựa chọn an toàn nhất cho buồn nôn/say xe trong thai kỳ — Cochrane 2014 xác nhận hiệu quả vượt placebo, không ghi nhận tác hại với thai. Cơ chế: antagonist 5-HT3 tại GI + kháng cholinergic nhẹ. Dimenhydrinate và Diphenhydramine: tránh T1 (dữ liệu chưa đủ). Promethazine: ETC tại VN — không tự dùng. Nếu gừng không đủ: tham vấn BS sản khoa.",
            "icon": "🤰"
        }
    ],
    "dentalpain": [
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 38t đau răng âm ỉ liên tục, nghi ngờ viêm tủy hoặc nhiễm trùng nướu. Nhóm giảm đau OTC nào hiệu quả nhất làm biện pháp tạm thời tại nhà thuốc?",
            "opts": [
                "Codeine 30 mg — opioid nhẹ, kiểm soát đau tốt hơn",
                "Paracetamol hoặc ibuprofen (hoặc cả hai luân phiên)",
                "Aspirin ngâm trực tiếp vào chỗ đau để tác dụng nhanh hơn"
            ],
            "ans": 1,
            "exp": "Paracetamol hoặc ibuprofen là giảm đau first-line cho đau răng OTC. Với đau dai dẳng, có thể phối hợp cả hai theo liều luân phiên xen kẽ — paracetamol giảm đau trung ương, ibuprofen kháng viêm tại ổ nhiễm. Codeine OTC giới hạn; aspirin ngâm miệng gây bỏng rát niêm mạc — không được khuyến cáo.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Ưu điểm của ibuprofen so với paracetamol trong đau răng do viêm nướu hoặc áp xe răng là?",
            "opts": [
                "Ibuprofen tác dụng trung ương mạnh hơn nên kiểm soát đau tốt hơn",
                "Ibuprofen có tác dụng kháng viêm (anti-inflammatory) giúp giảm phù nề mô viêm quanh răng",
                "Ibuprofen an toàn hơn paracetamol cho BN có tiền sử suy gan"
            ],
            "ans": 1,
            "exp": "Đau răng do viêm/nhiễm khuẩn nướu có thành phần viêm (PGE2, PGI2 gây phù, đau). Ibuprofen ức chế COX → giảm tổng hợp prostaglandin → không chỉ giảm đau mà còn giảm phù nề mô viêm → đặc biệt hữu ích cho áp xe răng, viêm nướu cấp. Paracetamol giảm đau nhưng không có tác dụng kháng viêm đáng kể.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Khi phối hợp paracetamol và ibuprofen cho đau răng nặng, nguyên tắc uống đúng là?",
            "opts": [
                "Uống cả hai cùng lúc để đạt nồng độ đỉnh đồng thời",
                "Uống luân phiên xen kẽ — rải thời gian để duy trì kiểm soát đau liên tục và tránh quá liều từng thuốc",
                "Uống paracetamol buổi sáng và ibuprofen buổi tối để không bị kích thích dạ dày"
            ],
            "ans": 1,
            "exp": "Phối hợp paracetamol + ibuprofen luân phiên (VD: paracetamol lúc 8h, ibuprofen lúc 11h, paracetamol lúc 14h...) duy trì kiểm soát đau gần như liên tục — bổ sung nhau trong khoảng trống tác dụng. Mỗi thuốc vẫn ở liều an toàn riêng. Uống đồng thời không sai nhưng mất lợi ích duy trì liên tục.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Eugenol (tinh dầu đinh hương) được dùng trong đau răng OTC thông qua cơ chế nào?",
            "opts": [
                "Ức chế COX-2 tại tủy răng → giảm prostaglandin gây đau",
                "Gây tê tại chỗ và có tác dụng kháng khuẩn yếu — giảm đau tạm thời khi tiếp xúc trực tiếp với hốc sâu răng",
                "Ức chế kênh natri điện thế phụ thuộc tại nơ-ron cảm giác nướu"
            ],
            "ans": 1,
            "exp": "Eugenol (clove oil) có tác dụng gây tê tại chỗ (local anaesthetic) và kháng khuẩn nhẹ — thường dùng thấm bông gòn đặt vào hốc sâu răng hoặc khe nướu để giảm đau tạm thời. Hiệu quả giới hạn và ngắn hạn. Nha khoa sử dụng eugenol trong trám tạm (zinc oxide eugenol) vì cả tác dụng gây tê lẫn kháng khuẩn.",
            "icon": "🧬"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Bằng chứng mạnh nhất trong số các mouthwash OTC cho điều trị hỗ trợ viêm nướu (gingivitis) là?",
            "opts": [
                "Hexetidine — kháng khuẩn phổ rộng, ít tác dụng phụ nhất",
                "Chlorhexidine gluconate — tổng quan Cochrane chứng minh giảm mảng bám và viêm nướu ở mọi nồng độ",
                "Hydrogen peroxide — cơ chế oxy hóa tiêu diệt vi khuẩn kỵ khí hiệu quả nhất"
            ],
            "ans": 1,
            "exp": "Tổng quan Cochrane (James et al., 2017) kết luận chlorhexidine có bằng chứng chất lượng cao trong giảm mảng bám (plaque) và viêm nướu bất kể nồng độ. Đây là mouthwash có bằng chứng mạnh nhất hiện có. Hexetidine và hydrogen peroxide ít bằng chứng hơn nhưng vẫn có chỉ định OTC hỗ trợ.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Liều dùng chuẩn của chlorhexidine gluconate mouthwash 0,2% cho viêm nướu người lớn là?",
            "opts": [
                "5 mL, 3 lần/ngày, súc miệng 30 giây",
                "10 mL, 2 lần/ngày, súc miệng 60 giây, sử dụng liên tục",
                "15 mL, 2 lần/ngày, súc miệng 30 giây và nuốt"
            ],
            "ans": 1,
            "exp": "Chlorhexidine 0,2% mouthwash: 10 mL súc miệng 60 giây, 2 lần/ngày, sau đó nhổ ra — không nuốt. Dùng liên tục đến khi hết triệu chứng, nhưng cảnh báo staining răng/lưỡi nâu nếu dùng >4 tuần liên tục.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "DS cần hướng dẫn BN dùng chlorhexidine mouthwash đúng cách so với kem đánh răng như thế nào?",
            "opts": [
                "Súc miệng chlorhexidine trước rồi mới đánh răng để không bị cuốn trôi",
                "Đánh răng trước, súc miệng sạch nước để loại bỏ tàn dư kem đánh răng, sau đó mới dùng chlorhexidine",
                "Có thể dùng chlorhexidine ngay sau đánh răng mà không cần súc miệng sạch nước"
            ],
            "ans": 1,
            "exp": "Một số thành phần trong kem đánh răng (đặc biệt sodium lauryl sulfate và fluoride) có thể bất hoạt (inactivate) chlorhexidine → làm giảm hiệu quả kháng khuẩn. Đúng trình tự: đánh răng → súc miệng sạch nước → đợi vài phút → mới dùng chlorhexidine 10 mL × 60 giây. Đánh răng trước cũng giảm staining răng.",
            "icon": "⏰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Tác dụng phụ đặc trưng nhất của chlorhexidine mouthwash khi dùng kéo dài trên 4 tuần là gì?",
            "opts": [
                "Loét niêm mạc miệng và bỏng rát lưỡi",
                "Nhuộm màu nâu răng và lưỡi",
                "Khô miệng nặng và giảm tiết nước bọt"
            ],
            "ans": 1,
            "exp": "Chlorhexidine dùng kéo dài >4 tuần gây staining (nhuộm màu nâu) răng và lưỡi — thường không vĩnh viễn và có thể cạo sạch bởi nha sĩ. Để giảm staining: đánh răng kỹ trước khi dùng mouthwash. Đây là tác dụng phụ cần cảnh báo BN trước để không bỏ thuốc vì lo lắng.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Chlorhexidine mouthwash OTC được phép dùng cho trẻ từ độ tuổi tối thiểu nào?",
            "opts": [
                "Từ 6 tuổi (tương tự hexetidine và hydrogen peroxide)",
                "Từ 12 tuổi",
                "Từ 18 tuổi (chỉ người lớn)"
            ],
            "ans": 1,
            "exp": "Chlorhexidine mouthwash: từ 12 tuổi (Rutter, 2026). Hexetidine và hydrogen peroxide: từ 6 tuổi. Tuy nhiên, trẻ em bị viêm nướu cần được nha sĩ đánh giá — mouthwash OTC chỉ là hỗ trợ tạm thời. Không áp dụng mouthwash cho trẻ nhỏ chưa biết nhổ ra sau khi súc miệng.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 62t đang dùng warfarin phòng huyết khối, đến nhà thuốc khai chảy máu nướu khi đánh răng. DS cần nghĩ đến điều gì đầu tiên?",
            "opts": [
                "Đây chắc chắn là viêm nướu — bán chlorhexidine mouthwash và hướng dẫn vệ sinh",
                "Warfarin có thể gây chảy máu nướu; cần hỏi INR gần nhất và khuyến khích BN gặp BS kiểm tra trước",
                "Ngừng warfarin tạm thời rồi dùng chlorhexidine để kiểm soát viêm nướu"
            ],
            "ans": 1,
            "exp": "Warfarin (và heparin, NSAID) là nhóm thuốc có thể gây chảy máu nướu — không phải do viêm nướu mà do tăng xuất huyết. BN cần kiểm tra INR, đặc biệt nếu INR vượt trị số mục tiêu. Không được ngừng warfarin tự ý. DS cần phân biệt chảy máu nướu do thuốc với viêm nướu thực sự trước khi tư vấn OTC.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 35t động kinh đang dùng phenytoin 300 mg/ngày đến khám vì nướu sưng to phủ một phần lên thân răng. DS nhận định nguyên nhân là gì?",
            "opts": [
                "Viêm nướu do mảng bám thông thường — cần chlorhexidine và vệ sinh răng tốt hơn",
                "Phì đại nướu do phenytoin (drug-induced gingival overgrowth) — cần đánh giá nha sĩ",
                "Áp xe nướu — cần kháng sinh khẩn cấp"
            ],
            "ans": 1,
            "exp": "Phenytoin (và ciclosporin, thuốc chẹn kênh calci như amlodipine, nifedipine) gây phì đại nướu (gingival overgrowth/hyperplasia) — một tác dụng phụ riêng biệt, không phải viêm nướu thông thường. Chlorhexidine mouthwash và vệ sinh tốt có thể làm chậm tiến triển nhưng không giải quyết được nếu nguyên nhân là thuốc. BN cần nha sĩ đánh giá và có thể cần thay thuốc chống động kinh.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi có nên súc miệng nước muối tại nhà khi bị đau răng không. DS tư vấn đúng?",
            "opts": [
                "Không — nước muối có thể làm đau tăng hơn do kích thích mô viêm",
                "Có thể — súc miệng nước muối ấm giúp giảm viêm và đau tạm thời ở người lớn",
                "Nên dùng nước muối cho mọi lứa tuổi kể cả trẻ em để phòng bội nhiễm"
            ],
            "ans": 1,
            "exp": "Súc miệng nước muối ấm giúp giảm viêm tạm thời và có thể làm sạch mảnh vụn thực phẩm quanh răng — biện pháp hỗ trợ an toàn và rẻ tiền cho người lớn. Lưu ý: không khuyến cáo cho trẻ em (nguy cơ nuốt). Không thay thế được thuốc giảm đau và không điều trị được nguyên nhân — BN vẫn cần gặp nha sĩ.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Choline salicylate gel (gel salicylate bôi nướu) có CCĐ với nhóm đối tượng nào?",
            "opts": [
                "Thai phụ tam cá nguyệt 3 (vì ức chế COX gây đóng sớm ống động mạch)",
                "Trẻ em dưới 16 tuổi do nguy cơ hội chứng Reye",
                "Người có suy thận vì salicylate tích lũy qua hấp thu tại chỗ"
            ],
            "ans": 1,
            "exp": "Choline salicylate gel CCĐ cho trẻ <16 tuổi — cùng nguyên tắc với aspirin: salicylate trên nền nhiễm virus ở trẻ em liên quan đến hội chứng Reye (encephalopathy + suy gan cấp, có thể tử vong). Không dùng choline salicylate gel cho trẻ hay thiếu niên <16 tuổi trong bất kỳ trường hợp nào.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Hexetidine mouthwash được chỉ định cho trẻ từ độ tuổi nào và liều dùng ở người lớn là?",
            "opts": [
                "Từ 12 tuổi; 10 mL × 2 lần/ngày",
                "Từ 6 tuổi; 15 mL × 2–3 lần/ngày",
                "Từ 6 tuổi; 10 mL × 4 lần/ngày"
            ],
            "ans": 1,
            "exp": "Hexetidine: được phép dùng từ 6 tuổi, liều 15 mL × 2–3 lần/ngày. Tác dụng phụ nhẹ: kích ứng nhẹ hoặc tê lưỡi tạm thời. So sánh: chlorhexidine (từ 12 tuổi, 10 mL × 2 lần/ngày) và hydrogen peroxide (từ 6 tuổi, 10 mL × 4 lần/ngày). Hexetidine không có bằng chứng mạnh bằng chlorhexidine.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Thai phụ 26t bị viêm nướu chảy máu nhẹ muốn dùng mouthwash hỗ trợ. DS có thể tư vấn chlorhexidine không?",
            "opts": [
                "Không — chlorhexidine CCĐ trong thai kỳ do hấp thu qua niêm mạc miệng",
                "Có thể — chlorhexidine mouthwash an toàn trong thai kỳ, không có CCĐ hay tương tác đặc biệt",
                "Chỉ dùng nếu thai kỳ trên 12 tuần; tránh tam cá nguyệt 1"
            ],
            "ans": 1,
            "exp": "Chlorhexidine mouthwash: an toàn trong thai kỳ và cho con bú — không có CCĐ theo dữ liệu hiện có. Tuy nhiên viêm nướu thai kỳ (pregnancy gingivitis) rất phổ biến do thay đổi nội tiết và cần điều trị kết hợp: vệ sinh răng tốt + mouthwash hỗ trợ và nên gặp nha sĩ. DS nên ưu tiên giới thiệu nha sĩ.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 45t THA đang dùng amlodipine 10 mg/ngày đến nhà thuốc khai nướu sưng phồng mà không đau, không chảy máu. DS nghĩ đến điều gì?",
            "opts": [
                "Viêm nướu cấp do mảng bám — khuyên dùng chlorhexidine và vệ sinh răng tốt hơn",
                "Phì đại nướu do amlodipine (calcium channel blocker) — cần hội chẩn BS/nha sĩ",
                "Abcess nướu — chuyển khám nha sĩ khẩn vì nguy cơ lan rộng"
            ],
            "ans": 1,
            "exp": "Thuốc chẹn kênh calci (amlodipine, nifedipine, diltiazem, verapamil) gây phì đại nướu (gingival hyperplasia) — cơ chế liên quan đến rối loạn chuyển hóa collagen tế bào. Không gây đau hay chảy máu tự phát; phân biệt với viêm nướu thông thường. Cần nha sĩ đánh giá; có thể cần đổi thuốc hạ áp. DS không tự xử lý OTC.",
            "icon": "❤️"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Lượng kem đánh răng fluoride khuyến cáo cho trẻ dưới 3 tuổi và trẻ 3–6 tuổi lần lượt là?",
            "opts": [
                "Lượng bằng hạt đậu và lượng bằng hạt táo",
                "Một chút nhỏ (smear) và lượng bằng hạt đậu (pea-sized)",
                "Không dùng fluoride cho trẻ dưới 6 tuổi vì nguy cơ nhiễm fluoride"
            ],
            "ans": 1,
            "exp": "Fluoride toothpaste cho trẻ: <3 tuổi: smear (một chút nhỏ — lượng tối thiểu nhìn thấy được); 3–6 tuổi: pea-sized (lượng bằng hạt đậu). Cha mẹ hỗ trợ đánh răng đến khi trẻ 6–7 tuổi tự thực hiện được. Không dùng quá nhiều vì trẻ nhỏ thường nuốt — fluoride nuốt quá nhiều có thể gây fluorosis răng vĩnh viễn.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "Hydrogen peroxide mouthwash (10 mL) được dùng tối đa bao nhiêu lần mỗi ngày?",
            "opts": [
                "2 lần/ngày",
                "3 lần/ngày",
                "4 lần/ngày"
            ],
            "ans": 2,
            "exp": "Hydrogen peroxide mouthwash: 10 mL tối đa 4 lần/ngày — cao hơn chlorhexidine (2 lần/ngày) và hexetidine (2–3 lần/ngày). Tác dụng: oxy hóa → giải phóng O2 → diệt vi khuẩn kỵ khí trong túi nướu. Tác dụng phụ: kích ứng niêm mạc có thể xảy ra nhưng hiếm.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN đau răng do nhạy cảm ngà (dentine sensitivity) — đau nhói khi tiếp xúc nóng, lạnh, ngọt. Biện pháp OTC first-line phù hợp nhất?",
            "opts": [
                "Ibuprofen 400 mg × 3 lần/ngày dài hạn để kiểm soát đau",
                "Kem đánh răng chống ê buốt (desensitising toothpaste) chứa kali nitrate hoặc stannous fluoride",
                "Eugenol gel bôi trực tiếp vào cổ răng mỗi ngày 2 lần"
            ],
            "ans": 1,
            "exp": "Nhạy cảm ngà (dentine sensitivity) — đau nhói ngắn khi kích thích nhiệt/áp suất — được điều trị first-line bằng kem đánh răng chống ê buốt chứa kali nitrate (làm giảm dẫn truyền thần kinh ngà) hoặc stannous fluoride (bít ống ngà). Dùng thuốc giảm đau dài hạn không phù hợp và không giải quyết nguyên nhân. Nếu kéo dài >2 ngày → nha sĩ đánh giá.",
            "icon": "🏆"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 55t suy thận mạn (GFR 35 mL/min) bị đau răng cấp. DS tư vấn giảm đau OTC an toàn nhất tạm thời?",
            "opts": [
                "Ibuprofen 400 mg — kháng viêm mạnh nhất cho đau răng có viêm",
                "Paracetamol — an toàn hơn NSAID ở BN suy thận vì không ảnh hưởng dòng máu thận",
                "Aspirin 500 mg — giảm đau và kháng viêm, an toàn hơn ibuprofen ở suy thận"
            ],
            "ans": 1,
            "exp": "Suy thận mạn là CCĐ tương đối đến tuyệt đối của NSAID (ibuprofen, aspirin, naproxen) — NSAIDs ức chế prostaglandin thận → co mạch thận → giảm GFR → nguy cơ suy thận cấp trên nền mạn. Paracetamol an toàn hơn ở BN suy thận khi dùng liều chuẩn (có thể cần giãn khoảng cách). Tuy nhiên vẫn cần gặp nha sĩ sớm.",
            "icon": "🫘"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "BN đang dùng warfarin có thể an toàn dùng ibuprofen OTC để giảm đau răng cấp mà không ảnh hưởng đến hiệu quả chống đông.",
            "ans": false,
            "exp": "Ibuprofen (NSAID) + warfarin: tương tác nguy hiểm — NSAIDs ức chế COX-1 tiểu cầu → ức chế ngưng tập tiểu cầu + NSAID đẩy warfarin khỏi protein gắn kết huyết tương → tăng nồng độ warfarin tự do → tăng nguy cơ xuất huyết nghiêm trọng. BN warfarin bị đau răng → paracetamol là lựa chọn an toàn hơn. Phải hỏi thuốc đang dùng trước khi bán NSAID.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chlorhexidine mouthwash không có tương tác thuốc đáng kể và an toàn trong thai kỳ.",
            "ans": true,
            "exp": "Chlorhexidine gluconate mouthwash: không có tương tác thuốc được ghi nhận và an toàn trong thai kỳ và cho con bú theo dữ liệu hiện có. Điểm cần lưu ý duy nhất: tương tác với tàn dư kem đánh răng (giảm hiệu quả chlorhexidine, không nguy hiểm) — xử lý bằng cách súc miệng nước sạch trước khi dùng chlorhexidine.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Eugenol (tinh dầu đinh hương) đặt trực tiếp vào hốc sâu răng là biện pháp giảm đau tạm thời chấp nhận được tại nhà thuốc.",
            "ans": true,
            "exp": "Eugenol là thành phần OTC được chấp nhận để giảm đau răng tạm thời — tác dụng gây tê tại chỗ và kháng khuẩn nhẹ khi tiếp xúc trực tiếp với hốc sâu răng. Tuy nhiên: chỉ là biện pháp tạm thời (vài giờ), không điều trị nguyên nhân. BN vẫn cần gặp nha sĩ. Tránh để tinh dầu đặc tiếp xúc niêm mạc nướu lành vì có thể gây bỏng rát.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Choline salicylate gel có thể dùng an toàn cho trẻ 14 tuổi bị đau nướu sau mọc răng khôn.",
            "ans": false,
            "exp": "Choline salicylate gel CCĐ ở trẻ <16 tuổi do nguy cơ hội chứng Reye — tương tự aspirin. Mặc dù dùng tại chỗ, vẫn có khả năng hấp thu một phần qua niêm mạc miệng. BN 14 tuổi vẫn nằm trong nhóm CCĐ. Thay thế an toàn: benzocaine gel (nếu có) hoặc paracetamol/ibuprofen uống theo liều trẻ em.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Chlorhexidine mouthwash ngăn ngừa tái phát viêm nướu sau điều trị — đây là đặc tính ưu việt so với hexetidine.",
            "ans": false,
            "exp": "Chlorhexidine KHÔNG ngăn ngừa tái phát viêm nướu sau khi ngừng — hiệu quả chỉ duy trì trong thời gian đang dùng. Bằng chứng tương tự với hexetidine: cả hai là thuốc hỗ trợ, không điều trị nền. Phòng tái phát lâu dài chỉ đạt được qua duy trì vệ sinh răng miệng tốt (đánh răng 2×/ngày + interdental cleaning) — không có mouthwash nào thay thế được điều này.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Tư vấn BN sau khi đánh răng nên súc miệng kỹ bằng nước để loại bỏ hoàn toàn kem đánh răng — điều này tối ưu hóa bảo vệ fluoride cho răng.",
            "ans": false,
            "exp": "Nguyên tắc 'spit don't rinse' (nhổ ra, không súc lại): sau khi đánh răng, chỉ nhổ bọt kem ra — KHÔNG súc miệng thêm nước. Súc miệng sẽ rửa trôi fluoride còn lại trên bề mặt răng, làm giảm tác dụng bảo vệ. Đây là thay đổi thói quen đơn giản nhưng có ý nghĩa trong phòng ngừa sâu răng dài hạn.",
            "icon": "🍯"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Ibuprofen OTC là lựa chọn giảm đau phù hợp cho BN peptic ulcer đang điều trị đau răng cấp.",
            "ans": false,
            "exp": "NSAID (ibuprofen, naproxen, diclofenac) CCĐ hoặc thận trọng ở BN loét dạ dày — ức chế COX-1 → giảm prostaglandin bảo vệ niêm mạc → tăng nguy cơ chảy máu và thủng loét. BN loét dạ dày bị đau răng: paracetamol là lựa chọn an toàn hơn. Nếu bắt buộc dùng NSAID (viêm nặng) → cần kết hợp PPI và theo chỉ định BS.",
            "icon": "⛔"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Phenytoin, thuốc chẹn kênh calci (amlodipine, nifedipine) và ciclosporin có thể gây phì đại nướu (gingival overgrowth) như một tác dụng phụ.",
            "ans": true,
            "exp": "Ba nhóm thuốc gây phì đại nướu đã được ghi nhận rõ ràng: (1) phenytoin (chống động kinh), (2) ciclosporin (ức chế miễn dịch), (3) thuốc chẹn kênh calci (đặc biệt nifedipine, amlodipine, diltiazem). Cơ chế: rối loạn chuyển hóa collagen nướu. DS cần nhận ra liên hệ thuốc–nướu phì đại khi BN đến mua mouthwash 'viêm nướu'.",
            "icon": "⚠️"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Fluoride toothpaste không nên dùng cho trẻ em dưới 6 tuổi vì nguy cơ nhiễm fluoride làm ố răng vĩnh viễn.",
            "ans": false,
            "exp": "Fluoride toothpaste nên được dùng ngay từ khi mọc chiếc răng đầu tiên — không phụ thuộc độ tuổi. Kiểm soát lượng fluoride an toàn bằng cách dùng đúng lượng: smear cho trẻ <3t, pea-sized cho trẻ 3–6t. Cha mẹ cần giám sát để trẻ không nuốt kem đánh răng. Fluoride toothpaste giúp ngăn ngừa sâu răng từ rất sớm — loại bỏ fluoride hoàn toàn là sai lầm phổ biến.",
            "icon": "👶"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Paracetamol và ibuprofen có thể uống xen kẽ luân phiên cùng lúc trong điều trị đau răng nặng không đáp ứng với một loại đơn độc.",
            "ans": true,
            "exp": "Phối hợp paracetamol và ibuprofen luân phiên (không đồng thời) là chiến lược giảm đau hợp lý được khuyến cáo khi một loại đơn độc không đủ — hai thuốc cơ chế khác nhau, bổ sung nhau. Uống xen kẽ duy trì kiểm soát đau gần như liên tục. Đây là biện pháp tạm thời trong khi chờ gặp nha sĩ, không phải điều trị lâu dài.",
            "icon": "💊"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 42t khai đau răng nhói ngắn khi uống nước đá hoặc ăn đồ ngọt, không đau tự phát giữa các cơn. DS nhận định đây là loại đau nào?",
            "opts": [
                "Đau do áp xe răng — cần kháng sinh khẩn cấp",
                "Đau do nhạy cảm ngà (dentine hypersensitivity) — do men răng bị mòn hoặc sâu",
                "Đau do viêm nướu cấp — cần chlorhexidine mouthwash ngay"
            ],
            "ans": 1,
            "exp": "Đau ngắn, nhói khi có kích thích (nóng/lạnh/ngọt/chua) nhưng HẾT ngay sau khi không còn kích thích = đặc trưng của nhạy cảm ngà (dentine hypersensitivity). Cơ chế: men răng mỏng đi (do mòn, sâu, mất miếng trám) → lộ ống ngà → chất lỏng dịch chuyển trong ống ngà → kích thích thần kinh tủy. Điều trị: kem đánh răng chống ê buốt + nha sĩ đánh giá nếu >2 ngày.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 30t khai đau răng âm ỉ liên tục suốt ngày đêm, hàm phải sưng nhẹ, cảm giác vị đắng/tanh trong miệng. DS nhận định cần hành động gì?",
            "opts": [
                "Bán ibuprofen + chlorhexidine mouthwash, hẹn theo dõi 3 ngày",
                "Khuyến cáo gặp nha sĩ ngay hoặc dịch vụ nha khoa khẩn — gợi ý áp xe răng đang phát triển",
                "Bán kháng sinh amoxicillin OTC vì rõ ràng có nhiễm khuẩn"
            ],
            "ans": 1,
            "exp": "Đau âm ỉ liên tục + sưng hàm + vị đắng/tanh trong miệng = bộ ba dấu hiệu cổ điển của áp xe răng. DS cần khuyến cáo gặp nha sĩ sớm nhất có thể hoặc dịch vụ khẩn — áp xe có thể lan rộng nhanh. Paracetamol/ibuprofen làm biện pháp tạm thời trong khi chờ. Không được bán kháng sinh OTC tự ý.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 55t đau răng, phát hiện má trái sưng to, sốt 39°C, há miệng khó (trismus). DS xử trí khẩn cấp nhất là?",
            "opts": [
                "Bán kháng sinh mạnh + ibuprofen, khuyên gặp nha sĩ trong ngày",
                "Chuyển cấp cứu ngay — sưng hàm lớn + sốt cao + trismus là red flag cần nhập viện khẩn",
                "Tư vấn ngậm nước muối ấm + paracetamol, gặp nha sĩ ngày mai"
            ],
            "ans": 1,
            "exp": "Bộ tam chứng sưng hàm đáng kể + sốt cao + trismus (khó há miệng) là red flag cần chuyển cấp cứu NGAY — nguy cơ nhiễm trùng lan vào khoang nguy hiểm (Ludwig's angina, khoang cổ) có thể gây tắc đường thở và tử vong. Đây là trường hợp cần nhập viện cấp cứu, không chờ gặp nha sĩ.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Phân biệt viêm nướu (gingivitis) và viêm nha chu (periodontitis) tại nhà thuốc — dấu hiệu nào gợi ý periodontitis hơn?",
            "opts": [
                "Chảy máu nướu chỉ khi đánh răng, nướu đỏ không đau",
                "Chảy máu nướu tự phát, miệng tanh, lung lay răng — gợi ý periodontitis cần chuyển nha sĩ khẩn",
                "Mảng bám trắng nhiều ở cổ răng kèm hơi thở hôi nhẹ"
            ],
            "ans": 1,
            "exp": "Gingivitis: chảy máu chỉ khi đánh răng/thăm khám, nướu đỏ viêm — giới hạn ở mô nướu mềm. Periodontitis (viêm nha chu): chảy máu TỰ PHÁT, miệng tanh dai dẳng, lung lay răng, có thể thấy túi nha chu — tổn thương đã lan đến xương ổ răng. Periodontitis là biến chứng nặng hơn, cần nha sĩ khẩn cấp hơn.",
            "icon": "🔍"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Để phòng ngừa sâu răng hiệu quả, kỹ thuật đánh răng khuyến cáo là gì?",
            "opts": [
                "Đánh răng sau mỗi bữa ăn, ít nhất 3 lần/ngày, súc miệng kỹ sau khi đánh",
                "Đánh răng tối thiểu 2 lần/ngày (nhất là trước khi ngủ), tối thiểu 2 phút, kem fluoride, nhổ bọt không súc lại",
                "Đánh răng 1 lần/ngày nhưng kỹ hơn 5 phút kèm chỉ nha khoa"
            ],
            "ans": 1,
            "exp": "Khuyến cáo chuẩn: 2 lần/ngày (đặc biệt tối trước khi ngủ — vì nước bọt giảm ban đêm, acid dễ gây sâu răng) × 2 phút mỗi lần, kem fluoride, SAU ĐÓ nhổ bọt không súc miệng thêm để giữ fluoride. Đánh răng sau mỗi bữa ăn không được khuyến cáo đặc biệt vì acid sau ăn làm mềm men — chờ 30–60 phút hoặc súc miệng nước trước.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Dấu hiệu nào của áp xe răng là RED FLAG cần chuyển cấp cứu NGAY LẬP TỨC thay vì chỉ gặp nha sĩ?",
            "opts": [
                "Đau liên tục và sưng hàm nhỏ, chưa sốt, còn há miệng được",
                "Sưng sàn miệng (floor of mouth swelling), khó nuốt (dysphagia) hoặc khó thở — nguy cơ tắc đường thở",
                "Chảy mủ nhẹ ở nướu với sốt nhẹ 37,8°C"
            ],
            "ans": 1,
            "exp": "Sưng sàn miệng, khó nuốt, khó thở là red flags chuyển cấp cứu NGAY — nguy cơ Ludwig's angina (nhiễm trùng lan xuống cổ, trung thất) và tắc đường thở có thể tử vong. Các red flags immediate referral khác: trismus nặng, sưng lan hố mắt (orbital swelling), dấu hiệu thần kinh, nhiễm trùng huyết. DS phải nhận ra và không trì hoãn.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Vai trò đúng của DS cộng đồng trong điều trị đau răng là gì?",
            "opts": [
                "Chẩn đoán và điều trị đau răng cấp bằng kháng sinh + giảm đau trong 5–7 ngày",
                "Tư vấn giảm đau tạm thời bằng OTC và khuyến khích BN gặp nha sĩ trong thời gian sớm nhất",
                "Kê đơn kháng sinh phổ rộng khi có dấu hiệu nhiễm khuẩn để tránh áp xe hóa"
            ],
            "ans": 1,
            "exp": "DS không chẩn đoán hoặc điều trị bệnh răng miệng — vai trò là: (1) tư vấn giảm đau OTC tạm thời (paracetamol/ibuprofen), (2) biện pháp hỗ trợ (súc miệng nước muối, mouthwash), (3) đánh giá red flags để chuyển cấp cứu hoặc nha sĩ kịp thời. Kháng sinh cho đau răng là kê đơn BS/nha sĩ — DS không tự bán.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "BN 28t mới sinh 3 tháng, đang cho con bú, khai nướu hay chảy máu khi đánh răng từ lúc mang thai đến nay. DS xử trí phù hợp?",
            "opts": [
                "Không làm gì vì viêm nướu thai kỳ tự khỏi hoàn toàn sau khi sinh",
                "Tư vấn cải thiện vệ sinh răng + dùng chlorhexidine mouthwash hỗ trợ, và giới thiệu gặp nha sĩ",
                "Bán kháng sinh metronidazole gel để điều trị nhiễm khuẩn nướu"
            ],
            "ans": 1,
            "exp": "Viêm nướu thai kỳ (pregnancy gingivitis) rất phổ biến — estrogen/progesterone tăng làm nướu nhạy cảm hơn với mảng bám. Tuy có thể cải thiện sau sinh, nhiều trường hợp cần điều trị. Chlorhexidine mouthwash an toàn khi cho con bú, hỗ trợ tốt. Nhưng điều trị nền (lấy cao răng, xử lý mảng bám) cần nha sĩ — DS chỉ hỗ trợ và giới thiệu.",
            "icon": "🤰"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau răng âm ỉ liên tục kèm vị tanh trong miệng và sốt nhẹ là triệu chứng điển hình của áp xe răng — DS nên khuyến cáo gặp nha sĩ sớm nhất có thể.",
            "ans": true,
            "exp": "Đau âm ỉ liên tục + vị tanh/đắng trong miệng + sốt = bộ ba dấu hiệu áp xe răng (dental abscess) điển hình. DS cần nhận biết đây là tình trạng cần nha khoa xử lý — không OTC được. Trong khi chờ: paracetamol/ibuprofen giảm đau tạm thời, ăn thức ăn mềm, tránh nóng lạnh. Không được trì hoãn gặp nha sĩ.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Viêm nha chu (periodontitis) là bệnh nhẹ hơn viêm nướu (gingivitis) và có thể điều trị OTC mà không cần gặp nha sĩ.",
            "ans": false,
            "exp": "Periodontitis (viêm nha chu) nặng hơn viêm nướu — tổn thương đã lan đến xương ổ răng, gây tiêu xương và lung lay răng. Không thể điều trị OTC; cần nha sĩ thực hiện lấy cao răng sâu (scaling và root planing) và theo dõi. Bỏ qua điều trị periodontitis dẫn đến mất răng. DS nhận biết dấu hiệu (chảy máu tự phát, lung lay) để chuyển khám khẩn.",
            "icon": "🏥"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Sưng sàn miệng (floor of mouth swelling) trong bệnh cảnh áp xe răng là dấu hiệu cần chuyển cấp cứu NGAY LẬP TỨC.",
            "ans": true,
            "exp": "Sưng sàn miệng là dấu hiệu của Ludwig's angina — nhiễm trùng lan xuống khoang dưới hàm và cổ, có thể gây phù nề đường thở dẫn đến tắc thở và tử vong. Đây là cấp cứu ngoại khoa hàm mặt — không trì hoãn, không chờ gặp nha sĩ. Cần chuyển cấp cứu bệnh viện NGAY để dùng kháng sinh truyền tĩnh mạch và có thể phẫu thuật dẫn lưu.",
            "icon": "🚨"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Rửa miệng bằng nước muối ấm không được khuyến cáo cho trẻ em vì nguy cơ nuốt muối gây tăng huyết áp.",
            "ans": false,
            "exp": "Lý do không khuyến cáo súc miệng nước muối cho trẻ em là vì trẻ nhỏ chưa đủ kỹ năng nhổ ra hoàn toàn → nguy cơ nuốt phải — không phải vì nguy cơ tăng huyết áp (lượng muối nuốt vào quá nhỏ không có ý nghĩa lâm sàng). Lý do đúng: khả năng nhổ miệng của trẻ nhỏ chưa tốt. Người lớn dùng an toàn.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Bàn chải đánh răng điện (với đầu bàn chải xoay hai chiều — rotation oscillation) được chứng minh loại bỏ mảng bám hiệu quả hơn bàn chải tay.",
            "ans": true,
            "exp": "Tổng quan Cochrane (Yaacob et al., 2014) kết luận bàn chải điện dạng rotation-oscillation (đầu bàn chải xoay theo hai chiều) hiệu quả hơn bàn chải tay trong loại bỏ mảng bám và giảm viêm nướu. DS nên tư vấn bàn chải điện cho BN có nguy cơ cao viêm nướu hoặc khó đánh răng đúng kỹ thuật.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "BN suy giảm miễn dịch (đang hóa trị) bị đau răng cấp — DS có thể xử lý OTC như bình thường và hẹn gặp nha sĩ trong tuần.",
            "ans": false,
            "exp": "BN suy giảm miễn dịch (hóa trị, HIV, corticosteroid liều cao, ghép tạng) là nhóm nguy cơ cao — nhiễm trùng răng miệng có thể lan rộng nhanh và nghiêm trọng hơn người thường. Cần được đánh giá y tế KHẨN, không trì hoãn đến tuần sau. Đây là tiêu chí 'urgent referral' trong red flags đau răng.",
            "icon": "⛔"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Chảy máu nướu kèm bầm máu ở cánh tay và chân sau va chạm nhẹ là dấu hiệu cần chuyển khám BS khẩn cấp trong ngày.",
            "ans": true,
            "exp": "Chảy máu nướu + bầm máu toàn thân bất thường (purpura, petechiae, bầm sau va chạm nhẹ) = dấu hiệu rối loạn đông máu hoặc bệnh lý huyết học (bệnh bạch cầu, giảm tiểu cầu, rối loạn đông máu). Đây là red flag cần khám BS TRONG NGÀY — không phải viêm nướu thông thường. DS cần phân biệt và không bán mouthwash đơn thuần.",
            "icon": "🚨"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN 24t bị đau răng cấp, đang mang thai 16 tuần. Thuốc giảm đau OTC an toàn nhất trong tam cá nguyệt 2?",
            "opts": [
                "Ibuprofen 400 mg — kháng viêm mạnh nhất cho đau răng",
                "Paracetamol 500–1000 mg — lựa chọn an toàn nhất trong thai kỳ ở liều điều trị",
                "Aspirin 500 mg — an toàn hơn ibuprofen trong thai kỳ"
            ],
            "ans": 1,
            "exp": "Paracetamol là giảm đau an toàn nhất trong thai kỳ ở mọi tam cá nguyệt khi dùng đúng liều. Ibuprofen và NSAID: tránh tam cá nguyệt 3 (gây đóng ống động mạch, thiểu ối); thận trọng cả tam cá nguyệt 1 và 2. Aspirin: tránh dùng liều giảm đau do nguy cơ xuất huyết và đóng ống động mạch. Nha sĩ cần biết thai phụ để lên kế hoạch điều trị phù hợp.",
            "icon": "🤰"
        },
        {
            "cat": "drug",
            "type": "pick",
            "q": "BN hỏi có thể dùng benzocaine gel bôi nướu cùng lúc với chlorhexidine mouthwash không. DS trả lời đúng là?",
            "opts": [
                "Không — benzocaine và chlorhexidine tương tác mạnh gây độc tính niêm mạc",
                "Có thể, nhưng nên dùng chlorhexidine trước, đợi vài phút, rồi mới bôi benzocaine tại chỗ đau",
                "Không — benzocaine làm bất hoạt hoàn toàn chlorhexidine nếu dùng chung"
            ],
            "ans": 1,
            "exp": "Benzocaine (gây tê tại chỗ, giảm đau nhanh) và chlorhexidine (kháng khuẩn, hỗ trợ nướu) không có tương tác dược lý có hại. Có thể dùng phối hợp: súc miệng chlorhexidine trước, đợi vài phút, sau đó bôi benzocaine gel tại điểm đau cụ thể. Benzocaine tác dụng ngắn (20–30 phút), dùng khi cần kiểm soát đau cấp tại chỗ.",
            "icon": "💊"
        },
        {
            "cat": "drug",
            "type": "tf",
            "q": "Hydrogen peroxide mouthwash OTC có thể được dùng từ 6 tuổi, cùng độ tuổi tối thiểu với hexetidine mouthwash.",
            "ans": true,
            "exp": "Cả hydrogen peroxide và hexetidine: được phép dùng từ 6 tuổi. So sánh với chlorhexidine gluconate: từ 12 tuổi. Tuy nhiên, trẻ em với viêm nướu nên được chuyển nha sĩ đánh giá hơn là tự xử lý mouthwash OTC. Mouthwash chỉ là hỗ trợ — không thay thế đánh răng đúng kỹ thuật và lấy cao răng chuyên nghiệp.",
            "icon": "👶"
        },
        {
            "cat": "clin",
            "type": "pick",
            "q": "Loại thực phẩm nào gây hại cho răng nhất theo khuyến cáo phòng ngừa sâu răng tại nhà thuốc?",
            "opts": [
                "Cơm trắng và bánh mì nguyên cám ăn vào bữa chính",
                "Đường tự do (free sugars) — kẹo, nước ngọt, nước ép trái cây, mật ong tiêu thụ giữa các bữa ăn",
                "Thực phẩm nhiều protein như thịt và cá ăn vào buổi tối"
            ],
            "ans": 1,
            "exp": "Free sugars (đường tự do) trong kẹo, nước ngọt, nước ép trái cây, mật ong, siro là yếu tố gây sâu răng chính — vi khuẩn ferment đường tạo acid → phá hủy men răng. Quan trọng: tần suất tiêu thụ nguy hiểm hơn tổng lượng — uống nước ngọt liên tục suốt ngày hại hơn uống một lần vào bữa ăn. Nước ép trái cây 'tự nhiên' vẫn chứa free sugars gây sâu răng.",
            "icon": "🍯"
        },
        {
            "cat": "clin",
            "type": "tf",
            "q": "Đau răng nhói ngắn khi tiếp xúc nóng/lạnh kéo dài hơn 2 ngày không cải thiện với kem chống ê buốt — DS nên hướng dẫn gặp nha sĩ đánh giá.",
            "ans": true,
            "exp": "Nhạy cảm ngà nhẹ: thường cải thiện với kem đánh răng chống ê buốt trong 1–2 tuần. Nếu đau nhói kéo dài >2 ngày không cải thiện hoặc cơn đau kéo dài hơn 30 giây sau kích thích → gợi ý viêm tủy răng (pulpitis) không hồi phục → cần điều trị tủy. DS không thể phân biệt pulpitis với dentine sensitivity — gặp nha sĩ để chẩn đoán chính xác.",
            "icon": "🔄"
        }
    ]
}