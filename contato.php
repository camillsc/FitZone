<?php
// Configurações do banco de dados
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "fitzone";

try {
    // Conexão com o banco
    $pdo = new PDO("mysql:host=$host;dbname=$banco;charset=utf8mb4", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Coletar os dados do formulário
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $rotina = $_POST['rotina'] ?? null; // radio: sim/não
    $impacto = isset($_POST['impacto']) ? implode(", ", $_POST['impacto']) : null;
    $objetivo = $_POST['objetivo'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    // Validar campos obrigatórios
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Preencha todos os campos obrigatórios.";
        exit;
    }

    // Convertendo 'rotina' para booleano (0 ou 1)
    $rotina_valor = ($rotina === 'sim') ? 1 : 0;

    // Inserir dados no banco
    $sql = "INSERT INTO contato (
                nome_completo, email, tentou_rotina_saudavel, impacto, objetivo_principal, mensagem
            ) VALUES (
                :nome, :email, :rotina, :impacto, :objetivo, :mensagem
            )";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nome'     => $nome,
        ':email'    => $email,
        ':rotina'   => $rotina_valor,
        ':impacto'  => $impacto,
        ':objetivo' => $objetivo,
        ':mensagem' => $mensagem
    ]);

    echo "Formulário enviado com sucesso!";

} catch (PDOException $e) {
    echo "Erro ao enviar o formulário: " . $e->getMessage();
}
?>
