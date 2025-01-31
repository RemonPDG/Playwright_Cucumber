# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah005
Feature: Negative Menambah Master Tag (tambah.tag.005)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data,Pada Tag Name diisi dengan karakter spesial
    Given Login B2B berhasil (005)
    And Pergi ke menu Master (005)
    And Pergi ke menu Core (005)
    And Pergi ke menu Tag (005)
    When Muncul list tag (005)
    And Klik Create New (005)
    And Mengisi semua data,Pada Tag Name diisi dengan karakter spesial (005)
    Then Klik Save, data tidak berhasil disimpan (005)