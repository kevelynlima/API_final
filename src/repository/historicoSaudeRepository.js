import con from "./connection.js"; 

export async function inserirHistorico(historico) {
    const comando = `
    insert into Pacientes ( Data_Registro, Descricao_Problema,Tratamentos_Anteriores, Medicamentos_uso )
                    values (?, ?, ?, ?)
    
    `; 


    let resposta = await con.query (comando, [historico.dataDeRegistro, historico.descricaoDoProblema, historico.TratamentosAnteriores, historico.MedicamentosDeUso])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarHistorico() {
    const comando = `
    select ID_Historico                         ID,
        ID_Historico                            ID,
        Data_Registro                           data,
        Descricao_Problema                      text,
        Tratamentos_Anteriores                  prontuario,
        Medicamentos_uso                        descricao ,
    from historicoSaude
    `; 
     

    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarHistorico(id, historico){
    const comando = `
        update Pacientes 
             set Data_Registro = ?, 
             Descricao_Problema = ?, 
             Tratamentos_Anteriores = ?, 
             Medicamentos_uso = ?,
    `
    let resposta = await con.query(comando,[historico.dataDeRegistro, historico.descricaoDoProblema, historico.TratamentosAnteriores, historico.MedicamentosDeUso, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerHistorico(id){
    const comando = `
            delete from historicoSaude
            where ID_Historico = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}