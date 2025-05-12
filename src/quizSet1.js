export const quizSet1 = [
  {
    question: "Đâu là phần mở rộng của file mã nguồn Java?",
    options: [".java", ".class", ".js", ".jav"],
    answer: 0,
    explanation: "File mã nguồn Java có phần mở rộng là .java. File .class là file bytecode sau khi biên dịch, .js là file JavaScript, và .jav không phải là phần mở rộng chuẩn trong Java."
  },
  {
    question: "Câu lệnh nào dùng để hiển thị dữ liệu ra màn hình trong Java?",
    options: ["System.out.println()", "Console.Write()", "print()", "cout<<"],
    answer: 0,
    explanation: "System.out.println() là câu lệnh chuẩn để hiển thị dữ liệu ra màn hình trong Java. Console.Write() là câu lệnh trong C#, print() là câu lệnh trong Python, và cout<< là câu lệnh trong C++."
  },
  {
    question: "Kiểu dữ liệu nào trong Java lưu trữ giá trị số nguyên?",
    options: ["int", "string", "boolean", "float"],
    answer: 0,
    explanation: "int là kiểu dữ liệu nguyên thủy dùng để lưu trữ số nguyên trong Java. string dùng để lưu chuỗi (và trong Java thực ra là String viết hoa), boolean lưu giá trị logic true/false, và float lưu số thực."
  },
  {
    question: "Từ khóa nào dùng để khai báo hằng số trong Java?",
    options: ["final", "const", "static", "constant"],
    answer: 0,
    explanation: "Từ khóa final được sử dụng để khai báo hằng số trong Java. Khi một biến được khai báo là final, giá trị của nó không thể thay đổi sau khi được gán. const là từ khóa dự trữ nhưng không được sử dụng, static đánh dấu thành phần thuộc về lớp, và constant không phải từ khóa trong Java."
  },
  {
    question: "Phương thức main() trong Java có kiểu trả về là gì?",
    options: ["void", "int", "String", "boolean"],
    answer: 0,
    explanation: "Phương thức main() trong Java có kiểu trả về là void, nghĩa là không trả về giá trị nào. Cú pháp chuẩn của phương thức main là: public static void main(String[] args) {...}"
  },
  {
    question: "Từ khóa nào được sử dụng để kế thừa trong Java?",
    options: ["extends", "implements", "inherit", "using"],
    answer: 0,
    explanation: "Từ khóa extends được sử dụng để kế thừa từ một lớp khác trong Java. Implements được sử dụng để triển khai interface, còn inherit và using không phải là từ khóa dành cho kế thừa trong Java."
  },
  {
    question: "Đâu là phạm vi truy cập mặc định trong Java?",
    options: ["package-private", "protected", "private", "public"],
    answer: 0,
    explanation: "Phạm vi truy cập mặc định trong Java là package-private (không khai báo từ khóa nào). Điều này có nghĩa là chỉ các lớp trong cùng package mới có thể truy cập."
  },
  {
    question: "Mảng trong Java là kiểu dữ liệu gì?",
    options: ["Reference Type", "Primitive Type", "Abstract Type", "Enum Type"],
    answer: 0,
    explanation: "Mảng trong Java là kiểu dữ liệu tham chiếu (Reference Type), không phải kiểu dữ liệu nguyên thủy. Mảng lưu trữ tham chiếu đến vùng nhớ chứa các phần tử."
  },
  {
    question: "Từ khóa nào được sử dụng để tạo đối tượng mới trong Java?",
    options: ["new", "create", "instance", "object"],
    answer: 0,
    explanation: "Từ khóa new được sử dụng để tạo đối tượng mới trong Java. Ví dụ: MyClass obj = new MyClass();"
  },
  {
    question: "Thứ tự đúng của hàm khởi tạo trong Java là gì?",
    options: [
      "Cùng tên với tên lớp",
      "Cùng tên với từ khóa constructor",
      "Có thể đặt bất kỳ tên nào",
      "Phải bắt đầu bằng init"
    ],
    answer: 0,
    explanation: "Hàm khởi tạo (constructor) trong Java phải có tên trùng với tên lớp. Ví dụ, trong lớp Student, constructor phải có tên là Student()."
  },
  {
    question: "Đâu là kiểu dữ liệu số thực trong Java?",
    options: ["float", "integer", "bool", "char"],
    answer: 0,
    explanation: "float là kiểu dữ liệu số thực trong Java. Ngoài ra còn có double cũng là kiểu dữ liệu số thực với độ chính xác cao hơn."
  },
  {
    question: "Trong Java, String là kiểu dữ liệu gì?",
    options: ["Class", "Primitive Type", "Interface", "Enum"],
    answer: 0,
    explanation: "Trong Java, String là một lớp (Class), không phải kiểu dữ liệu nguyên thủy. Nó thuộc gói java.lang và được sử dụng để biểu diễn chuỗi ký tự."
  },
  {
    question: "Toán tử += trong Java thực hiện thao tác gì?",
    options: [
      "Cộng và gán",
      "Chỉ thực hiện phép cộng",
      "Gán giá trị",
      "So sánh và gán"
    ],
    answer: 0,
    explanation: "Toán tử += trong Java thực hiện phép cộng giá trị bên phải vào biến bên trái, sau đó gán kết quả cho biến bên trái. Ví dụ: a += 5 tương đương với a = a + 5."
  },
  {
    question: "Đâu KHÔNG phải là kiểu dữ liệu nguyên thủy trong Java?",
    options: ["String", "int", "boolean", "char"],
    answer: 0,
    explanation: "String không phải là kiểu dữ liệu nguyên thủy trong Java, mà là một lớp. Các kiểu dữ liệu nguyên thủy trong Java bao gồm: byte, short, int, long, float, double, boolean, và char."
  },
  {
    question: "Từ khóa nào dùng để xử lý ngoại lệ trong Java?",
    options: ["try-catch", "error-handling", "exception", "throw-only"],
    answer: 0,
    explanation: "try-catch là cấu trúc được sử dụng để xử lý ngoại lệ trong Java. Khối lệnh trong try sẽ được thực thi và nếu có ngoại lệ xảy ra, nó sẽ được bắt và xử lý trong khối catch."
  },
  {
    question: "Phương thức nào được gọi khi một đối tượng bị hủy trong Java?",
    options: ["finalize()", "dispose()", "delete()", "destroy()"],
    answer: 0,
    explanation: "finalize() là phương thức được gọi bởi garbage collector khi một đối tượng sắp bị hủy trong Java. Tuy nhiên, từ Java 9 trở đi, phương thức này đã bị đánh dấu là deprecated."
  },
  {
    question: "Package nào chứa các lớp cơ bản trong Java?",
    options: ["java.lang", "java.util", "java.io", "java.net"],
    answer: 0,
    explanation: "java.lang là package chứa các lớp cơ bản trong Java như String, Object, System, Math, và các lớp wrapper như Integer, Boolean. Package này được import tự động."
  },
  {
    question: "Khai báo mảng nào sau đây là đúng trong Java?",
    options: [
      "int[] arr = new int[5];",
      "int arr[5] = new int[];",
      "array int[] = new int(5);",
      "int arr = new array[5];"
    ],
    answer: 0,
    explanation: "int[] arr = new int[5]; là cú pháp đúng để khai báo một mảng số nguyên có 5 phần tử trong Java. Các phần tử sẽ được khởi tạo với giá trị mặc định là 0."
  },
  {
    question: "Từ khóa super trong Java dùng để làm gì?",
    options: [
      "Gọi phương thức hoặc thuộc tính của lớp cha",
      "Khai báo một lớp là lớp con",
      "Khai báo một biến có phạm vi toàn cục",
      "Tạo một đối tượng mới"
    ],
    answer: 0,
    explanation: "Từ khóa super trong Java được sử dụng để tham chiếu đến các phương thức hoặc thuộc tính của lớp cha. Nó thường được dùng khi cần gọi constructor của lớp cha hoặc ghi đè phương thức."
  },
  {
    question: "Kiểu dữ liệu nào có kích thước lớn nhất trong Java?",
    options: ["double", "long", "int", "float"],
    answer: 0,
    explanation: "double là kiểu dữ liệu có kích thước lớn nhất (8 byte) trong Java. So sánh với các kiểu khác: long (8 byte) cho số nguyên, int (4 byte), và float (4 byte)."
  },
  {
    question: "Lệnh break dùng để làm gì trong Java?",
    options: [
      "Thoát khỏi vòng lặp hoặc switch",
      "Dừng chương trình",
      "Chuyển đến lần lặp tiếp theo",
      "Quay lại đầu vòng lặp"
    ],
    answer: 0,
    explanation: "Lệnh break trong Java được sử dụng để thoát khỏi vòng lặp (for, while, do-while) hoặc khối switch. Khi gặp break, chương trình sẽ thoát khỏi cấu trúc điều khiển chứa nó."
  },
  {
    question: "Lệnh nào được sử dụng để nhập dữ liệu trong Java?",
    options: [
      "Scanner class",
      "InputReader class",
      "Reader class",
      "Input class"
    ],
    answer: 0,
    explanation: "Scanner class được sử dụng để nhập dữ liệu trong Java. Ví dụ: Scanner scanner = new Scanner(System.in); int number = scanner.nextInt();"
  },
  {
    question: "Đặc điểm nào không phải của ngôn ngữ Java?",
    options: [
      "Quản lý bộ nhớ thủ công",
      "Hướng đối tượng",
      "Độc lập nền tảng",
      "Đa luồng"
    ],
    answer: 0,
    explanation: "Quản lý bộ nhớ thủ công không phải là đặc điểm của Java. Java sử dụng garbage collector để tự động quản lý bộ nhớ, khác với các ngôn ngữ như C/C++ yêu cầu lập trình viên phải tự quản lý bộ nhớ."
  },
  {
    question: "Đâu là ý nghĩa của JVM trong Java?",
    options: [
      "Java Virtual Machine",
      "Java Visual Method",
      "Java Variable Memory",
      "Java Verified Module"
    ],
    answer: 0,
    explanation: "JVM là viết tắt của Java Virtual Machine, một môi trường thực thi mã byte Java (bytecode), giúp Java có tính độc lập nền tảng. JVM chuyển đổi bytecode thành mã máy chuyên biệt cho từng nền tảng."
  },
  {
    question: "Phương thức length() trong Java dùng để làm gì?",
    options: [
      "Lấy độ dài của chuỗi",
      "Lấy độ dài của mảng",
      "Lấy kích thước của file",
      "Lấy số phần tử của mảng"
    ],
    answer: 0,
    explanation: "Phương thức length() trong Java được sử dụng để lấy độ dài của chuỗi. Để lấy kích thước của mảng, ta sử dụng thuộc tính length (không phải phương thức), ví dụ: array.length."
  },
  {
    question: "Từ khóa this trong Java đề cập đến?",
    options: [
      "Đối tượng hiện tại",
      "Lớp hiện tại",
      "Biến toàn cục",
      "Đối tượng của lớp cha"
    ],
    answer: 0,
    explanation: "Từ khóa this trong Java đề cập đến đối tượng hiện tại của lớp. Nó thường được sử dụng để phân biệt biến thành viên và tham số có cùng tên, hoặc để gọi constructor khác trong cùng lớp."
  },
  {
    question: "Phạm vi truy cập nào hạn chế nhất trong Java?",
    options: ["private", "protected", "public", "default"],
    answer: 0,
    explanation: "private là phạm vi truy cập hạn chế nhất trong Java. Các thành phần được khai báo private chỉ có thể truy cập từ bên trong lớp chứa nó, không thể truy cập từ lớp con hoặc lớp khác."
  },
  {
    question: "Đâu là cách đúng để khởi tạo một chuỗi trong Java?",
    options: [
      "String s = \"Hello\";",
      "string s = \"Hello\";",
      "String s = new \"Hello\";",
      "Str s = \"Hello\";"
    ],
    answer: 0,
    explanation: "String s = \"Hello\"; là cách đúng để khởi tạo một chuỗi trong Java. Lưu ý rằng String được viết hoa vì nó là một lớp, không phải kiểu dữ liệu nguyên thủy."
  },
  {
    question: "Toán tử nào dùng để so sánh địa chỉ tham chiếu trong Java?",
    options: ["==", ".equals()", "===", "compare()"],
    answer: 0,
    explanation: "Toán tử == trong Java được sử dụng để so sánh địa chỉ tham chiếu của các đối tượng. Để so sánh nội dung của các đối tượng, ta sử dụng phương thức .equals()."
  },
  {
    question: "Phương thức main() trong Java bắt buộc phải có modifier nào?",
    options: ["public static", "private", "protected", "abstract"],
    answer: 0,
    explanation: "Phương thức main() trong Java bắt buộc phải có modifier là public static. Cú pháp đầy đủ là: public static void main(String[] args) {...}"
  },
  {
    question: "Đâu là cấu trúc lặp lại dựa vào điều kiện trong Java?",
    options: ["while", "switch", "if", "try"],
    answer: 0,
    explanation: "while là cấu trúc lặp lại dựa vào điều kiện trong Java. Nó kiểm tra điều kiện trước khi thực hiện phần thân vòng lặp. Nếu điều kiện sai ngay từ đầu, phần thân sẽ không được thực thi."
  },
  {
    question: "Đâu KHÔNG phải là cách comment trong Java?",
    options: ["<!-- Comment -->", "// Comment", "/* Comment */", "/** Comment */"],
    answer: 0,
    explanation: "<!-- Comment --> là cú pháp comment trong HTML, không phải trong Java. Trong Java, có 3 loại comment: // cho comment một dòng, /* */ cho comment nhiều dòng, và /** */ cho comment documentation."
  },
  {
    question: "Cú pháp nào đúng để khai báo một hằng số trong Java?",
    options: ["final int MAX = 100;", "const int MAX = 100;", "static MAX = 100;", "int final MAX = 100;"],
    answer: 0,
    explanation: "final int MAX = 100; là cú pháp đúng để khai báo hằng số trong Java. Từ khóa final được đặt trước kiểu dữ liệu, và theo quy ước, tên hằng số thường được viết in hoa."
  },
  {
    question: "Trong Java, giá trị mặc định của biến kiểu int là gì?",
    options: ["0", "null", "undefined", "1"],
    answer: 0,
    explanation: "Trong Java, giá trị mặc định của biến kiểu int là 0. Các biến kiểu nguyên thủy đều có giá trị mặc định (int: 0, boolean: false, char: '\\u0000', ...), trong khi các biến tham chiếu có giá trị mặc định là null."
  },
  {
    question: "Cấu trúc điều khiển nào trong Java cho phép nhiều nhánh điều kiện?",
    options: ["if-else if-else", "for-in", "do-until", "unless-otherwise"],
    answer: 0,
    explanation: "Cấu trúc if-else if-else trong Java cho phép kiểm tra nhiều điều kiện khác nhau và thực hiện các khối lệnh tương ứng. Cú pháp: if (điều kiện 1) {...} else if (điều kiện 2) {...} else {...}"
  },
  {
    question: "Câu lệnh nào dùng để kết thúc sớm một phương thức trong Java?",
    options: ["return", "exit", "break", "end"],
    answer: 0,
    explanation: "Câu lệnh return được sử dụng để kết thúc sớm một phương thức trong Java. Nó có thể kèm theo giá trị trả về nếu phương thức không phải void."
  },
  {
    question: "Từ khóa nào không được sử dụng để khai báo biến trong Java?",
    options: ["var", "int", "double", "boolean"],
    answer: 0,
    explanation: "Từ khóa var không được sử dụng để khai báo biến trong Java trước phiên bản Java 10. Từ Java 10 trở đi, var được giới thiệu để khai báo biến với kiểu dữ liệu được suy luận từ giá trị khởi tạo."
  },
  {
    question: "Số nguyên 10 trong hệ cơ số 16 (hexadecimal) được biểu diễn như thế nào trong Java?",
    options: ["0xA", "0o12", "0b1010", "10h"],
    answer: 0,
    explanation: "Số nguyên 10 trong hệ cơ số 16 (hexadecimal) được biểu diễn là 0xA trong Java. Tiền tố 0x chỉ ra rằng đây là số hệ cơ số 16. Trong hệ hexa, A tương đương với 10 trong hệ thập phân."
  },
  {
    question: "Cách nào để duyệt qua tất cả phần tử trong mảng Java?",
    options: [
      "for (int i = 0; i < array.length; i++)",
      "for (i = 1; i <= array.length; i++)",
      "foreach (int i in array)",
      "loop (int i : array)"
    ],
    answer: 0,
    explanation: "for (int i = 0; i < array.length; i++) là cú pháp chính xác để duyệt qua tất cả phần tử trong mảng Java bằng vòng lặp for truyền thống. Java cũng hỗ trợ for-each: for (ElementType element : array)"
  },
  {
    question: "Đâu là toán tử ba ngôi (ternary) trong Java?",
    options: ["? :", "if-then", ":: ->", "? ::"],
    answer: 0,
    explanation: "Toán tử ba ngôi trong Java là ? : với cú pháp: điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai. Đây là cách viết ngắn gọn của câu lệnh if-else."
  },
  {
    question: "Loại biến nào trong Java có thể truy cập từ bất kỳ phương thức nào trong lớp?",
    options: ["Instance variables", "Local variables", "Parameters", "Loop counters"],
    answer: 0,
    explanation: "Instance variables (biến thành viên) có thể truy cập từ bất kỳ phương thức nào trong lớp. Biến cục bộ (local variables) chỉ tồn tại trong phạm vi khối lệnh hoặc phương thức khai báo nó."
  },
  {
    question: "Cú pháp nào dùng để khai báo một mảng hai chiều trong Java?",
    options: [
      "int[][] matrix = new int[3][4];",
      "int[3,4] matrix = new int[];",
      "int matrix[3][4] = new int;",
      "matrix int[3,4] = new int[][];"
    ],
    answer: 0,
    explanation: "int[][] matrix = new int[3][4]; là cú pháp đúng để khai báo một mảng hai chiều có 3 hàng và 4 cột trong Java."
  },
  {
    question: "Lệnh nào dùng để bỏ qua lần lặp hiện tại trong vòng lặp Java?",
    options: ["continue", "skip", "break", "pass"],
    answer: 0,
    explanation: "Lệnh continue được sử dụng để bỏ qua lần lặp hiện tại và chuyển đến lần lặp tiếp theo trong vòng lặp Java. Khác với break (dừng vòng lặp), continue chỉ bỏ qua phần còn lại của lần lặp hiện tại."
  },
  {
    question: "Kiểu dữ liệu nào trong Java lưu trữ giá trị đúng/sai?",
    options: ["boolean", "bool", "bit", "Binary"],
    answer: 0,
    explanation: "boolean là kiểu dữ liệu trong Java lưu trữ giá trị đúng/sai (true/false). Khác với một số ngôn ngữ khác sử dụng bool, Java sử dụng từ khóa boolean."
  },
  {
    question: "Lệnh nào dùng để kiểm tra nhiều giá trị của một biến trong Java?",
    options: ["switch", "case", "if-or", "multiple-if"],
    answer: 0,
    explanation: "Lệnh switch được sử dụng để kiểm tra nhiều giá trị của một biến trong Java. Cú pháp: switch(biến) { case giá_trị_1: // lệnh; break; case giá_trị_2: // lệnh; break; ... default: // lệnh; }"
  },
  {
    question: "Đâu là cú pháp đúng của cấu trúc do-while trong Java?",
    options: [
      "do { // lệnh } while (điều kiện);",
      "do while (điều kiện) { // lệnh };",
      "while { // lệnh } do (điều kiện);",
      "do (điều kiện) while { // lệnh };"
    ],
    answer: 0,
    explanation: "do { // lệnh } while (điều kiện); là cú pháp đúng của cấu trúc do-while trong Java. Khác với while, do-while luôn thực hiện khối lệnh ít nhất một lần trước khi kiểm tra điều kiện."
  },
  {
    question: "Kiểu dữ liệu nào trong Java lưu trữ ký tự đơn?",
    options: ["char", "character", "string", "letter"],
    answer: 0,
    explanation: "char là kiểu dữ liệu trong Java lưu trữ một ký tự đơn. Giá trị char được đặt trong cặp dấu nháy đơn, ví dụ: char c = 'A';"
  },
  {
    question: "Cách nào sau đây để chuyển đổi String thành int trong Java?",
    options: [
      "Integer.parseInt(str)",
      "str.toInt()",
      "(int)str",
      "Int.parse(str)"
    ],
    answer: 0,
    explanation: "Integer.parseInt(str) là phương thức chính xác để chuyển đổi String thành int trong Java. Nếu chuỗi không chứa số hợp lệ, phương thức này sẽ ném ra ngoại lệ NumberFormatException."
  },
  {
    question: "Đâu là cách khai báo một biến để lưu trữ số thập phân có độ chính xác cao trong Java?",
    options: ["double", "decimal", "float", "real"],
    answer: 0,
    explanation: "double là kiểu dữ liệu trong Java dùng để lưu trữ số thập phân có độ chính xác cao (64-bit). Nếu cần độ chính xác cao hơn, có thể sử dụng lớp BigDecimal."
  }
];
