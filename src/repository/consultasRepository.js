import con from './connection.js'; 

export async function inserirConsultas (consultas) {
    const comando = `
    insert into Consultas (Procedimento, Medicamentos_uso, Custo)
                        values (?, ?, ?) 
    `; 

    let resposta = await con.query (comando, [consultas.procedimento, consultas.medicamentosDeUso, consultas.custos])
    let info = resposta [0]; 

    return info.inserId; 
}


export async function consultarConsultas(){
    const comando = `
        select ID_Tratamento            ID, 
    ID_Consulta                     IDConsulta,
    Procedimento                    Tipo,
    Medicamentos_uso                TEXT,
    Custo                    numero,
        from Consultas
    `;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarConsultas(id, consultas){
    const comando = `
    update Consultas 
    set Procedimento = ?,
    Medicamentos_uso = ?, 
    Custo = ?;
`
    let resposta = await con.query ((comando), [consultas.procedimento, consultas.medicamentosDeUso, consultas.custo, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removerConsultas (id){
    const comando = `
    delete from Consultas
    ID_Consulta = ? 
`

    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}

