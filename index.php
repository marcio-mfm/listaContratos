<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="imagens/logo-caixa-41262.ico">
    <link rel="stylesheet" href="src/css/style.css">
    <!--Bootstrap-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Cadastro de Contratos</title>
</head>
<body>
    <header id="header">
        <div id="img">
            <img class="imgCX"><img src="imagens/X_Caixa.png" alt="Simbolo da Caixa, X, laranja e branco" width="50px" height="40px">
        </div>
    </header>
    <div id="formBody">
        <div id="tituloBusca">
            <h1>Cadastro de Contratos</h1>
        </div>
        <div id="abas">    
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                <a class="nav-link active" id="busca-tab" data-toggle="tab" href="#busca" role="tab" aria-controls="home" aria-selected="true">Buscar</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="cadastro-tab" data-toggle="tab" href="#cadastro" role="tab" aria-controls="profile" aria-selected="false">Cadastrar</a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="myTabContent">
            <!--Busca-->
            <div class="tab-pane fade show active" id="busca" role="tabpanel" aria-labelledby="home-tab">
                <form id="formBusca" class="needs-validation">
                    <div class="form-group form-row">
                        <div class="col-md-10 mb-10">
                           <label for="validationServer01">Nome</label>
                           <input type="text" class="form-control" id="validationServer01" placeholder="Nome" onkeyup="busca.buscaNome()" required>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer02">Data de Assinatura</label>
                            <input type="date" class="form-control" id="validationServer02" onkeyup="busca.buscaData()" required>
                            <div class="valid-feedback">
                              Tudo certo!
                             </div>
                            <div class="invalid-feedback">
                                Por favor, informe uma data válida.
                            </div>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer03">Nº do contrato</label>
                            <input type="number" class="form-control" id="validationServer03" placeholder="000000000" onkeyup="busca.buscaNumero()" required>
                            <div class="valid-feedback">
                              Tudo certo!
                             </div>
                            <div class="invalid-feedback">
                                Por favor, informe um nº de contrato com 9 dígitos.
                            </div>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer04">Valor do contrato</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <div class="input-group-text">R$</div>
                                </div>
                                <input type="text" class="form-control mascara_moeda"  id="validationServer04" placeholder="0,00"  required>
                            </div>
                                <div class="valid-feedback">
                              Tudo certo!
                             </div>
                            <div class="invalid-feedback">
                                Por favor, informe um valor válido.
                            </div>
                         </div>
                    </div>
                    <button id="btnLimpa" class="btn btn-primary float-right" type="button" onclick="busca.limpaCampos()">Limpar</button>
                </form>
            </div>
            <!--Cadastro-->
            <div class="tab-pane fade" id="cadastro" role="tabpanel" aria-labelledby="profile-tab">
                <form id="formCadastro" class="'needs-validation'">
                    <fieldset>
                        <div class="form-group form-row">
                            <div class="col-md-10 mb-10">
                            <label for="validationServer05">Nome</label>
                            <input type="text" name="nome" class="form-control" id="validationServer05" placeholder="Nome" onblur="cadastro.validaNome()" required>
                            <div class="valid-feedback">
                                Tudo certo!
                                </div>
                            <div class="invalid-feedback">
                                Por favor, informe pelo menos 3 caracteres.
                            </div>
                            </div>
                            <div class="col-md-2 mb-2">
                                <label for="validationServer06">Data de Assinatura</label>
                                <input type="date" name="data" class="form-control" id="validationServer06"  onblur="cadastro.validaData()" required>
                                <div class="valid-feedback">
                                Tudo certo!
                                </div>
                                <div class="invalid-feedback">
                                    Por favor, informe uma data válida.
                                </div>
                            </div>
                            <div class="col-md-2 mb-2">
                                <label for="validationServer07">Nº do contrato</label>
                                <input type="number" name="numero" class="form-control" id="validationServer07" placeholder="000000000" onblur="cadastro.validaContrato()" required>
                                <div class="valid-feedback">
                                Tudo certo!
                                </div>
                                <div class="invalid-feedback">
                                    Por favor, informe um nº de contrato com 9 dígitos.
                                </div>
                            </div>
                                <div class="col-md-2 mb-2">
                                    <label for="validationServer08">Valor do contrato</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">R$</div>
                                        </div>
                                        <input type="text" name="valor" class="form-control mascara_moeda" id="validationServer08" placeholder="0,00" required>
                                    </div>
                                    <div class="valid-feedback">
                                        Tudo certo!
                                    </div>
                                    <div class="invalid-feedback">
                                        Por favor, informe um valor válido.
                                    </div>
                                </div>
                            </div>
                        <input id="btnCadastro" value="Cadastrar" class="btn btn-primary" type="submit" form="formCadastro">
                        <button id="btnLimpa" class="btn btn-primary float-right" type="button" onclick="cadastro.limpaCampos()">Limpar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    <!--tabela de Contratos-->
    <div class="tabContrato">
        <table class="table table-hover table-bordered">
            <thead  id="theadContrato">
                <th>Nº do Contrato</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Data de Assinatura</th>
                <th>Ações</th>
            </thead>
            <tbody id="tbody">
               
            </tbody>
        </table>
    </div>
    <!--Scripts Jquery-->
    <script src="src/vendor/jquery.js"></script>
    <script src="src/vendor/jquery.mask.js"></script>
    <!--Scripts Bootstrap-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <!--myScripts-->
    <script src="src/js/index.js"></script>

</body>
</html>