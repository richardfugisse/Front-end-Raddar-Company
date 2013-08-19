<div id="central-do-aluno">
	<div id="formulario">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<form action="" method="post">
						<p><strong>Prencha os dados abaixos corretamentes para concluir seu cadastro</strong></p>
						<div class="divisao">
							<div class="row">
								<div class="col-sm-6">
									<label for="tipoPessoa">Selecione o seu tipo de pessoa:</label>
									<select name="tipoPessoa" class="uniform">
										<option value="Fisica">Fisica</option>
										<option value="Juridica">Jurídica</option>
									</select>
								</div>
							</div>
						</div>
						<div class="divisao">
							<div class="title"><h2>Dados Pessoais:</h2></div>
							<div class="row">
								<div class="col-sm-3">
									<label for="nome">Nome:</label>
									<input type="text" name="nome" placeholder="Nome">
								</div>
								<div class="col-sm-3">
									<label for="cpf">CPF:</label>
									<input type="text" name="cpf" placeholder="CPF">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3">
									<label for="RG">RG:</label>
									<input type="text" name="rg" placeholder="RG">
								</div>
								<div class="col-sm-3">
									<label for="dataNascimento">Data de Nascimento:</label>
									<input type="text" name="dataNascimento" placeholder="Data de Nascimento">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3">
									<label for="telefone">Telefone:</label>
									<input type="text" name="telefone" placeholder="Telefone">
								</div>
								<div class="col-sm-3">
									<label for="Celular">Celular:</label>
									<input type="text" name="celular" placeholder="Celular">
								</div>
							</div>				
						</div>
						<div class="divisao">
							<div class="title"><h2>Informações de contato:</h2></div>
							<div class="row">
								<div class="col-sm-3">
									<label for="nome">CEP:</label>
									<input type="text" name="cep" placeholder="CEP">
								</div>
								<div class="col-sm-3">
									<label for="bairro">Bairro:</label>
									<input type="text" name="bairro" placeholder="Bairro">
								</div>
							</div>	
							<div class="row">
								<div class="col-sm-3">
									<label for="RG">Endereço:</label>
									<input type="text" name="endereço" placeholder="Endereço">
								</div>
								<div class="col-sm-3">
									<label for="numero">Numero:</label>
									<input type="text" name="numero" placeholder="Numero">
								</div>
							</div>	
							<div class="row">
								<div class="col-sm-3">
									<label for="Estado">Estado:</label>
									<select name="estado" class="uniform">
										<option value="">Selecione seu Estado</option>
										<option value="">Goiás</option>
									</select>
								</div>
								<div class="col-sm-3">
									<label for="Cidade">Cidade:</label>
									<select name="estado" class="uniform">
										<option value="">Selecione seu Estado</option>
										<option value="">Goiânia</option>
									</select>
								</div>
							</div>					
						</div>
						<div class="divisao">
							<div class="title"><h2>Dados de acesso:</h2></div>
							<div class="row">
								<div class="col-sm-3">
									<label for="email">E-mail:</label>
									<input type="text" name="email" placeholder="E-mail">
								</div>
								<div class="col-sm-3">
									<label for="repitaEmail">Repita o E-mail:</label>
									<input type="text" name="repitaEmail" placeholder="Repita o seu E-mail">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3">
									<label for="Senha">Senha:</label>
									<input type="password" name="senha">
								</div>
								<div class="col-sm-3">
									<label for="repitaSenha">Repita a Senha:</label>
									<input type="password" name="repitaSenha">
								</div>
							</div>			
							<div class="row">
								<div class="col-sm-6">
									<div class="box-news">
										<div class="title"><h2>Recebimento de newsletter:</h2></div>
										<label for="news">Você deseja receber newsletter referêntes a nossos cursos e novidades da instituição?</label>
										<div class="box-radio">
											<input type="radio" name="news" value="sim"> Desejo Receber
										</div>
										<div class="box-radio">
											<input type="radio" name="news" value="nao"> Não receber
										</div>
									</div> <!-- end box-news -->
								</div>
							</div>
						</div>			
						<button type="submit" class="link attCadastro">Concluir Cadastro</button>	
						<div class="sucess" style="display: none;">O programador irá te informar o sucesso usando esta div</div>
						<div class="erro" style="display: none;">O programador irá te informar o erro usando esta div</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>