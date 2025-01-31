# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah004
Feature: Negative Menambah Master Tag (tambah.tag.004)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data ,Pada Tag Name diisi dengan spasi
    Given Login B2B berhasil - 004
    And Pergi ke menu Master - 004
    And Pergi ke menu Core - 004
    And Pergi ke menu Tag - 004
    When Muncul list tag - 004
    And Klik Create New - 004
    And Mengisi semua data ,Pada Tag Name diisi dengan spasi - 004
    Then Klik Save, data tidak berhasil disimpan - 004